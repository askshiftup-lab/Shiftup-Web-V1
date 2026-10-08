import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { dinoProductJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/schema/organization";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = createPageMetadata({
  title: "Shiftup Lab | Building the Intelligence Layer for the Student Ecosystem",
  description:
    "Shiftup Lab is building Dino, a student digital-twin ecosystem designed to help students think, plan, execute and make better decisions across university, community, opportunities, skills, careers and life.",
  path: "/",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} h-full`}>
      <body className="has-mobile-cta min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#111322] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd(), dinoProductJsonLd()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
