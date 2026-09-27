# Vishal Yadav — Developer Portfolio

A React portfolio presenting full-stack projects, experience, education and contact details.

## Stack

React 19, Vite 8, Tailwind CSS 4, Lucide icons and Oxlint.
Use Node.js 20.19+ or 22.12+ (or a supported newer release).

## Run locally

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run lint
npm test
npm run build
npm run preview
```

Or run `npm run check` to lint, test, build and verify the output in one command.
The output check catches missing bundled scripts, styles, project images, the social
card and resume, and checks the PDF header and project URL configuration. It does
not test the remote applications' availability or authenticated workflows.

`dist/` contains the static site. The metadata tests use Node's built-in test runner.

## Edit content

- `src/data/portfolio.js`: profile, project facts, experience and education.
- `src/components/SelectedWork.jsx`: project cards with real application previews.
- `src/components/CaseStudyModal.jsx`: native modal dialog and keyboard focus handling.
- `src/components/ArchitectureDiagram.jsx`: high-level project workflow views.
- `src/index.css`: Tailwind v4 theme variants and shared accessibility styles.
- `public/resume.pdf`: current resume, preserved unchanged.
- `public/projects/`: real public-page screenshots; captions explain account requirements.
- `public/og-preview.png`: 1200 × 630 social-sharing card.

The homepage presents projects first, followed by experience, about, skills, education and contact. Technical detail lives in case studies. The mail composer opens the visitor's email application; it does not submit messages to a server.

## Theme and accessibility

Dark/light selection is applied before React mounts and saved when browser storage is available. The toggle remains usable when storage is blocked. Case studies use native modal dialogs, labelled headings, focus containment, Escape dismissal and focus restoration. Contact labels are associated with their controls; clipboard errors have visible feedback. Reduced-motion preferences are respected.

## Deploy

Build command: `npm run build`. Output directory: `dist`.

Set `VITE_SITE_URL` to the real public portfolio URL in your hosting environment. `.env.example` documents it. Vercel's `VERCEL_PROJECT_PRODUCTION_URL` and Netlify's `URL` are detected automatically. The build uses this to generate canonical/OG URLs and absolute social-image URLs. Without a domain, local previews use a relative image URL and omit canonical metadata.

The site currently assumes deployment at the domain root. GitHub Pages project subdirectories require adjusting Vite's base and root-relative asset paths before deployment. Vite itself does not configure your host's redirects or rewrites; this portfolio uses section anchors rather than client-side page routes.

## Content accuracy

The resume is the source for existing education, dates and project scope. Roadside's six backend areas are resume categories. Parking is attributed to its linked repository owner; a working public demo is not currently linked. Booking availability checks are described without claiming a proven concurrency guarantee.

See [content maintenance](docs/CONTENT-MAINTENANCE.md) for facts that still need owner input and guidance on guest demos, project evidence and publishing. Do not invent availability, team contributions, metrics or credentials.

Production builds also generate robots.txt and, when a public domain is configured, sitemap.xml. VITE_SITE_URL must be a domain-root URL; unsupported subdirectory deployments fail with an explanatory error.
