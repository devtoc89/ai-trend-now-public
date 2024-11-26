import Default, { type ButtonProps } from "#atoms/Button/Button.tsx";
export * from "#atoms/Button/Button.tsx";

export default function ConfirmButton({ children, ...rest }: ButtonProps) {
  return (
    <Default {...rest} variant="confirm">
      {children}
    </Default>
  );
}
