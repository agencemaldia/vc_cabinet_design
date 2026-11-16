import type { Metadata } from "next";
import { NotFoundContent } from "@/components/pages/not-found-content";
import { PageShell } from "@/components/site/page-shell";
import { getRequestLocale } from "@/lib/i18n/request-locale";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: false } };

/**
 * 404 rendered inside the `[lang]` layout, in the visitor's language. Next gives `not-found.tsx` no
 * props: the language comes from the request store filled by the layout.
 */
export default function NotFound() {
  return (
    <PageShell page="not-found" locale={getRequestLocale()}>
      <NotFoundContent />
    </PageShell>
  );
}
