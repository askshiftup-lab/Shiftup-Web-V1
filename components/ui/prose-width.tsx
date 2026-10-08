import { cn } from "@/lib/utils";

/** Keeps body copy at 600–720px for readability. */
export function ProseWidth({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("max-w-[680px] text-pretty leading-relaxed text-[#606273]", className)}>{children}</div>;
}
