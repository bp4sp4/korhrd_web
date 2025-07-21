"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolledHeader : styles.transparentHeader
      }`}
    >
      <div className={styles.headerContent}>
        <div
          className={`${styles.logo} ${
            scrolled ? styles.scrolledLogo : styles.transparentLogo
          }`}
        >
          <span>
            <img
              width="30"
              src="/logo2.png"
              alt="로고"
              className={styles.logoImage}
            />
          </span>
          한평생교육그룹
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className={styles.navList}>
            <li>
              <a
                href="#"
                className={`${styles.navLink} ${
                  scrolled ? styles.scrolledNavLink : styles.transparentNavLink
                }`}
              >
                회사소개
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.navLink} ${
                  scrolled ? styles.scrolledNavLink : styles.transparentNavLink
                }`}
              >
                사업분야
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.navLink} ${
                  scrolled ? styles.scrolledNavLink : styles.transparentNavLink
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
