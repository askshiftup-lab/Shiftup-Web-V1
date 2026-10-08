import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Mission",
  description: "Intelligent, trusted, human-centred student ecosystems.",
  path: "/company/mission",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Mission",
        description: "Intelligent, trusted, human-centred student ecosystems.",
        directAnswer: "Intelligent, trusted, human-centred student ecosystems.",
        breadcrumbs: [{ name: "Mission", path: "/company/mission" }],
        blocks: [
          {
            heading: "Overview",
            body: "Intelligent, trusted, human-centred student ecosystems. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Read Mission", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
