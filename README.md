# V&C Cabinet Design Concept — website

Site of V&C Cabinet Design Concept — kitchen and bathroom renovation in Tampa Bay — built with Next.js (App
Router), React and Tailwind CSS, following the Talgasy Web specification (five main pages + articles).

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` makes a production build; `npm run lint` runs ESLint.

## Pages

Every page exists in three languages, each with its own URL: French (default) under `/fr`, English under
`/en`, Spanish under `/es`. `/` and any URL without a language redirect to the French page.

Pages have translated addresses (`src/lib/i18n/routes.ts`). The route folders use the English address;
`src/proxy.ts` serves the French and Spanish addresses and redirects (308) an address of another language or a
page of the previous site.

| Page | FR | EN | ES |
| --- | --- | --- | --- |
| Home (video hero, reviews, 2 services, 5-step method, FAQ, articles, call to action) | `/fr` | `/en` | `/es` |
| Kitchen renovation | `/fr/renovation-de-cuisine` | `/en/kitchen-renovation` | `/es/remodelacion-de-cocina` |
| Bathroom renovation | `/fr/renovation-de-salle-de-bain` | `/en/bathroom-renovation` | `/es/remodelacion-de-bano` |
| Blog + articles | `/fr/blog/<slug>` | `/en/blog/<slug>` | `/es/blog/<slug>` |
| Quote request (6-step form) | `/fr/soumission` | `/en/get-a-quote` | `/es/cotizacion` |
| Privacy policy, accessibility | `/fr/politique-de-confidentialite`, `/fr/accessibilite` | `/en/privacy-policy`, `/en/accessibility` | `/es/politica-de-privacidad`, `/es/accesibilidad` |

Also generated: `/sitemap.xml` (every page and article with hreflang alternates) and `/robots.txt`.

## Languages (`src/lib/i18n`)

Same conventions as the `leads` project: `config.ts` (locales, default, labels — client-safe),
`dictionaries.ts` (server-only loader), `request-locale.ts` (language of the 404), `src/proxy.ts` (redirects
to `/fr`), `app/[lang]/layout.tsx` (`<html lang>`), and the footer's language menu (`lang-menu.tsx`).

- **Rebuilt pages** (home, services, blog, quote) take their text from `src/content/*.ts`, one block per
  language (`fr`, `en`, `es`): edit the text there.
- **Header, footer, cookie notice, legal pages and 404** are written in English and translated through
  `dictionaries/fr.json` and `dictionaries/es.json` (**English sentence → translation**, `useTranslate()`);
  `en.json` holds short English labels. A sentence missing from a dictionary shows in English
  (`window.__i18nMissing` lists them in development).
- **Titles and descriptions (SEO)** of each page live in `src/lib/i18n/pages.tsx`, which also emits the
  canonical URL, `hreflang` links and Open Graph data.

## Structure

- `src/app/[lang]` — routes; each page file calls the registry in `src/lib/i18n/pages.tsx`.
- `src/content` — texts of the rebuilt pages (home, kitchen, bathroom, blog articles, projects, reviews, quote).
- `src/components/pages` — page components (`home-page`, `service-page`, `blog-pages`, `quote-page`, legal pages).
- `src/components/sections` — page sections (video hero, reviews, services, FAQ accordion, article cards, final
  call to action, breadcrumbs, JSON-LD structured data).
- `src/components/site` — header, footer, before/after comparator, process timeline, cookie notice, language menu,
  page transition and scroll animations.
- `src/features/quote` — the quote form: wizard (client), Server Action (honeypot, minimum fill time, rate limit,
  zod validation) and e-mail delivery through Resend.
- `src/styles` — `site.css` (the rebuilt pages), the design's generated stylesheets, `overrides.css` and
  `motion.css`, all imported from `src/app/globals.css`.
- `public/images`, `public/videos` — photos (WebP, see `scripts/optimize-images.mjs`), logos and the home video.
- `next.config.ts` — security headers (CSP in production, HSTS, frame and referrer policies) and image caching.

Design tokens (colors, font) are exposed as Tailwind theme values in `src/app/globals.css`
(`bg-forest`, `text-navy`, …). Tailwind's Preflight reset is intentionally not loaded, because the design relies on
browser defaults.

## Before launch

- **Media:** stock video and photos to download from Envato Elements, with search terms and exact file names:
  `docs/envato-media.md`.
- **Client content** (real reviews, real before/after projects, contact details, social links) and the **quote
  form's environment variables** (`RESEND_API_KEY`, `QUOTE_NOTIFICATION_EMAIL`, `QUOTE_FROM_EMAIL`,
  `NEXT_PUBLIC_SITE_URL`): `docs/client-info-to-verify.md`. Placeholders carry a "Sample content" badge; never
  publish invented reviews or projects.
- **French and Spanish texts** were written by Claude: have a native speaker review them.
- **Cookie notice** stores the visitor's choice, but no analytics script is installed yet.
