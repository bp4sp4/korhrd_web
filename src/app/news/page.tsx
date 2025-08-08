"use client";

import styles from "./news.module.css";
import Image from "next/image";
import { getSortedNews } from "@/data/newsData";

const newsData = getSortedNews();

export default function News() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>언론 속 한평생교육그룹</h1>
        <p className={styles.subtitle}>
          한평생교육그룹의 다양한 소식과 업적을 확인하세요
        </p>
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
  );
}
