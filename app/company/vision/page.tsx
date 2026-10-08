import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Vision",
  description: "A world where no student navigates the future alone.",
  path: "/company/vision",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Vision",
        description: "A world where no student navigates the future alone.",
        directAnswer: "A world where no student navigates the future alone.",
        breadcrumbs: [{ name: "Vision", path: "/company/vision" }],
        blocks: [
          {
            heading: "Overview",
            body: "A world where no student navigates the future alone. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Read Vision", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
