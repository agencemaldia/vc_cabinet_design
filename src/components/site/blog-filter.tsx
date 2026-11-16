"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useT } from "@/lib/i18n/context";

/**
 * Makes the Blog index category chips work. The cards are generated from the design (see
 * src/components/pages/blog-content.tsx); each one names its category as the first item of its meta
 * row, which is what the chips filter on. The "Planning a project?" box and the featured article stay.
 */
export function BlogFilter() {
  const { t } = useT();
  const [empty, setEmpty] = useState<{ grid: HTMLElement; label: string } | null>(null);

  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".pg-blog main");
    if (!page) return;
    const chips = [...page.querySelectorAll<HTMLButtonElement>("button[aria-pressed]")];
    const cards = [...page.querySelectorAll<HTMLElement>("a.card")].filter((c) => c.querySelector("h3"));
    const grid = cards[0]?.parentElement;
    if (!chips.length || !grid) return;

    const categoryOf = (card: HTMLElement) =>
      card.querySelector(":scope > div:last-child > div:first-child > :first-child")?.textContent?.trim() ?? "";

    const apply = (label: string) => {
      chips.forEach((chip) => chip.setAttribute("aria-pressed", String(chip.textContent?.trim() === label)));
      let shown = 0;
      cards.forEach((card) => {
        const match = label === "All" || categoryOf(card) === label;
        card.style.display = match ? "" : "none";
        if (match) shown++;
      });
      setEmpty(shown === 0 ? { grid, label } : null);
    };

    const onClick = (e: Event) => apply((e.currentTarget as HTMLElement).textContent?.trim() ?? "All");
    chips.forEach((chip) => chip.addEventListener("click", onClick));
    return () => chips.forEach((chip) => chip.removeEventListener("click", onClick));
  }, []);

  if (!empty) return null;
  return createPortal(
    <p className="vc-blog-empty">{t("No articles in this category yet — check back soon.")}</p>,
    empty.grid,
  );
}
