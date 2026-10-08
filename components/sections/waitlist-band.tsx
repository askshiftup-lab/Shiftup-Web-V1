import Link from "next/link";

type WaitlistBandProps = {
  headline?: string;
  subline?: string;
};

export function WaitlistBand({
  headline = "Ready to figure out what's next?",
  subline = "Join the Dino waitlist — early access, idea / MVP stage.",
}: WaitlistBandProps) {
  return (
    <section className="section-pad border-y border-[#E9E6F2] bg-white">
      <div className="container-main flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-lg">
          <h2 className="text-2xl font-extrabold text-[#111322]">{headline}</h2>
          <p className="mt-2 text-[#606273]">{subline}</p>
        </div>
        <Link
          href="/students#waitlist"
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF] px-8 text-base font-bold text-white shadow-[0_8px_24px_rgba(108,43,255,0.28)] sm:w-auto"
        >
          Join the waitlist →
        </Link>
      </div>
    </section>
  );
}
