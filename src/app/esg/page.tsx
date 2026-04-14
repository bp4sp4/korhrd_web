import type { Metadata } from "next";
import ESGClient from "./ESGClient";

export const metadata: Metadata = {
  title: "ESG | 한평생그룹",
  description:
    "한평생그룹의 ESG 경영 철학과 환경, 사회, 지배구조에 대한 책임과 지속가능한 미래를 위한 노력을 소개합니다.",
  keywords:
    "ESG, 환경경영, 사회책임, 지배구조, 지속가능경영, 한평생그룹, ESG컨설팅",
  openGraph: {
    title: "ESG | 한평생그룹",
    description:
      "한평생그룹의 ESG 경영 철학과 환경, 사회, 지배구조에 대한 책임과 지속가능한 미래를 위한 노력을 소개합니다.",
    images: "/images/esg/image001.png",
    siteName: "한평생그룹",
    locale: "ko_KR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.korhrdcorp.co.kr/esg",
  },
};

export default function ESGPage() {
  return <ESGClient />;
}
