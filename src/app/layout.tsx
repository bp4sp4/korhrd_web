import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Loading from "@/components/Loading/index";

export const metadata: Metadata = {
  title: "한평생그룹",
  description:
    "한평생그룹은 평생교육의 교육이념 실현의 선두주자로, 언제 어디서든 교육받을 수 있는 환경과 양질의 컨텐츠를 제공하는 것이 목표입니다.",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: "한평생그룹, 평생교육, 교육, 컨텐츠, 환경, 지속가능한 교육",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  verification: {
    other: {
      "naver-site-verification": "5c68a471755f4863ad5618c8de89c5b05df13aed",
    },
  },
  openGraph: {
    title: "한평생그룹",
    description:
      "한평생그룹은 평생교육의 교육이념 실현의 선두주자로, 언제 어디서든 교육받을 수 있는 환경과 양질의 컨텐츠를 제공하는 것이 목표입니다.",
    images: "/images/og-image.png",
    siteName: "한평생그룹",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Loading />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
