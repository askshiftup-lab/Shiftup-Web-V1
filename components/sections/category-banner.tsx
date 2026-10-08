import Link from "next/link";

export function CategoryBanner() {
  return (
    <section className="surface-light border-y border-[#E9E6F2] py-6" aria-label="Category definition">
      <div className="container-main flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C2BFF]">New category</p>
          <p className="mt-1 text-lg font-bold text-[#111322] md:text-xl">The Non-Academic Student Ecosystem</p>
          <p className="mt-1 max-w-xl text-sm text-[#606273]">
            Not courses. Not rankings. The full journey — identity, people, decisions, opportunities, skills, career, life.
          </p>
        </div>
        <Link
          href="/dino"
          className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full border border-[#E9E6F2] bg-[#F7F3FF] px-5 text-sm font-bold text-[#6C2BFF] transition hover:border-[#6C2BFF]/40"
        >
          See how Dino works →
        </Link>
      </div>
    </section>
  );
}
