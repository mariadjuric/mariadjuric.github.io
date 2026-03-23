#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FMAP_DIR="${FMAP_DIR:-/Users/mariadjuric/FindMyArxivPaper}"

SRC_SITE_DIR="$FMAP_DIR/docs/site"
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
require_file "$SRC_IMG_DIR/embedding_projection.png"
require_file "$SRC_IMG_DIR/confusion_matrix.png"
require_file "$SRC_IMG_DIR/label_distribution.png"
require_file "$SRC_IMG_DIR/year_distribution.png"

mkdir -p "$DEST_SITE_DIR" "$DEST_IMG_DIR"

cp "$SRC_SITE_DIR/index.html" "$DEST_SITE_DIR/index.html"
cp "$SRC_SITE_DIR/data.js" "$DEST_SITE_DIR/data.js"
cp "$SRC_IMG_DIR/embedding_projection.png" "$DEST_IMG_DIR/fmap-embedding-projection.png"
cp "$SRC_IMG_DIR/confusion_matrix.png" "$DEST_IMG_DIR/fmap-confusion-matrix.png"
cp "$SRC_IMG_DIR/label_distribution.png" "$DEST_IMG_DIR/fmap-label-distribution.png"
cp "$SRC_IMG_DIR/year_distribution.png" "$DEST_IMG_DIR/fmap-year-distribution.png"

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
echo "If everything looks good:"
echo "  git status"
echo "  git add public/fmap public/images/blog dist src"
echo "  git commit -m 'Refresh FMAP portfolio snapshot'"
