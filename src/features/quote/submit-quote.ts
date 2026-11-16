"use server";

import { headers } from "next/headers";

import { isLocale, type Locale } from "@/lib/i18n/config";
import { quoteSchema, type QuoteResult } from "./schema";
import { sendQuote } from "./send-quote";

// Best-effort rate limiter (memory per instance), as in the `leads` project: 5 requests per IP and 60 in
// total per hour. A multi-instance deployment would need a shared store.
const HITS = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_IP = 5;
const MAX_GLOBAL = 60;
let globalHits: number[] = [];
/** A human needs a few seconds to answer six questions; a bot posting at once is ignored. */
const MIN_FILL_MS = 4000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  for (const [key, times] of HITS) if (times.every((t) => now - t >= WINDOW_MS)) HITS.delete(key);
  globalHits = globalHits.filter((t) => now - t < WINDOW_MS);
  if (globalHits.length >= MAX_GLOBAL) return true;
  const recent = (HITS.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_IP) return true;
  recent.push(now);
  HITS.set(ip, recent);
  globalHits.push(now);
  return false;
}

/** Last entry of `x-forwarded-for`: the one written by the platform proxy (the first is client-supplied). */
async function clientIp(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for")?.split(",").pop()?.trim();
  return forwarded || h.get("x-real-ip")?.trim() || "unknown";
}

/**
 * Receives a quote request. The input comes from the network and is NOT trusted: it is read as unknown and
 * validated again with the schema. Bots get a silent fake success (honeypot filled, or sent too fast) so
 * they learn nothing; anything that fails to reach the company returns an error.
 */
export async function submitQuote(input: unknown, locale: unknown): Promise<QuoteResult> {
  const raw: Record<string, unknown> =
    input !== null && typeof input === "object" ? (input as Record<string, unknown>) : {};

  if (typeof raw.website === "string" && raw.website.trim() !== "") return { status: "success" };
  if (typeof raw.startedAt === "number" && Date.now() - raw.startedAt < MIN_FILL_MS) return { status: "success" };

  if (rateLimited(await clientIp())) return { status: "error", error: "generic" };

  const parsed = quoteSchema.safeParse(raw);
  if (!parsed.success) return { status: "error", error: parsed.error.issues[0]?.message ?? "generic" };

  const lang: Locale = typeof locale === "string" && isLocale(locale) ? locale : "fr";
  const { project, plans, timing, city, details, name, email, phone } = parsed.data;
  const sent = await sendQuote({ project, plans, timing, city, details, name, email, phone }, lang);
  return sent ? { status: "success" } : { status: "error", error: "generic" };
}
