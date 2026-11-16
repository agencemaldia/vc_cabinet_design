import type { Locale } from "./config";

/**
 * The site's pages and their address in each language (same approach as `PAGE_PATHS` in the `leads`
 * project). The route folders under `app/[lang]` carry the ENGLISH address; `proxy.ts` serves the French
 * and Spanish addresses from them (rewrite) and redirects an address written in another language (308).
 * Code always links with the English path (`/kitchen-renovation`); `localizePath` turns it into the
 * visitor's address.
 */
export const PAGE_PATHS = {
  home: { en: "/", fr: "/", es: "/" },
  kitchen: { en: "/kitchen-renovation", fr: "/renovation-de-cuisine", es: "/remodelacion-de-cocina" },
  bathroom: { en: "/bathroom-renovation", fr: "/renovation-de-salle-de-bain", es: "/remodelacion-de-bano" },
  blog: { en: "/blog", fr: "/blog", es: "/blog" },
  quote: { en: "/get-a-quote", fr: "/soumission", es: "/cotizacion" },
  privacy: { en: "/privacy-policy", fr: "/politique-de-confidentialite", es: "/politica-de-privacidad" },
  accessibility: { en: "/accessibility", fr: "/accessibilite", es: "/accesibilidad" },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof PAGE_PATHS;

/**
 * Pages of the previous site, redirected (308) to their closest page so old links and search results
 * still land somewhere useful.
 */
export const LEGACY_PATHS: Record<string, PageKey> = {
  "/mission": "home",
  "/services": "home",
  "/gallery": "home",
  "/services/walk-in": "home",
  "/services/kitchen": "kitchen",
  "/services/bathroom": "bathroom",
  "/contact": "quote",
  "/thank-you": "quote",
};

/** Full address of a page in a language, e.g. `pagePath("fr", "quote")` → `/fr/soumission`. */
export function pagePath(lang: Locale, key: PageKey): string {
  const path = PAGE_PATHS[key][lang];
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** English path of a page → the same page in a language (`/kitchen-renovation` → `/renovation-de-cuisine`). */
export function translatePath(path: string, lang: Locale): string {
  for (const paths of Object.values(PAGE_PATHS)) {
    if (paths.en === "/") continue;
    if (
      path === paths.en ||
      path.startsWith(`${paths.en}/`) ||
      path.startsWith(`${paths.en}#`) ||
      path.startsWith(`${paths.en}?`)
    ) {
      return paths[lang] + path.slice(paths.en.length);
    }
  }
  return path;
}

/** A page's address in a language → its English path (`/soumission`, "fr" → `/get-a-quote`). */
export function englishPath(path: string, lang: Locale): string {
  for (const paths of Object.values(PAGE_PATHS)) {
    const own: string = paths[lang];
    if (own === "/") continue;
    if (path === own || path.startsWith(`${own}/`) || path.startsWith(`${own}#`) || path.startsWith(`${own}?`)) {
      return paths.en + path.slice(own.length);
    }
  }
  return path;
}

/**
 * For `proxy.ts`: what to do with a path inside a language (`rest` = the path after `/fr`).
 * `rewrite` = this language's address, served by the English route folder; `redirect` = an address of
 * another language or an old page.
 */
export function resolvePath(lang: Locale, rest: string): { rewrite: string } | { redirect: string } | null {
  const clean = rest.replace(/\/$/, "") || "/";
  const legacy = LEGACY_PATHS[clean];
  if (legacy) return { redirect: pagePath(lang, legacy) };
  for (const paths of Object.values(PAGE_PATHS)) {
    if (paths.en === "/") continue;
    for (const candidate of Object.values(paths)) {
      if (clean !== candidate && !clean.startsWith(`${candidate}/`)) continue;
      const tail = clean.slice(candidate.length);
      const own = paths[lang];
      if (candidate === own) return own === paths.en ? null : { rewrite: `/${lang}${paths.en}${tail}` };
      return { redirect: `/${lang}${own}${tail}` };
    }
  }
  return null;
}
