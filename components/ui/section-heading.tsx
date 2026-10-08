import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  /** Use inside `.surface-navy` / `.surface-near-black` */
  onDark?: boolean;
  /** @deprecated use onDark */
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  onDark,
  dark,
}: SectionHeadingProps) {
  const isDark = onDark ?? dark;
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <header className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.2em]",
            isDark ? "text-[#B794FF]" : "text-[#6C2BFF]",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.15] tracking-tight",
          isDark ? "text-white" : "text-[#111322]",
        )}
      >
        {highlight && parts.length > 1 ? (
          <>
            <span className={isDark ? "text-white" : undefined}>{parts[0]}</span>
            <span className={isDark ? "text-[#C4B5FF]" : "gradient-text"}>{highlight}</span>
            <span className={isDark ? "text-white" : undefined}>{parts[1]}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-[680px] text-lg leading-relaxed",
            isDark ? "text-white/75" : "text-[#606273]",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
