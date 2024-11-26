import Default, { type ButtonProps } from "#atoms/Button/Button.tsx";
export * from "#atoms/Button/Button.tsx";

export default function Button({ children, ...rest }: ButtonProps) {
  return <Default {...rest}>{children}</Default>;
}
