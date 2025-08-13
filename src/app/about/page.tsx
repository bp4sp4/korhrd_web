"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import TimelineSection from "@/components/Timeline/Timeline";
import ESGChart from "@/components/ESGChart/ESGChart";
import GrowthRateCard from "@/components/GrowthRateCard/GrowthRateCard";
import CeoMessage from "@/components/CeoMessage/CeoMessage";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // 기존 요소들은 독립적으로 애니메이션
    const titleElement = contentRef.current?.querySelector(
      `.${styles.overlayContent}`
    );
    if (titleElement) {
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleElement,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      titleTl.fromTo(
        titleElement,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );
    }

    // 차트 애니메이션
    const chartElement = contentRef.current?.querySelector(
      `.${styles.chart__wrap}`
    );
    if (chartElement) {
      const chartTl = gsap.timeline({
        scrollTrigger: {
          trigger: chartElement,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      chartTl.fromTo(
        chartElement,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* 메인 콘텐츠 */}
      <div ref={contentRef} className={styles.mainContent}>
        <div className={styles.container}>
          <Image
            src="/images/about/main.png"
            alt="About Us"
            fill
            style={{ objectFit: "cover" }}
            className={styles.fullHeightImage}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.overlayContent}
          >
            <h1 className={styles.title}>
              한평생교육그룹,
              <br className="block md:hidden" /> 당신곁의 배움이 되다
              <br /> 한평생교육그룹,&nbsp;
              <br className="block md:hidden" />
              함께하는 성장이 되다
            </h1>
          </motion.div>
        </div>

        <div className={styles.wrap}>
          <div className={styles.chart__wrap}>
            <ESGChart />
          </div>
        </div>
        <div className="w-full bg-gray-100">
          <div className={styles.wrap}>
            <GrowthRateCard />
          </div>
        </div>
        <TimelineSection />
        <CeoMessage />
      </div>
    </>
  );
}
