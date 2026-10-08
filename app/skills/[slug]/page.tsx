export const dynamic = "force-dynamic";

import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return createPageMetadata({ title: `Skill: ${slug}`, description: "Skills graph for student intelligence.", path: `/skills/${slug}`, noIndex: true });
}

export default async function SkillPage({ params }: Props) {
  const { slug } = await params;
  return <MarketingPage content={{ title: slug.replace(/-/g, " "), description: "Student → interested in → Skill.", primaryCta: { label: "Build skills in Dino", href: "/dino/career" } }} />;
}
