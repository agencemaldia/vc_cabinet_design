import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vccabinetdesign.com"),
  title: {
    default: "V&C Cabinet Design Concept — Custom cabinetry in Tampa Bay",
    template: "%s | V&C Cabinet Design Concept",
  },
  description:
    "Custom kitchens, bathrooms, walk-in closets and whole-home renovations in Bradenton, Tampa, Clearwater and St. Petersburg, Florida.",
  icons: { icon: "/images/symbol-gold.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={urbanist.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
