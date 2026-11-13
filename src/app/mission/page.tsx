import type { Metadata } from "next";
import { MissionContent } from "@/components/pages/mission-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Our mission",
  description:
    "We help homeowners create the interior projects they have long dreamed of — across Bradenton, Tampa, Clearwater and St. Petersburg.",
};

export default function Page() {
  return (
    <PageShell pageClass="pg-mission">
      <MissionContent />
    </PageShell>
  );
}
