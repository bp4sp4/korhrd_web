"use client";

import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import styles from "./LifelongTraining.module.css";

export default function LifelongTrainingPage() {
  return (
    <div className="min-h-screen bg-background w-full">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p className={styles.heroSubtitle}>
            <span className={styles.heroSubtitleDate}>
              2016년 9월 정식 출시
            </span>
          </motion.p>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            한평생직업훈련센터
          </motion.h1>
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            전문 자격증 과정 운영의 선두주자
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          {/* Service Preview Section */}
          <motion.div
            className={styles.servicePreview}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.previewGrid}>
              {/* Left Side - Training Image */}
              <motion.div
                className={styles.leftSection}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={styles.imageContainer}>
                  <div className={styles.imagePlaceholder}></div>
                </div>
                <div className={styles.imageTextContainer}>
                  <h2 className={styles.imageText}>
                    한국직업능력연구원에 정식 등록된
                    <br />약 50여 종 자격증 과정 운영
                  </h2>
                  <p className={styles.descriptionText}>
                    국무총리산하 국책연구기관인 한국직업능력연구원에 정식 등록된
                    기관으로 신뢰할 수 있는 자격증 과정을 제공합니다.
                    <br /> 최고의 콘텐츠 전문가들이 모여 참신한 교육과 미디어
                    사업을 실현합니다.
                  </p>
                </div>
              </motion.div>

              {/* Right Side - Professional Training Image */}
              <motion.div
                className={styles.rightSection}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className={styles.imageContainer}>
                  <div className={styles.imagePlaceholder2}></div>
                </div>
                <div className={styles.imageTextContainer}>
                  <h2 className={styles.imageText}>
                    각 분야의 최고 전문가들이 직접 강의
                    <br />
                    실무 중심의 교육 제공
                  </h2>
                  <p className={styles.descriptionText}>
                    이론과 실습을 균형있게 제공하여 실제 업무에 바로 적용할 수
                    있는 실무 능력을 기릅니다.
                    <br /> 온라인 학습 시스템을 통해 언제 어디서나 편리하게
                    학습할 수 있습니다.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Description Text */}
            <motion.div
              className={styles.descriptionSection}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className={styles.descriptionTitle}>
                전문 자격증으로 새로운 시작을,
                <br /> 한평생직업훈련센터와 함께하세요.
              </h3>
              <p className={styles.descriptionText2}>
                우리는 최고의 교육 품질과 실무 중심의 커리큘럼으로
                <br />
                학습자들의 성공적인 자격증 취득과 경력 개발을 지원합니다.
                <br />
                지금 당신의 전문성을 한평생직업훈련센터에서 시작해보세요.
              </p>
            </motion.div>
          </motion.div>

          {/* Action Buttons Section */}
          <motion.div
            className={styles.actionButtonsSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.actionButtons}>
              <Link href="/business" className={styles.listButton}>
                목록보기
              </Link>
              <Link
                href="https://korhrd.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.joinButton}
              >
                사이트방문
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
