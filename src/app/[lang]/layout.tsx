import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Urbanist } from "next/font/google";
import { isLocale, localeHtmlLang, locales } from "@/lib/i18n/config";
import { setRequestLocale } from "@/lib/i18n/request-locale";
import "../globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vccabinetdesign.com"),
  title: {
    default: "V&C Cabinet Design Concept — Custom cabinetry in Tampa Bay",
    template: "%s | V&C Cabinet Design Concept",
  },
  icons: { icon: "/images/symbol-gold.png" },
};

/** Every language is prerendered; any other first segment is a 404 (checked below). */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  // read back by not-found.tsx, which gets no params
  setRequestLocale(lang);
  return (
    <html lang={localeHtmlLang[lang]} className={urbanist.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
