"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StickyScrollSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "함께할수록, 더 성장하는 교육",
    description:
      "혼자 공부하는 것도 좋지만, 함께할 때 배움의 깊이와 속도는 달라집니다. <br /> 언제 어디서든 쉽고 체계적으로, 실전 중심의 교육을 경험해보세요.",
    image: "/images/main/withedu.png",
  },
  {
    title: "실무 중심 프로젝트",
    description: "실제 업무에 바로 적용 가능한 실전 프로젝트 수행",
    image: "/images/main/withedu.png",
  },
  {
    title: "성장 데이터 제공",
    description: "성과가 입증된 데이터로 교육 효과를 직접 확인하세요.",
    image: "/images/main/withedu.png",
  },
];

export default function StickyScrollSplit() {
  useEffect(() => {
    const elements = gsap.utils.toArray(".fade-up") as HTMLElement[];

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.section}>
      {/* 왼쪽 컬러 sticky 영역 */}
      <div className={styles.left}>
        <div className={styles.leftInner}>
          <div className={styles.leftTitle}>실전 교육 · 성장 지원</div>
          <h1 className={styles.leftHeading}>
            우리가 함께 만드는
            <br />
            교육의 새로운 미래
          </h1>
          <button className={styles.leftButton}>자세히 보기</button>
        </div>
      </div>
      {/* 오른쪽 카드 스크롤 영역 */}
      <div className={styles.right}>
        {items.map((item, idx) => (
          <div key={idx} className={`${styles.card} fade-up`}>
            <div className={styles.rightHeader}>
              <h2 className={styles.rightTitle}>{item.title}</h2>
              <p
                className={styles.rightDesc}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
            <img
              className={styles.widthedu}
              src={item.image}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
