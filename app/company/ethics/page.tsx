import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { ETHICS } from "@/data/ecosystem-features";

export const metadata = createPageMetadata({
  title: "Student Ethics Charter | Shiftup Lab",
  description: "Student first. Always. Our ethics principles for Dino and Shiftup Lab.",
  path: "/company/ethics",
});

export default function EthicsPage() {
  return (
    <section className="section-pad">
      <div className="container-main max-w-3xl">
        <SectionHeading title="Student first. Always." description="The Student Ethics Charter for Shiftup Lab and Dino." />
        <p className="mt-6 max-w-[680px] text-lg text-[#606273]">
          We build for human dignity, student autonomy, and long-term trust — not short-term extraction.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {ETHICS.map((e) => (
            <li key={e} className="rounded-[20px] border border-[#E9E6F2] bg-[#F7F3FF] px-4 py-4 font-semibold text-[#111322]">
              {e}
            </li>
          ))}
        </ul>
        <Link href="/trust" className="btn-tertiary mt-10">
          Explore trust centre →
        </Link>
      </div>
    </section>
  );
}
