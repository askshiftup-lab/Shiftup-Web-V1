import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { ThesisNinety } from "@/components/investor/thesis-ninety";
import { LeadForm } from "@/components/forms/lead-form";
import { InvestorMetricGrid } from "@/components/investor/metric-grid";

export const metadata = createPageMetadata({
  title: "Investors | Shiftup Lab",
  description: "Invest in the intelligence layer behind the student ecosystem. Idea / MVP · ₹5 Cr pre-seed · Pre-traction.",
  path: "/investors",
});

const LINKS = [
  { href: "/investors/thesis", label: "Thesis" },
  { href: "/investors/market", label: "Market" },
  { href: "/investors/business-model", label: "Business model" },
  { href: "/investors/moat", label: "Moat" },
  { href: "/investors/metrics", label: "Metrics" },
  { href: "/investors/raise", label: "Raise" },
];

export default function InvestorsPage() {
  return (
    <>
      <ThesisNinety />
      <section className="surface-light section-pad">
        <div className="container-main">
          <SectionHeading title="Deeper diligence" description="Each section is written for qualified investors — honest stage, no fabricated traction." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="card-surface block px-5 py-4 font-semibold">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-[#0A0A12] text-white">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-[#FFFFFF]">Live metrics (future)</h2>
          <p className="mt-2 text-sm text-[#C9C5D8]">PRE-TRACTION — placeholders until Dino launches</p>
          <div className="mt-8">
            <InvestorMetricGrid />
          </div>
        </div>
      </section>
      <section id="deck" className="surface-soft section-pad">
        <div className="container-main grid gap-12 lg:grid-cols-2">
          <div className="max-w-md">
            <SectionHeading title="Request investor deck" description="Deck, founder call, and data room access for qualified investors." />
            <ul className="mt-6 space-y-2 text-sm text-[#606273]">
              <li>· Pre-seed: ₹5 Cr</li>
              <li>· Use of funds: product, AI, data, trust, team</li>
              <li>· Stage: Idea / MVP</li>
            </ul>
          </div>
          <LeadForm type="investor" investorSuccess />
        </div>
      </section>
    </>
  );
}
