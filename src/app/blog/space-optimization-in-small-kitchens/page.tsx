import type { Metadata } from "next";
import { ArticleContent } from "@/components/pages/article-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Space optimization in small kitchens",
  description: "Smart storage, compact appliances and lighting tricks that make a small kitchen work harder.",
};

export default function Page() {
  return (
    <PageShell page="article">
      <ArticleContent />
    </PageShell>
  );
}
