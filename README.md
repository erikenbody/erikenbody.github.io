# Enbody Lab Website

Lab website for the Enbody Lab at Cornell University's Department of Computational Biology.

## Quick Start

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Then open http://localhost:5173 in your browser. Changes to `src/App.jsx` will hot-reload instantly.

## Editing Content

All content is in `src/App.jsx` in the `labData` object (around line 34):

- **Lab info**: Lines ~35-42
- **News items**: Lines ~44-65 
- **Research areas**: Lines ~67-150
- **Publications**: Lines ~152-190
- **Team members**: Lines ~192-220

### Adding a Publication

Add to the `publications` array:

```javascript
{ 
  year: "2026", 
  authors: "Enbody, E.D., ...", 
  title: "Paper title here", 
  journal: "Journal Name",
  note: "† equal contribution",  // optional
  highlight: true  // optional, adds green border
}
```

### Adding a News Item

Add to the `news` array:

```javascript
{
  date: "Spring 2026",
  type: "Publication",  // or "Recruiting", "Award", etc.
  title: "Exciting news headline",
  description: "Brief description here"
}
```

### Updating Images

Put images in `public/images/` and reference them as `/images/filename.jpg`.

The hero image is at `public/images/hero.jpg` - just replace this file to change it.

## Building for Production

```bash
npm run build
```

This creates a `dist/` folder with the optimized static site.

## Deploying to GitHub Pages

### Automatic (Recommended)

Push to the `main` branch and GitHub Actions will automatically build and deploy.

### Manual

```bash
npm run build
# Copy contents of dist/ to your erikenbody.github.io repo
```

## Project Structure

```
enbody-lab/
├── src/
│   ├── App.jsx          ← Main file - edit this!
│   ├── main.jsx         ← Entry point (don't edit)
│   └── index.css        ← Tailwind imports
├── public/
│   ├── images/
│   │   └── hero.jpg     ← Hero background image
│   └── favicon.svg
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Color Palette

- **Sage green**: #9CAF88 (accent color)
- **Background**: stone-950 (#0c0a09)
- **Text**: stone-100 (#f5f5f4)

To change the accent color, search and replace `#9CAF88` throughout `App.jsx`.
