"use client";

import { motion } from "framer-motion";

export function DinoMascot({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-[0_20px_40px_rgba(108,43,255,0.25)]">
        <defs>
          <linearGradient id="dinoBody" x1="0" y1="0" x2="120" y2="120">
            <stop stopColor="#6C2BFF" />
            <stop offset="1" stopColor="#8B3DFF" />
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="68" rx="42" ry="36" fill="url(#dinoBody)" />
        <circle cx="88" cy="52" r="18" fill="url(#dinoBody)" />
        <circle cx="94" cy="48" r="5" fill="#fff" />
        <circle cx="96" cy="48" r="2.5" fill="#111322" />
        <path d="M30 58 Q18 40 28 32" stroke="#8B3DFF" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M38 88 Q48 98 58 92" stroke="#EEE7FF" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
      </svg>
    </motion.div>
  );
}
