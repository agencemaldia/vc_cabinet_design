"use client";

import { createContext, useCallback, useContext, type ReactNode } from "react";
import { defaultLocale, localizePath, type Locale } from "./config";
import { translateNode, type Dictionary } from "./translate";

type I18n = { locale: Locale; dict: Dictionary };

const I18nContext = createContext<I18n>({ locale: defaultLocale, dict: {} });

/**
 * Page-level language scope (mounted by PageShell). Provides the locale and its dictionary to client
 * components, and translates the server-rendered part of the page it wraps (footer, static sections).
 * Only the current language's dictionary is sent to the browser.
 */
export function I18nScope({ locale, dict, children }: I18n & { children: ReactNode }) {
  return <I18nContext.Provider value={{ locale, dict }}>{translateNode(children, dict, locale)}</I18nContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(I18nContext).locale;
}

/** `tr(<>…</>)` translates a JSX tree (text, text props, internal links) into the current language. */
export function useTranslate() {
  const { locale, dict } = useContext(I18nContext);
  return useCallback((node: ReactNode) => translateNode(node, dict, locale), [dict, locale]);
}

/** `t("Send")` for a single string; `href("/contact")` for an internal link. */
export function useT() {
  const { locale, dict } = useContext(I18nContext);
  const t = useCallback((s: string) => dict[s] ?? s, [dict]);
  const href = useCallback((p: string) => localizePath(p, locale), [locale]);
  return { t, href, locale };
}
