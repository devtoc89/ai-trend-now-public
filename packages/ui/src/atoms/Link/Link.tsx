import { cn } from "@repo/util/style/tailwind.util";
import { type VariantProps, cva } from "class-variance-authority";
import type { LinkHTMLAttributes } from "react";

const variant = {
  snb: "flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900",
  snbSelected: "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900",
} as const;

const shape = {
  square: "rounded-none",
  primary: "rounded",
  full: "rounded-full",
} as const;

const size = {
  small: "text-sm py-1 px-2",
  medium: "text-base py-2 px-6",
  large: "text-lg py-3 px-6",
} as const;

const weight = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

const variants = {
  variant,
  shape,
  size,
  weight,
} as const;

const defaultVariants = {
  variant: "snb",
  shape: "square",
  size: "small",
  weight: "normal",
} as const;

const ClassVariantAttributes = {
  variants,
  defaultVariants,
} as const;

const ClassVariants = cva("", ClassVariantAttributes);

export interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof ClassVariants> {
  children?: React.ReactNode;
}

export default function Link({ variant, shape, size, weight, children, ...props }: LinkProps) {
  return (
    <a className={cn(ClassVariants({ variant, shape, size, weight }))} {...props}>
      {children}
    </a>
  );
}

export { defaultVariants as LinkDefaultVariants, variants as LinkVariants };
