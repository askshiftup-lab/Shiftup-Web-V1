import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "default" | "dark" | "icon";
  className?: string;
  href?: string;
};

const LOGO_SRC = {
  default: "/brand/shiftup-logo.svg",
  dark: "/brand/shiftup-logo-dark.svg",
  icon: "/brand/shiftup-icon.svg",
} as const;

/** Replace SVG paths with official PNGs at /public/brand/shiftup-logo.png when available. */
export function Logo({ variant = "default", className, href = "/" }: LogoProps) {
  const src = LOGO_SRC[variant];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C2BFF]",
        className,
      )}
      aria-label="Shiftup Lab — home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Shiftup Lab"
        width={variant === "icon" ? 36 : 160}
        height={variant === "icon" ? 36 : 40}
        className="h-8 w-auto object-contain md:h-9"
      />
    </Link>
  );
}
