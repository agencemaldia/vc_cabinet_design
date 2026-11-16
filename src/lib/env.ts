import "server-only";

/**
 * Single access point to the server environment variables (same rules as the `leads` project). All are
 * optional: without them the site works, but a submission cannot be delivered — the form then shows an
 * error, never a false success. Values are trimmed of the stray quotes some hosting panels keep.
 *
 * Set on Vercel (Project → Settings → Environment Variables):
 * - RESEND_API_KEY           — API key of the Resend account that sends the notifications.
 * - QUOTE_NOTIFICATION_EMAIL — address that receives every request (the company).
 * - QUOTE_FROM_EMAIL         — sender, on a domain verified in Resend (default: Resend's test sender).
 */
const EMAIL_RE = /^[^\s@"'<>]+@[^\s@"'<>]+\.[^\s@"'<>]+$/;

function clean(value: string | undefined): string | undefined {
  const v = value
    ?.trim()
    .replace(/^["']+|["']+$/g, "")
    .trim();
  return v ? v : undefined;
}

function email(name: string, value: string | undefined): string | undefined {
  const v = clean(value);
  if (v && !EMAIL_RE.test(v)) {
    console.warn(`[env] ${name} is malformed — ignored.`);
    return undefined;
  }
  return v;
}

export const env = {
  RESEND_API_KEY: clean(process.env.RESEND_API_KEY),
  QUOTE_NOTIFICATION_EMAIL: email("QUOTE_NOTIFICATION_EMAIL", process.env.QUOTE_NOTIFICATION_EMAIL),
  QUOTE_FROM_EMAIL:
    email("QUOTE_FROM_EMAIL", process.env.QUOTE_FROM_EMAIL) ?? "V&C Cabinet Design <onboarding@resend.dev>",
} as const;

/** Whether a submission can actually be delivered with the current configuration. */
export const canSendQuotes = env.RESEND_API_KEY !== undefined && env.QUOTE_NOTIFICATION_EMAIL !== undefined;
