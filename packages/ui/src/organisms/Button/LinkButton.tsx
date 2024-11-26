import Button, { type ButtonProps } from "#atoms/Button/Button.tsx";
export * from "#atoms/Button/Button.tsx";

export default function LinkButton({ children, ...rest }: ButtonProps) {
  return (
    <Button {...rest} variant="more">
      {children}
    </Button>
  );
}
