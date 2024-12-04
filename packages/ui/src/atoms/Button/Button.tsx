import { cn } from "@repo/util/style/tailwind.util";
import { type VariantProps, cva } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const variant = {
  more: "bg-transparent hover:underline text-black-800",
  register: "bg-black hover:bg-gray-800 text-white",
  // cancel: "bg-transparent border border-gray-300 hover:bg-gray-300 hover:text-white text-gray-500",
  confirm: " bg-blue-600 text-white rounded-md hover:bg-blue-700",
  cancel: "bg-gray-100 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-200",
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
  variant: "more",
  shape: "default",
  size: "default",
  weight: "default",
} as const;

const ClassVariantAttributes = {
  variants,
  defaultVariants,
} as const;

const ClassVariants = cva("", ClassVariantAttributes);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ClassVariants> {
  children?: React.ReactNode;
}

export default function Button({ variant, shape, size, weight, children, ...props }: ButtonProps) {
  return (
    <button className={cn(ClassVariants({ variant, shape, size, weight }))} {...props}>
      {children}
    </button>
  );
}

export { defaultVariants as ButtonDefaultVariants, variants as ButtonVariants };
