import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeadForm } from "@/components/forms/lead-form";
import { BuildYourDino } from "@/components/sections/build-your-dino";
import { StudentWhyDino } from "@/components/sections/student-why-dino";

export const metadata = createPageMetadata({
  title: "Students | Dino by Shiftup Lab",
  description:
    "Your student life is bigger than your classroom. Join Dino — the non-academic student ecosystem built around your Digital Twin.",
  path: "/students",
});

const CARDS = ["Discover", "Connect", "Explore", "Decide", "Build", "Grow"];

export default function StudentsPage() {
  return (
    <>
      <StudentWhyDino />
      <section className="section-pad bg-[#F7F3FF]">
        <div className="container-main">
          <SectionHeading title="Your student life is bigger than your classroom." align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((c) => (
              <div key={c} className="card-surface p-6">
                <h2 className="text-xl font-bold text-[#6C2BFF]">{c}</h2>
                <p className="mt-2 text-sm text-[#606273]">Ready to figure out what&apos;s next?</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="#waitlist" className="btn-primary min-w-[200px]">
              Join Dino
            </Link>
            <Link href="#ambassador" className="btn-secondary min-w-[200px]">
              Campus ambassador
            </Link>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-main max-w-3xl">
          <BuildYourDino />
        </div>
      </section>
      <section id="waitlist" className="section-pad bg-[#F7F3FF]">
        <div className="container-main max-w-xl">
          <SectionHeading title="Get early access" description="Idea / MVP — honest waitlist, no fake numbers." />
          <div className="mt-8">
            <LeadForm type="student" />
          </div>
        </div>
      </section>
      <section id="ambassador" className="section-pad">
        <div className="container-main max-w-xl">
          <SectionHeading title="Campus Ambassador" description="Bring Dino to your campus." />
          <div className="mt-8">
            <LeadForm type="campus_ambassador" />
          </div>
        </div>
      </section>
    </>
  );
}
