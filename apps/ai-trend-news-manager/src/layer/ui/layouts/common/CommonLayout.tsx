import type React from "react";

function CommonLayout({
  children,
  direction = "row",
}: Readonly<{ children: React.ReactNode; direction?: "row" | "column" }>) {
  return <div className={`flex h-screen w-full flex-${direction} bg-white`}>{children}</div>;
}

export default CommonLayout;
