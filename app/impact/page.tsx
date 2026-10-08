import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Impact",
  description: "Better decisions, stronger peer intelligence, more equal access.",
  path: "/impact",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Impact",
        description: "Better decisions, stronger peer intelligence, more equal access.",
        directAnswer: "Better decisions, stronger peer intelligence, more equal access.",
        breadcrumbs: [{ name: "Impact", path: "/impact" }],
        blocks: [
          {
            heading: "Overview",
            body: "Better decisions, stronger peer intelligence, more equal access. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Impact Thesis", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
