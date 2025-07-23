"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "./TimeLine.css";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  achievements: string[];
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="bg-white py-[30px]">
      <div className="max-w-4xl mx-auto">
        <h3 className="tm__title text-[20px] md:text-4xl font-bold mb-12 mt-12 text-center text-[#1e1e1e]">
          <span className="text-[#2B7FFF]">한평생교육</span>은 빠르게 변화하고
          있습니다.
        </h3>
        <div className="w-full font-sans md:px-10" ref={containerRef}>
          <div ref={ref} className="relative max-w-4xl mx-auto pb-20">
            {data.map((item: TimelineEntry, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex justify-start pt-10 md:pt-30 md:gap-10"
              >
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full  flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-blue-500 border border-blue-600 p-2" />
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#2B7FFF]">
                    {item.year}
                  </h3>
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-blue-400">
                    {item.year}
                  </h3>
                  <div className="text-[#1e1e1e]">
                    <h4 className="text-xl md:text-2xl font-bold mb-4 text-[#1e1e1e]">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed w-[300px]">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.achievements.map(
                        (achievement: string, idx: number) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-gray-700 text-sm md:text-base"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-gray-300 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-blue-400 to-transparent rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const timelineData: TimelineEntry[] = [
    {
      year: "2025",
      title: "교육플랫폼의 새로운 기준",
      description:
        "한평생교육은 파편화된 교육 시장을 통합하고, '한평생에듀바이저스' 플랫폼으로 교육 접근성과 안정성을 획기적으로 개선하며, 교육 산업의 새로운 표준을 제시하고 있습니다.",
      achievements: ["한평생 에듀바이저스 정식출범"],
    },
    {
      year: "2024",
      title: "교육플랫폼으로의 도약",
      description:
        "한평생교육은 기존 교육의 한계를 넘어서, 학습부터 자격 취득, 취업 연계까지 아우르는 종합 교육 플랫폼으로 진화하며 업계 내 확고한 지위를 확보하였습니다.",
      achievements: [
        "(주)한평생교육 법인 설립",
        "교육브랜드 정식 플랫폼화 실시",
        "취업연계 서비스 구축",
      ],
    },
    {
      year: "2023",
      title: "평생교육의 첫 서비스화",
      description:
        "교육과 취업을 연결하는 사명을 바탕으로, 교육을 하나의 서비스로 혁신하여 실질적인 가치를 제공하는 여정을 시작하였습니다.",
      achievements: [
        "한국평생교육지원센터 설립",
        "한국실습지원센터 설립",
        "전국단위 실습섭외 서비스 구축",
      ],
    },
  ];

  return <Timeline data={timelineData} />;
};

export default TimelineSection;
