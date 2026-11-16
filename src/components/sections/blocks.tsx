import { COMMON } from "@/content/common";
import type { Locale } from "@/lib/i18n/config";

/** Badge shown on placeholder content (reviews, projects) until the client's real content replaces it. */
export function SampleBadge({ lang }: { lang: Locale }) {
  return (
    <span className="vc-sample" title={COMMON[lang].sampleNote}>
      {COMMON[lang].sample}
    </span>
  );
}
