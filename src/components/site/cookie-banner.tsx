"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const KEY = "vc-cookie-consent";
const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
function getConsent() {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}
function setConsent(value: "all" | "essential") {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* storage unavailable: banner just closes for this page view */
  }
  listeners.forEach((l) => l());
}

/**
 * Cookie notice from the design. The choice is remembered in localStorage; no analytics
 * script is loaded yet, so "Accept all" only records consent for when one is added.
 */
export function CookieBanner() {
  // Server snapshot says "answered" so the banner never flashes before hydration.
  const consent = useSyncExternalStore(subscribe, getConsent, () => "ssr");
  if (consent) return null;

  return (
    <div className="ck" role="dialog" aria-live="polite" aria-label="Cookie preferences">
      <div className="ck-top">
        <img src="/images/symbol-gold.png" alt="" className="ck-mark" />
        <p className="ck-h">A quick word about cookies</p>
      </div>
      <p className="ck-p">
        We use essential cookies to run this site and, with your consent, analytics cookies to understand how visitors
        use it. Read our <Link href="/privacy-policy">privacy policy</Link>.
      </p>
      <div className="ck-row">
        <button type="button" className="ck-b ck-a" onClick={() => setConsent("all")}>
          Accept all
        </button>
        <button type="button" className="ck-b ck-d" onClick={() => setConsent("essential")}>
          Essential only
        </button>
      </div>
    </div>
  );
}
