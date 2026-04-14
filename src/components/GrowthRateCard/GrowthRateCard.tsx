"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SlotCounter from "react-slot-counter";
import styles from "./GrowthRateCard.module.css";

const GrowthRateCard: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [showSlotCounter, setShowSlotCounter] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 화면에 보이는지 감지하는 IntersectionObserver 생성
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 컴포넌트가 화면에 보이면 애니메이션 시작
        if (entry.isIntersecting) {
          setIsInView(true);
          // motion 애니메이션이 완료된 후 슬롯 카운터 시작
          setTimeout(() => {
            setShowSlotCounter(true);
          }, 300); // motion 애니메이션 duration보다 빠르게 시작
        }
      },
      {
        threshold: 0.1, // 컴포넌트의 30%가 보일 때 트리거
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // 컴포넌트 언마운트 시 observer 정리
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // 빈 의존성 배열로 마운트 시에만 실행

  return (
    <div ref={cardRef} className={styles.container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* 왼쪽 - 텍스트 섹션 */}
        <div className={styles.textSection}>
          <div>
            <h2 className={styles.title}>
              한평생그룹
              <br />
              회사 성장률
            </h2>
          </div>
          <p className={styles.description}>
            교육브랜드의 가치를 증명하고
            <br />
            미래 교육을 이끌다
          </p>
          <p className={styles.caption}>2023~2024년기준</p>
        </div>

        {/* 오른쪽 - 숫자 섹션 */}
        <div className={styles.numberSection}>
          <div className={styles.number}>
            {showSlotCounter ? (
              <SlotCounter
                value={200}
                startValue={0}
                duration={1.5}
                autoAnimationStart={true}
              />
            ) : (
              <span style={{ visibility: "hidden" }}>200</span>
            )}
          </div>
          <span className={styles.percent}>%</span>
        </div>
      </motion.div>
    </div>
  );
};

export default GrowthRateCard;
