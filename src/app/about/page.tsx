"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import TimelineSection from "@/components/Timeline/Timeline";
import SalesChart from "@/components/SalesChart/SalesChart";

import CeoMessage from "@/components/CeoMessage/CeoMessage";
import Faq from "@/components/Faq";

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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.overlayContent}
        >
          <h1 className={styles.title}>
            한평생교육그룹, 당신 곁의 배움이 되다
            <br /> 한평생교육그룹, 함께하는 성장이 되다
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
      <Faq />
    </>
  );
}
