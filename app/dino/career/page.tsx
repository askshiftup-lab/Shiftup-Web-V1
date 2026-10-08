import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Career Intelligence",
  description: "Connect skills, interests, and life goals to career paths.",
  path: "/dino/career",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Career Intelligence",
        description: "Connect skills, interests, and life goals to career paths.",
        directAnswer: "Connect skills, interests, and life goals to career paths.",
        breadcrumbs: [{ name: "Career Intelligence", path: "/dino/career" }],
        blocks: [
          {
            heading: "Overview",
            body: "Connect skills, interests, and life goals to career paths. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Explore Careers", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
