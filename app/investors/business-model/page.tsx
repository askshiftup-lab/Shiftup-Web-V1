import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Business Model",
  description: "B2C, B2B2C, B2B, and future intelligence infrastructure.",
  path: "/investors/business-model",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Business Model",
        description: "B2C, B2B2C, B2B, and future intelligence infrastructure.",
        directAnswer: "B2C, B2B2C, B2B, and future intelligence infrastructure.",
        breadcrumbs: [{ name: "Business Model", path: "/investors/business-model" }],
        blocks: [
          {
            heading: "Overview",
            body: "B2C, B2B2C, B2B, and future intelligence infrastructure. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "See Model", href: "/investors/raise" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
