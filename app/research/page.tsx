import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Research",
  description: "Student intelligence research from Shiftup Lab.",
  path: "/research",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Research",
        description: "Student intelligence research from Shiftup Lab.",
        directAnswer: "Student intelligence research from Shiftup Lab.",
        breadcrumbs: [{ name: "Research", path: "/research" }],
        blocks: [
          {
            heading: "Overview",
            body: "Student intelligence research from Shiftup Lab. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Read Research", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
