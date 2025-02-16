import Button, { type ButtonProps } from "#atoms/Button/Button";
export * from "#atoms/Button/Button";

export default function LinkButton({ children, ...rest }: ButtonProps) {
  return (
    <Button {...rest} variant="more">
      {children}
    </Button>
  );
}
