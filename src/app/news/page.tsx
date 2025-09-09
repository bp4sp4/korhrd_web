import type { Metadata } from "next";
import NewsClient from "./NewsClient";

export const metadata: Metadata = {
  title: "뉴스 | 한평생교육",
  description:
    "한평생교육의 다양한 소식과 업적, 언론 보도 내용을 확인하세요. 교육 분야의 최신 동향과 한평생교육의 성과를 소개합니다.",
  keywords:
    "한평생교육, 뉴스, 언론보도, 교육뉴스, 평생교육, 교육업계, 한평생교육그룹",
  openGraph: {
    title: "뉴스 | 한평생교육",
    description:
      "한평생교육의 다양한 소식과 업적, 언론 보도 내용을 확인하세요. 교육 분야의 최신 동향과 한평생교육의 성과를 소개합니다.",
    images: "/images/main/news1.jpg",
    siteName: "한평생교육",
    locale: "ko_KR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.korhrdcorp.co.kr/news",
  },
};

export default function NewsPage() {
  return <NewsClient />;
}
