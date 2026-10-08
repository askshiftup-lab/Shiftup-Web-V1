import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Trust",
  description: "Safety, privacy, and transparency for students and parents.",
  path: "/trust",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Trust",
        description: "Safety, privacy, and transparency for students and parents.",
        directAnswer: "Safety, privacy, and transparency for students and parents.",
        breadcrumbs: [{ name: "Trust", path: "/trust" }],
        blocks: [
          {
            heading: "Overview",
            body: "Safety, privacy, and transparency for students and parents. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Trust Centre", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
