"use client";

import styles from "./NewsSection.module.css";

const newsData = [
  {
    title:
      "한평생교육, 교육컨설팅 브랜드 ‘에듀바이저스’ 출범… 커리어 설계 중심 서비스 강화",
    date: "2025.07.22",
    link: "https://www.ksilbo.co.kr/news/articleView.html?idxno=1032547",
    thumbnail: "/images/main/news1.jpg",
  },
  {
    title: "한평생교육, 교육컨설팅 브랜드 '에듀바이저스' 출범",
    date: "2024.07.21",
    link: "https://www.nbntv.co.kr/news/articleView.html?idxno=4005015",
    thumbnail: "/images/main/news2.jpg", // Example thumbnail
  },
  {
    title: "한평생교육, 교육컨설팅 전문 브랜드 '에듀바이저스' 출범",
    date: "2024.07.17",
    link: "http://www.kdpress.co.kr/news/articleView.html?idxno=139430",
    thumbnail: "/images/main/news4.png", // Example thumbnail
  },
  {
    title: "한평생교육, 교육컨설팅 브랜드 ‘에듀바이저스’ 공식 출범",
    date: "2024.07.18",
    link: "https://www.gokorea.kr/news/articleView.html?idxno=833065",
    thumbnail: "/images/main/news3.jpg", // Example thumbnail
  },

  {
    title:
      "한평생교육, 교육컨설팅 브랜드 ‘에듀바이저스’ 출범… 커리어 설계 중심 서비스 강화",
    date: "2024.07.16",
    link: "https://www.siminilbo.co.kr/news/newsview.php?ncode=1160287540055868",
    thumbnail: "/images/main/news5.jpg", // Example thumbnail
  },
];

export default function NewsSection() {
  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          언론 속 <span className={styles.subtitle}>한평생교육그룹</span>
        </h2>
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
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={styles.thumbnail}
                />
              </div>
              <div className={styles.newsContent}>
                <h3 className={styles.newsTitle}>{item.title}</h3>
                <p className={styles.newsDate}>{item.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
