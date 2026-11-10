"use client";

// 시안(docs/mockup)의 공통 동작: 헤더(스크롤 시 solid), 전체 메뉴, 맨 위로 버튼, 비즈니스 제안 폼, .rv 등장 효과
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FAMILY } from "./links";
import { OPEN_CONTACT, openContact } from "./contact";

export default function SiteChrome() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef<HTMLDialogElement>(null);

  // 히어로(.hero / .sub-hero)를 지나면 헤더 solid, 히어로가 없는 페이지(약관 등)는 항상 solid
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>(".hero, .sub-hero");
      const y = window.scrollY;
      setSolid(!hero || y > hero.offsetHeight - 80);
      setShowTop(!document.querySelector(".hero") || y > (hero?.offsetHeight ?? 0) * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // 스크롤하면 .rv 요소가 나타나는 효과 (페이지 이동마다 다시 연결)
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".rv:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const open = () => formRef.current?.showModal();
    window.addEventListener(OPEN_CONTACT, open);
    return () => window.removeEventListener(OPEN_CONTACT, open);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header id="hd" className={solid ? "solid" : undefined}>
        <Link href="/" className="logo" aria-label="한평생그룹 홈">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo/logo-black.png" alt="한평생그룹" />
        </Link>
        <nav className="hd-nav" aria-label="주요 메뉴">
          <Link href="/about">ABOUT</Link>
          <Link href="/business">BUSINESS</Link>
          <Link href="/esg">ESG</Link>
          <Link href="/#contact">CONTACT</Link>
          <button className="burger" aria-label="전체 메뉴 열기" onClick={() => setMenuOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </nav>
      </header>

      <div className={`full-menu${menuOpen ? " open" : ""}`} id="fm" role="dialog" aria-label="전체 메뉴">
        <button className="close" aria-label="메뉴 닫기" onClick={close}>×</button>
        <div className="inner fm-grid">
          <div>
            <h3>ABOUT</h3>
            <Link href="/about#intro" onClick={close}>그룹 소개</Link>
            <Link href="/about#history" onClick={close}>연혁</Link>
            <Link href="/about#ceo" onClick={close}>인사말</Link>
            <Link href="/esg" onClick={close}>ESG 경영</Link>
          </div>
          <div>
            <h3>BUSINESS</h3>
            <Link href="/business" onClick={close}>사업 소개</Link>
            {FAMILY.map((f) => (
              <a key={f.name} className="fam" href={f.url} target="_blank" rel="noopener">{f.name} ↗</a>
            ))}
          </div>
          <div>
            <h3>CONTACT</h3>
            <a href="#" onClick={(e) => { e.preventDefault(); close(); openContact(); }}>비즈니스 제안</a>
          </div>
        </div>
      </div>

      <div className={`float${showTop ? " show" : ""}`}>
        <button aria-label="맨 위로" onClick={() => window.scrollTo({ top: 0 })}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
        </button>
      </div>

      <dialog id="form" ref={formRef}>
        <button className="x" aria-label="닫기" onClick={() => formRef.current?.close()}>×</button>
        <h3>비즈니스 제안</h3>
        <p className="sub">제휴·협업 제안을 남겨주시면 담당자가 검토 후 연락드립니다.</p>
        {/* 접수 연동 전: 시안과 같이 안내만 띄움 */}
        <form method="dialog" onSubmit={() => alert("제안 접수 기능은 준비 중입니다. korhrdpartners@naver.com 으로 보내주세요.")}>
          <div className="field-row pair">
            <div className="field"><label htmlFor="f-company">회사명 <span className="req" aria-hidden="true">*</span></label><input id="f-company" required /></div>
            <div className="field"><label htmlFor="f-name">담당자명 <span className="req" aria-hidden="true">*</span></label><input id="f-name" required /></div>
          </div>
          <div className="field-row">
            <div className="field"><label htmlFor="f-tel">연락처 <span className="opt">(선택)</span></label><input id="f-tel" type="tel" placeholder="010-0000-0000" /></div>
            <div className="field"><label htmlFor="f-mail">이메일 <span className="req" aria-hidden="true">*</span></label><input id="f-mail" type="email" required placeholder="name@company.com" /></div>
          </div>
          <div className="field">
            <label htmlFor="f-type">제안 유형 <span className="opt">(선택)</span></label>
            <select id="f-type"><option>교육 제휴</option><option>기업교육</option><option>마케팅·광고</option><option>기타</option></select>
          </div>
          <div className="field"><label htmlFor="f-msg">제안 내용 <span className="req" aria-hidden="true">*</span></label><textarea id="f-msg" required rows={4} placeholder="제안하실 내용을 간단히 적어주세요." /></div>
          <label className="agree"><input type="checkbox" required /><span><Link href="/privacy" target="_blank">개인정보 수집·이용</Link>에 동의합니다. (필수)</span></label>
          <button className="pill" type="submit">제안하기 <span className="arr">→</span></button>
        </form>
      </dialog>
    </>
  );
}
