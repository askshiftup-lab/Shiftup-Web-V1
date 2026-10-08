import type { LucideIcon } from "lucide-react";

export function ProblemCard({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="card-surface group p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7F3FF] text-[#6C2BFF] transition group-hover:bg-[#EEE7FF]">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mt-4 text-lg font-bold leading-snug text-[#111322]">{title}</h3>
    </div>
  );
}
