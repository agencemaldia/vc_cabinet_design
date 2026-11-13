import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/contact-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Book a free designer consultation with V&C Cabinet Design Concept in Tampa, FL.",
};

export default function Page() {
  return (
    <PageShell pageClass="pg-contact">
      <ContactContent />
    </PageShell>
  );
}
