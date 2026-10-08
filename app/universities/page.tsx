import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Universities",
  description: "Partner with Shiftup to engage relevant student communities with intelligence.",
  path: "/universities",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Universities",
        description: "Partner with Shiftup to engage relevant student communities with intelligence.",
        directAnswer: "Partner with Shiftup to engage relevant student communities with intelligence.",
        breadcrumbs: [{ name: "Universities", path: "/universities" }],
        blocks: [
          {
            heading: "Overview",
            body: "Partner with Shiftup to engage relevant student communities with intelligence. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Partner With Us", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
