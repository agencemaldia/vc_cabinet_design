import { HomeContent } from "@/components/pages/home-content";
import { PageShell } from "@/components/site/page-shell";

export default function Page() {
  return (
    <PageShell page="home" preloader logoTone="sage">
      <HomeContent />
    </PageShell>
  );
}
