import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { ThesisNinety } from "@/components/investor/thesis-ninety";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Investment Thesis | Shiftup Lab",
  description: "Student intelligence infrastructure — problem, insight, category, and long-term opportunity.",
  path: "/investors/thesis",
});

const SECTIONS = [
  { h: "Problem", b: "Students face fragmented information and decision complexity across university, careers, skills, and life — with no system that understands the evolving person behind the student." },
  { h: "Insight", b: "Education is information-rich. Student life is intelligence-poor. Context — not more content — unlocks better decisions." },
  { h: "Solution", b: "Dino: a non-academic student ecosystem built around a Student Digital Twin and intelligence layer." },
  { h: "Category", b: "The Non-Academic Student Ecosystem — what comes after EdTech." },
  { h: "Why Dino", b: "Think · Plan · Execute · Decide across Identity → Life, with Jenny AI and community intelligence." },
  { h: "Why Shiftup", b: "Founders with education ecosystem depth and product/technology execution — building honestly at idea/MVP stage." },
  { h: "Why now", b: "AI abundance, platform fragmentation, and rising decision complexity — India → Asia → Global." },
  { h: "Long-term", b: "Intelligence infrastructure: graphs, trust, APIs, and institutional services atop network effects." },
];

export default function ThesisPage() {
  return (
    <>
      <ThesisNinety />
      <article className="section-pad">
        <div className="container-main max-w-3xl">
          <SectionHeading title="Full thesis" description="Expanded narrative for diligence." />
          {SECTIONS.map((s) => (
            <section key={s.h} className="mt-10 max-w-[680px]">
              <h2 className="text-2xl font-bold text-[#111322]">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-[#606273]">{s.b}</p>
            </section>
          ))}
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/investors/raise" className="btn-primary">
              Request investor deck
            </Link>
            <Link href="/investors/metrics" className="btn-secondary">
              Metrics (pre-traction)
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
