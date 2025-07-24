"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./Business.module.css";

interface BusinessArea {
  title: string;
  description: string;
  image: string;
  features: string[];
  link: string;
}

interface BusinessAreasSectionProps {
  className?: string;
  areas?: BusinessArea[];
}

const defaultAreas: BusinessArea[] = [
  {
    title: "에듀바이저스",
    description:
      "한평생교육은 파편화된 교육 시장을 통합하고, '에듀바이저스' 플랫폼을 통해 교육의 접근성과 안정성을 획기적으로 개선하며, 교육 산업의 새로운 표준을 제시하고 있습니다.",
    image: "/images/business/bn003.png",
    features: [
      "실습기관 매칭 및 관리",
      "실습생 역량 강화 프로그램",
      "실습 과정 모니터링 및 피드백",
      "사회복지 현장 전문가 양성",
    ],
    link: "https://www.eduvisor.kr/",
  },
  {
    title: "한평생직업훈련센터",
    description:
      "국무총리산하 국책연구기관인 한국직업능력연구원에 정식 등록된 약 50여 종 자격증 과정을 운영하며, 최고의 콘텐츠 전문가들이 모여 참신한 교육과 미디어 사업을 실현합니다.",
    image: "/images/business/bn001.png",
    features: [
      "다양한 자격증 과정 운영",
      "학습자 맞춤형 참신한 교육 제공",
      "교육기관 마케팅 및 파트너 양성",
      "마케팅 전문인력 기회 제공",
    ],
    link: "https://korhrd.co.kr/",
  },
  {
    title: "한평생실습지원센터",
    description:
      "실습을 준비하는 학습자들이 최적의 환경에서 실습을 진행할 수 있도록, 실습기관 안내부터 서류 준비, 일정 관리까지 전 과정을 꼼꼼히 지원합니다.",
    image: "/images/business/bn002.png",
    features: [
      "대학교 및 교육원 실습기관 안내",
      "거주지 기반 실습처 섭외 지원",
      "실습 서류 작성 및 첨삭 도우미",
      "실습일정 꼼꼼한 관리 및 안내",
    ],
    link: "http://www.korhrdsup.kr/",
  },
];

export default function BusinessAreasSection({
  className,
  areas = defaultAreas,
}: BusinessAreasSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            사업분야{" "}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            평생교육 진흥의 사명감을가지고 사업을 진행하고 있습니다.
            <br />
            한평생교육그룹이 진행하고 있는 교육사업을 소개합니다.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {areas.map((area, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={cn(
                  "flex flex-col gap-8 md:gap-12 lg:gap-16",
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                )}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-1"
                >
                  <div className="relative h-[300px] border border-gray-300 md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-contain duration-700 "
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex-1 flex flex-col justify-center"
                >
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        {area.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="space-y-3"
                    >
                      <h4 className="text-lg font-semibold text-foreground">
                        핵심 서비스
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {area.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 1.2 + featureIndex * 0.1,
                            }}
                            className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg"
                          >
                            <svg
                              className="w-6 h-6 text-primary flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-muted-foreground font-medium">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="pt-4"
                    >
                      <Link
                        href={area.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                      >
                        자세히 보기
                        <svg
                          className="ml-3 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
