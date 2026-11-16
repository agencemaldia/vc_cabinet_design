import "server-only";

import type { Locale } from "./config";
import type { Dictionary } from "./translate";

/**
 * Dictionaries: English sentence → translation, one file per language. The pages are written in
 * English, so English needs no file; French (the default language) and Spanish do. Loaded on the server only; a page sends
 * the browser just its own language.
 */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: async () => ({}),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default as Dictionary),
  es: () => import("./dictionaries/es.json").then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
