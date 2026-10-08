import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Security",
  description: "Security practices at Shiftup Lab.",
  path: "/security",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Security",
        description: "Security practices at Shiftup Lab.",
        directAnswer: "Security practices at Shiftup Lab.",
        breadcrumbs: [{ name: "Security", path: "/security" }],
        blocks: [
          {
            heading: "Overview",
            body: "Security practices at Shiftup Lab. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Security Overview", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
