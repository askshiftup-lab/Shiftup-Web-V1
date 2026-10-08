export const dynamic = "force-dynamic";

import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return createPageMetadata({
    title: `University: ${slug}`,
    description: "Future university intelligence page — Dino recommendations and student context.",
    path: `/universities/${slug}`,
    noIndex: true,
  });
}

export default async function UniversitySlugPage({ params }: Props) {
  const { slug } = await params;
  return (
    <MarketingPage
      content={{
        title: slug.replace(/-/g, " "),
        description: "Architecture ready for overview, fees, courses, placements, campus life, and career outcomes.",
        primaryCta: { label: "Partner With Us", href: "/universities" },
      }}
    />
  );
}
