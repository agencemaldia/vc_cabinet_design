"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, type CSSProperties } from "react";

/** Set once the visitor has navigated inside the site, so the Home preloader does not replay. */
let navigatedInternally = false;
export function hasNavigatedInternally() {
  return navigatedInternally;
}

const LEAVE_MS = 800;

// Width (--g), delay (--d) and origin (--o) of each blind, as in the design.
const BLINDS: [string, string, "left" | "right"][] = [
  ["1.02", "0.033s", "right"],
  ["1.59", "0.016s", "left"],
  ["1.39", "0.08s", "right"],
  ["0.55", "0.112s", "left"],
  ["0.52", "0.095s", "right"],
  ["0.57", "0.02s", "left"],
  ["1.19", "0.182s", "right"],
  ["0.67", "0.049s", "left"],
  ["1.55", "0.208s", "right"],
  ["1.46", "0.087s", "left"],
  ["2.16", "0.01s", "right"],
  ["1.95", "0.064s", "left"],
  ["0.7", "0.026s", "right"],
  ["0.99", "0.18s", "left"],
];

function internalHref(a: HTMLAnchorElement): string | null {
  if (a.target && a.target !== "_self") return null;
  if (a.hasAttribute("download")) return null;
  const url = new URL(a.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  if (url.pathname === window.location.pathname && url.hash) return null;
  return url.pathname + url.search + url.hash;
}

/**
 * The "venetian blind" page transition: blinds open on page load (pure CSS) and close
 * before navigating away when an internal link is clicked.
 */
export function PageTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.closest("form")) return;
      const href = internalHref(a);
      if (!href) return;
      e.preventDefault();
      navigatedInternally = true;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !ref.current) {
        router.push(href);
        return;
      }
      ref.current.classList.add("leave");
      window.setTimeout(() => router.push(href), LEAVE_MS);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return (
    <div ref={ref} className="vb" aria-hidden="true">
      {BLINDS.map(([g, d, o], i) => (
        <i key={i} style={{ "--g": g, "--d": d, "--o": o } as CSSProperties} />
      ))}
      <img src="/images/symbol-gold.png" alt="" />
    </div>
  );
}
