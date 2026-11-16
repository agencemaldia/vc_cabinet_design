import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { resolvePath } from "@/lib/i18n/routes";

/**
 * Language routing (same rules as the `leads` project). Named `proxy.ts`: since Next.js 16 the middleware
 * was renamed — never create `middleware.ts`, it would be ignored.
 * - A path that starts with a language: translated addresses (`/fr/renovation-de-cuisine`) are served by
 *   the English route folder (rewrite); an address of another language or an old page redirects to the
 *   right one (see `src/lib/i18n/routes.ts`).
 * - Any other path goes to the same page in French (the default): `/contact` → `/fr/…`. `Accept-Language`
 *   is deliberately ignored; visitors switch with the language menu.
 * Redirects are permanent (308) in production, temporary in development so a changed rule never sticks in
 * the browser cache.
 */
const REDIRECT = process.env.NODE_ENV === "production" ? 308 : 307;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1]?.toLowerCase() ?? "";

  if (isLocale(first)) {
    const target = resolvePath(first as Locale, pathname.slice(first.length + 1));
    if (!target) return;
    const url = request.nextUrl.clone();
    if ("rewrite" in target) {
      url.pathname = target.rewrite;
      return NextResponse.rewrite(url);
    }
    url.pathname = target.redirect;
    return NextResponse.redirect(url, REDIRECT);
  }

  const rest = pathname === "/" ? "" : pathname;
  const target = resolvePath(defaultLocale, rest || "/");
  const url = request.nextUrl.clone();
  url.pathname = target && "redirect" in target ? target.redirect : `/${defaultLocale}${rest}`;
  return NextResponse.redirect(url, REDIRECT);
}

export const config = {
  // internal files and any path with an extension (images, videos, icons…) are skipped
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
