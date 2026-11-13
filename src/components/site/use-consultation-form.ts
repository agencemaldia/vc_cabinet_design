"use client";

import { useRouter } from "next/navigation";
import { useCallback, type MouseEvent } from "react";

/**
 * Click handler for the "Request My Free Consultation" link inside a form.
 * Mirrors the design: mark the form as `tried` (reveals `.err` messages via CSS),
 * focus the first invalid field, and only continue to the thank-you page when valid.
 *
 * The form is not posted anywhere yet — wire a backend (API route, form service or CRM)
 * here before launch.
 */
export function useConsultationForm(redirectTo = "/thank-you") {
  const router = useRouter();
  return useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const form = e.currentTarget.closest("form");
      if (!form) return;
      e.preventDefault();
      form.classList.add("tried");
      if (!form.checkValidity()) {
        form.querySelector<HTMLElement>(":invalid")?.focus();
        return;
      }
      router.push(redirectTo);
    },
    [router, redirectTo],
  );
}
