import type { Metadata } from "next";
import "./globals.css";
import "@/styles/site.css";
import SiteChrome from "@/components/site/SiteChrome";
import SiteFooter from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "한평생그룹 | 배움에서 일까지",
  description:
    "한평생그룹은 한평생원격교육원(학점은행·사회복지사), 한평생직업훈련(민간자격), 한평생 바로취업(중장년 취업), 한평생 에듀바이저스(교육 파트너)를 운영하는 평생교육·취업 그룹입니다.",
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
    title: "한평생그룹 | 배움에서 일까지",
    description: "학위·자격·취업, 평생교육의 모든 단계를 잇는 한평생그룹",
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
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 시안과 같은 웹폰트, .rv 등장 효과를 위한 js 클래스 */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/static/woff2/SUIT.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="light-hero">
        <SiteChrome />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
