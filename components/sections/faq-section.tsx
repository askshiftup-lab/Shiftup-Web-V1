"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqItem = { question: string; answer: string };

export function FaqSection({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#E9E6F2] rounded-3xl border border-[#E9E6F2] bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-semibold text-[#111322]">{item.question}</span>
              <ChevronDown className={cn("h-5 w-5 shrink-0 transition", isOpen && "rotate-180")} aria-hidden />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-[#606273] leading-relaxed" role="region">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
