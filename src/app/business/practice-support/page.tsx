"use client";

import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import styles from "./PracticeSupport.module.css";
import HorizontalScrollCarousel, {
  practiceCards,
} from "@/components/ScrollCarousel/HorizontallScrollCarousel";

export default function PracticeSupportPage() {
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
            <span className={styles.heroSubtitleDate}>2023년 12월 출시</span>
          </motion.p>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            한평생 실습지원
          </motion.h1>
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            종합적인 실습 지원 서비스로
            <br />
            최적의 실습 환경을 제공합니다
          </motion.p>

          {/* Hero CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <Link
              href="https://pf.kakao.com/_inxaTn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <span>채널가기</span>
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
              {/* Left Side - Practice Support Image */}
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
                    실습기관 매칭부터 서류 준비까지
                    <br />전 과정을 꼼꼼히 지원
                  </h2>
                  <p className={styles.descriptionText}>
                    실습을 준비하는 학습자들이 최적의 환경에서 실습을 진행할 수
                    있도록, <br />
                    실습기관 안내부터 서류 준비, 일정 관리까지 전 과정을 꼼꼼히
                    지원합니다.
                  </p>
                </div>
              </motion.div>

              {/* Right Side - Support Process Image */}
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
                    사전 교육부터 실습 후 관리까지
                    <br />
                    지속적인 지원 제공
                  </h2>
                  <p className={styles.descriptionText}>
                    실습 전 필요한 기본 지식과 실무 역량을 기를 수 있는 사전
                    교육을 제공합니다.
                    <br /> 실습 중 발생할 수 있는 문제들을 해결하고 실습 완료 후
                    평가와 피드백을 통해
                    <br className="hidden md:block" /> 학습 성과를 극대화합니다.
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
                  한평생 실습지원의 서비스
                </motion.h3>
                <motion.p
                  className="text-[18px] text-[#1e1e1e] max-w-3xl mx-auto leading-relaxed mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  스크롤하여 한평생 실습지원의 다양한 지원 서비스들을
                  확인해보세요
                </motion.p>
              </div>

              {/* Interactive Scroll Carousel */}
              <div className="relative -mt-8">
                <HorizontalScrollCarousel cards={practiceCards} />
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
                실습의 모든 것을 지원합니다,
                <br /> 한평생실습지원센터와 함께하세요.
              </h3>
              <p className={styles.descriptionText2}>
                우리는 체계적인 실습 지원 시스템으로 학습자들의 실무 역량 개발을
                돕습니다.
                <br />
                지금 당신의 실습 여정을 한평생 실습지원센터에서
                <br className="block md:hidden" /> 시작해보세요.
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
                href="https://pf.kakao.com/_inxaTn"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.joinButton}
              >
                채널방문
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
