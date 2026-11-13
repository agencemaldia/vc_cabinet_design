import type { ReactNode } from "react";
import { CookieBanner } from "@/components/site/cookie-banner";
import { MobileCallBar } from "@/components/site/mobile-call-bar";
import { PageTransition } from "@/components/site/page-transition";
import { Preloader } from "@/components/site/preloader";
import { SiteFooter } from "@/components/site/site-footer";

type PageShellProps = {
  /** `pg-*` class that scopes the page-specific design styles (see src/styles/design-pages.css). */
  pageClass: string;
  /** Play the Home intro animation. */
  preloader?: boolean;
  /** The Home page uses the sage version of the logo, the other pages the gold one. */
  logoTone?: "gold" | "sage";
  children: ReactNode;
};

/** Frame shared by every page: footer, cookie notice, mobile call bar and page transition. */
export function PageShell({ pageClass, preloader = false, logoTone = "gold", children }: PageShellProps) {
  return (
    <>
      <div
        className={pageClass}
        style={{
          width: "100%",
          minHeight: "100%",
          background: "#FFFFFF",
          fontFamily: "var(--font-urbanist), system-ui, sans-serif",
          color: "#22252A",
        }}
      >
        {children}
        <SiteFooter logoTone={logoTone} />
        <CookieBanner />
        <MobileCallBar />
      </div>
      {preloader && <Preloader />}
      <PageTransition />
    </>
  );
}
