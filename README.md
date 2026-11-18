# Shivam Chaudhary — Portfolio

A static React portfolio hosted on GitHub Pages. The existing sections, project descriptions, project destinations, photos, contact details, and current résumé are retained.

## Local development

Use Node.js **26.13.1 LTS**, selected by `.nvmrc`. Compatible Node 22.22.2+ and 24.15.0+ releases are also supported within those major lines; Node 26 requires 26.13.1 or newer within the Node 26 line. The supported ranges are declared in `package.json`. With an existing Node version manager, install and select 26.13.1 before running the commands below. Updating `.nvmrc` does not replace the system Node installation.

Stop any running dev, preview, or test-watch servers with Ctrl+C before `npm ci`, especially on Windows where native dependencies can remain locked by running Node processes.

```sh
npm ci
npm start
```

The local development URL is http://127.0.0.1:3000.

```sh
npm test
npm run build
npm run preview
```

The production preview is http://127.0.0.1:4173. Build output remains in `build/`, preserving the existing GitHub Pages deployment command. Production code starts at root `index.html` and `src/index.jsx`.

## Contact configuration

The existing EmailJS service, template, and browser public key remain as defaults, and template field names (`user_name`, `user_email`, `message`) are unchanged. To override them, copy `.env.example` to a root `.env.local`, set the `VITE_EMAILJS_*` values, and rebuild. Vite reads environment files from the repository root. Existing files under `src/` are not moved or changed.

These are public browser configuration values, not server secrets. Never put a private API key, access token, or server credential into a `VITE_*` variable because those values are included in the client bundle.

Delivery and error behavior are tested with a mocked EmailJS client. Tests never send a real message. A live delivery check is separate from local verification.

## Company projects

The Projects section includes professional contributions grouped in this order: **American Chase → Askus Studio → WLC Technology**, followed by all six existing projects under **More projects**. Edit the 14 professional entries in `src/data/companyProjects.js`. Each company card includes real screenshots, contribution descriptions, focus tags, Roles & Responsibilities, and a Tech Stack section. Known GitHub repositories are linked alongside project websites. Screenshot metadata is in `src/data/companyMedia.js`, asset imports are centralized in `src/assets/assets.js`, and provenance is in `src/assets/projects/SCREENSHOT_SOURCES.md`. Career Explorer appears both in its WLC work context and in the existing gallery.

## Images

Project screenshots are WebP files up to 1280 px wide, with separate 160 × 90 thumbnails. Profile photos live in `src/assets/profile/`; About Me uses the supplied `aboutMePicNew.jpg`. The shared gallery supports previous/next buttons, thumbnail selection, arrow keys while focused inside the gallery, horizontal touch swipes, and an expandable screenshot viewer. The native dialog traps focus, supports Escape, and restores focus and page scrolling after closing. It mounts only the selected full screenshot, and below-the-fold images load lazily.

All application image and PDF imports are declared once in `src/assets/assets.js`. Use its named exports from components and data modules. Screenshots are grouped under `src/assets/projects/<project-name>/`, with separate `backgrounds/`, `profile/`, `documents/resumes/`, `certifications/`, and `experience/<company-name>/` folders. The old `src/data/projectMedia.js` module only re-exports gallery entries for compatibility. Public SEO files remain in `public/` to preserve their URLs; the early hero preload in `index.html` references the matching profile source file.

To optimize future original PNG/JPEG additions:

```sh
npm run optimize:images -- /path/to/original-images src/assets/projects/project-name
```

The optimizer writes WebP files and project thumbnails into the specified output folder, or alongside the inputs when no output folder is supplied, and leaves input originals untouched. With no arguments it uses `src/assets/profile/`. Add new imports and exports to `src/assets/assets.js`, then add company screenshot metadata to `src/data/companyMedia.js` as needed. Company captures have separate thumbnails; the Namo images are official Google Play screenshots and Career Explorer reuses its original local gallery. Public website and sign-in captures are labeled so they are not confused with internal application interfaces. Previous large originals remain recoverable in Git history; the working tree contains their compressed replacements. Both résumé PDFs remain intact, and only the current résumé is bundled.

## Dependencies and verification

React, React DOM, EmailJS, React Icons, and the GitHub calendar are updated. Vite replaces Create React App, and a small local gallery replaces the carousel package. Unused animation, scrolling, and web-vitals packages are removed. Vitest and Testing Library cover contact delivery state, navigation behavior, gallery behavior, and whole-app integration.

`npm audit --omit=dev` reports no known production dependency advisories at verification time. Full audit findings remaining in development/deployment tooling are documented in `UPDATE_REPORT.md`; do not apply a forced downgrade to conceal them.

## Deployment

The existing manual command is retained:

```sh
npm run deploy
```

It builds locally and publishes `build/` through `gh-pages`. Run it only when you intend to update the public website. Local development, tests, builds, and preview do not deploy or push changes.
