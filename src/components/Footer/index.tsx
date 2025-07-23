"use client";

import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  const handleFamilySiteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = e.target.value;
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerMain}>
            <div className={styles.brandContainer}>
              <Image
                src="/logo2.png"
                alt="한평생교육그룹 로고"
                width={100}
                height={100}
                className={styles.logo}
              />
              <h2 className={styles.brandName}>한평생교육그룹</h2>
            </div>
            <div className={styles.companyInfo}>
              <p>
                대표이사 : 양병웅 | 사업자등록번호 : 227-88-03196 |
                원격평생교육시설신고 (제 원격20-6호)
              </p>
              <p>주소 : 서울시 방학로 174, 4층 | 개인정보관리책임자 : 유현모</p>
              <p>이메일 : korhrdpartners@naver.com</p>
            </div>
          </div>
          <div className={styles.familySiteContainer}>
            <select
              className={styles.familySiteSelect}
              onChange={handleFamilySiteChange}
            >
              <option value="">패밀리 사이트</option>
              <option value="https://korhrd.co.kr/">한평생직업훈련센터</option>
              <option value="http://www.korhrdsup.kr/">한국실습지원센터</option>
              <option value="https://www.eduvisor.kr/">에듀바이저스</option>
            </select>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            COPYRIGHT (C) korhrdedugroup. ALL RIGHT RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
