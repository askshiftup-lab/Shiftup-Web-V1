import Link from "next/link";
import { ProseWidth } from "@/components/ui/prose-width";

/** Answers in ~5 seconds: why Dino exists (17-year-old legible). */
export function StudentWhyDino() {
  return (
    <section className="surface-light section-pad pt-8 md:pt-12">
      <div className="container-main grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C2BFF]">For students</p>
          <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold leading-tight text-[#111322]">
            Dino exists because your real life isn&apos;t on the syllabus.
          </h2>
          <ProseWidth className="mt-4 text-lg">
            You&apos;re figuring out friends, colleges, side hustles, anxiety, identity, and what&apos;s next — across
            ten apps and a hundred opinions. Dino is one place built around <strong className="text-[#111322]">you</strong>
            : a Student Digital Twin + AI BFF that helps you think, plan, execute, and decide — without treating you like
            a lead or a rank.
          </ProseWidth>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/students#waitlist"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF] px-6 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(108,43,255,0.28)]"
            >
              Get early access
            </Link>
            <Link
              href="/dino"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#E9E6F2] px-6 text-[15px] font-bold text-[#111322]"
            >
              Explore Dino
            </Link>
          </div>
        </div>
        <aside className="rounded-[20px] border border-[#E9E6F2] bg-[#F7F3FF] p-6 shadow-[0_8px_30px_rgba(17,19,34,0.04)]">
          <p className="text-xs font-bold uppercase tracking-widest text-[#606273]">Shiftup Lab builds</p>
          <p className="mt-2 text-base font-bold text-[#111322]">Student intelligence infrastructure</p>
          <div className="my-4 h-px bg-[#E9E6F2]" aria-hidden />
          <p className="text-xs font-bold uppercase tracking-widest text-[#6C2BFF]">Dino is how students experience it</p>
          <p className="mt-2 text-base font-bold text-[#111322]">Your world — not another EdTech app</p>
          <p className="mt-4 text-sm text-[#606273]">
            The company is bigger than the app. The app is how the intelligence layer feels human.
          </p>
        </aside>
      </div>
    </section>
  );
}
