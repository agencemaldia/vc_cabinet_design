import { cache } from "react";

import { defaultLocale, type Locale } from "./config";

/**
 * `not-found.tsx` receives NO props (Next constraint). The `[lang]` layout has `params` and renders
 * before its children: it stores the request's locale here so the 404 can read it back.
 * `cache()` = per-request memory, never shared between visitors.
 */
const store = cache((): { locale: Locale } => ({ locale: defaultLocale }));

export function setRequestLocale(locale: Locale): void {
  store().locale = locale;
}

export function getRequestLocale(): Locale {
  return store().locale;
}
