import Button, { type ButtonProps } from "#molecules/Button/Button";
export * from "#molecules/Button/Button";

export default function LinkButton({ children, ...rest }: ButtonProps) {
  return (
    <Button {...rest} variant={"more"}>
      {children}
    </Button>
  );
}
