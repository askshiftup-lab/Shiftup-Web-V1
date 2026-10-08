import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-[#E9E6F2] bg-white px-4 text-[15px] text-[#111322] placeholder:text-[#606273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C2BFF]/40",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";
