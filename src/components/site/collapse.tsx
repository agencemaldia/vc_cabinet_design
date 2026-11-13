import type { ReactNode } from "react";

/**
 * Keeps its content mounted and animates it open/closed (grid-template-rows 0fr ↔ 1fr, see
 * src/styles/overrides.css). Closed content is `inert`, so it is hidden from keyboard and assistive tech.
 */
export function Collapse({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <div className="vc-collapse" data-open={open || undefined} inert={!open}>
      <div>{children}</div>
    </div>
  );
}
