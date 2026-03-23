#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FMAP_DIR="${FMAP_DIR:-/Users/mariadjuric/FindMyArxivPaper}"
PUBLIC_ATLAS_MAX_POINTS="${PUBLIC_ATLAS_MAX_POINTS:-10000}"

SRC_SITE_DIR="$FMAP_DIR/outputs/site"
SRC_IMG_DIR="$FMAP_DIR/outputs/figures"
DEST_SITE_DIR="$ROOT_DIR/public/fmap"
DEST_IMG_DIR="$ROOT_DIR/public/images/blog"

require_file() {
  local path="$1"
  if [[ ! -e "$path" ]]; then
    echo "Missing required file or directory: $path" >&2
    exit 1
  fi
}

require_file "$FMAP_DIR"
require_file "$SRC_SITE_DIR/index.html"
require_file "$SRC_SITE_DIR/data.js"
require_file "$SRC_IMG_DIR/confusion_matrix.png"
require_file "$SRC_IMG_DIR/label_distribution.png"
require_file "$SRC_IMG_DIR/year_distribution.png"

mkdir -p "$DEST_SITE_DIR" "$DEST_IMG_DIR"

cp "$SRC_SITE_DIR/index.html" "$DEST_SITE_DIR/index.html"
cp "$SRC_IMG_DIR/embedding_projection.png" "$DEST_IMG_DIR/fmap-embedding-projection.png"
cp "$SRC_IMG_DIR/confusion_matrix.png" "$DEST_IMG_DIR/fmap-confusion-matrix.png"
cp "$SRC_IMG_DIR/label_distribution.png" "$DEST_IMG_DIR/fmap-label-distribution.png"
cp "$SRC_IMG_DIR/year_distribution.png" "$DEST_IMG_DIR/fmap-year-distribution.png"

ROOT_DIR="$ROOT_DIR" SRC_DATA_JS="$SRC_SITE_DIR/data.js" DEST_DATA_JS="$DEST_SITE_DIR/data.js" PUBLIC_ATLAS_MAX_POINTS="$PUBLIC_ATLAS_MAX_POINTS" python3 - <<'PY'
from pathlib import Path
import json
import math
import os
from collections import defaultdict

src = Path(os.environ['SRC_DATA_JS'])
dest = Path(os.environ['DEST_DATA_JS'])
limit = int(os.environ['PUBLIC_ATLAS_MAX_POINTS'])
text = src.read_text(encoding='utf-8')
prefix = 'window.FMAP_DATA = '
if not text.startswith(prefix):
    raise SystemExit('Unexpected data.js format')
payload = json.loads(text[len(prefix):].rstrip().rstrip(';'))
points = payload.get('points', [])
if len(points) <= limit:
    dest.write_text(text, encoding='utf-8')
    print(f'Public atlas already within limit: {len(points)} points')
    raise SystemExit(0)

buckets = defaultdict(list)
for p in points:
    buckets[p.get('category', 'unknown')].append(p)

selected = []
for category, bucket in buckets.items():
    take = max(1, math.floor(limit * len(bucket) / len(points)))
    if take >= len(bucket):
        selected.extend(bucket)
        continue
    step = len(bucket) / take
    for i in range(take):
        selected.append(bucket[min(int(i * step), len(bucket) - 1)])

seen_ids = {p['id'] for p in selected}
remaining = [p for p in points if p['id'] not in seen_ids]
if len(selected) < limit:
    need = limit - len(selected)
    step = max(1, len(remaining) / max(1, need))
    for i in range(need):
        if not remaining:
            break
        selected.append(remaining[min(int(i * step), len(remaining) - 1)])

selected = selected[:limit]
selected.sort(key=lambda p: p['id'])
old_to_new = {p['id']: i for i, p in enumerate(selected)}
for new_id, p in enumerate(selected):
    p['id'] = new_id
    p['recommendations'] = [
        {**rec, 'id': old_to_new[rec['id']]}
        for rec in p.get('recommendations', [])
        if rec.get('id') in old_to_new
    ]

payload['points'] = selected
payload['counts'] = {label: sum(1 for p in selected if p.get('category') == label) for label in payload.get('colors', {}).keys()}
payload['stats']['papers'] = len(selected)
payload['stats']['public_snapshot'] = True
payload['stats']['public_snapshot_limit'] = limit
payload['stats']['source_papers'] = len(points)

dest.write_text(prefix + json.dumps(payload) + ';\n', encoding='utf-8')
print(f'Created public atlas snapshot with {len(selected)} / {len(points)} points')
PY

echo "Synced FMAP atlas and figures from: $FMAP_DIR"

auto_npm_cmd() {
  if [[ -x "$ROOT_DIR/node_modules/.bin/astro" ]]; then
    npm run build
  else
    echo "Dependencies not installed yet. Run 'npm install' in $ROOT_DIR, then rerun this script." >&2
    exit 1
  fi
}

cd "$ROOT_DIR"
auto_npm_cmd

echo
echo "FMAP website assets updated."
echo "Preview files:"
echo "  public/fmap/index.html"
echo "  public/images/blog/fmap-embedding-projection.png"
echo
echo "Public snapshot limit: $PUBLIC_ATLAS_MAX_POINTS points"
echo
echo "If everything looks good:"
echo "  git status"
echo "  git add public/fmap public/images/blog dist src"
echo "  git commit -m 'Refresh FMAP portfolio snapshot'"
