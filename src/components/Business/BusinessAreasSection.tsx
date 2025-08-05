"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./Business.module.css";
import RecruitSection from "../recruitSection/recruitSection";

interface BusinessArea {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface BusinessAreasSectionProps {
  className?: string;
  areas?: BusinessArea[];
}

const defaultAreas: BusinessArea[] = [
  {
    id: "eduvisors",
    title: "에듀바이저스",
    description:
      "한평생교육그룹은 파편화된 교육 시장을 통합하고, '에듀바이저스' 플랫폼을 통해 교육의 접근성과 안정성을 획기적으로 개선하며, 교육 산업의 새로운 표준을 제시하고 있습니다.",
    image: "/images/business/bn003.png",
    link: "https://www.eduvisor.kr/",
  },
  {
    id: "lifelong-training",
    title: "한평생직업훈련센터",
    description:
      "국무총리산하 국책연구기관인 한국직업능력연구원에 정식 등록된 약 50여 종 자격증 과정을 운영하며, 최고의 콘텐츠 전문가들이 모여 참신한 교육과 미디어 사업을 실현합니다.",
    image: "/images/business/bn001.png",
    link: "https://korhrd.co.kr/",
  },
  {
    id: "practice-support",
    title: "한평생실습지원센터",
    description:
      "실습을 준비하는 학습자들이 최적의 환경에서 실습을 진행할 수 있도록, 실습기관 안내부터 서류 준비, 일정 관리까지 전 과정을 꼼꼼히 지원합니다.",
    image: "/images/business/bn002.png",
    link: "https://pf.kakao.com/_inxaTn",
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
          className="text-center mb-16 mt-15"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full border border-blue-200/50 mb-6"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Our Business
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            사업분야
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              평생교육 진흥의 사명감을 가지고
              <br className="md:hidden block" /> 사업을 진행하고 있습니다.
              <br />
              한평생교육그룹이 진행하고 있는 <br className="md:hidden block" />{" "}
              교육사업을 소개합니다.
            </p>
          </motion.div>
        </motion.div>

        <div className="space-y-24 md:space-y-32 mb-20">
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
                  isEven ? "md:flex-row-reverse" : "md:flex-row "
                )}
              >
                {/* 이미지 */}
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
                      className="w-full h-full object-contain duration-700"
                    />
                  </div>
                </motion.div>

                {/* 설명 */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex-1 flex flex-col justify-center"
                >
                  <div className="space-y-6">
                    <div>
                      <div className="mb-6">
                        <div className="inline-flex items-center mb-3">
                          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
                          <span className="text-sm font-medium text-blue-600 tracking-wide uppercase">
                            {area.id === "eduvisors"
                              ? "Education Platform"
                              : area.id === "lifelong-training"
                              ? "Training Center"
                              : "Practice Support"}
                          </span>
                        </div>
                        <div className="mb-4">
                          <div className="inline-block">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3">
                              {area.title}
                            </h3>
                            <motion.div
                              className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: 0.6,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    <div className="pt-4">
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
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <RecruitSection />
    </section>
  );
}
