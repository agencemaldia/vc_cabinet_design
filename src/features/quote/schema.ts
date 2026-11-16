import { z } from "zod";

/** Answer keys of the quote form (their labels live in src/content/quote.ts, per language). */
export const PROJECTS = ["kitchen", "bathroom", "both"] as const;
export const PLANS = ["yes", "no"] as const;
export const TIMINGS = ["asap", "1-3", "3-6", "planning"] as const;

export type ProjectKey = (typeof PROJECTS)[number];
export type PlanKey = (typeof PLANS)[number];
export type TimingKey = (typeof TIMINGS)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Permissive on purpose (international formats, extensions): only rejects what is clearly not a number.
const PHONE_RE = /^[+\d\s().-]{7,40}$/;

/**
 * Flattens line breaks and tabs: values end up in an e-mail subject and `Reply-To`, which must not be
 * split by an injected `\r\n`. NFC keeps a single spelling for the same name.
 */
const normalize = (s: string) =>
  s
    .replace(/[\r\n\t]+/g, " ")
    .trim()
    .normalize("NFC");
const line = (min: number, max: number, minKey: string) =>
  z.string().transform(normalize).pipe(z.string().min(min, minKey).max(max, "tooLong"));

/**
 * The quote request (six questions, one at a time). Messages are error KEYS, translated where they are
 * shown. The Server Action validates again with this schema: client-side checks only help the visitor.
 */
export const quoteSchema = z.object({
  project: z.enum(PROJECTS, "project"),
  plans: z.enum(PLANS, "plans"),
  timing: z.enum(TIMINGS, "timing"),
  city: line(2, 120, "city"),
  details: z.string().trim().max(4000, "tooLong"),
  name: line(2, 120, "name"),
  email: z
    .string()
    .trim()
    .max(200, "tooLong")
    .refine((v) => EMAIL_RE.test(v), "email"),
  phone: z
    .string()
    .transform(normalize)
    .pipe(
      z
        .string()
        .max(40, "tooLong")
        .refine((v) => PHONE_RE.test(v), "phone"),
    ),
  // Anti-bot: a hidden field that must stay empty, and the time the form was opened (ms since epoch).
  website: z.string().max(200).optional(),
  startedAt: z.number().optional(),
});

export type QuoteInput = z.input<typeof quoteSchema>;

/** Result of the Server Action: one error key at most, shown under the form. */
export type QuoteResult = { status: "success" } | { status: "error"; error: string };
