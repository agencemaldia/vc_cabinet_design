import type { CSSProperties } from "react";

/**
 * Turn a CSS declaration string from the design ("display: flex; gap: 4px") into props for an element:
 * a React `style` object plus a `data-s` copy of the original text. The design's stylesheet targets some
 * elements by their inline style text; those selectors were rewritten to `[data-s*="…"]` because React
 * re-serializes inline styles (see src/styles/design-base.css).
 */
export function sx(raw: string): { style: CSSProperties; "data-s": string } {
  const style: Record<string, string> = {};
  let depth = 0;
  let cur = "";
  const decls: string[] = [];
  for (const ch of raw) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === ";" && depth === 0) {
      decls.push(cur);
      cur = "";
    } else cur += ch;
  }
  decls.push(cur);
  for (const d of decls) {
    const i = d.indexOf(":");
    if (i < 0) continue;
    const prop = d.slice(0, i).trim();
    const value = d.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith("--") ? prop : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    style[key] = value;
  }
  return { style: style as CSSProperties, "data-s": raw };
}
