import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogType = "website",
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} | Shiftup Lab`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: ogType,
      url,
      title: fullTitle,
      description,
      siteName: "Shiftup Lab",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
