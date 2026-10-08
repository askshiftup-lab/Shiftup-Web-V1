import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeadForm } from "@/components/forms/lead-form";

export const metadata = createPageMetadata({
  title: "Partners | Shiftup Lab",
  description: "Let's build better student intelligence together.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <section className="section-pad">
      <div className="container-main max-w-xl">
        <SectionHeading
          title="Partner with Shiftup"
          description="Universities, employers, brands, and ecosystem partners — student remains the primary entity."
        />
        <div className="mt-8">
          <LeadForm type="partnership" />
        </div>
      </div>
    </section>
  );
}
