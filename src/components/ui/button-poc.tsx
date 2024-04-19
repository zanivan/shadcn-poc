import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonPocVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        contained:
          "bg-pocbackground bg-gradient-to-b from-[hsla(210, 100%, 60%, 0.2)] to-[hsla(210, 100%, 42%, 0.2)] shadow-[inset_0_2px_0_hsla(210,100%,60%,1),inset_0_-2px_0_hsla(210,100%,38%,1)] [text-shadow:_0_1px_1px_rgb(0_0_0_/_60%)] font-semibold text-primary-foregroundpoc hover:bg-primary/90 hover:shadow-none hover:bg-[#0061C2]",
        outlined:
          "border border-input bg-[#EBF5FF]/20 dark:bg-[#003A75]/20 border-[#CCE5FF] dark:border-[#003A75]/70 shadow-[inset_0_2px_0_hsla(210,100%,96%,0.8),inset_0_-2px_0_hsla(210,100%,90%,0.4)] dark:shadow-[inset_0_2px_0_hsla(210,100%,23%,0.2),inset_0_-2px_0_hsla(210,0%,0%,0.9)] text-[#006BD6] dark:text-[#99CCFF] font-semibold hover:bg-[#EBF5FF] dark:hover:bg-[#003A75] hover:border-[#99CCFF] dark:hover:border-[#0061C2] hover:shadow-none dark:hover:shadow-none",
        text: "font-semibold text-[#006BD6] dark:text-[#66B2FF] hover:bg-[#EAEDF1] dark:hover:bg-[#1F262E]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "contained",
      size: "default",
    },
  }
);

export interface ButtonPocProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonPocVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonPocProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonPocVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonPocVariants };
