import FontPretendard from "#app/fonts/FontPretendard";
import { cn } from "@repo/util/style/tailwind.util";
import type React from "react";

import { commonMetadata } from "#lib/helper/metadata/metadata.helper";
import type { Metadata } from "next/types";
export const metadata: Metadata = await commonMetadata();


function RootLayer({
  className,
  children,
  lang = "ko",
}: Readonly<{ className?: string; children: React.ReactNode; lang?: string }>) {
  return (
    <html lang={lang}>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body
        className={cn(
          "antialiased lg:text-shadow-ssm dark:shadow-gray-300 dark:bg-slate-900 ",
          FontPretendard.className,
          className,
        )}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayer;
