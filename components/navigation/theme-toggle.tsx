"use client";

import { Sun } from "lucide-react";

/** Light-only marketing site; toggle reserved for a future theme. */
export function ThemeToggle() {
  return (
    <span
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E9E6F2] text-[#606273]"
      title="Light mode (default)"
      aria-hidden
    >
      <Sun className="h-4 w-4" />
    </span>
  );
}
