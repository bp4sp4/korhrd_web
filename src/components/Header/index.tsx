"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = ''; // Clean up on unmount
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isHomePage = pathname === "/";

  return (
    <header
      className={`${styles.header} ${
        isHomePage
          ? scrolled
            ? styles.scrolledHeader
            : styles.transparentHeader
          : styles.scrolledHeader
      }`}
    >
      <div className={styles.headerContent}>
        <Link href="/" onClick={closeMobileMenu}>
          <div
            className={`${styles.logo} ${
              isHomePage
                ? scrolled
                  ? styles.scrolledLogo
                  : styles.transparentLogo
                : styles.scrolledLogo
            }`}
          >
            <span>
              <Image
                width={30}
                height={30}
                src="/logo2.png"
                alt="로고"
                className={styles.logoImage}
              />
            </span>
            한평생교육그룹
          </div>
        </Link>

        {/* 햄버거 메뉴 아이콘 */}
        <div
          className={`${styles.hamburger} ${
            isMobileMenuOpen ? styles.open : ""
          } ${
            isHomePage
              ? scrolled
                ? styles.scrolledHamburger
                : styles.transparentHamburger
              : styles.scrolledHamburger
          }`}
          onClick={toggleMobileMenu}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </div>

        {/* 데스크탑 내비게이션 */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li>
              <Link
                href="/about"
                className={`${styles.navLink} ${
                  isHomePage
                    ? scrolled
                      ? styles.scrolledNavLink
                      : styles.transparentNavLink
                    : styles.scrolledNavLink
                }`}
              >
                회사소개
              </Link>
            </li>
            <li>
              <Link
                href="/business"
                className={`${styles.navLink} ${
                  isHomePage
                    ? scrolled
                      ? styles.scrolledNavLink
                      : styles.transparentNavLink
                    : styles.scrolledNavLink
                }`}
              >
                사업분야
              </Link>
            </li>
            <li>
              <Link
                href="/esg"
                className={`${styles.navLink} ${
                  isHomePage
                    ? scrolled
                      ? styles.scrolledNavLink
                      : styles.transparentNavLink
                    : styles.scrolledNavLink
                }`}
              >
                ESG경영
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      <div
        className={`${styles.mobileMenuOverlay} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link
                href="/about"
                className={styles.navLink}
                onClick={closeMobileMenu}
              >
                회사소개
              </Link>
            </li>
            <li>
              <Link
                href="/business"
                className={styles.navLink}
                onClick={closeMobileMenu}
              >
                사업분야
              </Link>
            </li>
            <li>
              <Link
                href="/esg"
                className={styles.navLink}
                onClick={closeMobileMenu}
              >
                ESG경영
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
