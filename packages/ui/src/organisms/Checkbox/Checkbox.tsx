import Default, { type CheckboxProps } from "#atoms/Input/Checkbox";
export * from "#atoms/Input/Checkbox";

export default function Checkbox({ children, ...rest }: CheckboxProps) {
  return <Default {...rest}>{children}</Default>;
}
