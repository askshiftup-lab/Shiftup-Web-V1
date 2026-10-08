"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/navigation/logo";
import { SearchBar } from "@/components/navigation/search-bar";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const NAV = [
  { href: "/dino", label: "Dino" },
  { href: "/students", label: "Students" },
  { href: "/parents", label: "Parents" },
  { href: "/universities", label: "Universities" },
  { href: "/investors", label: "Investors" },
  { href: "/company", label: "Company" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9E6F2]/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium text-[#606273] transition hover:bg-[#F7F3FF] hover:text-[#111322]",
                pathname.startsWith(item.href) && "bg-[#F7F3FF] text-[#6C2BFF]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <SearchBar />
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dino/jenny-ai" onClick={() => trackEvent("feature_interaction", { feature: "jenny_nav" })}>
              <Sparkles className="h-4 w-4 text-[#6C2BFF]" aria-hidden />
              Ask Jenny AI
            </Link>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <Link href="/investors">Invest in Shiftup</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/students#waitlist" onClick={() => trackEvent("dino_cta_click", { source: "nav" })}>
              Join Dino
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E9E6F2] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-[#E9E6F2] bg-white px-4 py-4 text-[#111322] lg:hidden">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#606273]">Explore</p>
          <div className="grid gap-1">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-base font-medium" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wide text-[#606273]">Actions</p>
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <Link href="/students#waitlist">Join Dino</Link>
            </Button>
            <Button variant="secondary" asChild className="w-full">
              <Link href="/investors">Invest in Shiftup</Link>
            </Button>
            <Button variant="ghost" asChild className="w-full">
              <Link href="/dino/jenny-ai">Ask Jenny AI</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
