"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { STUDENT_JOURNEY } from "@/data/journey";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function JourneyExplorer() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-8">
      <ol className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0" aria-label="Student journey">
        {STUDENT_JOURNEY.map((step, i) => (
          <li key={step.id} className="shrink-0 lg:shrink">
            <button
              type="button"
              onClick={() => {
                setActive(i);
                trackEvent("journey_interaction", { step: step.id });
              }}
              className={cn(
                "flex min-h-[44px] min-w-[200px] items-center gap-3 rounded-[20px] border px-4 py-3 text-left transition lg:w-full lg:min-w-0",
                i === active
                  ? "border-[#6C2BFF] bg-[#F7F3FF] shadow-sm"
                  : "border-[#E9E6F2] bg-white hover:border-[#6C2BFF]/30",
              )}
              aria-current={i === active ? "step" : undefined}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF] text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="font-semibold text-[#111322]">{step.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <motion.article
        key={STUDENT_JOURNEY[active].id}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-[20px] border border-[#E9E6F2] bg-white p-6 shadow-[var(--shadow-card)] md:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-[#6C2BFF]">Non-academic journey · Stage {active + 1}</p>
        <h3 className="mt-2 text-2xl font-bold text-[#111322]">{STUDENT_JOURNEY[active].title}</h3>
        <p className="mt-4 max-w-[640px] leading-relaxed text-[#606273]">{STUDENT_JOURNEY[active].summary}</p>
        {active === STUDENT_JOURNEY.length - 1 && (
          <p className="mt-6 text-sm font-medium text-[#6C2BFF]">Nice. You just discovered how Dino thinks.</p>
        )}
      </motion.article>
    </div>
  );
}
