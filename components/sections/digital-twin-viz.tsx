"use client";

import { motion, useReducedMotion } from "framer-motion";

const INPUTS = ["Goals", "Interests", "Preferences", "Behaviour", "Skills", "Experiences", "Aspirations", "Decisions"];
const FLOW = ["Context", "Intelligence", "Recommendation", "Matching", "Decision", "Outcome", "Learning"];

export function DigitalTwinViz() {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative overflow-hidden rounded-[20px] border border-[#E9E6F2] bg-[#F7F3FF] p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[#6C2BFF]">What feeds your twin</p>
        <p className="mt-2 max-w-md text-sm text-[#606273]">
          Signals you choose to share — not surveillance. Your twin evolves as you do.
        </p>
        <div className="relative mx-auto mt-8 aspect-square max-w-[320px]" role="img" aria-label="Student Digital Twin diagram: you at the center, inputs orbit around you">
          <motion.div
            className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[20px] bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF] text-center text-white shadow-[0_16px_40px_rgba(108,43,255,0.35)]"
            animate={reduce ? undefined : { scale: [1, 1.03, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">You</span>
            <span className="text-xs font-extrabold leading-tight">Digital Twin</span>
          </motion.div>
          {INPUTS.map((item, i) => {
            const angle = (i / INPUTS.length) * Math.PI * 2 - Math.PI / 2;
            const r = 42;
            const x = 50 + Math.cos(angle) * r;
            const y = 50 + Math.sin(angle) * r;
            return (
              <span
                key={item}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E9E6F2] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#111322] shadow-sm md:text-xs md:px-3"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {item}
              </span>
            );
          })}
          <div className="absolute inset-[12%] rounded-full border border-dashed border-[#6C2BFF]/25" aria-hidden />
        </div>
      </div>
      <div className="rounded-[20px] border border-[#E9E6F2] bg-white p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[#6C2BFF]">What the twin powers</p>
        <p className="mt-2 text-sm text-[#606273]">Better recommendations and decisions — with explainable steps.</p>
        <ol className="mt-6 space-y-2">
          {FLOW.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F7F3FF] text-xs font-bold text-[#6C2BFF]">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-[#111322]">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
