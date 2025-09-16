"use client";

import styles from "./NewsSection.module.css";
import Image from "next/image";

const newsData = [
  {
    title:
      "한평생교육, 교육컨설팅 브랜드 '에듀바이저스' 출범… 커리어 설계 중심 서비스 강화",
    date: "2025.07.22",
    link: "https://www.ksilbo.co.kr/news/articleView.html?idxno=1032547",
    thumbnail: "/images/main/news1.jpg",
    source: "경상일보",
  },

  {
    title: "한평생교육, 교육컨설팅 브랜드 '에듀바이저스' 출범",
    date: "2024.07.21",
    link: "https://www.nbntv.co.kr/news/articleView.html?idxno=4005015",
    thumbnail: "/images/main/news2.jpg",
    source: "내외경제TV",
  },
  {
    title: "한평생교육, 교육컨설팅 전문 브랜드 '에듀바이저스' 출범",
    date: "2024.07.17",
    link: "http://www.kdpress.co.kr/news/articleView.html?idxno=139430",
    thumbnail: "/images/main/news4.png",
    source: "데일리경제",
  },
  {
    title: "한평생교육, 교육컨설팅 브랜드 '에듀바이저스' 공식 출범",
    date: "2024.07.18",
    link: "https://www.gokorea.kr/news/articleView.html?idxno=833065",
    thumbnail: "/images/main/news3.jpg",
    source: "공감신문",
  },

  {
    title:
      "한평생교육, 교육컨설팅 브랜드 '에듀바이저스' 출범… 커리어 설계 중심 서비스 강화",
    date: "2024.07.16",
    link: "https://www.siminilbo.co.kr/news/newsview.php?ncode=1160287540055868",
    thumbnail: "/images/main/news5.jpg",
    source: "시민일보",
  },
  {
    title:
      "한평생교육, '에듀바이저스' 공식 출범… 교육서비스에 커리어 컨설팅 접목",
    date: "2024.07.23",
    link: "https://www.siminilbo.co.kr/news/newsview.php?ncode=1160287540055868",
    thumbnail: "/images/main/news6.jpg",
    source: "시민일보",
  },
];

export default function NewsSection() {
  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <div className={styles.tag}>PR</div>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>언론 속 한평생교육</h2>
          <a href="/news" className={styles.moreButton}>
            더보기
            <svg
              className={styles.arrowIcon}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className={styles.newsGrid}>
          {newsData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newsCard}
            >
              <div className={styles.thumbnailContainer}>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.thumbnail}
                />
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsMeta}>
                  <span className={styles.source}>{item.source}</span>
                  <span className={styles.date}>{item.date}</span>
                </div>
                <h3 className={styles.newsTitle}>{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
