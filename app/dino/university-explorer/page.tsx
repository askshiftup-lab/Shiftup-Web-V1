import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "University Explorer",
  description: "Don't just find a college. Find YOURS — with intelligence, not rankings alone.",
  path: "/dino/university-explorer",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "University Explorer",
        description: "Don't just find a college. Find YOURS — with intelligence, not rankings alone.",
        directAnswer: "Don't just find a college. Find YOURS — with intelligence, not rankings alone.",
        breadcrumbs: [{ name: "University Explorer", path: "/dino/university-explorer" }],
        blocks: [
          {
            heading: "Overview",
            body: "Don't just find a college. Find YOURS — with intelligence, not rankings alone. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Explore Universities", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
