import type { Metadata } from "next";
import React from "react";
import BusinessAreasSection from "@/components/Business/BusinessAreasSection";

export const metadata: Metadata = {
  title: "사업영역 | 한평생교육",
  description:
    "한평생교육의 핵심 사업영역인 교육컨설팅, 인사컨설팅, ESG 컨설팅, 교육훈련 서비스를 소개합니다.",
  keywords:
    "교육컨설팅, 인사컨설팅, ESG컨설팅, 교육훈련, 기업교육, 평생교육, 한평생교육",
  openGraph: {
    title: "사업영역 | 한평생교육",
    description:
      "한평생교육의 핵심 사업영역인 교육컨설팅, 인사컨설팅, ESG 컨설팅, 교육훈련 서비스를 소개합니다.",
    images: "/images/business/main__banner002__mobile.png",
    siteName: "한평생교육",
    locale: "ko_KR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.korhrdcorp.co.kr/business",
  },
};

export default function BusinessPage() {
  return <BusinessAreasSection />;
}
