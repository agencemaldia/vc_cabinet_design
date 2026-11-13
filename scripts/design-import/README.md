# Design import

The site's pages were generated from the **V&C Cabinet Design Concept — Design System** artifact
(each page's "Desktop 1440" artboard, exported as *HTML (.zip)* from the artboard's Play view).
These scripts turn those exports into React components so a design update can be re-imported
instead of re-built by hand.

## What is generated

| Output | Source |
| --- | --- |
| `src/components/pages/*-content.tsx` | each artboard's markup, converted to JSX |
| `src/components/site/site-header.tsx`, `site-footer.tsx`, `mobile-call-bar.tsx`, `contact-section.tsx` | blocks shared by every artboard |
| `src/styles/design-*.css` | the artboards' stylesheets, split into shared, per-page and Home |
| `public/images/*` | uploaded images, renamed from their alt text / usage |

Hand-written (not generated): `page-shell.tsx`, `page-transition.tsx`, `preloader.tsx`,
`cookie-banner.tsx`, `sx.ts`, `use-consultation-form.ts`, `use-design-state.ts`, and the route files in `src/app`.

## How it maps the design

- Inline styles become React `style` objects. The design's CSS also targets elements by their
  inline style text (`[style*="…"]`); React re-serializes styles, so those elements also get a
  `data-s` copy of the original text and the selectors are rewritten to `[data-s*="…"]`.
- Every rule is scoped by a page class (`.pg-home`, `.pg-kitchen`, …) with the same added
  specificity, so the original cascade order still decides. Home keeps its whole stylesheet
  because it interleaves its own rules with the shared ones.
- `{{…}}` bindings, `<sc-if>` and `<sc-for>` become JSX expressions, conditionals and `map`s
  bound to `useDesignState()`, a port of the artboards' page logic.
- Links to `X.dc.html` become Next routes; internal links use `next/link`.

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

Then review the diff — new artboards or renamed pages need entries in `PAGES` / `ROUTES`.
