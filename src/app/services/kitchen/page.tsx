import type { Metadata } from "next";
import { KitchenContent } from "@/components/pages/kitchen-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Custom kitchens",
  description:
    "Cabinets, islands, pantries and storage designed around the way you cook, gather and live — in Tampa Bay.",
};

export default function Page() {
  return (
    <PageShell page="kitchen">
      <KitchenContent />
    </PageShell>
  );
}
