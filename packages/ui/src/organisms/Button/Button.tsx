import Default, { type ButtonProps } from "#molecules/Button/Button";
export * from "#molecules/Button/Button";

export default function Button({ children, ...rest }: ButtonProps) {
  return <Default {...rest}>{children}</Default>;
}
