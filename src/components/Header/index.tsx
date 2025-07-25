"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuListRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHome]);

  useEffect(() => {
    if (menuOpen && menuListRef.current) {
      setMenuHeight(menuListRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [menuOpen]);

  const headerBgClass = isHome
    ? scrolled || menuOpen
      ? "bg-white"
      : "bg-transparent"
    : "bg-white";

  const headerBorderClass = isHome
    ? scrolled || menuOpen
      ? "border-b border-gray-200"
      : "border-b border-transparent"
    : "border-b border-gray-200";

  const textColorClass = isHome
    ? scrolled || menuOpen
      ? "text-black"
      : "text-white"
    : "text-black";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${headerBgClass} ${headerBorderClass}`}
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
          <span
            className={`font-bold text-[20px] md:text-[28px] ${textColorClass}`}
          >
            한평생교육그룹
          </span>
        </Link>
        <nav
          className={`header__nav hidden md:flex gap-3 items-center ${textColorClass}`}
        >
          <Link href="/about" className="group">
            <span className="header__nav-link text-[15px] px-4 py-2 rounded-[8px] transition-colors duration-150 group-hover:bg-[rgba(0,0,0,0.05)]">
              회사소개
            </span>
          </Link>
          <Link href="/business" className="group">
            <span className="header__nav-link text-[15px] px-4 py-2 rounded-[8px] transition-colors duration-150 group-hover:bg-[rgba(0,0,0,0.05)]">
              사업분야
            </span>
          </Link>
          <Link href="/esg" className="group">
            <span className="header__nav-link text-[15px] px-4 py-2 rounded-[8px] transition-colors duration-150 group-hover:bg-[rgba(0,0,0,0.05)]">
              ESG경영
            </span>
          </Link>
        </nav>
        <button
          className={`header__menu-btn md:hidden ${textColorClass}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <span className="header__menu-icon text-3xl">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>
      {isMounted && (
        <>
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
          <div
            className={`
              fixed left-0 right-0 z-50 bg-white text-black shadow-lg md:hidden overflow-hidden
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
                  className="w-full py-3 text-lg font-normal text-black hover:bg-gray-100 rounded transition"
                  onClick={() => setMenuOpen(false)}
                >
                  회사소개
                </Link>
                <Link
                  href="/business"
                  className="w-full py-3 text-lg font-normal text-black hover:bg-gray-100 rounded transition"
                  onClick={() => setMenuOpen(false)}
                >
                  사업분야
                </Link>

                <Link
                  href="/esg"
                  className="w-full py-3 text-lg font-normal text-black hover:bg-gray-100 rounded transition"
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
