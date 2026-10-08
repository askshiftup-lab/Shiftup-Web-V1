import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { InvestorMetricGrid } from "@/components/investor/metric-grid";

export const metadata = createPageMetadata({
  title: "Investor Metrics | Shiftup Lab",
  description: "Pre-traction metrics dashboard architecture. Data will appear as Dino launches.",
  path: "/investors/metrics",
});

export default function InvestorMetricsPage() {
  return (
    <section className="section-pad bg-[#0A0A12] text-white">
      <div className="container-main">
        <SectionHeading
          onDark
          title="Metrics"
          description="PRE-TRACTION — no fabricated users, revenue, CAC, or LTV."
        />
        <p className="mt-4 text-sm text-[#C9C5D8]">Stage: Idea / MVP · Revenue: not yet · Dashboard API-ready</p>
        <div className="mt-10">
          <InvestorMetricGrid />
        </div>
      </div>
    </section>
  );
}
