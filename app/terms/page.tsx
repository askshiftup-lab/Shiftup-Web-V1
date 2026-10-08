import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Terms",
  description: "Terms of use for Shiftup Lab and Dino.",
  path: "/terms",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Terms",
        description: "Terms of use for Shiftup Lab and Dino.",
        directAnswer: "Terms of use for Shiftup Lab and Dino.",
        breadcrumbs: [{ name: "Terms", path: "/terms" }],
        blocks: [
          {
            heading: "Overview",
            body: "Terms of use for Shiftup Lab and Dino. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Terms", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
