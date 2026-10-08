import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { DinoMascot } from "@/components/dino/dino-mascot";
import { EcosystemOrbit } from "@/components/dino/ecosystem-orbit";
import { CORE_ACTIONS } from "@/data/journey";
import { CategoryBanner } from "@/components/sections/category-banner";
import { RelatedLinks } from "@/components/navigation/related-links";

export const metadata = createPageMetadata({
  title: "Dino | The Non-Academic Student Ecosystem",
  description:
    "Dino is a student digital-twin ecosystem and AI BFF designed to help students navigate identity, community, decisions, opportunities, skills, careers and life.",
  path: "/dino",
});

const SUB = [
  { href: "/dino/student-digital-twin", label: "Student Digital Twin" },
  { href: "/dino/jenny-ai", label: "Jenny AI" },
  { href: "/dino/community", label: "Community" },
  { href: "/dino/university-explorer", label: "University Explorer" },
  { href: "/dino/opportunities", label: "Opportunities" },
  { href: "/dino/career", label: "Career" },
];

export default function DinoPage() {
  return (
    <>
      <CategoryBanner />
      <section className="section-pad">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="By Shiftup Lab"
              title="Your Student Digital Twin. Your AI BFF. Your Student World."
              description="Think. Plan. Execute. Decide. — across everything that matters outside the classroom."
            />
            <Link href="/students#waitlist" className="btn-primary mt-8">
              Build my Dino →
            </Link>
          </div>
          <div>
            <DinoMascot className="mx-auto h-48 w-48 md:h-56 md:w-56" />
            <EcosystemOrbit />
          </div>
        </div>
      </section>
      <section className="section-pad bg-[#F7F3FF]">
        <div className="container-main">
          <div className="grid gap-4 md:grid-cols-4">
            {CORE_ACTIONS.map((a) => (
              <div key={a.id} className="card-surface p-6 text-center">
                <p className="text-2xl font-extrabold text-[#6C2BFF]">{a.title}</p>
                <p className="mt-2 text-sm text-[#606273]">{a.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SUB.map((s) => (
              <Link key={s.href} href={s.href} className="card-surface block p-5 font-semibold">
                {s.label} →
              </Link>
            ))}
          </div>
          <RelatedLinks />
        </div>
      </section>
    </>
  );
}
