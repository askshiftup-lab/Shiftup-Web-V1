import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Moat",
  description: "Digital Twin, graphs, trust, and network effects — beyond AI alone.",
  path: "/investors/moat",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Moat",
        description: "Digital Twin, graphs, trust, and network effects — beyond AI alone.",
        directAnswer: "Digital Twin, graphs, trust, and network effects — beyond AI alone.",
        breadcrumbs: [{ name: "Moat", path: "/investors/moat" }],
        blocks: [
          {
            heading: "Overview",
            body: "Digital Twin, graphs, trust, and network effects — beyond AI alone. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Explore Moat", href: "/investors/raise" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
