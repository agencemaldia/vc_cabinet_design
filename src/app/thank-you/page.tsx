import type { Metadata } from "next";
import { ThankYouContent } from "@/components/pages/thank-you-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false },
};

export default function Page() {
  return (
    <PageShell page="thank-you">
      <ThankYouContent />
    </PageShell>
  );
}
