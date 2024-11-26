import Typography, { type TypographyProps } from "#atoms/Typography/Typography.tsx";

export * from "#atoms/Typography/Typography.tsx";

export default function Slogan({ children, ...rest }: TypographyProps) {
  return (
    <Typography component="h1" size="large" weight="bold" {...rest} variant="slogan">
      {children}
    </Typography>
  );
}
