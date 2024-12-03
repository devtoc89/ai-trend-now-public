import "@repo/ui/globals.css";
import "./globals.css";

import "./fonts/pretendard.css";

import RootLayer from "#layer/ui/layouts/root/RootLayer.tsx";

import type { Metadata } from "next/types";
import { ToastContainer } from "react-toastify";
import { GLOBAL_TITLE } from "#consts/global.ts";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://devtoc89.click"),
  title: GLOBAL_TITLE,
  description:
    "내가 편히 보는 AI 뉴스'는 AI 관련 최신 트렌드를 편안하게 읽고 이해할 수 있도록 도와주는 서비스입니다. 이 프로젝트는 인공지능과 기술의 발전에 관심 있는 독자들이 관련 뉴스를 쉽게 접할 수 있도록 설계되었습니다. 복잡한 기술 용어와 장황한 설명 대신, 핵심 내용을 한눈에 파악할 수 있는 요약과 친근한 해설을 제공합니다.",
  generator: "Next.js",
  applicationName: "ai-news-prototype",
  referrer: "origin-when-cross-origin",
  keywords: ["ai", "news", "column"],
  authors: [{ name: "devtoc", url: "https://devtoc89.click" }],
  creator: "devtoc",
  publisher: "devtoc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

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
