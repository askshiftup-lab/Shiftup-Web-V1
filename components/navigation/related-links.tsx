import Link from "next/link";

type LinkItem = { href: string; label: string };

const DEFAULT: LinkItem[] = [
  { href: "/dino", label: "Dino" },
  { href: "/dino/student-digital-twin", label: "Student Digital Twin" },
  { href: "/students", label: "Students" },
  { href: "/parents", label: "Parents" },
  { href: "/investors/thesis", label: "Investment thesis" },
  { href: "/company/ethics", label: "Ethics charter" },
];

export function RelatedLinks({ links = DEFAULT, title = "Explore next" }: { links?: LinkItem[]; title?: string }) {
  return (
    <nav aria-label={title} className="mt-16 border-t border-[#E9E6F2] pt-10">
      <p className="text-xs font-bold uppercase tracking-widest text-[#606273]">{title}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex rounded-full border border-[#E9E6F2] bg-[#F7F3FF] px-4 py-2 text-sm font-semibold text-[#111322] hover:border-[#6C2BFF]/30"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
