"use client";

import React from "react";
import Image from "next/image";
import styles from "./About.module.css";
import TimelineSection from "@/components/Timeline/Timeline";
import SalesChart from "@/components/SalesChart/SalesChart";
import CeoMessage from "@/components/CeoMessage/CeoMessage";

export default function AboutPage() {
  return (
    <>
      <div className={styles.container}>
        <Image
          src="/images/about/main.png"
          alt="About Us"
          fill
          style={{ objectFit: "cover" }}
          className={styles.fullHeightImage}
        />
        {/* You can add more content here */}
        <div className={styles.overlayContent}>
          <h1 className={styles.title}>
            한평생교육그룹, 당신 곁의 배움이 되다
            <br /> 한평생교육그룹, 함께하는 성장이 되다
          </h1>
        </div>
      </div>
      <div className={styles.wrap}>
        <div className={styles.chart__wrap}>
          <TimelineSection />
          <SalesChart />
        </div>
      </div>

      <CeoMessage />
    </>
  );
}
