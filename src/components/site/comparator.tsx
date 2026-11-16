"use client";

import { useCallback, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";

type ComparatorProps = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  labels: { before: string; after: string; handle: string };
  /** Width / height of the frame (both photos share it, so they stay aligned). */
  ratio?: string;
  /** Demo pair (the "before" is a desaturated copy of the "after"), until the real photos arrive. */
  demo?: boolean;
};

const STEP = 5;

/**
 * Before/after comparator (specification §3, mandatory). The two photos are stacked in one frame; the
 * "after" photo is revealed by a `clip-path` mask whose edge is the vertical line, which starts in the
 * centre. The handle sits on that line: drag it left or right with a mouse, a finger or a pen (pointer
 * events, captured so the drag continues outside the frame), or click anywhere in the photo. The handle is
 * a keyboard slider too (← → Home End). No carousel, no control above or below the photos: the
 * interaction happens inside the image.
 */
export function Comparator({ before, after, beforeAlt, afterAlt, labels, ratio = "3 / 2", demo }: ComparatorProps) {
  const frame = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const moveTo = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  // A ref, not only state: a fast swipe can send several moves before React re-renders.
  const drag = useRef(false);
  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // no capture available (pointer already gone): the drag still follows the moves over the photo
    }
    drag.current = true;
    setDragging(true);
    moveTo(e.clientX);
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (drag.current) moveTo(e.clientX);
  };
  const onUp = (e: PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    drag.current = false;
    setDragging(false);
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const next = { ArrowLeft: pos - STEP, ArrowRight: pos + STEP, Home: 0, End: 100 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setPos(Math.min(100, Math.max(0, next)));
  };

  return (
    <div
      ref={frame}
      className={`vc-cmp${dragging ? " is-dragging" : ""}`}
      style={{ "--pos": `${pos}%`, aspectRatio: ratio } as CSSProperties}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <img
        className={`vc-cmp__img${demo ? " is-demo-before" : ""}`}
        src={before}
        alt={beforeAlt}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <img
        className="vc-cmp__img vc-cmp__after"
        src={after}
        alt={afterAlt}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <span className="vc-cmp__tag is-before" aria-hidden="true">
        {labels.before}
      </span>
      <span className="vc-cmp__tag is-after" aria-hidden="true">
        {labels.after}
      </span>
      <div className="vc-cmp__line" aria-hidden="true" />
      <div
        className="vc-cmp__handle"
        role="slider"
        tabIndex={0}
        aria-label={labels.handle}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}%`}
        onKeyDown={onKey}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}
