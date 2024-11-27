import { cn } from "@repo/util/style/tailwind.util.ts";
import type React from "react";

function RootLayer({
  className,
  children,
  lang = "ko",
}: Readonly<{ className?: string; children: React.ReactNode; lang?: string }>) {
  return (
    <html lang={lang}>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={cn("antialiased text-shadow-ssm", className)}>{children}</body>

      {/* <Modal title="Modal Title" /> */}
    </html>
  );
}

export default RootLayer;
