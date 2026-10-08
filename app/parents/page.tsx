import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeadForm } from "@/components/forms/lead-form";
import { TrustStrip } from "@/components/sections/trust-strip";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Parents | Trust & Safety with Dino",
  description:
    "Understand how Dino helps students make better decisions with safety, privacy, transparency, and student autonomy.",
  path: "/parents",
});

const SECTIONS = [
  { h: "What Dino is", b: "A student-first ecosystem — not a college listing site. Dino helps students think, plan, execute, and decide with context." },
  { h: "Why Dino exists", b: "Students have information everywhere but lack intelligence that understands who they are becoming." },
  { h: "How recommendations work", b: "Recommendations use the Student Digital Twin and stated preferences — explainable, not opaque manipulation." },
  { h: "Privacy", b: "Privacy by design. We do not sell student personal data." },
  { h: "Safety", b: "Safety by design across community, messaging, and moderation architecture." },
  { h: "AI transparency", b: "Jenny AI is clearly labelled; students control what context is used." },
  { h: "Student autonomy", b: "Students choose their journey. Parents can understand — not override — the platform." },
];

export default function ParentsPage() {
  return (
    <>
      <TrustStrip />
      <section className="section-pad">
        <div className="container-main max-w-3xl">
          <SectionHeading
            eyebrow="Parent trust centre"
            title="Understand how Dino works."
            description="Calm, clear, and honest — built for families navigating big decisions."
          />
          <p className="mt-6 max-w-[680px] rounded-[20px] border border-[#E9E6F2] bg-[#F7F3FF] p-6 text-lg text-[#111322]">
            Dino helps students discover, compare, and understand choices using better information and context — while
            keeping safety, privacy, and student autonomy at the centre.
          </p>
        </div>
      </section>
      <section className="section-pad bg-[#F7F3FF]">
        <div className="container-main max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <article key={s.h}>
              <h2 className="text-2xl font-bold text-[#111322]">{s.h}</h2>
              <p className="mt-3 max-w-[680px] leading-relaxed text-[#606273]">{s.b}</p>
            </article>
          ))}
          <Link href="/company/ethics" className="btn-tertiary">
            Read our student ethics charter →
          </Link>
        </div>
      </section>
      <section id="contact" className="section-pad">
        <div className="container-main max-w-xl">
          <SectionHeading title="Talk to Shiftup" description="Share your questions as a parent or guardian." />
          <div className="mt-8">
            <LeadForm type="parent" />
          </div>
        </div>
      </section>
    </>
  );
}
