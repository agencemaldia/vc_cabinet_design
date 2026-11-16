import "server-only";

import type { Locale } from "./config";
import type { Dictionary } from "./translate";

/**
 * Dictionaries: English sentence → translation, one file per language. The pages are written in
 * English; `en.json` only holds the few English overrides (short button labels, three words at most),
 * French (the default language) and Spanish hold every sentence. Loaded on the server only; a page sends
 * the browser just its own language.
 */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default as Dictionary),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default as Dictionary),
  es: () => import("./dictionaries/es.json").then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
