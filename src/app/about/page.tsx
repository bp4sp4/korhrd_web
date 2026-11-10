import type { Metadata } from "next";
import SectionNav from "@/components/site/SectionNav";
import "@/styles/sub.css";
import "@/styles/about.css";

export const metadata: Metadata = {
  title: "회사소개 | 한평생그룹",
  description: "한평생그룹의 소개, 연혁, CEO 인사말을 안내합니다.",
  openGraph: { title: "회사소개 | 한평생그룹", images: "/images/about/main.png", siteName: "한평생그룹", locale: "ko_KR", type: "website" },
  alternates: { canonical: "https://www.korhrdcorp.co.kr/about" },
};

/* eslint-disable @next/next/no-img-element */
export default function AboutPage() {
  return (
    <main>
      <section className="sub-hero" style={{ "--hero-img": "url(/img/art/hero-about-2d.svg)" } as React.CSSProperties}>
        <div className="sub-hero-copy">
          <h1>About Us<span className="dot">.</span></h1>
          <p>당신 곁의 배움이 되고, 함께하는 성장이 되는 한평생그룹입니다.</p>
        </div>
      </section>

      <SectionNav variant="sub" title="ABOUT US" label="회사소개 메뉴" items={[{ href: "#intro", label: "그룹 소개" }, { href: "#history", label: "연혁" }, { href: "#ceo", label: "인사말" }]} />

      {/* 그룹 소개 */}
      <section className="block" id="intro">
        <div className="inner">
          <h2 className="big-en rv">KORHRD<br />Group<span className="dot">.</span></h2>
          <p className="intro-title rv">한평생그룹, <em>당신 곁의 배움</em>이 되다.<br />한평생그룹, <em>함께하는 성장</em>이 되다.</p>
          <div className="rv" style={{ marginTop: "48px", display: "grid", gap: "24px" }}>
            <p className="lead-gray">한평생그룹은 <em>학점은행제와 자격 과정, 취업 지원</em>을 하나로 잇는 <br />평생교육·취업 그룹입니다.</p>
            <p className="lead-gray">학습부터 자격 취득, 취업 연계까지 아우르는 종합 교육 플랫폼으로 <br />누구나 <em>배운 것으로 일하는 삶</em>을 함께 만듭니다.</p>
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section className="block" id="history">
        <div className="inner">
          <h2 className="big-en rv">History<span className="dot">.</span></h2>
          <p className="lead-gray rv" style={{ marginTop: "28px" }}>한평생그룹의 성장과 도약의 발자취입니다.</p>
          <div className="hist">
            <div className="hist-row rv">
              <div className="hist-year">2026</div>
              <div>
                <h3 className="hist-title">배움부터 취업까지, 하나로 잇다</h3>
                <p className="hist-desc">학점은행제 원격교육원을 새로 열고 한평생직업훈련을 새롭게 단장해, 학위·자격 취득에서 취업까지 이어지는 학습 여정을 한 그룹 안에서 완성했습니다.</p>
                <ul className="hist-list"><li>한평생원격교육원 신규 운영 (교육부 평가인정 학점은행제)</li><li>한평생직업훈련 홈페이지 전면 리뉴얼</li><li>분야별 &apos;취업 길찾기&apos;·목적·연령별 과정 추천 서비스 도입</li></ul>
              </div>
            </div>
            <div className="hist-row rv">
              <div className="hist-year">2025</div>
              <div>
                <h3 className="hist-title">교육 전문가를 위한 새로운 기준</h3>
                <p className="hist-desc">교육 전문가가 학습자 상담에 집중할 수 있는 파트너 플랫폼 &apos;한평생 에듀바이저스&apos;를 출범해, 전문성이 학습자의 성장으로 이어지는 구조를 만들었습니다.</p>
                <ul className="hist-list"><li>한평생 에듀바이저스 정식 출범 (7월)</li><li>가입비·초기 비용 없는 1인 프리랜서 파트너 제도</li><li>파트너 1인당 개별 CRM 제공 및 조직 운영 컨설팅 지원</li></ul>
              </div>
            </div>
            <div className="hist-row rv">
              <div className="hist-year">2024</div>
              <div>
                <h3 className="hist-title">교육플랫폼으로의 도약</h3>
                <p className="hist-desc">기존 교육의 한계를 넘어 학습부터 자격 취득, 취업 연계까지 아우르는 종합 교육 플랫폼으로 진화했습니다.</p>
                <ul className="hist-list"><li>(주)한평생그룹 법인 설립</li><li>교육브랜드 정식 플랫폼화 실시</li><li>취업연계 서비스 구축</li></ul>
              </div>
            </div>
            <div className="hist-row rv">
              <div className="hist-year">2023</div>
              <div>
                <h3 className="hist-title">평생교육의 첫 서비스화</h3>
                <p className="hist-desc">교육과 취업을 연결하는 사명을 바탕으로, 교육을 하나의 서비스로 혁신하여 실질적인 가치를 제공하는 여정을 시작했습니다.</p>
                <ul className="hist-list"><li>한국실습지원센터 설립</li><li>전국단위 실습섭외 서비스 구축</li></ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 인사말 */}
      <section className="block ceo" id="ceo">
        <div className="inner">
          <h2 className="big-en rv">CEO Message<span className="dot">.</span></h2>
          <div className="ceo-grid rv">
            <p className="ceo-quote">학생들의 성장과 성공을<br />최우선으로 생각합니다.</p>
            <div className="ceo-text">
              <p>한평생그룹 홈페이지에 방문해 주신 모든 분께 감사의 말씀을 전합니다.</p>
              <p>한평생그룹은 학생들의 성장과 성공을 최우선으로 생각하며, 실질적이고 현장감 있는 교육, 그리고 내일을 바꾸는 서비스를 제공합니다.</p>
              <p>앞으로도 더 많은 분들이 성장의 기회를 잡을 수 있도록 혁신을 멈추지 않겠습니다.</p>
              <div className="ceo-sign"><span>(주)한평생그룹 대표이사</span><img src="/img/ceo/sign.png" alt="양병웅 서명" width="600" height="250" /></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
