# Enbody Lab website refactor

This folder is a drop-in refactor of the current React/Vite/Tailwind site. It keeps the existing visual design and content while separating the large `App.jsx` into maintainable pages, components, and data files.

## What changed

- `App.jsx` now only manages shared layout, scroll state, lazy page imports, and routes.
- Lab content moved into `src/data/`.
- Reusable UI moved into `src/components/`.
- Each route moved into `src/pages/`.
- Added a responsive mobile navigation menu.
- Added `/news` as a full news archive.
- Homepage now shows the three newest news items and links to the archive.
- News card `cardImageAspect` is now respected.
- News `heroImageCaption` is now rendered.
- Below-the-fold research/team/news images use lazy loading and async decoding where appropriate.
- Page routes are lazy-loaded with `React.lazy()`.
- Custom site CSS moved out of the inline `<style>` block and into `src/index.css`.
- Added reduced-motion handling in CSS.

## Files to replace

Replace the existing `src/` directory with the `src/` directory in this package.

The included `index.html` is unchanged from the uploaded version and is included only for completeness.

Keep your existing folders/files unchanged unless you intentionally want to edit them:

- `public/` and all `public/images/`
- `package.json`
- `package-lock.json`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `.github/workflows/`

## Suggested local workflow

From your repository root:

```bash
mv src src.before-refactor
cp -R /path/to/enbody-lab-refactor/src ./src
npm run dev
```

Then visit:

```text
http://localhost:5173/
```

Check these routes in particular:

```text
/#/
/#/research
/#/publications
/#/team
/#/opportunities
/#/news
/#/news/enbody-lab-meet-the-grants
```

If everything looks right, also run:

```bash
npm run build
```

Once tested, you can remove the backup:

```bash
rm -rf src.before-refactor
```

## New structure

```text
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── AnimatedSection.jsx
│   ├── BlogImageFrame.jsx
│   ├── Footer.jsx
│   ├── Navigation.jsx
│   ├── NewsCard.jsx
│   └── NewsContentBlock.jsx
├── data/
│   ├── news.js
│   ├── publications.js
│   ├── research.js
│   ├── site.js
│   └── team.js
└── pages/
    ├── HomePage.jsx
    ├── NewsDetailPage.jsx
    ├── NewsPage.jsx
    ├── NotFoundPage.jsx
    ├── OpportunitiesPage.jsx
    ├── PublicationsPage.jsx
    ├── ResearchPage.jsx
    └── TeamPage.jsx
```

## Editing content after the refactor

- General lab identity: `src/data/site.js`
- News posts: `src/data/news.js`
- Research areas: `src/data/research.js`
- Publications: `src/data/publications.js`
- Team bios: `src/data/team.js`

Page layout and rendering logic are now separate from the content, so adding a news post or updating a bio should not require editing routing or page components.
