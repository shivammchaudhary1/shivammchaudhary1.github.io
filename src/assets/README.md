# Asset organization

Import named exports from `src/assets/assets.js` throughout application components and data modules. Static imports allow Vite to hash asset URLs and omit unused exports from the build. Gallery exports pair each screenshot with its thumbnail.

```jsx
import { aboutMePicNew, careerExplorer_Image1, resume } from "../../assets/assets";
```

| Folder | Contents |
| --- | --- |
| `profile/` | Hero portrait, previous About Me photo, supplied `aboutMePicNew.jpg` |
| `backgrounds/` | Page background texture |
| `projects/<project-name>/` | Full screenshots and thumbnails grouped by project; Career Explorer is shared by company and independent project entries |
| `certifications/` | Certificate previews and provenance |
| `experience/<company-name>/` | Full JPG letters and lightweight previews, retained without making them visible in the public timeline |
| `documents/resumes/` | Current and previous resume PDFs |

Add a new asset to its matching folder, import and export it in `assets.js`, then use that named export. Keep descriptive filenames so images and thumbnails remain easy to match. Existing files were moved without re-encoding or changing their contents.

Public favicon/social/SEO files remain under `public/` because they need stable URLs. The hero preload stays in `index.html` and points to `profile/Shivam_Chaudhary.webp`; update it too if replacing that portrait. The CSS background receives its asset URL through the centralized `backgroundTexture` export in `src/index.jsx`.
