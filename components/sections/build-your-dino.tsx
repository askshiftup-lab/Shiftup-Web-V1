"use client";

import { useState } from "react";

const STEPS = ["Identity", "Interests", "Goals", "People", "Skills", "Future"];

export function BuildYourDino() {
  const [done, setDone] = useState(0);
  const pct = Math.round(((done + 1) / STEPS.length) * 100);

  return (
    <div className="rounded-3xl border border-[#E9E6F2] bg-white p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-[#6C2BFF]">Build Your Dino</p>
      <p className="mt-2 text-lg font-semibold text-[#111322]">
        Your Dino is {pct}% imagined. Let&apos;s build the rest.
      </p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#EEE7FF]">
        <div className="h-full rounded-full bg-gradient-to-r from-[#6C2BFF] to-[#8B3DFF] transition-all" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {STEPS.map((step, i) => (
          <button
            key={step}
            type="button"
            onClick={() => setDone(i)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              i <= done
                ? "bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF] text-white"
                : "border border-[#E9E6F2] bg-[#F7F3FF] text-[#606273]"
            }`}
          >
            {step}
          </button>
        ))}
      </div>
    </div>
  );
}
