import { cn } from "@repo/util/style/tailwind.util";
import { type VariantProps, cva } from "class-variance-authority";
import type { InputHTMLAttributes } from "react";

const variant = {
  default: "h-4 w-4 text-blue-600 border-gray-300 rounded",
} as const;

const shape = {
  square: "rounded-none",
  primary: "rounded",
  full: "rounded-full",
  default: "rounded-md",
} as const;

const size = {
  small: "text-sm py-1 px-2",
  medium: "text-base py-2 px-6",
  large: "text-lg py-3 px-6",
  default: "px-4 py-2",
} as const;

const weight = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  default: "",
} as const;

const variants = {
  variant,
  shape,
  size,
  weight,
} as const;

const defaultVariants = {
  variant: "default",
  shape: "default",
  size: "default",
  weight: "default",
} as const;

const ClassVariantAttributes = {
  variants,
  defaultVariants,
} as const;

const ClassVariants = cva("", ClassVariantAttributes);

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof ClassVariants> {}

export default function Checkbox({ variant, shape, size, weight, children, ...props }: CheckboxProps) {
  return <input type="checkbox" className={cn(ClassVariants({ variant, shape, size, weight }))} {...props} />;
}

export { defaultVariants as CheckboxDefaultVariants, variants as CheckboxVariants };
