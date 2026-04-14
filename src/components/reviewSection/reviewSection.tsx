"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./reviewSection.module.css";

interface CardData {
  id: string;
  quote: string;
  name: string;
  position: string;
  link?: string;
}

const slideImages: string[] = [
  "/images/main/news1.jpg",
  "/images/main/news2.jpg",
  "/images/main/news3.jpg",
  "/images/main/news4.png",
  "/images/main/news5.jpg",
];

const cards: CardData[] = [
  {
    id: "expert1",
    quote: "평생교육은 단순한 학습이 아니라 삶의 변화를 만드는 힘입니다",
    name: "김평생 학생",
    position: "한평생그룹 평생교육연구소",
  },
  {
    id: "expert2",
    quote: "언제 어디서나 배울 수 있는 환경이 진정한 평생교육의 시작입니다",
    name: "이평생 학생",
    position: "한평생그룹 온라인교육센터",
  },
  {
    id: "expert3",
    quote: "양질의 교육 콘텐츠는 학습자의 성장을 이끄는 가장 중요한 요소입니다",
    name: "박평생 학생",
    position: "한평생그룹 콘텐츠개발팀",
  },
];

export default function ReviewSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className={styles.reviewSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>우수 장학생 후기</h2>
    
        <div className={styles.contentLayout}>
          {/* 왼쪽 정보 카드들 */}
          <div className={styles.cardsGrid}>
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className={`${styles.card} ${index === currentSlide ? styles.activeCard : ''}`}
                onClick={() => setCurrentSlide(index)}
              >
                <p className={styles.cardQuote}>{card.quote}</p>
                <div className={styles.cardInfo}>
                  <span className={styles.cardName}>{card.name}</span>
                  <span className={styles.cardPosition}>| {card.position}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 오른쪽 이미지 슬라이드 */}
          <div className={styles.slideContainer}>
            <div className={styles.slideCard}>
              <Image
                src={slideImages[currentSlide] || slideImages[0]}
                alt={`Slide ${currentSlide + 1}`}
                fill
                className={styles.slideImage}
              />
            </div>
            
            <div className={styles.pagination}>
              {cards.map((_, index: number) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
