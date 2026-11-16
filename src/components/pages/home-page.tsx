import { existsSync } from "node:fs";
import { join } from "node:path";

import { FinalCta, LatestPosts, ReviewsBlock, SectionHead, ServicesDuo } from "@/components/sections/blocks";
import { FaqList } from "@/components/sections/faq";
import { JsonLd, faqLd } from "@/components/sections/json-ld";
import { VideoHero } from "@/components/sections/video-hero";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { COMMON } from "@/content/common";
import { HOME } from "@/content/home";
import type { Locale } from "@/lib/i18n/config";
import { pagePath } from "@/lib/i18n/routes";

/** Hero video files, in order of preference; only those present in /public are offered to the browser. */
const VIDEO_FILES = [
  { src: "/videos/hero.webm", type: "video/webm" },
  { src: "/videos/hero.mp4", type: "video/mp4" },
];
/** First frame of the video: shown while it loads, so playback starts without a jump. */
const POSTER = "/images/hero-poster-modern-kitchen-island.webp";

function heroSources() {
  return VIDEO_FILES.filter((v) => existsSync(join(process.cwd(), "public", v.src)));
}

/**
 * Home page (specification §2). The sections follow the required order exactly — 1 video hero, 2 reviews,
 * 3 services, 4 method, 5 FAQ, 6 articles, 7 final call to action — and the footer (8) is added by the page
 * frame. No other section.
 */
export function HomePage({ lang }: { lang: Locale }) {
  const t = HOME[lang];
  const quote = pagePath(lang, "quote");
  return (
    <main>
      <VideoHero
        sources={heroSources()}
        poster={POSTER}
        posterAlt={t.services.kitchen.alt}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        titleEm={t.hero.titleEm}
        text={t.hero.text}
        cta={{ href: quote, label: t.hero.cta }}
        secondary={{ href: pagePath(lang, "kitchen"), label: t.hero.secondary }}
        labels={{ pause: t.hero.pause, play: t.hero.play }}
      />
      <ReviewsBlock lang={lang} copy={t.reviews} />
      <ServicesDuo lang={lang} copy={t.services} />
      <ProcessTimeline
        eyebrow={t.method.eyebrow}
        title={t.method.title}
        text={t.method.text}
        steps={t.method.steps}
        cta={{ href: quote, label: COMMON[lang].cta }}
      />
      <section className="sec vc-faq-sec" id="faq" aria-labelledby="faq-title">
        <div className="wrap vc-faq-layout">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} id="faq-title" text={t.faq.text} />
          <FaqList items={t.faq.items} />
        </div>
        <JsonLd data={faqLd(t.faq.items)} />
      </section>
      <LatestPosts lang={lang} copy={t.blog} />
      <FinalCta lang={lang} title={t.final.title} text={t.final.text} cta={t.final.cta} />
    </main>
  );
}
