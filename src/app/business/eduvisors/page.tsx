"use client";

import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import styles from "./Eduvisors.module.css";
import HorizontalScrollCarousel, {
  eduvisorsCards,
} from "@/components/ScrollCarousel/HorizontallScrollCarousel";

export default function EduvisorsPage() {
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
              2025년 7월 정식 출시
            </span>
          </motion.p>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Eduvisors
          </motion.h1>
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            교육의 새로운 패러다임을
            <br className="md:hidden" /> 제시하는 통합 교육 플랫폼
          </motion.p>

          {/* Hero CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <Link
              href="https://www.eduvisor.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <span>사이트 방문하기</span>
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className={styles.scrollIndicator}>
            <div className={styles.mouse}>
              <div className={styles.wheel}></div>
            </div>
            <div className={styles.arrowDown}>
              <span>스크롤</span>
            </div>
          </div>
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
              {/* Left Side - Mobile App Image */}
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
                    누구나 상담가능 하고 플랫폼을 통해
                    <br />
                    교육의 접근성과 안정성을 획기적으로 개선
                  </h2>
                  <p className={styles.descriptionText}>
                    한평생교육그룹은 파편화된 교육시장을 통합하고 교육 산업의
                    새로운 표준을 제시하고 있습니다.
                    <br /> 전문 상담사가 개인별 맞춤 학습 계획을 수립하고
                    실시간으로 학습을 지원합니다.
                  </p>
                </div>
              </motion.div>

              {/* Right Side - Service Representative Image */}
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
                    전문 에듀바이저들이 상시 대기와
                    <br />
                    개인별 맞춤 학습 계획 수립
                  </h2>
                  <p className={styles.descriptionText}>
                    전문 에듀바이저들이 상시 대기하여 학습자들의 모든 질문과
                    요구사항에 즉시 응답합니다.
                    <br /> 개인별 학습 수준과 목표를 정확히 파악하여 최적화된
                    학습 계획을 수립하니다.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="my-0"
            >
              <div className="text-center mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-0"
                ></motion.div>
                <motion.h3
                  className="text-3xl md:text-[32px] font-bold text-gray-900 mb-2 mt-50 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  에듀바이저스의 핵심 기능
                </motion.h3>
                <motion.p
                  className="text-[18px] text-[#1e1e1e] max-w-3xl mx-auto leading-relaxed mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  스크롤하여 에듀바이저스 플랫폼의 다양한 기능들을 확인해보세요
                </motion.p>
              </div>

              {/* Interactive Scroll Carousel */}
              <div className="relative -mt-8">
                <HorizontalScrollCarousel cards={eduvisorsCards} />
              </div>
            </motion.div>

            {/* Description Text */}
            <motion.div
              className={styles.descriptionSection}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className={styles.descriptionTitle}>
                서로의 목표를 존중하고,
                <br /> 유연한 교육 방식을 추구합니다.
              </h3>
              <p className={styles.descriptionText2}>
                우리는 실험하고, 설계하고, 실행하며 성장합니다.
                <br />
                새로운 도전 앞에서 망설이기보다는 시도하고, 변화에 적응하기보다
                변화를 만드는 학습자들과 함께하고 싶다면,
                <br />
                지금 당신의 &apos;다음&apos;을 에듀바이저스에서 시작해보세요.
              </p>
            </motion.div>
          </motion.div>

          {/* Action Buttons Section */}
          <motion.div
            className={styles.actionButtonsSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.actionButtons}>
              <Link href="/business" className={styles.listButton}>
                목록보기
              </Link>
              <Link
                href="https://www.eduvisor.kr/"
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
