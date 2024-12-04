import Default, { type ButtonProps } from "#atoms/Button/Button";
export * from "#atoms/Button/Button";

export default function ConfirmButton({ children, ...rest }: ButtonProps) {
  return (
    <Default {...rest} variant="confirm">
      {children}
    </Default>
  );
}
