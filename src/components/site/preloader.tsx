"use client";

import { useEffect, useState } from "react";
import { hasNavigatedInternally } from "@/components/site/page-transition";

/** Home-page intro: logo wipe + progress bar, skipped when arriving from another page of the site. */
export function Preloader() {
  const [state, setState] = useState<"pre" | "skip" | "gone">(() => (hasNavigatedInternally() ? "skip" : "pre"));

  useEffect(() => {
    if (state !== "pre") return;
    const t = window.setTimeout(() => setState("gone"), 2300);
    return () => window.clearTimeout(t);
  }, [state]);

  return (
    <div className={state === "pre" ? "pre" : `pre ${state}`} aria-hidden="true">
      <div className="pre-bg" />
      <div className="pre-mark">
        <img className="pre-logo" src="/images/logo-gold.png" alt="" />
      </div>
      <span className="pre-bar" />
    </div>
  );
}
