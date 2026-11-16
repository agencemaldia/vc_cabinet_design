import { Breadcrumbs } from "@/components/sections/blocks";
import { JsonLd, breadcrumbLd } from "@/components/sections/json-ld";
import { SiteHeader } from "@/components/site/site-header";
import { COMMON } from "@/content/common";
import { QUOTE } from "@/content/quote";
import { QuoteWizard } from "@/features/quote/quote-wizard";
import type { Locale } from "@/lib/i18n/config";
import { pagePath } from "@/lib/i18n/routes";
import { site } from "@/lib/site";

/**
 * Quote request page (specification §6): a short introduction, reassurance points, then the step-by-step
 * form — one question at a time, progress bar, back navigation, validation, anti-spam and confirmation.
 */
export function QuotePage({ lang }: { lang: Locale }) {
  const t = QUOTE[lang];
  const c = COMMON[lang];
  const crumbs: [string, string][] = [
    [c.home, pagePath(lang, "home")],
    [c.quote, pagePath(lang, "quote")],
  ];
  return (
    <main>
      <SiteHeader variant="solid" current="quote" />
      <section className="sec vc-quote-page" aria-labelledby="quote-title">
        <div className="wrap">
          <Breadcrumbs lang={lang} items={crumbs} />
          <header className="vc-quote-page__head">
            <p className="vc-eyebrow">{t.kicker}</p>
            <h1 id="quote-title">{t.title}</h1>
            <p className="vc-quote-page__lead">{t.lead}</p>
            <ul className="vc-checks is-inline">
              {t.reassurance.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </header>
          <QuoteWizard lang={lang} />
          <p className="vc-quote-page__call">
            {c.call} : <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </div>
      </section>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </main>
  );
}
