import type React from "react";

function RootLayer({
  className,
  children,
  lang = "ko",
}: Readonly<{ className?: string; children: React.ReactNode; lang?: string }>) {
  return (
    <html lang={lang}>
      <body className={`${className} antialiased`}>{children}</body>

      {/* <Modal title="Modal Title" /> */}
    </html>
  );
}

export default RootLayer;
