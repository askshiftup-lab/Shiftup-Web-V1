import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Insights",
  description: "Student intelligence, careers, universities, and parent guides.",
  path: "/insights",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Insights",
        description: "Student intelligence, careers, universities, and parent guides.",
        directAnswer: "Student intelligence, careers, universities, and parent guides.",
        breadcrumbs: [{ name: "Insights", path: "/insights" }],
        blocks: [
          {
            heading: "Overview",
            body: "Student intelligence, careers, universities, and parent guides. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Browse Insights", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
