"use client";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      {/* 상단 탑 네비게이션 바 */}
      <div className={styles.topNav}>
        <div className={styles.topNavContainer}>
          <nav className={styles.topNavLinks}>
            <a href="https://korhrd.co.kr/" target="_blank" className={styles.topNavLink}>한평생직업훈련</a>
            <a href="https://caving-demo.vercel.app/" target="_blank" className={styles.topNavLink}>한평생요양보호사</a>
            <a href="#" className={styles.topNavLink}>한평생유학</a>
            <a href="#" className={styles.topNavLink}>한평생AI</a>
            <a href="#" className={styles.topNavLink}>한평생바로취업</a>
            <a href="#" className={styles.topNavLink}>한평생기업교육</a>            
            <a href="#" className={styles.topNavLink}>한평생실습지원센터</a>
            <a href="#" className={styles.topNavLink}>비즈니스제안</a>
          </nav>
        </div>
      </div>

      {/* 메인 헤더 (로고와 Donation 버튼) */}
      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderContainer}>
          <div className={styles.logoSection}>
            <img src="/logo_black.png" alt="한평생교육" className={styles.logo} />
          </div>
        </div>
      </div>
    </>
  );
}
