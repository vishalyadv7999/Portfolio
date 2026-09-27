# Portfolio content maintenance

The current profile uses `public/resume.pdf` as the source for education, dates,
internship descriptions and project scope. The PDF itself has not been changed.

## Details still requiring owner input

- Internship availability, full-time start date and hours available per week.
- Remote/relocation preferences, actual international working-hour overlap, and
  sponsorship requirements where relevant. IST is a timezone, not an overlap promise.
- Parking project team size, personal contribution and supporting commits/PRs.
  The source repository is attributed to its actual host, ManikantVerma.
- The public portfolio domain, if deploying outside automatic Vercel/Netlify detection.
- Actual project decisions, measured outcomes and tests to substantiate performance
  or security claims. Do not add placeholder metrics to the public page.

## Evidence and demos

- Roadside's public landing page and LearnNexus's sign-in page were captured on
  23 September 2026. Refresh `public/projects/*.png` when the products change.
- Screenshots show actual public pages. They do not claim that authenticated
  workflows, accounts or backend integrations have been tested.
- Both MERN applications require accounts for private workflows. Guest accounts
  and seeded demonstrations must be implemented in those repositories with
  isolated sample data, not by exposing credentials in this portfolio.
- Parking's old demo URL was removed because it was not verified and the resume
  only provides a repository link. Reinstate a demo only after testing it.
- The resume groups Roadside into six backend areas. These are categories, not
  claims that a source-code folder contains exactly six route files.
- An availability lookup alone does not guarantee concurrency-safe booking.
  Only add that claim after checking the transaction/locking strategy and tests.

## Before publishing

1. Run `npm run check` for lint, tests, production build and required-asset checks.
2. Check both themes, 320px and desktop layouts, all three case studies, keyboard
   focus, resume download and contact controls.
3. Supply `VITE_SITE_URL` on custom hosting so the build generates absolute social
   image URLs and a canonical URL. Do not use a preview deployment as the canonical URL.
4. Review linked repository setup instructions, screenshots and environment-variable
   examples in the actual project repositories.
