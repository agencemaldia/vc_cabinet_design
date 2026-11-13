import type { Metadata } from "next";
import { NotFoundContent } from "@/components/pages/not-found-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <PageShell pageClass="pg-not-found">
      <NotFoundContent />
    </PageShell>
  );
}
