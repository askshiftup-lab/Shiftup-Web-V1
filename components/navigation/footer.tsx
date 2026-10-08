import Link from "next/link";
import { Logo } from "@/components/navigation/logo";

const LINKS = [
  { href: "/dino", label: "Dino" },
  { href: "/students", label: "Students" },
  { href: "/parents", label: "Parents" },
  { href: "/universities", label: "Universities" },
  { href: "/partners", label: "Partners" },
  { href: "/investors", label: "Investors" },
  { href: "/company", label: "Company" },
  { href: "/research", label: "Research" },
  { href: "/trust", label: "Trust" },
  { href: "/security", label: "Security" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/company/ethics", label: "Ethics" },
];

export function Footer() {
  return (
    <footer className="surface-soft border-t border-[#E9E6F2]">
      <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-[#606273]">
              Building the intelligence layer for the world&apos;s student ecosystem.
            </p>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#606273]">
              Shiftup Lab Private Limited · Bengaluru, India
              <br />
              India → Asia → Global
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3" aria-label="Footer">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-[#111322] hover:text-[#6C2BFF]">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#E9E6F2] pt-8 md:flex-row md:items-center">
          <p className="text-sm font-semibold text-[#6C2BFF]">Think. Plan. Execute. Decide.</p>
          <p className="text-xs text-[#606273]">© 2026 Shiftup Lab Private Limited</p>
        </div>
      </div>
    </footer>
  );
}
