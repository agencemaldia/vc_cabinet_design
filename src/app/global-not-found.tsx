import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { NotFoundContent } from "@/components/pages/not-found-content";
import { PageShell } from "@/components/site/page-shell";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = { title: "Page introuvable | V&C Cabinet Design Concept" };

/** 404 for any URL that matches no page (the root layout lives under app/[lang], so this one is global). */
export default function GlobalNotFound() {
  return (
    <html lang="fr-CA" className={urbanist.variable} suppressHydrationWarning>
      <body>
        <PageShell page="not-found">
          <NotFoundContent />
        </PageShell>
      </body>
    </html>
  );
}
