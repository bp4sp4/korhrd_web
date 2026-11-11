import type { Metadata } from "next";
import SectionNav from "@/components/site/SectionNav";
import "@/styles/sub.css";

export const metadata: Metadata = {
  title: "사업 소개 | 한평생그룹",
  description: "한평생원격교육원, 한평생직업훈련, 한평생 바로취업, 한평생 에듀바이저스 — 한평생그룹이 운영하는 사업을 소개합니다.",
  openGraph: { title: "사업 소개 | 한평생그룹", images: "/img/og/og-business.png", siteName: "한평생그룹", locale: "ko_KR", type: "website" },
  alternates: { canonical: "https://www.korhrdcorp.co.kr/business" },
};

/* eslint-disable @next/next/no-img-element */
export default function BusinessPage() {
  return (
    <main>
      <section className="sub-hero" style={{ "--hero-img": "url(/img/art/hero-business-2d.svg)" } as React.CSSProperties}>
        <div className="sub-hero-copy">
          <h1>Our Business<span className="dot">.</span></h1>
          <p>배우고, 자격을 얻고, 일하기까지. 한평생그룹이 직접 운영합니다.</p>
        </div>
      </section>

      <SectionNav variant="sub" title="BUSINESS" label="사업 소개 메뉴" items={[{ href: "#cyber", label: "한평생원격교육원" }, { href: "#hrd", label: "한평생직업훈련" }, { href: "#job", label: "한평생 바로취업" }, { href: "#partners", label: "한평생 에듀바이저스" }]} />

      {/* 원격교육원 */}
      <section className="block" id="cyber">
        <div className="inner">
          <div className="bz-top rv">
            <div>
              <div className="biz-step">STEP 01 · LEARN</div>
              <h2 className="bz-name">한평생원격교육원</h2>
              <p className="bz-tagline">교육부 평가인정 학점은행제 원격교육기관</p>
              <div className="bz-facts"><span>교육부 평가인정</span><span>학점은행제</span></div>
              <div className="bz-cta">
                <a className="pill" href="https://www.hancyber.co.kr/main/main.asp" target="_blank" rel="noopener">사이트 바로가기 <span className="arr">→</span></a>
              </div>
            </div>
            <div className="bz-art" aria-hidden="true"><img src="/img/art/biz-1-learn-25d.webp" alt="" width="320" height="320" /></div>
          </div>
          <div className="bz-points rv">
            <div>
              <h3>학점은행제로 준비하는<br />학위와 사회복지사 자격</h3>
              <p>한평생원격교육원은 교육부 정식 평가인정을 받은 학점은행제 원격교육기관입니다. 온라인으로 학점을 쌓아 학위와 사회복지사 자격을 준비할 수 있습니다.</p>
            </div>
            <div>
              <h3>학습 설계부터 관리까지,<br />1:3 전담 관리</h3>
              <p>학습설계 담당자가 개인별 커리큘럼을 설계하고, 기술지원 전문가가 학습 중 불편을 원격으로 해결하며, 학습관리 담당자가 학사일정과 진행 상황을 챙깁니다.</p>
            </div>
          </div>
          <div className="bz-sub rv">KEY SERVICES</div>
          <div className="bz-feat rv">
            <div><b>학점은행제</b><p>학위 취득에 필요한 학점을 온라인 강의로 쌓습니다.</p></div>
            <div><b>사회복지사 자격</b><p>사회복지사 자격에 필요한 과목과 신청 방법을 안내합니다.</p></div>
            <div><b>현장실습 지원</b><p>실습지원센터가 사회복지 현장실습 반 모집과 수강 신청을 돕습니다.</p></div>
            <div><b>장학제도·증명서</b><p>장학제도 안내와 증명서 발급을 교육원에서 바로 처리합니다.</p></div>
          </div>
        </div>
      </section>

      {/* 직업훈련 */}
      <section className="block alt" id="hrd">
        <div className="inner">
          <div className="bz-top rv">
            <div>
              <div className="biz-step">STEP 02 · CERTIFY</div>
              <h2 className="bz-name">한평생직업훈련</h2>
              <p className="bz-tagline">정식 등록 민간자격 온라인 교육기관</p>
              <div className="bz-facts"><span>2016년 9월 출시</span><span>한국직업능력연구원 정식 등록</span><span>자격 과정 60개+</span></div>
              <div className="bz-cta">
                <a className="pill" href="https://www.korhrd.co.kr/" target="_blank" rel="noopener">사이트 바로가기 <span className="arr">→</span></a>
              </div>
            </div>
            <div className="bz-art" aria-hidden="true"><img src="/img/art/biz-2-certify-25d.webp" alt="" width="320" height="320" /></div>
          </div>
          <div className="bz-points rv">
            <div>
              <h3>한국직업능력연구원에<br />정식 등록된 자격 과정</h3>
              <p>국무총리 산하 국책연구기관인 한국직업능력연구원에 정식 등록된 60여 개 민간자격 과정을 운영합니다. 각 분야 전문가가 실무 중심으로 강의합니다.</p>
            </div>
            <div>
              <h3>수강료 0원,<br />신청부터 발급까지 온라인으로</h3>
              <p>무료수강권으로 수강료 없이 시작하고, PC와 모바일로 동시에 수강합니다. 신청부터 자격증 발급까지 전 과정이 온라인으로 진행되며 교육기간은 6주입니다.</p>
            </div>
          </div>
          <div className="bz-sub rv">KEY SERVICES</div>
          <div className="bz-feat rv">
            <div><b>분야별 과정 찾기</b><p>복지·돌봄, 교육·아동, 상담, 병원·의료, 반려동물 등 10개 분야로 과정을 찾습니다.</p></div>
            <div><b>목적·연령 맞춤 추천</b><p>취업 준비, 이직·전직, 부업·창업 등 목적과 연령대에 맞는 과정을 추천합니다.</p></div>
            <div><b>PC·모바일 동시수강</b><p>언제 어디서나 같은 계정으로 이어서 공부합니다.</p></div>
            <div><b>카카오톡 실시간 상담</b><p>통화가 어려우면 카카오톡으로 바로 문의합니다.</p></div>
          </div>
          <div className="bz-sub rv">POPULAR COURSES</div>
          <div className="bz-chips rv">
            <span>생활지원사 1급</span><span>방과후학교지도사 1급</span><span>병원동행매니저 1급</span><span>노인심리상담사 1급</span><span>간병사 1급</span><span>독서지도사 1급</span>
          </div>
        </div>
      </section>

      {/* 바로취업 */}
      <section className="block" id="job">
        <div className="inner">
          <div className="bz-top rv">
            <div>
              <div className="biz-step">STEP 03 · WORK</div>
              <h2 className="bz-name">한평생 바로취업</h2>
              <p className="bz-tagline">중장년 취업 원스톱 플랫폼</p>
              <div className="bz-facts"><span>중장년 취업지원</span><span>직업진단</span><span>전국 일자리</span><span>지원금 찾기</span><span>AI 첨삭</span></div>
              <div className="bz-cta">
                <a className="pill" href="https://www.job24.co.kr/" target="_blank" rel="noopener">사이트 바로가기 <span className="arr">→</span></a>
              </div>
            </div>
            <div className="bz-art" aria-hidden="true"><img src="/img/art/biz-3-work-25d.webp" alt="" width="320" height="320" /></div>
          </div>
          <div className="bz-points rv">
            <div>
              <h3>직업진단부터 채용정보,<br />지원금까지 한곳에서</h3>
              <p>중장년의 취업 준비에 필요한 직업진단, 전국 채용정보, 교육·지원금 정보를 한곳에서 확인합니다.</p>
            </div>
            <div>
              <h3>자격 과정과<br />이어지는 일자리</h3>
              <p>요양보호사, 사회복지사, 병원동행처럼 자격과 연계되는 직업 정보를 함께 안내해 배운 것을 일로 잇습니다.</p>
            </div>
          </div>
          <div className="bz-sub rv">KEY SERVICES</div>
          <div className="bz-feat rv">
            <div><b>내게 맞는 직업 찾기</b><p>빅데이터 기반 직업진단으로 나에게 맞는 일을 찾습니다.</p></div>
            <div><b>전국 일자리</b><p>중장년에게 맞는 실시간 채용 정보를 확인합니다.</p></div>
            <div><b>지원금 찾기</b><p>국민내일배움카드, 중장년 취업성공패키지 등 받을 수 있는 지원을 찾습니다.</p></div>
            <div><b>이력서·자소서 AI 첨삭</b><p>AI 맞춤 첨삭으로 이력서와 자기소개서를 다듬습니다.</p></div>
          </div>
          <div className="bz-sub rv">POPULAR JOBS</div>
          <div className="bz-chips rv">
            <span>요양보호사</span><span>사회복지사</span><span>배송·운전직</span><span>사무·행정직</span><span>시설관리·미화</span><span>병원동행</span>
          </div>
        </div>
      </section>

      {/* 에듀바이저스 */}
      <section className="block alt" id="partners">
        <div className="inner">
          <div className="bz-top rv">
            <div>
              <div className="biz-step">FOR PARTNERS</div>
              <h2 className="bz-name">한평생 에듀바이저스</h2>
              <p className="bz-tagline">교육 전문가를 위한 파트너 플랫폼</p>
              <div className="bz-facts"><span>2025년 7월 정식 출범</span><span>전용 CRM 제공</span><span>초기 비용 없음</span></div>
              <div className="bz-cta">
                <a className="pill" href="https://www.eduvisor.kr/" target="_blank" rel="noopener">사이트 바로가기 <span className="arr">→</span></a>
              </div>
            </div>
            <div className="bz-art" aria-hidden="true"><img src="/img/art/biz-4-partner-25d.webp" alt="" width="320" height="320" /></div>
          </div>
          <div className="bz-points rv">
            <div>
              <h3>상담에 집중하는,<br />전문가 중심 구조</h3>
              <p>복잡한 조직 구조 없이, 교육 컨설턴트가 학습자 상담과 맞춤 과정 안내에 집중할 수 있도록 운영합니다.</p>
            </div>
            <div>
              <h3>출퇴근 없이,<br />나만의 방식으로</h3>
              <p>시간과 장소에 구애받지 않고 자유롭게 활동합니다. 가입비·교육비 같은 초기 비용은 없습니다.</p>
            </div>
          </div>
          <div className="bz-sub rv">PARTNER SUPPORT</div>
          <div className="bz-feat rv">
            <div><b>체계적인 교육 지원</b><p>과정·제도 교육과 상담 자료를 꾸준히 제공합니다.</p></div>
            <div><b>개별 CRM 제공</b><p>학습자 상담 이력과 진행 상황을 한 곳에서 관리합니다.</p></div>
            <div><b>조직 컨설팅</b><p>조직 운영을 원하면 운영 컨설팅을 함께 진행합니다.</p></div>
            <div><b>부담 없는 상담</b><p>업무 방식과 활동 내용을 충분히 안내받은 뒤 결정합니다.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
