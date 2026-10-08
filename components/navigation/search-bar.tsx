"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const ROUTE_HINTS: Record<string, string> = {
  dino: "/dino",
  student: "/students",
  parents: "/parents",
  parent: "/parents",
  university: "/universities",
  investor: "/investors",
  jenny: "/dino/jenny-ai",
  career: "/dino/career",
  ethics: "/company/ethics",
  privacy: "/privacy",
  twin: "/dino/student-digital-twin",
};

export function SearchBar({ className }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    trackEvent("search_open", { query });
    const key = Object.keys(ROUTE_HINTS).find((k) => query.toLowerCase().includes(k));
    router.push(key ? ROUTE_HINTS[key] : `/insights?q=${encodeURIComponent(query)}`);
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className={`hidden items-center gap-2 rounded-full border border-[#E9E6F2] px-4 py-2 text-sm text-[#606273] transition hover:border-[#6C2BFF]/30 lg:inline-flex ${className ?? ""}`}
        onClick={() => {
          trackEvent("search_open");
          setOpen(true);
        }}
        aria-label="Open search"
      >
        <Search className="h-4 w-4" aria-hidden />
        Search
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-[#080B2A]/40 p-4 pt-24 backdrop-blur-sm" role="dialog" aria-modal aria-label="Site search">
          <form onSubmit={submit} className="w-full max-w-xl rounded-2xl border border-[#E9E6F2] bg-white p-4 shadow-xl">
            <label htmlFor="global-search" className="sr-only">
              Search students, universities, careers
            </label>
            <div className="flex gap-2">
              <input
                id="global-search"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search students, universities, careers..."
                className="flex-1 rounded-xl border border-[#E9E6F2] px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-[#6C2BFF]/40"
              />
              <button type="submit" className="rounded-xl bg-[#6C2BFF] px-4 py-3 text-sm font-semibold text-white">
                Go
              </button>
            </div>
            <p className="mt-2 text-xs text-[#606273]">Try: dino, investors, jenny, career, ethics</p>
            <button type="button" className="mt-3 text-sm text-[#606273] underline" onClick={() => setOpen(false)}>
              Close
            </button>
          </form>
        </div>
      )}
    </>
  );
}
