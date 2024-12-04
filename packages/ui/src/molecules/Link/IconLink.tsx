import { cn } from "@repo/util/style/tailwind.util";
import { type VariantProps, cva } from "class-variance-authority";
import Link from "next/link";

const variant = {
  snb: "flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900",
  snbSelected: "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900",
} as const;

const ClassVariants = cva("", {
  variants: { variant },
  defaultVariants: { variant: "snb" },
});

export interface IconLinkProps extends VariantProps<typeof ClassVariants> {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export default function IconLink({ variant, icon, label, href, ...props }: IconLinkProps) {
  return (
    <Link href={href} className={cn(ClassVariants({ variant }))} {...props}>
      {icon}
      {label}
    </Link>
  );
}
