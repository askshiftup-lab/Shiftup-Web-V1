export const dynamic = "force-dynamic";

import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return createPageMetadata({ title: `Career: ${slug}`, description: "Career intelligence and required skills.", path: `/careers/${slug}`, noIndex: true });
}

export default async function CareerPage({ params }: Props) {
  const { slug } = await params;
  return <MarketingPage content={{ title: slug.replace(/-/g, " "), description: "Career → requires → Skill relationship graph.", primaryCta: { label: "Career Intelligence", href: "/dino/career" } }} />;
}
