export const dynamic = "force-dynamic";

import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return createPageMetadata({ title: `Opportunity: ${slug}`, description: "Matched opportunities for students.", path: `/opportunities/${slug}`, noIndex: true });
}

export default async function OpportunityPage({ params }: Props) {
  const { slug } = await params;
  return <MarketingPage content={{ title: slug.replace(/-/g, " "), description: "Student → applies to → Opportunity.", primaryCta: { label: "Browse Opportunities", href: "/dino/opportunities" } }} />;
}
