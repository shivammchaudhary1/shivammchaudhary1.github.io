# Portfolio update report

Date: 18 November 2026  
Current branch: `codex/update-runtime-dependencies` (earlier portfolio changes were merged from `newupdates` into `master`)

Status: implemented and verified locally; changes are uncommitted. No push, deployment, or production configuration change was performed.

## Latest stable dependencies and Node LTS

- Checked npm's `latest` dist-tag for every direct dependency on 18 November 2026. React and React DOM **19.3.1**, Vite **8.3.8**, Vitest **5.1.1**, and all other installed direct packages already match their latest stable versions. `npm outdated --json` returns `{}`.
- Updated `.nvmrc` from **24.15.0** to **26.13.1**, the latest Node LTS in the official distribution index. Node 27 is an Alpha release and was not selected. [Node 26.13.1 release](https://nodejs.org/en/blog/release/v26.13.1), [Node release policy](https://nodejs.org/en/about/previous-releases).
- Updated the Node engine range to `^22.22.2 || ^24.15.0 || ^26.13.1`, retaining compatible older LTS lines and avoiding automatic acceptance of untested future majors.
- Raised the declared `@testing-library/dom` minimum from **10.4.1** to **10.4.2**, matching the already-installed latest patch. Updated matching root metadata in the lockfile. `npm update --include=dev` found no further available dependency updates; installed package versions did not change.
- Downloaded Node 26.13.1 from nodejs.org into ignored local verification storage and verified its archive against the official SHA256 checksum list. Used this isolated runtime and its bundled npm **11.20.0** for installation and validation; the machine-wide Node selection was not changed.
- Validation on Node 26.13.1: clean `npm ci --include=dev`, **13 tests across 5 files pass**, production build succeeds, and all **109 generated build files have identical SHA256 hashes** compared with the prior build on Node 26.10.0. `npm ls --depth=0` reports no invalid or missing direct dependencies.
- `npm audit --omit=dev` reports **0 findings**. Full audit retains **10 high findings** in development/deployment tooling through the previously documented picomatch advisory, which still lists no patched version. No forced downgrade or override was applied.
- Scope: `.nvmrc`, `package.json`, `package-lock.json`, README setup guidance, and this report. No application source, styles, images, content, tests, or deployment scripts were changed. Changes are uncommitted; no push or deployment was performed.
- For an ordinary terminal using the installed nvm-windows manager, run `nvm install 26.13.1`, then `nvm use 26.13.1`, and verify `node --version` before installing dependencies. `.nvmrc` alone does not switch the active system runtime. Stop running dev/preview/test-watch processes before a clean install on Windows.

## Experience letters

- Added an **Experience Letters** section between Projects and Certifications, with an **EXPERIENCE** navbar link.
- Added **View experience letter** beside each matching company heading: American Chase, Askus Studio, and WLC Technology. Letter cards link back to their company's projects.
- Converted all three supplied single-page PDFs to JPG without cropping or changing document content. Original PDFs in Downloads remain untouched and are not bundled.
- Cards show the documented role, tenure, issue date, brief summary, full-page preview, and **Download JPG** action. Dates follow the visible letters, including 2026 in the American Chase document despite 2025 in its source filename.
- Small previews total **124,637 bytes** and load lazily. The larger JPGs total **575,104 bytes** and load when expanded or downloaded. Each document is stored once and reused through company links.
- Extended the shared viewer with optional preview images and document labels. Experience letters use a scrollable reader with **Zoom in / Fit width**, a sticky close control, Escape support, focus restoration, and body scroll restoration. Existing project/certificate viewers retain their original presentation.
- Desktop uses three document cards, tablets use image-and-summary rows, and phones use a single column. The navbar switches to its mobile menu at 1000 px to accommodate the new link.
- Validation: **13 tests across 5 files pass**, production build passes, and desktop, 768 px tablet, 390 px mobile, document zoom, menu closure, and company shortcuts were verified in the production preview. All 20 project cards and 4 certificates remain intact.
- Screenshots: `test-results/experience-letters-desktop.jpg`, `test-results/experience-letters-mobile.jpg`, `test-results/company-experience-link.jpg`. Source provenance: `src/assets/experience/SOURCES.md`.
- Preview: http://127.0.0.1:4173/#experience. No push or deployment performed.

## Certifications section

- Added a dedicated Certifications section after Projects, with a link in both desktop and mobile navigation.
- Included all three certificate files directly in the supplied folder, plus the separately linked Full Stack Development Foundations certificate. Resume subfolders were excluded.
- Cards show the actual certificate preview, title, issuer, supported date, concise description, and a direct link to the Drive original. The undated Prompt Engineer certificate has no invented issue date.
- Reused the existing accessible Expand viewer. Previews use native lazy loading, asynchronous decoding, and explicit dimensions.
- Four WebP previews total **305,482 bytes**, reduced by **98.2%** from the 17,282,373-byte JPG/PDF sources. Originals are not bundled; no new dependency or external embed is required.
- Existing project content and all 20 project cards are preserved. Drive originals and sharing settings are unchanged.
- Validation: **12 tests across 5 files pass**, production build passes, desktop and 390 px mobile previews display correctly, the mobile navigation closes after selection, and the certificate viewer opens and closes with Escape. Navigation also fits at 920 px.
- Browser screenshots: `test-results/certifications-desktop.jpg` and `test-results/certifications-mobile.jpg` (ignored local verification artifacts). Source provenance: `src/assets/certifications/SOURCES.md`.
- Preview: http://127.0.0.1:4173/#certifications. No push or deployment performed.

## Screenshots, roles, and stack details

Every one of the **14 company project cards** now includes a screenshot gallery, a **Roles & Responsibilities** heading with contribution bullets, and a **Tech Stack** heading with confirmed technologies. The company order and all six existing gallery cards remain intact.

### Screenshot assets and viewer

- Added 12 real public website/sign-in captures, plus 2 original app screenshot images from the [official Namo Google Play listing](https://play.google.com/store/apps/details?id=com.kalpataru.gcp&hl=en_IN).
- Career Explorer reuses its original five-image local gallery. No duplicate copies were made for its company entry.
- Website captures are compressed WebP files up to 1280 px wide. The Namo screenshots are 430 × 900 px, with full app screens preserved.
- New screenshot assets and thumbnails total **830,808 bytes**. They load lazily from the portfolio build; no external screenshot service or runtime website embedding is used.
- Reused one shared `ProjectGallery` component across company cards and the original projects, preserving thumbnail selection, keyboard controls, and touch swipes.
- Added an **Expand** action with a native modal viewer, close button, Escape support, previous/next controls for galleries, focus restoration, and scroll restoration. Single-image entries omit unnecessary carousel controls.
- Public client websites, public sign-in screens, and official app images have explicit captions. FlightSafety/Mount Sinai screenshots are not presented as internal application screenshots; authenticated systems were not entered.
- Capture provenance is documented in `src/assets/company/SCREENSHOT_SOURCES.md`. No generated or fabricated project screenshots were used.

### Verified technologies and source links

- **M. Dadu Films:** Next.js, NestJS, React, TypeScript, MongoDB, Zustand, Tailwind CSS, AWS Lightsail, Amazon S3, and Hostinger CDN. The repo README and frontend/backend package manifests were inspected. Zustand was explicitly confirmed after checking the current manifest. [GitHub source](https://github.com/shivammchaudhary1/mdf).
- **Devsangam:** React, TypeScript, Vite, Node.js, Express, MongoDB, Tailwind CSS, TanStack Query, and PWA. Verified using the repo README and frontend/backend package manifests. [GitHub source](https://github.com/shivammchaudhary1/devsangam).
- **Trackify:** MongoDB, Express, React, and Node.js, as confirmed.
- **eValuer:** Next.js and NestJS, with responsibilities explicitly describing enhancements to an existing application.
- **Namo:** React Native, Node.js, and Express, as confirmed. The supplied Google Play link is included on the card.
- **FlightSafety:** PHP, Laravel, and Symfony, retaining the confirmed PHP 7 → PHP 8.6 upgrade target.
- **Mount Sinai:** StrataJazz, with attendance-data stabilization and weekly/biweekly payroll responsibilities.
- WordPress contributions and the named hosting providers remain as supplied. The Career Explorer company card now includes its already-known GitHub source link as well.

### Verification after this addition

- **12 tests pass across 5 files**, including the original gallery behavior and new viewer checks for opening, closing, focus restoration, scroll restoration, and one-step keyboard navigation.
- Production build passes. Current reported gzip sizes: **96.16 kB entry JavaScript** and **4.07 kB CSS**. Entire uncompressed build: **2,598,262 bytes**.
- All 14 company cards render a gallery, role list, and stack list. Five viewport widths (320, 390, 768, 1024, and 1280 px) have no document-level horizontal overflow.
- The native screenshot viewer was checked on desktop and mobile, including the official Namo gallery. Browser console checks captured no warnings or errors.
- All six original names, descriptions, live URLs, and repository URLs remain unchanged. No new runtime dependency was added.

Work remains local and uncommitted on `newupdates`. Nothing was pushed or deployed.

## Company project additions

Added 14 professional project entries above the six existing projects, in the requested company order:

1. **American Chase (2):** FlightSafety International and Mount Sinai.
2. **Askus Studio (7):** Dream Country Visas, M. Dadu Films, Devsangam, The Golden Wasp, Keystroke Consulting, Dr. Kumkum Gupta, and The Logic Machines.
3. **WLC Technology (5):** Trackify.ai, Career Explorer, Magnolia Home, eValuer, and Namo Grand Central Park.
4. **More projects:** all six existing gallery cards, descriptions, links, technology icons, and screenshots are retained. Career Explorer remains both in its WLC contribution context and in the original detailed gallery.

Descriptions were edited for grammar and clarity using the supplied contribution notes. FlightSafety retains **PHP 7 → PHP 8.6** as the migration target, as explicitly confirmed. No employment dates, project dates, unsupported technology stacks, source repositories, screenshots, or mobile app download links were invented. The FlightSafety and Mount Sinai actions are labeled **Client website** so they do not imply public access to the internal applications described.

The new sections have numbered company headers, contribution tags, external website links, and jump links for each company and the existing project section. Cards stack on small screens. Project data lives in `src/data/companyProjects.js` and renders through `CompanyProjects.jsx` and its scoped stylesheet. No new dependencies or image downloads were added.

Verification after this addition: all **10 tests pass**, the production build passes, and the application test checks that the company order is American Chase → Askus Studio → WLC Technology with **14 new company cards and 6 preserved existing cards (20 entries total)**. Browser inspection at 320, 390, 768, 1024, and 1280 px found no document-level horizontal overflow. Current build estimates are **93.66 kB entry JavaScript gzip** and **3.64 kB CSS gzip**. The optimization figures below describe the earlier optimization pass, before this content addition.

Company-section jump links and the link to the original gallery were verified in the local browser. Browser console checks captured no warnings or errors. New preview images are saved in ignored `test-results/company-projects-desktop.jpg` and `test-results/company-projects-mobile.jpg`.

Changes remain local and uncommitted on `newupdates`; nothing has been pushed or deployed.

## Scope and preservation

The existing design direction, section order, dark blue background texture, blue/purple palette, six projects, project descriptions, live destinations, repository destinations, contact details, photos, and résumé content are retained. Layout spacing, typography, cards, buttons, and responsive behavior have been corrected and made consistent.

Both résumé PDFs remain unchanged. The unused old résumé is preserved as a source archive and is not included in the production build. Your existing `src/.env` file was left untouched and is now ignored by Git. Its contents were not used in this work.

## Measured results

| Check | Before | After |
| --- | --- | --- |
| Photos and project screenshots | 24,287,173 bytes | 1,291,552 bytes, including new thumbnails |
| Image asset reduction | — | 94.7% |
| Reported entry JavaScript, gzip | 122.66 kB | 91.88 kB |
| Reported stylesheet, gzip | 5.69 kB | 3.12 kB |
| Packages in lockfile, excluding root | 1,520 | 205 |
| Full dependency audit findings | 74: 5 critical, 34 high, 21 moderate, 14 low | 10 high, all development/deployment tooling |
| Production dependency audit findings | Not separately recorded | 0 |
| Automated regression tests | None found | 10 passing tests across 4 files |
| 390 px viewport | Document expanded to 514 px and clipped project cards | No document overflow |
| Entire generated build, uncompressed | Not separately recorded | 1,744,918 bytes |

Before/after JavaScript and CSS figures are the respective build tools' reported gzip estimates. Image sizes are exact filesystem totals. These are payload measurements, not a Lighthouse score or a promise of a particular loading time. The image conversion is lossy WebP at quality 82; originals remain recoverable in Git history.

## Fixes and improvements

### Layout and appearance

- Replaced nested percentage widths and intrinsic grid sizing with flexible columns that can shrink.
- Fixed project text, galleries, technology rows, and action buttons extending off-screen.
- Fixed tablet navigation by switching to the menu button below 900 px.
- Corrected mobile social-link placement and eliminated overlapping/offset positioning.
- Standardized content widths, spacing, heading sizes, card padding, borders, and button styles.
- Replaced justified body paragraphs with left-aligned text.
- Removed large hover zooms and scaling form inputs; kept subtle button feedback.
- Added reduced-motion support and restored a visible scrollbar.
- Fixed anchor offsets beneath the fixed navigation.

### Loading and image size

- Converted all 30 project screenshots and both portraits to compressed WebP.
- Added separate 160 × 90 thumbnails, typically around 0.5–2.6 kB each.
- Limited project screenshots to 1280 px wide without enlarging small originals.
- Replaced the carousel dependency with a local gallery that renders only the selected full screenshot.
- Preserved thumbnail selection, previous/next controls, keyboard navigation, and mobile horizontal swipes.
- Added lazy loading, asynchronous decoding, explicit image dimensions, and image failure messages.
- Preloaded the small hero portrait and gave it high fetch priority.
- Split EmailJS into a chunk loaded on submission; split the GitHub calendar into deferred chunks loaded near its section.
- Added fallbacks for failed external statistic images and calendar loading errors.

### Contact and navigation behavior

- Success appears only after EmailJS confirms delivery.
- Sending state prevents repeated submissions.
- Failure preserves the message, re-enables submission, and offers direct email.
- Kept the existing EmailJS configuration as defaults and preserved all template field names.
- Updated the EmailJS call to the current SDK options format; optional root `VITE_EMAILJS_*` overrides are documented.
- Corrected the WhatsApp link to include the full international number.
- Mobile navigation closes after choosing a destination, on an outside click, and on Escape. Escape restores focus to the toggle.
- Résumé controls now use one shared, keyboard-accessible PDF link, which opens the résumé once instead of also forcing a second download.

### Accessibility, metadata, and cleanup

- Added associated form labels, submission announcements, named icon links, and technology labels.
- Added a skip link, a main landmark, one primary heading, and proper section headings.
- Removed nested interactive elements, invalid JSX `class` attributes, missing project keys, duplicate element IDs, unused imports, abandoned commented components, and repeated button CSS.
- Shared résumé and social-link components replace repeated implementations.
- Added description/social metadata, a canonical URL, theme color, and a small SVG favicon.
- Footer year now updates automatically.
- Added setup, environment, optimization, testing, and deployment instructions in `README.md`.

## Dependency changes

| Package/tool | Before | After |
| --- | --- | --- |
| React / React DOM | ^18.2.0 | ^19.3.1 |
| EmailJS browser SDK | ^3.11.0 | ^5.0.3 |
| GitHub calendar | ^4.0.0 | ^5.0.9 |
| React Icons | ^4.8.0 | ^5.7.0 |
| Build tooling | react-scripts 5.0.1 | Vite ^8.3.8, React plugin ^6.3.0 |
| gh-pages | ^5.0.0 | ^6.3.0 |
| Tests | Unused CRA-era testing dependencies | Vitest ^5.1.1, Testing Library React ^16.3.3, jsdom ^31.0.1 |

Removed `react-scripts`, `react-responsive-carousel`, unused `framer-motion`, `react-scroll`, and `web-vitals`, and unused Jest/user-event dependencies. `sharp` is a development-only dependency supporting the reusable image optimization script. `npm outdated` reported no outdated direct dependencies at verification time.

### Remaining audit limitation

The 10 full-audit findings trace to the same transitive `picomatch` regular-expression denial-of-service advisory, reported through Vite, Vitest, and gh-pages dependency paths. [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) lists no patched version as of this review. These paths are development/deployment tools rather than browser production dependencies. `npm audit --omit=dev` reports zero findings. No forced downgrade or unverified dependency override was used to hide the advisory.

## Verification performed

- `npm ci`: clean dependency installation completed successfully.
- `npm test`: all 10 tests pass. Coverage includes contact pending/success/error behavior, repeated submissions, menu closure, Escape focus, résumé semantics, gallery selection, keyboard wrapping, touch scrolling behavior, image failure recovery, and app integration.
- `npm run build`: successful production build with no build warnings.
- `npm ls --depth=0`: no invalid or missing direct dependencies.
- `npm outdated`: no outdated direct dependencies reported.
- `npm audit --omit=dev`: zero known production dependency findings.
- `git diff --check`: passed.
- Compared all six project names, descriptions, repository URLs, and live URLs against `HEAD`: preserved exactly.
- Confirmed both résumé PDF source files are unchanged.
- Inspected the actual production preview at 320, 390, 768, 1024, and 1280 px: no document-level horizontal overflow.
- Verified menu selection closes the menu in the browser, gallery selection works, local images load, and the updated deferred GitHub calendar renders real contribution data.
- Final browser console check: no captured warnings or errors.
- Saved desktop and mobile project previews in ignored `test-results/desktop-projects.jpg` and `test-results/mobile-projects.jpg`.

Actual email delivery was not exercised: automated tests mock the provider and send no real mail. No Lighthouse, real-device Safari, or slow-network measurement was performed. External GitHub services retain their own uptime/rate limits; local fallbacks now prevent an unavailable widget from removing navigation to the profile.

## Running and deployment

Use a supported Node release: `^22.22.2`, `^24.15.0`, or `^26.13.1`. `.nvmrc` now selects 26.13.1 LTS; see the latest dependency verification above.

- `npm start`: development server on port 3000.
- `npm run preview`: production preview on port 4173 after a build.
- `npm run deploy`: the existing manual GitHub Pages publish command, retained with the same `build/` output directory. This command has not been run.

The local production preview was left running at http://127.0.0.1:4173/. All changes remain on `newupdates` for review. The public portfolio is untouched.
