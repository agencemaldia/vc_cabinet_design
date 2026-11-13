"use client";

import { useState, type ChangeEvent } from "react";
import { useConsultationForm } from "@/components/site/use-consultation-form";

export type GalleryItem = {
  room: string;
  cap: string;
  city: string;
  h: number;
  tone: string;
  alt: string;
  cls: string;
  room_ctx?: string;
};

export type DesignData = {
  items?: GalleryItem[];
  filters?: string[];
  /** [question, answer] pairs */
  faqs?: [string, string][];
};

const STEPS = 7;

/**
 * Interactive state shared by the design's pages: FAQ accordion, gallery filter chips + lightbox,
 * before/after slider, process stepper, hero slideshow pause and the consultation form.
 * Ported from the design export's page logic so the generated markup can bind to the same names.
 */
export function useDesignState(data: DesignData) {
  const [faq, setFaq] = useState(0);
  const [filter, setFilter] = useState("All");
  const [lbIdx, setLbIdx] = useState(-1);
  const [pos, setPos] = useState(50);
  const [paused, setPaused] = useState(false);
  const [step, setStep] = useState(0);
  const submitForm = useConsultationForm();

  const all = data.items ?? [];
  const list = filter === "All" ? all : all.filter((x) => x.room === filter);
  const n = list.length || 1;

  const chips = (data.filters ?? []).map((label) => {
    const on = label === filter;
    return {
      label,
      count: label === "All" ? all.length : all.filter((x) => x.room === label).length,
      pressed: on ? ("true" as const) : ("false" as const),
      bg: on ? "#1F3D33" : "#FFFFFF",
      fg: on ? "#FFFFFF" : "#22252A",
      bd: on ? "1.5px solid #1F3D33" : "1.5px solid #C9BFB1",
      pick: () => {
        setFilter(label);
        setLbIdx(-1);
      },
    };
  });

  const shown = list.map((x, i) => ({ ...x, open: () => setLbIdx(i) }));
  const lb: Partial<GalleryItem> = list[lbIdx] ?? all[0] ?? {};

  const faqs = (data.faqs ?? []).map(([q, a], i) => {
    const open = faq === i;
    return {
      q,
      a,
      open,
      sign: open ? "−" : "+",
      ring: open ? "#A23B2C" : "#1D2B44",
      toggle: () => setFaq(open ? -1 : i),
    };
  });

  const steps: Record<string, string | (() => void)> = {};
  for (let i = 0; i < STEPS; i++) {
    steps[`st${i}`] = i === step ? "st on" : "st";
    steps[`go${i}`] = () => setStep(i);
  }

  return {
    ...(steps as {
      st0: string;
      st1: string;
      st2: string;
      st3: string;
      st4: string;
      st5: string;
      st6: string;
      go0: () => void;
      go1: () => void;
      go2: () => void;
      go3: () => void;
      go4: () => void;
      go5: () => void;
      go6: () => void;
    }),
    submitForm,
    paused,
    vidCls: paused ? "vpaused" : "",
    pauseLabel: paused ? "Play background video" : "Pause background video",
    pauseText: paused ? "Play" : "Pause",
    togglePause: () => setPaused((p) => !p),
    chips,
    shown,
    lb,
    lbOpen: lbIdx >= 0,
    lbIndex: lbIdx + 1,
    lbTotal: list.length,
    ctaHref: "/contact",
    prev: () => setLbIdx((lbIdx - 1 + n) % n),
    next: () => setLbIdx((lbIdx + 1) % n),
    closeLb: () => setLbIdx(-1),
    pos,
    clipW: `${pos}%`,
    slide: (e: ChangeEvent<HTMLInputElement>) => setPos(Number(e.target.value)),
    faqs,
  };
}
