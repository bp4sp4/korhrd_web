"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200"
      >
        {question}
        <motion.svg
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="pb-4 text-gray-600 leading-relaxed"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq: React.FC = () => {
  const faqs = [
    {
      question: "한평생교육그룹은 어떤 교육을 제공하나요?",
      answer:
        "한평생교육그룹은 국무총리산하 국책연구기관인 한국직업능력연구원에 정식 등록된 약 50여 종의 자격증 과정을 운영하며, 학습자 맞춤형 참신한 교육 콘텐츠를 제공합니다. 또한, 교육기관 마케팅 및 파트너 양성, 마케팅 전문인력 기회 제공 등 다양한 교육 사업을 진행하고 있습니다.",
    },
    {
      question: "실습지원센터는 어떤 도움을 주나요?",
      answer:
        "한평생실습지원센터는 사회복지 현장실습을 준비하는 학습자들이 최적의 환경에서 실습을 진행할 수 있도록, 실습기관 안내부터 서류 준비, 일정 관리까지 전 과정을 꼼꼼히 지원합니다. 대학교 및 교육원 실습기관 안내, 거주지 기반 실습처 섭외 지원, 실습 서류 작성 및 첨삭 도우미, 실습일정 관리 및 안내 등의 서비스를 제공합니다.",
    },
    {
      question: "에듀바이저스 플랫폼은 무엇인가요?",
      answer:
        "에듀바이저스는 파편화된 교육 시장을 통합하고, 교육의 접근성과 안정성을 획기적으로 개선하는 혁신적인 교육 플랫폼입니다. 교육기관 맞춤형 컨설팅, 학습자 진로 및 취업 연계, 온라인 교육 콘텐츠 개발, 교육 프로그램 품질 관리 등을 통해 개인의 역량 강화와 기관의 성장을 동시에 지원하며 교육 산업의 새로운 표준을 제시합니다.",
    },
    {
      question: "교육 과정 수강료는 어떻게 되나요?",
      answer:
        "각 교육 과정의 수강료는 과정별로 상이하며, 자세한 내용은 각 과정 페이지 또는 상담을 통해 확인하실 수 있습니다. 학습자분들의 부담을 덜어드리기 위해 다양한 할인 및 지원 프로그램을 운영하고 있습니다.",
    },
    {
      question: "수료 후 취업 지원도 해주나요?",
      answer:
        "네, 한평생교육그룹은 수료생들의 성공적인 취업을 위해 적극적으로 지원합니다. 취업 연계 서비스, 이력서 및 자기소개서 클리닉, 모의 면접 등 실질적인 도움을 제공하여 수료생들이 원하는 분야로 진출할 수 있도록 돕습니다.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          자주 묻는 질문
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;