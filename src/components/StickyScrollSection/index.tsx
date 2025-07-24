"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StickyScrollSection.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    image: "/images/main/step1.png",
  },
  {
    image: "/images/main/step2.png",
  },
  {
    image: "/images/main/step3.png",
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
            <div className={styles.rightHeader}></div>
            <img
              className={styles.widthedu}
              src={item.image}
              alt="Step Image"
              width={800}
              height={300}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
