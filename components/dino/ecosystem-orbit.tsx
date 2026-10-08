"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ECOSYSTEM_ORBIT } from "@/data/journey";

export function EcosystemOrbit() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]" aria-hidden>
      <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-[#6C2BFF]/15 to-[#8B3DFF]/5 blur-2xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-[20px] bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF] text-lg font-extrabold tracking-tight text-white shadow-[0_12px_40px_rgba(108,43,255,0.38)]">
          DINO
        </div>
      </div>
      {ECOSYSTEM_ORBIT.map((label, i) => {
        const angle = (i / ECOSYSTEM_ORBIT.length) * Math.PI * 2 - Math.PI / 2;
        const r = 46;
        const x = 50 + Math.cos(angle) * r;
        const y = 50 + Math.sin(angle) * r;
        return (
          <span
            key={label}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E9E6F2] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#111322] shadow-sm md:px-3 md:py-1.5 md:text-[11px]"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {label}
          </span>
        );
      })}
      {!reduce && (
        <motion.div
          className="absolute inset-[10%] rounded-full border border-dashed border-[#6C2BFF]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
      )}
      {reduce && (
        <div className="absolute inset-[10%] rounded-full border border-dashed border-[#6C2BFF]/20" />
      )}
    </div>
  );
}
