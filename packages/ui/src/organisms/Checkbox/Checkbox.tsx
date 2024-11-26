import Default, { type CheckboxProps } from "#atoms/Input/Checkbox.tsx";
export * from "#atoms/Input/Checkbox.tsx";

export default function Checkbox({ children, ...rest }: CheckboxProps) {
  return <Default {...rest}>{children}</Default>;
}
