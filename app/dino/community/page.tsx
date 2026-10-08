import { createPageMetadata } from "@/lib/seo/metadata";
import { MarketingPage } from "@/lib/content/marketing-layout";

export const metadata = createPageMetadata({
  title: "Dino Communities",
  description: "Student communities aligned with interests, campuses, and goals.",
  path: "/dino/community",
});

export default function Page() {
  return (
    <MarketingPage
      content={{
        title: "Dino Communities",
        description: "Student communities aligned with interests, campuses, and goals.",
        directAnswer: "Student communities aligned with interests, campuses, and goals.",
        breadcrumbs: [{ name: "Dino Communities", path: "/dino/community" }],
        blocks: [
          {
            heading: "Overview",
            body: "Student communities aligned with interests, campuses, and goals. Shiftup Lab Private Limited builds Dino as the flagship consumer product for the non-academic student ecosystem.",
          },
        ],
        primaryCta: { label: "Explore Communities", href: "/students#waitlist" },
        secondaryCta: { label: "Meet Dino", href: "/dino" },
      }}
    />
  );
}
