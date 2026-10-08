export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return createPageMetadata({
    title: `College: ${slug}`,
    description: "Future programmatic college intelligence page powered by Dino.",
    path: `/colleges/${slug}`,
    noIndex: true,
  });
}

export default async function CollegeSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!slug) notFound();

  return (
    <MarketingPage
      content={{
        title: slug.replace(/-/g, " "),
        description: "Programmatic SEO architecture — connect database for fees, courses, placements, reviews, and Dino recommendations.",
        directAnswer: "This page will host college intelligence aligned with the Student Digital Twin.",
        breadcrumbs: [
          { name: "Colleges", path: "/dino/university-explorer" },
          { name: slug, path: `/colleges/${slug}` },
        ],
        primaryCta: { label: "Explore University Intelligence", href: "/dino/university-explorer" },
      }}
    />
  );
}
