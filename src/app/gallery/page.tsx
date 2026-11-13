import type { Metadata } from "next";
import { GalleryContent } from "@/components/pages/gallery-content";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Kitchens, bathrooms and walk-ins designed and built by V&C across Tampa Bay.",
};

export default function Page() {
  return (
    <PageShell pageClass="pg-gallery">
      <GalleryContent />
    </PageShell>
  );
}
