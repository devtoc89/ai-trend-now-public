import Typography, { type TypographyProps } from "#atoms/Typography/Typography";

export * from "#atoms/Typography/Typography";

export default function Slogan({ children, ...rest }: TypographyProps) {
  return (
    <Typography component="h1" size="large" weight="bold" {...rest} variant="slogan">
      {children}
    </Typography>
  );
}
