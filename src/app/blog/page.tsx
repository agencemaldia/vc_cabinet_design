import type { Metadata } from "next";
import { BlogContent } from "@/components/pages/blog-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Blog",
  description: "Design tips, trends and real projects from Tampa Bay.",
};

export default function Page() {
  return (
    <PageShell pageClass="pg-blog">
      <BlogContent />
    </PageShell>
  );
}
