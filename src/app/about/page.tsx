"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import TimelineSection from "@/components/Timeline/Timeline";
import SalesChart from "@/components/SalesChart/SalesChart";
import CeoMessage from "@/components/CeoMessage/CeoMessage";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* 화면을 덮는 오버레이 */}
      <div ref={overlayRef} className={styles.pageOverlay}>
        <div className={styles.overlayContent}>
          <h1 className={styles.overlayTitle}>한평생교육그룹</h1>
          <div className={styles.loadingBar}>
            <div className={styles.loadingProgress}></div>
          </div>
        </div>
      </div>

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
            <TimelineSection />
            <SalesChart />
          </div>
        </div>

        <CeoMessage />
      </div>
    </>
  );
}
