"use client";
import { useState } from "react";
import styles from "./Faq.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "상담 신청은 어떻게 하나요?",
    answer:
      "에듀바이저스 공식 홈페이지로 이동하셔서 상담 신청을 해보세요. 전문 커리어 매니저와의 1:1 맞춤 상담을 통해, 나에게 꼭 맞는 교육과정을 안내받고 커리어의 방향을 함께 설계해볼 수 있습니다.",
  },

  {
    question: "실습 지원은 직접 신청해야 하나요?",
    answer:
      "아니요, 실습지원센터를 통해 채널로 접수하신 후 간단한 상담을 거쳐 실습이 가능한 기관이나 과정으로 직접 연결해드리고 있습니다. 복잡한 절차 없이 안내해드리니 편하게 신청해 주세요.",
  },
  {
    question: "수료증 발급 기준이 어떻게 되나요?",
    answer:
      "수료증은 각 과정별로 정해진 출석률과 과제 제출 요건을 모두 충족하셔야 발급됩니다. 보다 정확한 기준은 과정별로 다를 수 있으므로, 담당 전문가와 상담을 통해 자세한 안내를 받으실 수 있습니다.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>자주 묻는 질문</h2>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleFaq(index)}
              >
                <span>{item.question}</span>
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </button>
              <div
                className={`${styles.answer} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
