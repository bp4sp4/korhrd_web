import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "회사소개 | 한평생교육",
  description:
    "한평생교육의 비전과 미션, CEO 메시지, 연혁을 통해 교육의 새로운 방향을 제시하는 기업을 소개합니다.",
  keywords:
    "한평생교육, 회사소개, CEO메시지, 기업비전, 교육이념, 연혁, 평생교육",
  openGraph: {
    title: "회사소개 | 한평생교육",
    description:
      "한평생교육의 비전과 미션, CEO 메시지, 연혁을 통해 교육의 새로운 방향을 제시하는 기업을 소개합니다.",
    images: "/images/about/main.png",
    siteName: "한평생교육",
    locale: "ko_KR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.korhrdcorp.co.kr/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
