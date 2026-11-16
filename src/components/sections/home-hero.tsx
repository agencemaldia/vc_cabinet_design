"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import { SiteHeader } from "@/components/site/site-header";
import { ds } from "@/components/site/sx";

type HomeHeroProps = {
  sources: { src: string; type: string }[];
  poster: string;
  copy: {
    aria: string;
    list: string[];
    line1: [string, string];
    line2: [string, string, string];
    tagline: string;
    text: string;
    cta: { href: string; label: string };
    secondary: { href: string; label: string };
    scroll: string;
    pause: string;
    play: string;
  };
};

const BTN: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  minHeight: "52px",
  padding: "0 28px",
  borderRadius: "0",
  fontSize: "15px",
  fontWeight: 600,
  textDecoration: "none",
  textAlign: "center",
};

/**
 * Home hero of the original V&C design — same frame, services list, two-line title, right-hand column and
 * "Scroll" cue — with the background slideshow replaced by the video required by the specification (§2):
 * autoplay, muted, looped, inline on phones, poster while it loads, and a pause button.
 */
export function HomeHero({ sources, poster, copy }: HomeHeroProps) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.pause();
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
    <div {...ds({ padding: "clamp(8px, 1.2vw, 16px) clamp(8px, 1.2vw, 16px) 0", background: "#FFFFFF" })}>
      <div {...ds({ position: "relative", borderRadius: "0", overflow: "hidden" })}>
        <SiteHeader variant="overlay" current="home" logoTone="sage" />
        <section
          data-hero="dark"
          aria-label={copy.aria}
          {...ds({
            position: "relative",
            minHeight: "clamp(720px, 64vw, 940px)",
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
            background: "#125A50",
          })}
        >
          {sources.length > 0 ? (
            <video
              ref={video}
              className="vc-home-video"
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
            <img className="vc-home-video" src={poster} alt="" fetchPriority="high" />
          )}
          <div
            aria-hidden="true"
            {...ds({
              position: "absolute",
              inset: "0",
              background:
                "linear-gradient(180deg, rgba(14,23,20,.35) 0%, rgba(14,23,20,.35) 45%, rgba(14,23,20,.85) 100%)",
            })}
          />
          <div
            className="wrap"
            {...ds({
              position: "relative",
              paddingTop: "clamp(96px, 10vw, 160px)",
              paddingBottom: "clamp(80px, 8vw, 120px)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "32px",
            })}
          >
            <div {...ds({ flex: "1 1 560px", display: "flex", flexDirection: "column", gap: "22px" })}>
              <ul
                {...ds({
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  lineHeight: "1.3",
                  fontSize: "14px",
                  color: "rgba(255,255,255,.75)",
                })}
              >
                {copy.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h1
                {...ds({
                  margin: "0",
                  fontFamily: "var(--font-urbanist), system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(54px, 8vw, 124px)",
                  lineHeight: ".92",
                  color: "#FFFFFF",
                })}
              >
                <span className="hero-lines">
                  <span className="hw" style={{ "--w": "0" } as CSSProperties}>
                    {copy.line1[0]}
                  </span>{" "}
                  <span className="hw" style={{ "--w": "1" } as CSSProperties}>
                    {copy.line1[1]}
                  </span>
                </span>
                <span className="hero-lines">
                  {copy.line2.map((word, i) => (
                    <span key={word}>
                      {i > 0 && " "}
                      <span className="hw" style={{ "--w": String(i + 2) } as CSSProperties}>
                        {word}
                      </span>
                    </span>
                  ))}
                </span>
              </h1>
              <p
                {...ds({
                  margin: "0",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "15px",
                  color: "#FFFFFF",
                })}
              >
                {copy.tagline}
              </p>
            </div>
            <div {...ds({ flex: "0 1 380px", display: "flex", flexDirection: "column", gap: "20px" })}>
              <p
                {...ds({
                  margin: "0",
                  maxWidth: "380px",
                  fontSize: "clamp(16px, 1.3vw, 19px)",
                  lineHeight: "1.5",
                  color: "rgba(255,255,255,.88)",
                })}
              >
                {copy.text}
              </p>
              <div {...ds({ display: "flex", flexWrap: "wrap", gap: "10px" })}>
                <Link
                  href={copy.cta.href}
                  className="pill pill-w"
                  {...ds({ ...BTN, background: "#FFFFFF", color: "#125A50", border: "0" })}
                >
                  {copy.cta.label}
                </Link>
                <Link
                  href={copy.secondary.href}
                  className="pill "
                  {...ds({
                    ...BTN,
                    background: "rgba(255,255,255,.08)",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,.55)",
                  })}
                >
                  {copy.secondary.label}
                </Link>
              </div>
            </div>
          </div>
          {sources.length > 0 && (
            <div className="vc-home-pause">
              <button type="button" onClick={toggle} aria-label={playing ? copy.pause : copy.play}>
                {playing ? (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M9 5v14M15 5v14" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
                {playing ? copy.pause : copy.play}
              </button>
            </div>
          )}
          <a href="#reviews" className="scroll-ind">
            {copy.scroll} <i />
          </a>
        </section>
      </div>
    </div>
  );
}
