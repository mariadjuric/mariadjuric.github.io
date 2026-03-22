# Maria Djuric — Portfolio Site

Personal portfolio site for **Maria Djuric**, built with **Astro** and **Tailwind CSS** and deployed via **GitHub Pages**.

The site was rebuilt from an older academic/Jekyll setup into a cleaner single-page portfolio with sections for:

- About
- Projects
- Awards
- Research & Experience
- Education
- Blog

## Live Site

<https://mariadjuric.github.io/>

## Stack

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript config via `src/config.ts`
- GitHub Actions + GitHub Pages for deployment

## Project Structure

```text
mariadjuric.github.io/
├── public/
│   ├── favicon.svg
│   └── profile.png
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Awards.astro
│   │   ├── Blog.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Projects.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── config.ts
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content Editing

Most site content lives in:

- `src/config.ts`

That file controls the main personal and portfolio data, including:

- name, title, description
- accent color
- contact/social links
- profile image path
- about text
- skills
- projects
- awards
- experience
- education
- blog placeholders
- footer note

If you want to change text quickly, start there first.

## Local Development

```bash
npm install
npm run dev
```

Local dev server:

```bash
http://127.0.0.1:4321/
```

## Production Build

```bash
npm run build
```

The static output is generated in:

```text
dist/
```

## Deployment

This repo is configured to deploy automatically to **GitHub Pages** using:

- `.github/workflows/deploy.yml`

On push to `main`, GitHub Actions will:

1. install dependencies
2. build the Astro site
3. upload the built `dist/` output
4. deploy it to GitHub Pages

## Notes

- Current design direction: **clean, minimal, white / black / olive green**.
- The site currently includes seeded placeholder content in a few places so it feels complete while still being easy to expand.
- Good next additions would be publications, talks, detailed project pages, and proper blog posts.

## Credits

Design direction was inspired by the clean layout approach of Ryan Fitzgerald's `devportfolio`, then adapted for Maria's portfolio content and GitHub Pages deployment.
