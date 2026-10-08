import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Team",
  description: "Founders building Dino and Shiftup Lab.",
  path: "/company/team",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Team",
        description: "Founders building Dino and Shiftup Lab.",
        directAnswer: "Founders building Dino and Shiftup Lab.",
        breadcrumbs: [{ name: "Team", path: "/company/team" }],
        blocks: [
          {
            heading: "Overview",
            body: "Founders building Dino and Shiftup Lab. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Meet Founders", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
