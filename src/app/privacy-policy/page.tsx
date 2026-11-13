import type { Metadata } from "next";
import { PrivacyContent } from "@/components/pages/privacy-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How V&C Cabinet Design Concept LLC collects, uses and protects your information.",
};

export default function Page() {
  return (
    <PageShell pageClass="pg-privacy">
      <PrivacyContent />
    </PageShell>
  );
}
