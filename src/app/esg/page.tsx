import type { Metadata } from "next";
import SectionNav from "@/components/site/SectionNav";
import "@/styles/sub.css";

export const metadata: Metadata = {
  title: "ESG 경영 | 한평생그룹",
  description: "지속가능한 미래를 위한 한평생그룹의 ESG 실천을 소개합니다.",
  openGraph: { title: "ESG 경영 | 한평생그룹", images: "/images/esg/image001.png", siteName: "한평생그룹", locale: "ko_KR", type: "website" },
  alternates: { canonical: "https://www.korhrdcorp.co.kr/esg" },
};

/* eslint-disable @next/next/no-img-element */
export default function ESGPage() {
  return (
    <main>
      <section className="sub-hero" style={{ "--hero-img": "url(/img/art/hero-esg-2d.svg)" } as React.CSSProperties}>
        <div className="sub-hero-copy">
          <h1>ESG<span className="dot">.</span></h1>
          <p>지속가능한 미래를 위한 한평생그룹의 실천</p>
        </div>
      </section>

      <SectionNav variant="sub" title="ESG" label="ESG 메뉴" items={[{ href: "#environment", label: "Environment" }, { href: "#social", label: "Social" }, { href: "#governance", label: "Governance" }]} />

      {/* Environment */}
      <section className="block" id="environment">
        <div className="inner">
          <div className="esg-row rv">
            <div>
              <h2 className="esg-en">Environment<span className="dot">.</span></h2>
              <p className="esg-title">지구를 위한 교육,<br />미래를 위한 투자</p>
              <p className="esg-text">한평생그룹은 친환경 교육 플랫폼을 통해 탄소 중립을 실현하고 있습니다. 디지털 교육으로 종이 사용을 최소화하고, 클라우드 기반 학습 시스템으로 에너지 효율성을 극대화하여 지속가능한 교육 환경을 조성합니다.</p>
            </div>
            <div className="bz-art" aria-hidden="true"><img src="/img/art/esg-e-25d.webp" alt="" width="320" height="320" /></div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="block alt" id="social">
        <div className="inner">
          <div className="esg-row rev rv">
            <div>
              <h2 className="esg-en">Social<span className="dot">.</span></h2>
              <p className="esg-title">모든 이에게 열린 교육,<br />함께 성장하는 사회</p>
              <p className="esg-text">&apos;나눔, 채움, 배움, 이룸&apos;이라는 철학 아래 지역사회와의 상생을 도모합니다. 모든 학습자가 차별 없이 양질의 교육을 받을 수 있도록 지원하며, 교육을 통해 사회적 가치를 창출합니다.</p>
              <div className="esg-motto"><span>나눔</span><span>채움</span><span>배움</span><span>이룸</span></div>
            </div>
            <div className="bz-art" aria-hidden="true"><img src="/img/art/esg-s-25d.webp" alt="" width="320" height="320" /></div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="block" id="governance">
        <div className="inner">
          <div className="esg-row rv">
            <div>
              <h2 className="esg-en">Governance<span className="dot">.</span></h2>
              <p className="esg-title">투명한 경영,<br />지속가능한 가치 창출</p>
              <p className="esg-text">투명한 경영과 책임 있는 의사결정을 통해 기업의 지속가능성과 신뢰도를 높입니다. 윤리적이고 책임 있는 경영을 통해 장기적인 가치 창출에 기여하며, 모든 이해관계자와의 신뢰 관계를 구축합니다.</p>
            </div>
            <div className="bz-art" aria-hidden="true"><img src="/img/art/esg-g-25d.webp" alt="" width="320" height="320" /></div>
          </div>
        </div>
      </section>

      <section className="block alt esg-end">
        <div className="inner rv">
          <h2>지속가능한 미래를<br />함께 만들어가요<span className="dot">.</span></h2>
          <p>한평생그룹과 함께 ESG 가치를 실천하며, 더 나은 세상을 위한 교육을 이어가겠습니다.</p>
          <a className="pill" href="/#contact">문의하기 <span className="arr">→</span></a>
        </div>
      </section>
    </main>
  );
}
