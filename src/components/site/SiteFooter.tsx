"use client";

import Link from "next/link";
import { FAMILY } from "./links";
import { openContact } from "./contact";

export default function SiteFooter() {
  return (
    <footer>
      <div className="inner">
        <div className="ft-top">
          <div className="ft-slogan">배우세요,<br />평생의 성장<span className="dot">.</span></div>
          <div className="ft-col">
            <h5>ABOUT</h5>
            <Link href="/about#intro">그룹 소개</Link>
            <Link href="/about#history">연혁</Link>
            <Link href="/about#ceo">인사말</Link>
            <Link href="/esg">ESG 경영</Link>
          </div>
          <div className="ft-col">
            <h5>BUSINESS</h5>
            <Link href="/business">사업 소개</Link>
            {FAMILY.map((f) => (
              <a key={f.name} className="fam" href={f.url} target="_blank" rel="noopener">{f.name} ↗</a>
            ))}
          </div>
          <div className="ft-col">
            <h5>CONTACT</h5>
            <a href="#" onClick={(e) => { e.preventDefault(); openContact(); }}>비즈니스 제안</a>
          </div>
        </div>
        <div className="ft-mid">
          <div>
            <div className="ft-mail">Email · korhrdpartners@naver.com</div>
          </div>
          <div className="ft-family">
            <select aria-label="패밀리 사이트" defaultValue="" onChange={(e) => { if (e.target.value) window.open(e.target.value, "_blank", "noopener"); }}>
              <option value="">FAMILY SITES</option>
              {FAMILY.map((f) => <option key={f.name} value={f.url}>{f.name}</option>)}
            </select>
          </div>
        </div>
        <div className="ft-bottom">
          <div>
            (주)한평생그룹 · 대표자 양병웅 · 사업자등록번호 227-88-03196 · 개인정보관리책임자 유현모<br />
            서울특별시 도봉구 마들로 13길 61, B동 9층 905호<br />
            © 2026 KORHRD Group. All rights reserved.
          </div>
          <div className="links"><Link href="/privacy">개인정보처리방침</Link><Link href="/terms">이용약관</Link></div>
        </div>
      </div>
    </footer>
  );
}
