import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeadForm } from "@/components/forms/lead-form";

export const metadata = createPageMetadata({
  title: "Raise | ₹5 Cr Pre-Seed",
  description: "Shiftup Lab pre-seed round — use of funds and investor requests.",
  path: "/investors/raise",
});

export default function InvestorRaisePage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-main max-w-3xl">
          <SectionHeading
            title="₹5 Cr pre-seed"
            description="Help us build the intelligence layer for the world's students. Idea / MVP — honest and pre-traction."
          />
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {["Product & Engineering", "AI & Intelligence", "Data Infrastructure", "Growth", "Trust & Safety", "Partnerships", "Core Team"].map(
              (u) => (
                <li key={u} className="rounded-[20px] bg-[#F7F3FF] px-4 py-2 text-sm font-semibold">
                  {u}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>
      <section id="data-room" className="section-pad bg-[#F7F3FF]">
        <div className="container-main max-w-xl">
          <SectionHeading
            title="Request investor information"
            description="Data room access is available to qualified investors upon request."
          />
          <div className="mt-8">
            <LeadForm type="investor" investorSuccess />
          </div>
        </div>
      </section>
    </>
  );
}
