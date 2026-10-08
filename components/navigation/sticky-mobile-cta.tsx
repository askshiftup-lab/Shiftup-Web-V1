"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDE_ON = ["/investors", "/investors/"];

export function StickyMobileCta() {
  const pathname = usePathname();
  if (HIDE_ON.some((p) => pathname === p || pathname.startsWith("/investors/"))) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E9E6F2] bg-white/95 p-3 backdrop-blur-md md:hidden"
      role="region"
      aria-label="Quick action"
    >
      <Link
        href="/students#waitlist"
        className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF] text-sm font-bold text-white"
      >
        Join Dino — early access
      </Link>
    </div>
  );
}
