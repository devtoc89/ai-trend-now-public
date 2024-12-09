import "@repo/ui/globals.css";
import "./globals.css";

import RootLayer from "#layer/ui/layouts/root/RootLayer";

import { commonMetadata } from "#lib/helper/metadata/metadata.helper";
import type { Metadata } from "next/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = await commonMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayer lang="ko">
      {children}
      <ToastContainer />
    </RootLayer>
  );
}
