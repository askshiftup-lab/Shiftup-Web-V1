import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Data Room",
  description: "Qualified investor data room access upon request.",
  path: "/investors/data-room",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Data Room",
        description: "Qualified investor data room access upon request.",
        directAnswer: "Qualified investor data room access upon request.",
        breadcrumbs: [{ name: "Data Room", path: "/investors/data-room" }],
        blocks: [
          {
            heading: "Overview",
            body: "Qualified investor data room access upon request. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Request Access", href: "/investors/raise" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
