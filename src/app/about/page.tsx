"use client";

import React from "react";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <>
      <div className={styles.container}>
        <img
          src="/images/about/main.png"
          alt="About Us"
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
        <div className={styles.about__company}>
          <h1 className={styles.company__title}>기업 소개</h1>
          <p className={styles.company__desc}>
            대한민국 1위 평생교육 전문 지주회사,
            <br /> 한평생교육그룹 한평생교육그룹은
            <br />
            평생교육망을 형성하는 선도적 교육기업입니다.
            <br />
            <br /> 수많은 시행착오를 딛고 전문성과 체계를 갖춘 기업으로
            성장했습니다.
            <br /> 시대에 맞는 교육 콘텐츠를 개발하고, 우수한 교육 인재를
            양성합니다
            <br /> 대한민국 평생교육의 트렌드를 이끌어가고 있습니다.
          </p>
        </div>
        <div className={styles.chart__wrap}>
          <h1 className={styles.chart__title}>
            한평생교육원은 오늘도 빠르게 성장하고 있습니다
          </h1>
        </div>
      </div>
    </>
  );
}
