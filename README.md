# Iterum Sciences

[![Live Demo](https://img.shields.io/badge/Live--Demo-iterum--sciences.vercel.app-neongreen)](https://iterum-sciences.vercel.app)
[![License](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](LICENSE)

This is the official web platform for Iterum Sciences, focused on delivering practical tools and resources for biology and life sciences education.

## Overview

The project is now implemented as a **React + TypeScript single-page application** built with **Vite**.  
The UI is component-driven, with shared styling and client-side theming controls (theme and palette persistence via `localStorage`).

## Current Architecture

### Frontend Application
- **Entry point:** `index.html` + `src/main.tsx`
- **Root app composition:** `src/App.tsx`
- **UI sections/components:** `src/assets/*.tsx`
- **Client behavior scripts:** `src/assets/app.js` and `src/assets/script.js` (loaded from `App.tsx` as retained JavaScript modules for shared DOM behavior)
- **Global styling:** root-level `styles.css` (imported by `src/main.tsx`)

### Build and Tooling
- **Bundler/dev server:** Vite
- **Language:** TypeScript + React
- **Linting:** ESLint
- **Package management:** npm

### Static/Public Assets
- `public/` contains static assets served directly by Vite (for example `favicon.jpg`, `background-image.png`, and SVG assets).

### Additional Static Page
- `account.html` currently serves as a placeholder page for account functionality.

## Repository Structure

```text
Iterum-Sciences/
├── index.html
├── account.html
├── styles.css
├── public/
│   ├── favicon.jpg
│   ├── background-image.png
│   └── icons.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── assets/
│       ├── FullHeader.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── ToolSelection.tsx
│       ├── Research.tsx
│       ├── Footer.tsx
│       ├── app.js
│       └── script.js
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run the Vite development server |
| `npm run build` | Type-check and build production assets |
| `npm run preview` | Preview the built app locally |

## Current Progress

**This software is not available for account creation as of yet.**
**Please be patient, and refer to the page for any issues that may occur from this**

## Tools
| Type | Release Date |
|------|--------------|
| Teaching Tools | In Beta - Release with first update V1.0.0 |
| Genomic Software | Not Available - Release with update +V1.0.0 |

## Contact

For questions or concerns, feel free to reach out at **timothywallis@ucmerced.edu**.

## License

**This software is for anyone to freely use as is - Full Release of first version V1.0.0**

© 2026 Iterum Sciences. All rights reserved. See [LICENSE](LICENSE) for details.
