import type { Metadata } from "next";
import { BathroomContent } from "@/components/pages/bathroom-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Custom bathrooms",
  description: "Vanities, storage and full bathroom remodels designed for comfort, durability and Florida humidity.",
};

export default function Page() {
  return (
    <PageShell page="bathroom">
      <BathroomContent />
    </PageShell>
  );
}
