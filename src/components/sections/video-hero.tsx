"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { SiteHeader } from "@/components/site/site-header";

type VideoHeroProps = {
  /** Sources available in /public/videos (checked on the server; empty = poster image only). */
  sources: { src: string; type: string }[];
  poster: string;
  posterAlt: string;
  eyebrow: string;
  title: string;
  titleEm: string;
  text: string;
  cta: { href: string; label: string };
  secondary: { href: string; label: string };
  labels: { pause: string; play: string };
};

/**
 * Home hero (specification §2, section 1): a real background video — autoplay, muted, looped, inline on
 * phones — with a poster image used while it loads, when it cannot play, or when no video file is present yet.
 * A dark gradient keeps the text readable; a pause button lets visitors stop the motion (and the video does
 * not start for those who ask their device for reduced motion).
 */
export function VideoHero({
  sources,
  poster,
  posterAlt,
  eyebrow,
  title,
  titleEm,
  text,
  cta,
  secondary,
  labels,
}: VideoHeroProps) {
  const video = useRef<HTMLVideoElement>(null);
  // Mirrors the video's own state (play/pause events), so the button always tells the truth.
  const [playing, setPlaying] = useState(false);
  const hasVideo = sources.length > 0;

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    // No motion for those who ask their device for less of it; otherwise make sure it starts (some browsers
    // ignore `autoplay` until asked again — if they still refuse, the poster stays and the button offers to play).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.pause();
    // `autoplay` often starts before React listens to the play event: read the state once play() settles.
    else
      v.play()
        .then(() => setPlaying(!v.paused))
        .catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => undefined);
    else v.pause();
  };

  return (
    <div className="vc-hero-frame">
      <div className="vc-hero-wrap">
        <SiteHeader variant="overlay" current="home" logoTone="sage" />
        <section data-hero="dark" className="vc-vhero" aria-labelledby="hero-title">
          {hasVideo ? (
            <video
              ref={video}
              className="vc-vhero__media"
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            >
              {sources.map((s) => (
                <source key={s.src} src={s.src} type={s.type} />
              ))}
            </video>
          ) : (
            <img className="vc-vhero__media" src={poster} alt={posterAlt} fetchPriority="high" />
          )}
          <div className="vc-vhero__shade" aria-hidden="true" />
          <div className="wrap vc-vhero__content">
            <p className="vc-eyebrow is-light">{eyebrow}</p>
            <h1 id="hero-title">
              {title} <em>{titleEm}</em>
            </h1>
            <p className="vc-vhero__text">{text}</p>
            <div className="vc-vhero__actions">
              <Link href={cta.href} className="pill pill-w vc-btn">
                {cta.label}
              </Link>
              <Link href={secondary.href} className="pill vc-btn vc-btn--ghost">
                {secondary.label}
              </Link>
            </div>
          </div>
          {hasVideo && (
            <button
              type="button"
              className="vc-vhero__toggle"
              onClick={toggle}
              aria-label={playing ? labels.pause : labels.play}
            >
              {playing ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
