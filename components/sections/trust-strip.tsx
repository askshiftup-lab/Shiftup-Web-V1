import Link from "next/link";
import { Lock, Shield, Eye, UserCheck } from "lucide-react";

const ITEMS = [
  { icon: Shield, label: "Safety by design", href: "/trust" },
  { icon: Lock, label: "Privacy by design", href: "/privacy" },
  { icon: Eye, label: "Explainable AI", href: "/company/ethics" },
  { icon: UserCheck, label: "Student autonomy", href: "/parents" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-[#E9E6F2] bg-[#F7F3FF] py-8" aria-label="Trust and safety">
      <div className="container-main">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#606273]">For parents & guardians</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex min-h-[44px] items-center gap-3 rounded-[20px] border border-[#E9E6F2] bg-white px-4 py-3 text-sm font-semibold text-[#111322] transition hover:border-[#6C2BFF]/30"
            >
              <Icon className="h-5 w-5 shrink-0 text-[#6C2BFF]" aria-hidden />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
