"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  // isAdmin: null(아직 확인 전), true(어드민), false(비어있음)
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const menuListRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (menuOpen && menuListRef.current) {
      setMenuHeight(menuListRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white"
      style={{
        backgroundColor: "#191f28",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="header__logo flex items-center gap-2">
          <Image
            src="/logo2.png"
            alt="로고"
            width={28}
            height={28}
            className="header__logo-img w-[23px] h-[23px] md:w-[28px] md:h-[28px]"
          />
          <span className="font-bold text-white text-[20px] md:text-[28px]">
            한평생교육그룹
          </span>
        </Link>
        <nav className="header__nav hidden md:flex gap-3 text-white items-center">
          <Link href="/about" className="group">
            <span className="header__nav-link text-[15px] px-4 py-2 rounded-[8px] transition-colors duration-150 group-hover:bg-[rgba(217,217,255,0.11)]">
              회사소개
            </span>
          </Link>
          <Link href="/business" className="group">
            <span className="header__nav-link text-[15px] px-4 py-2 rounded-[8px] transition-colors duration-150 group-hover:bg-[rgba(217,217,255,0.11)]">
              사업분야
            </span>
          </Link>
          <Link href="/esg" className="group">
            <span className="header__nav-link text-[15px] px-4 py-2 rounded-[8px] transition-colors duration-150 group-hover:bg-[rgba(217,217,255,0.11)]">
              ESG경영
            </span>
          </Link>
        </nav>
        {/* 모바일: 햄버거/X 버튼 토글 */}
        <button
          className="header__menu-btn md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <span className="header__menu-icon text-3xl">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>
      {/* 모바일 메뉴 오버레이 */}
      {isMounted && (
        <>
          {/* 오버레이 배경: 모바일 메뉴가 열릴 때만 */}
          <div
            className={`
              fixed inset-0 z-40 transition-opacity duration-300
              ${
                menuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }
              md:hidden
            `}
            onClick={() => setMenuOpen(false)}
          />
          {/* 메뉴 리스트: 헤더 아래에서 height transition으로 스르륵 */}
          <div
            className={`
              fixed left-0 right-0 z-50 bg-[#191f28] text-white shadow-lg md:hidden overflow-hidden
              transition-[max-height] duration-200 ease-in-out
            `}
            style={{
              top: "60px",
              maxHeight: menuOpen ? `${menuHeight}px` : "0px",
            }}
          >
            <div ref={menuListRef}>
              <nav className="w-full flex flex-col items-center gap-2 px-4 py-4">
                <Link
                  href="/about"
                  className="w-full py-3 text-lg font-normal text-white hover:bg-[#22304a] rounded transition"
                  onClick={() => setMenuOpen(false)}
                >
                  회사소개
                </Link>
                <Link
                  href="/business"
                  className="w-full py-3 text-lg font-normal text-white hover:bg-[#22304a] rounded transition"
                  onClick={() => setMenuOpen(false)}
                >
                  사업분야
                </Link>

                <Link
                  href="/esg"
                  className="w-full py-3 text-lg font-normal text-white hover:bg-[#22304a] rounded transition"
                  onClick={() => setMenuOpen(false)}
                >
                  ESG경영
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
