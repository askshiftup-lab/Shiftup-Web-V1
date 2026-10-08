import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[100px] w-full rounded-xl border border-[#E9E6F2] bg-white px-4 py-3 text-[15px] text-[#111322] placeholder:text-[#606273] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C2BFF]/40",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
