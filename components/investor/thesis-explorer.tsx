"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const STEPS = ["Problem", "Product", "Intelligence", "Moat", "Market", "Business"];

export function ThesisExplorer() {
  const [idx, setIdx] = useState(0);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-[#8B3DFF]">Investor exploration</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {STEPS.map((s, i) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setIdx(i);
              trackEvent("investor_page_engagement", { step: s });
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              i === idx ? "bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF] text-white" : "bg-white/10 text-white/80"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-white/70">
        Step {idx + 1} of {STEPS.length} — explore the full thesis at{" "}
        <a href="/investors/thesis" className="text-[#8B3DFF] underline">
          /investors/thesis
        </a>
      </p>
    </div>
  );
}
