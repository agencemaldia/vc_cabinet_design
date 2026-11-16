import { englishPath, translatePath } from "./routes";

/**
 * Locale config — client-safe (importable from a Client Component). Dictionary loading lives in
 * `dictionaries.ts`, server-only. Same conventions as the `leads` project.
 */

export const locales = ["fr", "en", "es"] as const;

export type Locale = (typeof locales)[number];

/** French is the default language: `/` redirects to `/fr`. (The pages are written in English; French and
 *  Spanish come from the dictionaries.) */
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Language switcher label. */
export const localeLabels: Record<Locale, string> = { fr: "FR", en: "EN", es: "ES" };

/** Each language's name in that language (autonym): the same on every page. */
export const localeNames: Record<Locale, string> = { fr: "Français", en: "English", es: "Español" };

/** Value of the `lang` / `hreflang` attributes. */
export const localeHtmlLang: Record<Locale, string> = { fr: "fr-CA", en: "en-US", es: "es-US" };

/** Internal path in a locale: `/kitchen-renovation` → `/fr/renovation-de-cuisine` (translated addresses, see
 *  routes.ts). Files, anchors and other sites are left alone. */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (/^\/(images|videos|_next|api)\//.test(path) || /\.[a-z0-9]{2,5}($|[?#])/i.test(path)) return path;
  const first = path.split(/[/?#]/)[1] ?? "";
  if (isLocale(first)) return path;
  const own = translatePath(path, locale);
  return own === "/" ? `/${locale}` : `/${locale}${own}`;
}

/** The same page in another locale (language switcher, hreflang): `/fr/soumission` → `/es/cotizacion`. */
export function switchLocalePath(path: string, to: Locale): string {
  const first = path.split("/")[1] ?? "";
  if (!isLocale(first)) return localizePath(path, to);
  const bare = path.slice(first.length + 1) || "/";
  return localizePath(englishPath(bare, first), to);
}
