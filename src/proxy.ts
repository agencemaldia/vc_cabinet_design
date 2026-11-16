import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "@/lib/i18n/config";

/**
 * Language routing (same rules as the `leads` project). Named `proxy.ts`: since Next.js 16 the
 * middleware was renamed — never create `middleware.ts`, it would be ignored.
 * - A path that already starts with a language (`/fr/contact`, case-insensitive) is left to Next.
 * - Any other path goes to the same page in French (the default): `/contact` → `/fr/contact` (308, permanent:
 *   the mapping is stable, so browsers, the CDN and crawlers can cache it). `Accept-Language` is
 *   deliberately ignored; visitors switch with the language menu.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1]?.toLowerCase();
  if (first !== undefined && (locales as readonly string[]).includes(first)) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  // permanent in production; temporary in development so a changed rule is never stuck in the browser cache
  return NextResponse.redirect(url, process.env.NODE_ENV === "production" ? 308 : 307);
}

export const config = {
  // internal files and any path with an extension (images, icons…) are skipped
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
