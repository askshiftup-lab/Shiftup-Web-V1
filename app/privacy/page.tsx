import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Privacy",
  description: "Privacy by design for student data.",
  path: "/privacy",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Privacy",
        description: "Privacy by design for student data.",
        directAnswer: "Privacy by design for student data.",
        breadcrumbs: [{ name: "Privacy", path: "/privacy" }],
        blocks: [
          {
            heading: "Overview",
            body: "Privacy by design for student data. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Privacy Policy", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
