import "server-only";

import { Resend } from "resend";

import { QUOTE } from "@/content/quote";
import { env } from "@/lib/env";
import type { Locale } from "@/lib/i18n/config";
import type { QuoteInput } from "./schema";

type Quote = Required<
  Pick<QuoteInput, "project" | "plans" | "timing" | "city" | "details" | "name" | "email" | "phone">
>;

/**
 * E-mails one quote request to the company (Resend). Labels are written in English for the team, with the
 * visitor's language noted. Returns false when sending is not configured or fails — the caller then shows
 * an error: a request is never acknowledged if it did not reach the company.
 */
export async function sendQuote(quote: Quote, lang: Locale): Promise<boolean> {
  if (!env.RESEND_API_KEY || !env.QUOTE_NOTIFICATION_EMAIL) {
    console.error("[quote] RESEND_API_KEY or QUOTE_NOTIFICATION_EMAIL missing — request NOT delivered.");
    return false;
  }
  const t = QUOTE.en;
  const label = (opts: { key: string; t: string }[], key: string) => opts.find((o) => o.key === key)?.t ?? key;
  const language = { fr: "French", en: "English", es: "Spanish" }[lang];

  const text = [
    `Project: ${label(t.project.opts, quote.project)}`,
    `Plans: ${label(t.plans.opts, quote.plans)}`,
    `Start: ${label(t.timing.opts, quote.timing)}`,
    `City: ${quote.city}`,
    "",
    `Name: ${quote.name}`,
    `Email: ${quote.email}`,
    `Phone: ${quote.phone}`,
    `Language: ${language}`,
    "",
    "Description:",
    quote.details || "—",
  ].join("\n");

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: env.QUOTE_FROM_EMAIL,
      to: env.QUOTE_NOTIFICATION_EMAIL,
      replyTo: quote.email,
      subject: `New quote request — ${label(t.project.opts, quote.project)} — ${quote.name}`,
      text,
    });
    if (error) {
      // The message only: the object may hold personal data.
      console.error("[quote] Resend refused the e-mail:", error.message);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[quote] sending failed:", (error as Error)?.message);
    return false;
  }
}
