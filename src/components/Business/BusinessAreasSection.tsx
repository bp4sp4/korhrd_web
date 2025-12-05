"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Business.module.css";

import HorizontalScrollCarousel, {
  eduvisorsCards,
  trainingCards,
  practiceCards,
  CardType,
} from "@/components/ScrollCarousel/HorizontallScrollCarousel";

interface BusinessArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  link: string;
  linkText: string;
  heroImage: string;
  mobileHeroImage: string;
  leftImage: string;
  rightImage: string;
  featuresTitle: string;
  featuresDescription: string;
  cards: CardType[];
  descriptionTitle: string;
  descriptionText: string;
}

const businessAreas: BusinessArea[] = [
  {
    id: "eduvisors",
    title: "Eduvisors",
    subtitle: "2025년 7월 정식 출시",
    description: "교육의 새로운 패러다임을\n제시하는 통합 교육 플랫폼",
    date: "2025년 7월 정식 출시",
    link: "https://www.eduvisor.kr/",
    linkText: "사이트 방문하기",
    heroImage: "/images/business/eduvisor/main002.jpg",
    mobileHeroImage: "/images/business/eduvisor/main__mobile__banner.png",
    leftImage: "/images/business/eduvisor/edu001.jpg",
    rightImage: "/images/business/eduvisor/edu002.jpg",
    featuresTitle: "에듀바이저스의 핵심 기능",
    featuresDescription:
      "스크롤하여 에듀바이저스 플랫폼의 다양한 기능들을 확인해보세요",
    cards: eduvisorsCards,
    descriptionTitle: "서로의 목표를 존중하고,\n유연한 교육 방식을 추구합니다.",
    descriptionText:
      "우리는 실험하고, 설계하고, 실행하며 성장합니다.\n새로운 도전 앞에서 망설이기보다는 시도하고, 변화에 적응하기보다 변화를 만드는 학습자들과 함께하고 싶다면,\n지금 당신의 '다음'을 에듀바이저스에서 시작해보세요.",
  },
  {
    id: "lifelong-training",
    title: "한평생 직업훈련",
    subtitle: "2016년 9월 정식 출시",
    description:
      "한국직업능력연구원 정식 기관으로서\n전문 자격증 과정 운영의 선두주자",
    date: "2016년 9월 정식 출시",
    link: "https://korhrd.co.kr/",
    linkText: "사이트 방문하기",
    heroImage: "/images/business/korhrd/korhrd001.jpg",
    mobileHeroImage: "/images/business/korhrd/korhrd001.jpg",
    leftImage: "/images/business/korhrd/korhrd002.png",
    rightImage: "/images/business/korhrd/korhrd003.png",
    featuresTitle: "한평생직업훈련 주요 과정",
    featuresDescription:
      "스크롤하여 한평생직업훈련의 다양한 자격증 과정들을 확인해보세요",
    cards: trainingCards,
    descriptionTitle:
      "전문 자격증으로 새로운 시작을,\n한평생직업훈련센터와 함께하세요.",
    descriptionText:
      "우리는 최고의 교육 품질과 실무 중심의 커리큘럼으로\n학습자들의 성공적인 자격증 취득과 경력 개발을 지원합니다.\n지금 당신의 전문성을 한평생직업훈련센터에서 시작해보세요.",
  },
  {
    id: "practice-support",
    title: "한평생 실습지원",
    subtitle: "2023년 12월 출시",
    description: "종합적인 실습 지원 서비스로\n최적의 실습 환경을 제공합니다",
    date: "2023년 12월 출시",
    link: "https://pf.kakao.com/_inxaTn",
    linkText: "채널가기",
    heroImage: "/images/business/training/training001.jpg",
    mobileHeroImage: "/images/business/training/training001.jpg",
    leftImage: "/images/business/training/training002.png",
    rightImage: "/images/business/training/training003.png",
    featuresTitle: "한평생 실습지원의 서비스",
    featuresDescription:
      "스크롤하여 한평생 실습지원의 다양한 지원 서비스들을 확인해보세요",
    cards: practiceCards,
    descriptionTitle:
      "실습의 모든 것을 지원합니다,\n한평생실습지원센터와 함께하세요.",
    descriptionText:
      "우리는 체계적인 실습 지원 시스템으로 학습자들의 실무 역량 개발을 돕습니다.\n지금 당신의 실습 여정을 한평생 실습지원센터에서 시작해보세요.",
  },
];

export default function BusinessAreasSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(`.${styles.businessSection}`);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = index;
        }
      });

      setActiveSection(currentSection);
    };

    // 초기 상태 설정
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll(`.${styles.businessSection}`);
    if (sections[index]) {
      sections[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background w-full">
      {/* Scroll Progress Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.indicatorContainer}>
          {businessAreas.map((area, index) => (
            <button
              key={area.id}
              className={`${styles.indicatorDot} ${
                activeSection === index ? styles.activeDot : ""
              }`}
              onClick={() => scrollToSection(index)}
              title={area.title}
            >
              <span className={styles.dotLabel}>{area.title}</span>
            </button>
          ))}
        </div>
      </div>

      {businessAreas.map((area, index) => (
        <div key={area.id} className={styles.businessSection}>
          {/* Hero Section */}
          <section
            className={styles.heroSection}
            style={{
              backgroundImage: `url(${
                isMobile ? area.mobileHeroImage : area.heroImage
              })`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.p className={styles.heroSubtitle}>
                <span className={styles.heroSubtitleDate}>{area.date}</span>
              </motion.p>
              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {area.title}
              </motion.h1>
              <motion.p
                className={styles.heroDescription}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {area.description}
              </motion.p>

              {/* Hero CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8"
              >
                <Link
                  href={area.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  <span>{area.linkText}</span>
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
              <div className={styles.heroScrollIndicator}>
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
                  {/* Left Side */}
                  <motion.div
                    className={styles.leftSection}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className={styles.imageContainer}>
                      <div
                        className={styles.imagePlaceholder}
                        style={{
                          backgroundImage: `url(${area.leftImage})`,
                        }}
                      ></div>
                    </div>
                    <div className={styles.imageTextContainer}>
                      <h2 className={styles.imageText}>
                        {area.id === "eduvisors" &&
                          "누구나 상담가능 하고 플랫폼을 통해\n교육의 접근성과 안정성을 획기적으로 개선"}
                        {area.id === "lifelong-training" &&
                          "한국직업능력연구원에 정식 등록된\n약 50여 종 자격증 과정 운영"}
                        {area.id === "practice-support" &&
                          "실습기관 매칭부터 서류 준비까지\n전 과정을 꼼꼼히 지원"}
                      </h2>
                      <p className={styles.descriptionText}>
                        {area.id === "eduvisors" &&
                          "한평생교육은 파편화된 교육시장을 통합하고 교육 산업의 새로운 표준을 제시하고 있습니다.\n전문 상담사가 개인별 맞춤 학습 계획을 수립하고 실시간으로 학습을 지원합니다."}
                        {area.id === "lifelong-training" &&
                          "최고의 콘텐츠 전문가들이 모여 혁신적인 교육과 미디어 사업을 펼칩니다.\n 국무총리 산하 국책연구기관인 한국직업능력연구원에 정식 등록된 기관으로서,\n 신뢰할 수 있는 자격증 과정을 제공합니다."}
                        {area.id === "practice-support" &&
                          "실습을 준비하는 학습자들이 최적의 환경에서 실습을 진행할 수 있도록,\n실습기관 안내부터 서류 준비, 일정 관리까지 전 과정을 꼼꼼히 지원합니다."}
                      </p>
                    </div>
                  </motion.div>

                  {/* Right Side */}
                  <motion.div
                    className={styles.rightSection}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className={styles.imageContainer}>
                      <div
                        className={styles.imagePlaceholder2}
                        style={{
                          backgroundImage: `url(${area.rightImage})`,
                        }}
                      ></div>
                    </div>
                    <div className={styles.imageTextContainer}>
                      <h2 className={styles.imageText}>
                        {area.id === "eduvisors" &&
                          "전문 에듀바이저들이 상시 대기와\n개인별 맞춤 학습 계획 수립"}
                        {area.id === "lifelong-training" &&
                          "각 분야의 최고 전문가들이 직접 강의\n실무 중심의 교육 제공"}
                        {area.id === "practice-support" &&
                          "사전 교육부터 실습 후 관리까지\n지속적인 지원 제공"}
                      </h2>
                      <p className={styles.descriptionText}>
                        {area.id === "eduvisors" &&
                          "전문 에듀바이저들이 상시 대기하여 학습자들의 모든 질문과 요구사항에 즉시 응답합니다.\n개인별 학습 수준과 목표를 정확히 파악하여 최적화된 학습 계획을 수립하니다."}
                        {area.id === "lifelong-training" &&
                          "이론과 실습을 균형있게 제공하여 실제 업무에 바로 적용할 수 있는 실무 능력을 기릅니다.\n온라인 학습 시스템을 통해 언제 어디서나 편리하게 학습할 수 있습니다."}
                        {area.id === "practice-support" &&
                          "실습 전 필요한 기본 지식과 실무 역량을 기를 수 있는 사전 교육을 제공합니다.\n실습 중 발생할 수 있는 문제들을 해결하고 실습 완료 후평가와 피드백을 통해\n 학습 성과를 극대화합니다."}
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
                    <motion.h3
                      className="text-3xl md:text-[32px] font-bold text-[#1E1E1E] mb-2 mt-50 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      {area.featuresTitle}
                    </motion.h3>
                    <motion.p
                      className="text-[18px] text-[#1e1e1e] max-w-3xl mx-auto leading-relaxed mb-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {area.featuresDescription}
                    </motion.p>
                  </div>

                  {/* Interactive Scroll Carousel */}
                  <div className="relative -mt-8">
                    <HorizontalScrollCarousel cards={area.cards} />
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
                    {area.descriptionTitle}
                  </h3>
                  <p className={styles.descriptionText2}>
                    {area.descriptionText}
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
                  <Link
                    href={area.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.joinButton}
                  >
                    {area.linkText}
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      ))}

      
    </div>
  );
}
