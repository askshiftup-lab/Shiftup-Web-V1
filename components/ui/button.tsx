"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C2BFF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        gradient:
          "rounded-full bg-gradient-to-br from-[#6C2BFF] to-[#8B3DFF] text-white shadow-[0_8px_24px_rgba(108,43,255,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(108,43,255,0.45)]",
        secondary:
          "rounded-full border border-[#E9E6F2] bg-white text-[#111322] hover:border-[#6C2BFF]/30 hover:bg-[#F7F3FF]",
        ghost: "rounded-lg text-[#111322] hover:bg-[#F7F3FF]",
        dark: "rounded-full bg-[#080B2A] text-white hover:bg-[#0A0A12]",
        link: "rounded-none p-0 font-semibold text-[#6C2BFF] hover:underline underline-offset-4",
      },
      size: {
        default: "h-11 px-6 text-[15px]",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "gradient",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";
