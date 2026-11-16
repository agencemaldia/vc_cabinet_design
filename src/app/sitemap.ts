import type { MetadataRoute } from "next";

import { POSTS } from "@/content/blog";
import { localeHtmlLang, locales, type Locale } from "@/lib/i18n/config";
import { PAGE_PATHS, pagePath, type PageKey } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

/** Priority of each page in the sitemap (the quote form and the two services matter most after the home). */
const PRIORITY: Record<PageKey, number> = {
  home: 1,
  kitchen: 0.9,
  bathroom: 0.9,
  quote: 0.8,
  blog: 0.7,
  privacy: 0.2,
  accessibility: 0.2,
};

function entry(paths: Record<Locale, string>, priority: number, lastModified?: string): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [localeHtmlLang[l], `${site.url}${paths[l]}`]));
  return locales.map((lang) => ({
    url: `${site.url}${paths[lang]}`,
    ...(lastModified ? { lastModified } : {}),
    priority,
    alternates: { languages },
  }));
}

/** /sitemap.xml — every page and article in the three languages, with their hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = (Object.keys(PAGE_PATHS) as PageKey[]).flatMap((key) =>
    entry(Object.fromEntries(locales.map((l) => [l, pagePath(l, key)])) as Record<Locale, string>, PRIORITY[key]),
  );
  const articles = POSTS.flatMap((post) =>
    entry(
      Object.fromEntries(locales.map((l) => [l, `${pagePath(l, "blog")}/${post.slugs[l]}`])) as Record<Locale, string>,
      0.6,
      post.date,
    ),
  );
  return [...pages, ...articles];
}
