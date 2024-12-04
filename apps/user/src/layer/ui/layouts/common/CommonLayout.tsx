import Header from "#layer/ui/components/common/(server)/Header/Header";
import type React from "react";

function CommonLayout({
  children,
  // direction = "row",
}: Readonly<{
  children: React.ReactNode;
  // direction?: "row" | "column"
}>) {
  return (
    <>
      <header className="sticky top-0 z-10 w-full">
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
}

export default CommonLayout;
