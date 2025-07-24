"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // 50px 이상 스크롤 시
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <Link href="/">
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

        {/* Navigation Links */}
        <nav>
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
              <a
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
              </a>
            </li>
            <li>
              <a
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
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
