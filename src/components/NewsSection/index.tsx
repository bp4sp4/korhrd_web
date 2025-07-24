"use client";

import React from "react";
import { motion } from "framer-motion";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "한평생교육그룹, 2024년 상반기 교육 성과 발표",
    date: "2024-07-15",
    description:
      "한평생교육그룹이 2024년 상반기 교육 성과를 발표하며, 전년 대비 괄목할 만한 성장을 기록했다고 밝혔습니다. 특히 온라인 교육 플랫폼 '에듀바이저스'의 활약이 두드러졌습니다.",
    link: "#",
  },
  {
    id: 2,
    title: "한평생직업훈련센터, 신규 자격증 과정 3종 개설",
    date: "2024-07-10",
    description:
      "급변하는 산업 트렌드에 맞춰 한평생직업훈련센터가 인공지능, 빅데이터, 클라우드 분야의 신규 자격증 과정을 개설했습니다. 전문가 양성에 박차를 가할 예정입니다.",
    link: "#",
  },
  {
    id: 3,
    title: "한평생실습지원센터, 사회복지 현장실습 설명회 성료",
    date: "2024-07-05",
    description:
      "사회복지학과 학생들을 대상으로 한 한평생실습지원센터의 현장실습 설명회가 성황리에 마무리되었습니다. 실습생들의 궁금증을 해소하고 성공적인 실습을 지원하기 위한 자리였습니다.",
    link: "#",
  },
  {
    id: 4,
    title: "에듀바이저스, 교육기관 파트너십 100개 돌파 기념 이벤트",
    date: "2024-06-28",
    description:
      "혁신적인 교육 플랫폼 에듀바이저스가 교육기관 파트너십 100개 돌파를 기념하여 특별 이벤트를 진행합니다. 더 많은 교육기관과의 협력을 통해 교육 생태계를 확장할 계획입니다.",
    link: "#",
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          새로운 소식
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsData.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{news.date}</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {news.description}
                </p>
                <a
                  href={news.link}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  자세히 보기 &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;