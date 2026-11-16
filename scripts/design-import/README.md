# Design import

The site's pages were generated from the **V&C Cabinet Design Concept — Design System** artifact
(each page's "Desktop 1440" artboard, exported as *HTML (.zip)* from the artboard's Play view).
These scripts turn those exports into React components so a design update can be re-imported
instead of re-built by hand.

## What is generated

| Output | Source |
| --- | --- |
| `src/components/pages/*-content.tsx` | each artboard's markup, converted to JSX |
| `src/components/site/site-header.tsx`, `site-footer.tsx`, `contact-section.tsx` | blocks shared by every artboard |
| `src/styles/design-*.css` | the artboards' stylesheets, split into shared, per-page and Home |
| `public/images/*` | uploaded images, renamed from their alt text / usage |

Hand-written (not generated): `src/styles/overrides.css` (post-review adjustments to the design),
`page-shell.tsx`, `page-attribute.tsx`, `collapse.tsx`, `reviews-section.tsx`, `before-after.tsx`, `partner-marquee.tsx`, `process-timeline.tsx`, `blog-filter.tsx`, `page-transition.tsx`, `scroll-effects.tsx`, `services-showcase.tsx`, `src/styles/motion.css`,
`cookie-banner.tsx`, `sx.ts`, `use-consultation-form.ts`, `use-design-state.ts`, and the route files in `src/app`.

## How it maps the design

- Inline styles become React `style` objects. The design's CSS also targets elements by their
  inline style text (`[style*="…"]`); React re-serializes styles, so those elements also get a
  `data-s` copy of the original text and the selectors are rewritten to `[data-s*="…"]`.
- Every rule is scoped by the page being shown, `:root[data-page="home"]`, `…="kitchen"`, … (set
  by `PageAttribute`), with the same added specificity, so the original cascade order still decides.
  Home keeps its whole stylesheet because it interleaves its own rules with the shared ones.
  (Not `:has(.pg-…)`: Next keeps recently visited pages mounted but hidden, so their elements stay in
  the document.)
- FAQ answers are wrapped in `<Collapse>` so they animate open/closed.
- `EXTRA_SECTIONS` in `generate.py` swaps in or inserts hand-written sections (Home: the partner band
  replaces the strip under the hero, the before/after slider goes above "bento", and the reviews replace
  the design's "What Our Clients Say About Us"; Mission: the "Seven steps" section becomes the scroll timeline
  and Nathalie’s link becomes two buttons; Services: the three service blocks become the pinned showcase).
- `{{…}}` bindings, `<sc-if>` and `<sc-for>` become JSX expressions, conditionals and `map`s
  bound to `useDesignState()`, a port of the artboards' page logic.
- Links to `X.dc.html` become Next routes; internal links use `next/link`.
- `COLOR_MAP` swaps colours site-wide: the design's greens (`#142A23`, `#1F3D33`) become the brand green `#125A50`
  (hovers lighten to `#1A6A5E`), in markup, `data-s` copies and CSS alike. The dark photo overlays
  (`rgba(20,42,35,…)`) are left as they are. The warm cream boxes (`#F6F3EE`) and their borders become the
  cool grey of the footer watermark (`#EFF0F2`, borders `#E3E5E9` / `#C9CDD4`).

## Re-running

1. Export each page artboard as *HTML (.zip)* and unzip each into its own folder under one
   directory (e.g. `exports/home/Home.dc.html`, `exports/kitchen/Kitchen.dc.html`, …).
2. Merge every `*/assets/*` file into `exports/allassets/`.
3. From the repo root:

```bash
python -I scripts/design-import/generate.py path/to/exports .
python -I scripts/design-import/make_shared.py path/to/exports .
npx prettier --write "src/**/*.{ts,tsx}"
```

Then convert the photos to WebP (and point the code at them): `node scripts/optimize-images.mjs`.

Then review the diff — new artboards or renamed pages need entries in `PAGES` / `ROUTES`.
