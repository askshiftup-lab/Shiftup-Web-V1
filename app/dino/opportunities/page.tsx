import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Opportunities",
  description: "Programs, internships, and doors matched to your journey.",
  path: "/dino/opportunities",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Opportunities",
        description: "Programs, internships, and doors matched to your journey.",
        directAnswer: "Programs, internships, and doors matched to your journey.",
        breadcrumbs: [{ name: "Opportunities", path: "/dino/opportunities" }],
        blocks: [
          {
            heading: "Overview",
            body: "Programs, internships, and doors matched to your journey. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Browse Opportunities", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
