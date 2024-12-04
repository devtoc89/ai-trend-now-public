import Default, { type ButtonProps } from "#atoms/Button/Button";
export * from "#atoms/Button/Button";

export default function Button({ children, ...rest }: ButtonProps) {
  return <Default {...rest}>{children}</Default>;
}
