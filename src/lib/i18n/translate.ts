import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { localizePath, type Locale } from "./config";

/** English sentence → translated sentence. Missing entries fall back to English. */
export type Dictionary = Record<string, string>;

/** Props that hold visible or spoken text. Any other prop (className, style, data-s, src…) is left alone. */
const TEXT_PROPS = new Set([
  "children",
  "alt",
  "title",
  "placeholder",
  "aria-label",
  "aria-description",
  "label",
  "lead",
  "text",
  "tab",
  "big",
  "quote",
  "project",
  "place",
  "points",
  "items",
  "lede",
  "heading",
  "eyebrow",
  "content",
]);
/** Props that hold an internal link to localize. */
const LINK_PROPS = new Set(["href"]);

const missing = new Set<string>();
const collect = process.env.NODE_ENV !== "production";

function translateString(s: string, dict: Dictionary): string {
  const key = s.trim();
  if (!key || !/[a-z]/i.test(key)) return s;
  const hit = dict[key];
  if (hit === undefined) {
    if (collect && typeof window !== "undefined") {
      missing.add(key);
      (window as unknown as { __i18nMissing?: Set<string> }).__i18nMissing = missing;
    }
    return s;
  }
  // keep the surrounding spaces JSX gave the text (e.g. "Call us at " before a link)
  const lead = s.match(/^\s*/)![0];
  const trail = s.match(/\s*$/)![0];
  return lead + hit + trail;
}

function translateValue(value: unknown, dict: Dictionary, locale: Locale): unknown {
  if (typeof value === "string") return translateString(value, dict);
  if (Array.isArray(value)) return value.map((v) => translateValue(v, dict, locale));
  if (isValidElement(value)) return translateNode(value, dict, locale);
  if (value && typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype) {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = TEXT_PROPS.has(k) ? translateValue(v, dict, locale) : v;
    return out;
  }
  return value;
}

/**
 * Translates a rendered React tree: text children, text props (alt, aria-label, placeholder…, and the
 * text props of custom components such as `items`), and internal links (`/contact` → `/fr/contact`).
 * Components render their own markup, so each client component that outputs text runs its JSX through
 * this (see `useTranslate`); server-rendered parts are covered by the page-level <I18nScope>.
 * English links get the `/en` prefix too; `en.json` only overrides a few labels (short buttons).
 */
export function translateNode(node: ReactNode, dict: Dictionary, locale: Locale): ReactNode {
  if (typeof node === "string") return translateString(node, dict);
  // a bare list (e.g. several children of a provider): Children.toArray gives each item a stable key
  if (Array.isArray(node)) return Children.toArray(node).map((n) => translateNode(n, dict, locale));
  if (!isValidElement(node)) return node;
  const el = node as ReactElement<Record<string, unknown>>;
  const props = el.props;
  let changed: Record<string, unknown> | null = null;
  for (const [k, v] of Object.entries(props)) {
    let next: unknown = v;
    if (TEXT_PROPS.has(k)) next = translateValue(v, dict, locale);
    else if (LINK_PROPS.has(k) && typeof v === "string") next = localizePath(v, locale);
    if (next !== v) (changed ??= {})[k] = next;
  }
  // CSS picks some elements by their label (`[data-al="Kitchens project by V&C"]`, e.g. to set a photo): keep the
  // English label in `data-al` in every language, since `aria-label` itself gets translated.
  if (typeof props["aria-label"] === "string" && props["data-al"] === undefined) {
    (changed ??= {})["data-al"] = props["aria-label"];
  }
  if (!changed) return el;
  // Children given back as separate arguments, the way JSX passes static children: a single array would
  // be treated as a dynamic list and need keys.
  if (Array.isArray(changed.children)) {
    const { children, ...rest } = changed;
    return cloneElement(el, rest, ...(children as ReactNode[]));
  }
  return cloneElement(el, changed);
}
