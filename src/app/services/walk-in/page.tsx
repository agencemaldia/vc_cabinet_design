import type { Metadata } from "next";
import { WalkinContent } from "@/components/pages/walkin-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Walk-in closets",
  description: "Custom walk-in closets and wardrobes designed and installed in Tampa Bay.",
};

export default function Page() {
  return (
    <PageShell pageClass="pg-walkin">
      <WalkinContent />
    </PageShell>
  );
}
