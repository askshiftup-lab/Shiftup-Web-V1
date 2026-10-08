import Link from "next/link";

const ROWS = [
  { k: "What", v: "Student intelligence infrastructure (Shiftup Lab)" },
  { k: "Product", v: "Dino — non-academic student ecosystem + Digital Twin" },
  { k: "Problem", v: "Fragmented info; no system understands the evolving student" },
  { k: "Moat", v: "Twin + graphs + trust + network — not AI alone" },
  { k: "Market", v: "India → Asia → Global" },
  { k: "Stage", v: "Idea / MVP · Pre-traction (no inflated metrics)" },
  { k: "Raise", v: "₹5 Cr pre-seed" },
];

/** Scannable in ~90 seconds for VCs — placed early on homepage. */
export function ThesisNinety() {
  return (
    <section
      className="section-pad bg-[#0A0A12] text-white"
      aria-labelledby="thesis-ninety-heading"
    >
      <div className="container-main">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B794FF]">For investors</p>
            <h2
              id="thesis-ninety-heading"
              className="mt-2 text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-tight text-white"
            >
              The thesis in one screen.
            </h2>
            <p className="mt-3 text-sm text-[#C9C5D8]">
              We&apos;re building what comes after EdTech — honest stage, no fabricated traction.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/investors/thesis"
              className="inline-flex min-h-[44px] items-center rounded-full bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF] px-5 text-sm font-bold text-white"
            >
              View full thesis
            </Link>
            <Link href="/investors#deck" className="btn-on-dark text-sm">
              Request deck
            </Link>
          </div>
        </div>
        <dl className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ROWS.map((row) => (
            <div
              key={row.k}
              className="rounded-[20px] border border-white/15 bg-[#141428] p-4"
            >
              <dt className="text-xs font-bold uppercase tracking-widest text-[#B794FF]">{row.k}</dt>
              <dd className="mt-2 text-sm font-medium leading-snug text-[#F7F3FF]">{row.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
