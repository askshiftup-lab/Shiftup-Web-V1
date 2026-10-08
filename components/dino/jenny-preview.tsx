"use client";

import { useState } from "react";

const PROMPTS = [
  "Compare these two universities for design + entrepreneurship",
  "What skills should I build before my second year?",
  "Help me think through a gap year — pros and cons",
];

export function JennyPreview() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="rounded-[20px] border border-white/15 bg-[#0A0A12] p-6 text-white md:p-8"
      aria-label="Jenny AI product preview (demo)"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-[#B794FF]">Preview — not live AI</p>
      <div className="mt-4 space-y-3">
        {PROMPTS.map((p, i) => (
          <button
            key={p}
            type="button"
            onClick={() => setActive(i)}
            className={`block w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${
              i === active ? "border-[#8B3DFF] bg-white/10 text-white" : "border-white/15 bg-white/5 text-white/85 hover:bg-white/10"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-relaxed text-white/90">
        <strong className="text-white">Jenny:</strong> Based on your interests and goals in your Digital Twin, I&apos;d
        break this into trade-offs, timelines, and next actions — not a single &quot;right answer.&quot; Connect your
        profile in Dino for personalised guidance.
      </div>
    </div>
  );
}
