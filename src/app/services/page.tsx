import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/services-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Our services",
  description:
    "Custom kitchens, bathrooms, walk-in closets and whole-home renovations in Bradenton, Tampa, Clearwater and St. Petersburg.",
};

export default function Page() {
  return (
    <PageShell pageClass="pg-services">
      <ServicesContent />
    </PageShell>
  );
}
