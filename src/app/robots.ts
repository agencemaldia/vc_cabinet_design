import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/** /robots.txt — the whole site is open to search engines and AI assistants; the sitemap lists every page. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
