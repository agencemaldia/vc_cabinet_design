import type { ReactNode } from "react";
import { CookieBanner } from "@/components/site/cookie-banner";
import { PageAttribute } from "@/components/site/page-attribute";
import { PageTransition } from "@/components/site/page-transition";
import { ScrollEffects } from "@/components/site/scroll-effects";
import { SiteFooter } from "@/components/site/site-footer";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { I18nScope } from "@/lib/i18n/context";
import { getDictionary } from "@/lib/i18n/dictionaries";

type PageShellProps = {
  /** Page key the design styles are scoped on (`<html data-page>`, see src/styles/design-*.css). */
  page: string;
  /** The Home page uses the sage version of the logo, the other pages the gold one. */
  logoTone?: "gold" | "sage";
  /** Language of the page; its dictionary translates everything inside (see src/lib/i18n). */
  locale?: Locale;
  children: ReactNode;
};

/** Frame shared by every page: footer, cookie notice, page transition and scroll effects. (No fixed call bar on
 *  phones: the burger menu already holds the consultation and call buttons.) */
export async function PageShell({ page, logoTone = "gold", locale = defaultLocale, children }: PageShellProps) {
  const dict = await getDictionary(locale);
  return (
    <I18nScope locale={locale} dict={dict}>
      <PageAttribute page={page} />
      <div
        className={`pg-${page}`}
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
      </div>
      <PageTransition />
      <ScrollEffects page={page} />
    </I18nScope>
  );
}
