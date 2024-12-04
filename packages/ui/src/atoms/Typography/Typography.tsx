import { cn } from "@repo/util/style/tailwind.util";
import { type VariantProps, cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import React from "react";

const variant = {
  slogan: "text-black-800",
  more: "hover:underline text-black-800",
  register: "text-white",
  cancel: "hover:text-white text-gray-500",
} as const;

const size = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
} as const;

const weight = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

const variants = {
  variant,
  size,
  weight,
} as const;

const defaultVariants = {
  variant: "more",
  size: "small",
  weight: "normal",
} as const;

const ClassVariantAttributes = {
  variants,
  defaultVariants,
} as const;

const ClassVariants = cva("", ClassVariantAttributes);

export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof ClassVariants> {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  children?: React.ReactNode;
}

export default function Typography({
  variant,
  size,
  weight,
  children,
  className,
  component = "span",
  ...props
}: TypographyProps) {
  return React.createElement(
    component as string,
    { ...props, className: cn(ClassVariants({ variant, size, weight }), className) },
    children,
  );
}
// if (component === "h1")
//   return (
//     <h1 className={ClassName} {...props}>
//       {children}
//     </h1>
//   );
// if (component === "h2")
//   return (
//     <h2 className={ClassName} {...props}>
//       {children}
//     </h2>
//   );
// if (component === "h3")
//   return (
//     <h3 className={ClassName} {...props}>
//       {children}
//     </h3>
//   );
// if (component === "h4")
//   return (
//     <h4 className={ClassName} {...props}>
//       {children}
//     </h4>
//   );
// if (component === "h5")
//   return (
//     <h5 className={ClassName} {...props}>
//       {children}
//     </h5>
//   );
// if (component === "h6")
//   return (
//     <h6 className={ClassName} {...props}>
//       {children}
//     </h6>
//   );
// return <span className={ClassName}>{children}</span>;

export { defaultVariants as TypographyDefaultVariants, variants as TypographyVariants };
