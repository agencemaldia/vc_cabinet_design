# V&C Cabinet Design Concept — website

Marketing site for V&C Cabinet Design Concept (custom kitchens, bathrooms and walk-ins in Tampa Bay),
built with Next.js (App Router), React and Tailwind CSS from the *V&C Cabinet Design Concept — Design System*
design.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` makes a production build; `npm run lint` runs ESLint.

## Pages

Every page exists in three languages, each with its own URL: French (default) under `/fr`, English under
`/en`, Spanish under `/es`. `/` and any URL without a language redirect to the French page.

| Route (after `/fr`, `/en` or `/es`) | Page |
| --- | --- |
| `/` | Home |
| `/mission` | Mission |
| `/services` | Services |
| `/services/kitchen`, `/services/bathroom`, `/services/walk-in` | Service detail pages |
| `/gallery` | Gallery (filters + lightbox) |
| `/blog`, `/blog/space-optimization-in-small-kitchens` | Blog index and article |
| `/contact`, `/thank-you` | Contact form and confirmation |
| `/privacy-policy` | Privacy policy |
| `/accessibility` | Accessibility statement |
| any unknown URL | 404 (in the visitor's language) |

## Languages (`src/lib/i18n`)

Same conventions as the `leads` project: `config.ts` (locales, default, labels — client-safe),
`dictionaries.ts` (server-only loader), `request-locale.ts` (language of the 404), `src/proxy.ts` (redirects
to `/fr`), `app/[lang]/layout.tsx` (`<html lang>`), and the footer's language menu (`lang-menu.tsx`).

The pages are written in English (they are generated from the design). French and Spanish come from
`dictionaries/fr.json` and `dictionaries/es.json`: **English sentence → translation**. Each component runs its
JSX through `useTranslate()` (text, `alt`, `aria-label`, `placeholder`… and internal links, which get the
language prefix); a sentence missing from a dictionary simply shows in English.

- **Change a translation:** edit the value in `fr.json` / `es.json`.
- **New or changed English text:** add the exact English sentence as a key in both files. In development,
  `window.__i18nMissing` (browser console, on a `/fr` or `/es` page) lists every sentence still untranslated.
- **Titles and descriptions (SEO)** of each page, per language, live in `src/lib/i18n/pages.tsx`, which also
  emits the canonical URL and the `hreflang` links.

## Structure

- `src/app/[lang]` — routes; each page file is two lines that call the registry in `src/lib/i18n/pages.tsx`.
- `src/components/site` — shared header, footer, contact section, cookie notice, language
  menu, page transition and scroll animations.
- `src/components/pages` — page content generated from the design (see `scripts/design-import`).
- `src/styles` — the design's stylesheets (generated, scoped per page on `<html data-page>`), `overrides.css`
  (hand-written adjustments made after review) and `motion.css` (scroll animations). All are imported from
  `src/app/globals.css`.
- `public/images` — photos (WebP, see `scripts/optimize-images.mjs`) and logos.
- `next.config.ts` — security headers (CSP in production, HSTS, frame and referrer policies) and image caching.

Design tokens (colors, font) are exposed as Tailwind theme values in `src/app/globals.css`
(`bg-forest`, `text-navy`, …). Tailwind's Preflight reset is intentionally not loaded, because the design relies on
browser defaults.

## Before launch

- **Forms are not sent anywhere yet.** The consultation forms validate in the browser and then go to
  `/thank-you`; connect them to a backend or form service in `src/components/site/use-consultation-form.ts`.
- **Sample content to verify with the client** (figures, reviews, hours, social links, partners): see
  `docs/client-info-to-verify.md`.
- **French and Spanish translations** were written by Claude: have a native speaker review
  `src/lib/i18n/dictionaries/*.json` before launch.
- **Blog:** only the article designed in the mockup exists; the blog cards all link to it.
- **Cookie notice** stores the visitor's choice, but no analytics script is installed yet.
- **Partner band (Home, under the hero)** lists placeholder names: add the real partners (and logos in
  `public/images/partners/`) in `src/components/site/partner-marquee.tsx`.
- **Reviews (Home)** are placeholders: put real client reviews and the Google rating/link in
  `src/components/site/reviews-section.tsx`. Never publish invented reviews.
- **Before/After slider (Home)** runs on demo images (the "before" is the "after" photo desaturated). Add real
  photos of the same rooms before and after in `src/components/site/before-after.tsx`.
