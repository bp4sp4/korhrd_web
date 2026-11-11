import Link from "next/link";
import SectionNav from "@/components/site/SectionNav";
import ContactButton from "@/components/site/ContactButton";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <SectionNav variant="side" title="HOME" label="섹션 이동" items={[{ href: "#about", label: "그룹 소개" }, { href: "#business", label: "사업 소개" }, { href: "#value", label: "왜 한평생인가" }]} />
      <main id="top">
      {/* HERO */}
      <section className="hero">
        <div className="hero-art" aria-hidden="true"></div>
        <div className="hero-copy">
          <h1>배움에서 일까지,<br />한평생<span className="dot">.</span></h1>
          <p>학위와 자격, 그리고 일자리까지<br />평생교육의 모든 단계를 한평생그룹이 잇습니다.</p>
        </div>
        <div className="hero-family" aria-label="한평생 운영 사이트">
          <a href="https://www.hancyber.co.kr/main/main.asp" target="_blank" rel="noopener"><span><small>LEARN</small><b>한평생원격교육원</b></span><span className="arr">↗</span></a>
          <a href="https://www.korhrd.co.kr/" target="_blank" rel="noopener"><span><small>CERTIFY</small><b>한평생직업훈련</b></span><span className="arr">↗</span></a>
          <a href="https://www.job24.co.kr/" target="_blank" rel="noopener"><span><small>WORK</small><b>한평생 바로취업</b></span><span className="arr">↗</span></a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="block" id="about">
        <div className="inner">
          <div className="about-grid">
            <div className="rv">
              <h2 className="big-en">한평생그룹<span className="dot">.</span></h2>
              <div className="tags"><span>#평생교육</span><span>#자격취득</span><span>#취업연계</span></div>
            </div>
          </div>
          <div className="about-text rv">
            <p className="lead-gray">한평생그룹은 <em>학점은행제와 자격 과정, 취업 지원</em>을 하나로 잇는 <br />평생교육·취업 그룹입니다.</p>
            <p className="lead-gray">나이와 경력에 상관없이 누구나 다시 배우고, <br /><em>배운 것으로 일하는 삶</em>을 함께 만듭니다.</p>
          </div>
          <div className="about-art" aria-hidden="true">
            <img src="/img/art/about-orbit-25d.webp" alt="" width="800" height="800" />
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="block" id="business" style={{ paddingTop: "60px" }}>
        <div className="inner">
          <div className="biz-head rv">
            <h2 className="big-en">사업 소개<span className="dot">.</span></h2>
            <p className="lead-gray" style={{ marginTop: "28px" }}>배우고, 자격을 얻고, 일하기까지. <br />한평생이 직접 운영하는 대표 서비스입니다.</p>
            <Link className="pill line" style={{ marginLeft: "0" }} href="/business">사업 더 알아보기 <span className="arr">→</span></Link>
          </div>

          <article className="biz-row rv">
            <div className="biz-art" aria-hidden="true">
              <img src="/img/art/biz-1-learn-25d.webp" alt="" width="280" height="280" />
            </div>
            <div>
              <div className="biz-step">STEP 01 · LEARN</div>
              <h3 className="biz-name">한평생원격교육원</h3>
              <p className="biz-desc">학점은행제로 학위와 사회복지사 자격을 준비합니다. 학습설계·기술지원·학습관리 담당자가 1:3으로 학습 전 과정을 함께합니다.</p>
              <div className="biz-kw"><span>#학점은행제</span><span>#사회복지사</span><span>#실습지원</span></div>
              <a className="pill" href="https://www.hancyber.co.kr/main/main.asp" target="_blank" rel="noopener">사이트 바로가기 <span className="arr">→</span></a>
            </div>
          </article>

          <article className="biz-row rev rv">
            <div className="biz-art" aria-hidden="true">
              <img src="/img/art/biz-2-certify-25d.webp" alt="" width="280" height="280" />
            </div>
            <div>
              <div className="biz-step">STEP 02 · CERTIFY</div>
              <h3 className="biz-name">한평생직업훈련</h3>
              <p className="biz-desc">정식 등록 민간자격을 온라인으로 공부합니다. 복지·돌봄, 상담, 병원·의료, 반려동물 등 취업으로 이어지는 분야의 과정을 목적과 연령에 맞춰 추천합니다.</p>
              <div className="biz-kw"><span>#민간자격</span><span>#수강료무료</span><span>#PC·모바일</span></div>
              <a className="pill" href="https://www.korhrd.co.kr/" target="_blank" rel="noopener">사이트 바로가기 <span className="arr">→</span></a>
            </div>
          </article>

          <article className="biz-row rv">
            <div className="biz-art" aria-hidden="true">
              <img src="/img/art/biz-3-work-25d.webp" alt="" width="280" height="280" />
            </div>
            <div>
              <div className="biz-step">STEP 03 · WORK</div>
              <h3 className="biz-name">한평생 바로취업</h3>
              <p className="biz-desc">중장년 취업을 한 곳에서 준비하는 플랫폼입니다. 직업진단, 전국 일자리, 받을 수 있는 지원금, <span className="nb">이력서·자소서</span> 첨삭까지 이어집니다.</p>
              <div className="biz-kw"><span>#중장년취업</span><span>#지원금찾기</span><span>#이력서첨삭</span></div>
              <a className="pill" href="https://www.job24.co.kr/" target="_blank" rel="noopener">사이트 바로가기 <span className="arr">→</span></a>
            </div>
          </article>
        </div>
      </section>

      {/* OTHERS */}
      <section className="block others" id="others">
        <div className="inner">
          <div className="rv">
            <h2 className="big-en">더 많은 서비스<span className="dot">.</span></h2>
            <p className="lead-gray" style={{ marginTop: "28px" }}>지금 바로 이용할 수 있는 한평생의 서비스입니다.</p>
          </div>
          <div className="other-grid rv">
            <a className="other" href="https://www.hancyber.co.kr/main/main.asp" target="_blank" rel="noopener"><h4 className="label">사회복지 현장실습 지원</h4><p>사회복지 실습 모집부터 수강 신청까지<br />실습지원센터가 함께합니다.</p><span className="via">한평생원격교육원 ↗</span></a>
            <a className="other" href="https://www.korhrd.co.kr/" target="_blank" rel="noopener"><h4 className="label">무료 자격 과정</h4><p>정식 등록 민간자격 60여 개 과정을<br />수강료 0원으로, 6주 만에 취득합니다.</p><span className="via">한평생직업훈련 ↗</span></a>
            <a className="other" href="https://www.job24.co.kr/" target="_blank" rel="noopener"><h4 className="label">내게 맞는 직업 찾기</h4><p>빅데이터 기반 직업진단으로<br />나에게 맞는 일을 찾아드립니다.</p><span className="via">한평생 바로취업 ↗</span></a>
            <a className="other" href="https://www.job24.co.kr/" target="_blank" rel="noopener"><h4 className="label">취업 지원금 찾기</h4><p>국민내일배움카드, 취업성공패키지 등<br />받을 수 있는 지원을 찾아드립니다.</p><span className="via">한평생 바로취업 ↗</span></a>
            <a className="other" href="https://www.eduvisor.kr/" target="_blank" rel="noopener"><h4 className="label">교육 컨설턴트 파트너</h4><p>시간과 장소에 구애받지 않고<br />교육 상담 전문가로 활동합니다.</p><span className="via">한평생 에듀바이저스 ↗</span></a>
            <a className="other" href="https://www.eduvisor.kr/" target="_blank" rel="noopener"><h4 className="label">파트너 전용 CRM</h4><p>학습자 상담 이력과 진행 상황을<br />파트너별 전용 CRM에서 관리합니다.</p><span className="via">한평생 에듀바이저스 ↗</span></a>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="block" id="value">
        <div className="inner">
          <div className="rv">
            <h2 className="big-en">왜 한평생인가<span className="dot">.</span></h2>
          </div>
          <div className="val-grid">
            <div className="val rv">
              <div className="ic"><img src="/img/icon/why-1-group-25d.webp" alt="" width="150" height="150" /></div>
              <h3>배움부터 취업까지<br />한 그룹에서</h3>
              <p>학위·자격·취업 사이트를 한평생이 직접 운영해, 다음 단계로 넘어갈 때 다시 처음부터 알아볼 필요가 없습니다.</p>
            </div>
            <div className="val rv">
              <div className="ic"><img src="/img/icon/why-2-certified-25d.webp" alt="" width="150" height="150" /></div>
              <h3>교육부 평가인정<br />학점은행제 기관</h3>
              <p>한평생원격교육원은 교육부 정식 평가인정을 받은 학점은행제 원격교육기관입니다. 학위와 사회복지사 자격을 학점은행제로 준비할 수 있습니다.</p>
            </div>
            <div className="val rv">
              <div className="ic"><img src="/img/icon/why-3-license-25d.webp" alt="" width="150" height="150" /></div>
              <h3>정식 등록된<br />민간자격 과정</h3>
              <p>한평생직업훈련의 60여 개 자격 과정은 국책연구기관인 한국직업능력연구원에 정식 등록되어 있습니다.</p>
            </div>
            <div className="val rv">
              <div className="ic"><img src="/img/icon/why-4-care-25d.webp" alt="" width="150" height="150" /></div>
              <h3>1:3 전담<br />학습관리</h3>
              <p>학습설계, 기술지원, 학습관리 담당자 세 명이 수강 시작부터 이수까지 함께합니다.</p>
            </div>
          </div>

          <div className="num-grid rv" aria-label="한평생그룹 주요 수치">
            <div className="num"><b>128,400<span className="dot">+</span></b><span>누적 수강생</span></div>
            <div className="num"><b>96,200</b><span>자격증 발급(건)</span></div>
            <div className="num"><b>60<span className="dot">+</span></b><span>정식 등록 자격 과정</span></div>
            <div className="num"><b>307</b><span>바로취업 취업 성공(명)</span></div>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-art" aria-hidden="true"></div>
        <div className="inner">
          <div className="contact-big">함께 성장할<br />파트너를 기다립니다<span className="dot">.</span></div>
          <div className="contact-row">
            <p>배움과 일을 잇는 새로운 제안,<br />한평생에 남겨주세요.</p>
            <div className="contact-btns">
              <ContactButton className="pill white">비즈니스 제안 <span className="arr">→</span></ContactButton>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
