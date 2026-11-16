import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = { robots: { index: false, follow: false } };

// Unknown URLs cannot be prerendered: render this 404 on request (Cache Components otherwise refuses it).
export const instant = false;

/**
 * Catches any unknown URL under a language (`/fr/anything`) and sends it to `[lang]/not-found.tsx`.
 * Without this route Next treats it as unmatched and serves the global 404, outside the language.
 */
export default async function CatchAllNotFound({ params }: PageProps<"/[lang]/[...rest]">) {
  await params;
  notFound();
}
