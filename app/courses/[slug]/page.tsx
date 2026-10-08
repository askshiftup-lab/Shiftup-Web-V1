export const dynamic = "force-dynamic";

import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return createPageMetadata({ title: `Course: ${slug}`, description: "Course intelligence — skills and career outcomes.", path: `/courses/${slug}`, noIndex: true });
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  return <MarketingPage content={{ title: slug.replace(/-/g, " "), description: "Programmatic course entity — links Student → Skill → Career.", primaryCta: { label: "Explore Dino", href: "/dino" } }} />;
}
