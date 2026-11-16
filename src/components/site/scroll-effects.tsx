"use client";

import { useEffect } from "react";

/** Never animated by the generic effects: they have their own (hero, pinned sections, timeline…). */
const SKIP =
  "header, .vc-show, .vc-pin, .vc-styles, .vc-tl, .vc-partners, footer, dialog, [role='dialog'], [aria-modal], [data-no-motion]";
/** Blocks that fade up into place the first time they scroll into view. */
const REVEAL = [
  "section h2 ~ p",
  "section .wrap > div > p",
  ".cgc",
  "a.card",
  "a.tile",
  "figure",
  "form label",
  "form button[type='submit']",
  "dl > div",
  "div:has(> h3 > button[aria-expanded])",
].join(", ");

const COUNT_MS = 1400;
const clamp = (v: number) => Math.min(1, Math.max(0, v));

/**
 * Scroll effects shared by every page (mounted by PageShell). Styles live in src/styles/motion.css.
 * - Heroes recede as the page scrolls away from them (content lifts and fades, the photo drifts); on
 *   Home the hero also eases back into a rounded card.
 * - Section titles rise from behind a mask; paragraphs, cards and form fields fade up. Blocks that sit side
 *   by side appear together, so a row of cards stays aligned while it animates (alignment comes first: no
 *   per-column parallax, no per-photo crop).
 * - Key figures (`.cg-num`) count up; the footer's content rises into place as it appears.
 * Nothing moves for visitors who ask for reduced motion.
 */
export function ScrollEffects({ page }: { page: string }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(`.pg-${page}`);
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cleanups: (() => void)[] = [];
    const free = (el: Element) => !el.closest(SKIP);
    const vh0 = window.innerHeight;
    const below = (el: Element) => el.getBoundingClientRect().top > vh0 * 0.92;

    // ---------------------------------------------------------------- one-shot reveals
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("is-in");
          // once in place, drop the classes so the design's own hover transitions apply again
          window.setTimeout(() => el.classList.remove("vc-rv", "vc-rise", "is-in"), 1300);
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    cleanups.push(() => io.disconnect());
    // the page hero: the first section of the page (dark photo heroes and light title heroes alike)
    const hero = root.querySelector<HTMLElement>("section");
    const titles = [...root.querySelectorAll<HTMLElement>("section h2")].filter(
      (el) => free(el) && !hero?.contains(el) && below(el),
    );
    titles.forEach((el) => {
      el.classList.add("vc-rise");
      io.observe(el);
    });
    const blocks = [...root.querySelectorAll<HTMLElement>(REVEAL)].filter(
      (el) => free(el) && !hero?.contains(el) && below(el),
    );
    blocks.forEach((el) => {
      el.classList.add("vc-rv");
      io.observe(el);
    });

    // ---------------------------------------------------------------- count-up
    const countIo = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          countIo.unobserve(el);
          const m = (el.dataset.count ?? el.textContent ?? "").match(/^(\D*)(\d+)(.*)$/);
          if (!m) return;
          el.dataset.count = m[0];
          const [, pre, num, post] = m;
          const target = Number(num);
          const t0 = performance.now();
          const tick = (now: number) => {
            const k = Math.min(1, (now - t0) / COUNT_MS);
            el.textContent = `${pre}${Math.round(target * (1 - Math.pow(1 - k, 3)))}${post}`;
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }),
      { threshold: 0.6 },
    );
    root.querySelectorAll<HTMLElement>(".cg-num").forEach((el) => countIo.observe(el));
    cleanups.push(() => countIo.disconnect());

    // ---------------------------------------------------------------- scroll-linked effects
    // footer: its content rises gently into place as it comes into view (the footer itself stays put)
    const footer = root.querySelector<HTMLElement>("footer");
    footer?.classList.add("vc-foot");

    if (hero) hero.classList.add("vc-hero");
    const homeHero = page === "home" ? hero : null;
    homeHero?.classList.add("vc-hero-shrink");

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      if (hero) {
        const p = clamp(window.scrollY / Math.max(1, hero.offsetHeight));
        hero.style.setProperty("--hp", p.toFixed(3));
        if (homeHero) homeHero.style.setProperty("--hero-p", (window.innerWidth > 760 ? p : 0).toFixed(3));
      }
      if (footer) {
        const r = footer.getBoundingClientRect();
        footer.style.setProperty("--fe", clamp((vh - r.top) / Math.min(vh * 0.7, r.height)).toFixed(3));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      hero?.classList.remove("vc-hero", "vc-hero-shrink");
      footer?.classList.remove("vc-foot");
    });

    return () => cleanups.forEach((fn) => fn());
  }, [page]);

  return null;
}
