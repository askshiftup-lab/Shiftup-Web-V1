import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Market",
  description: "India → Asia → Global student intelligence market architecture.",
  path: "/investors/market",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Market",
        description: "India → Asia → Global student intelligence market architecture.",
        directAnswer: "India → Asia → Global student intelligence market architecture.",
        breadcrumbs: [{ name: "Market", path: "/investors/market" }],
        blocks: [
          {
            heading: "Overview",
            body: "India → Asia → Global student intelligence market architecture. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Explore Market", href: "/investors/raise" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
