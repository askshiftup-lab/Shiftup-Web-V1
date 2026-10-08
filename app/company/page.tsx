import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { GeoAmbition } from "@/components/sections/geo-ambition";
import { RelatedLinks } from "@/components/navigation/related-links";

export const metadata = createPageMetadata({
  title: "Company | Shiftup Lab",
  description: "Shiftup Lab Private Limited — building the intelligence layer for the world's student ecosystem. Dino is our flagship product.",
  path: "/company",
});

export default function CompanyPage() {
  return (
    <article className="surface-light section-pad">
      <div className="container-main max-w-3xl">
        <SectionHeading
          eyebrow="Shiftup Lab Private Limited"
          title="Building the intelligence layer for the world's student ecosystem."
          description="We are an AI-native student intelligence company — not an EdTech content shop. Dino is how students experience what we build."
        />
        <div className="mt-8 rounded-[20px] border border-[#E9E6F2] bg-[#F7F3FF] p-6 text-[#111322]">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6C2BFF]">Flagship product</p>
          <p className="mt-2 text-xl font-bold text-[#111322]">Dino — The Non-Academic Student Ecosystem</p>
          <Link href="/dino" className="btn-primary mt-4">
            Meet Dino →
          </Link>
        </div>
        <div className="mt-10">
          <GeoAmbition />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/company/vision" className="btn-secondary">
            Vision
          </Link>
          <Link href="/company/mission" className="btn-secondary">
            Mission
          </Link>
          <Link href="/company/ethics" className="btn-secondary">
            Ethics
          </Link>
          <Link href="/company/team" className="btn-secondary">
            Team
          </Link>
        </div>
        <RelatedLinks />
      </div>
    </article>
  );
}
