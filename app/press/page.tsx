import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Press",
  description: "News and announcements from Shiftup Lab.",
  path: "/press",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Press",
        description: "News and announcements from Shiftup Lab.",
        directAnswer: "News and announcements from Shiftup Lab.",
        breadcrumbs: [{ name: "Press", path: "/press" }],
        blocks: [
          {
            heading: "Overview",
            body: "News and announcements from Shiftup Lab. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Contact Press", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
