"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GrowthRateCardProps {
  isVisible?: boolean;
}

const GrowthRateCard: React.FC<GrowthRateCardProps> = ({
  isVisible = true,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        // 카지노 슬롯머신 효과
        let currentCount = 0;
        const targetCount = 200;
        const duration = 2000; // 2초
        const steps = 50; // 50단계
        const stepDuration = duration / steps;

        const interval = setInterval(() => {
          currentCount += Math.floor(targetCount / steps);

          if (currentCount >= targetCount) {
            setCount(targetCount);
            clearInterval(interval);
          } else {
            setCount(currentCount);
          }
        }, stepDuration);

        return () => clearInterval(interval);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setCount(0);
    }
  }, [isVisible]);

  return (
    <div style={{ padding: "210px 0" }}>
      <motion.div
        className="w-full h-[80%] flex items-center justify-between px-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -50,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* 왼쪽 - 텍스트 */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-3">
              한평생교육그룹
            </h2>
            <p className="text-3xl font-semibold text-gray-700">
              2023~2024년도 회사성장률
            </p>
          </div>
          <p className="text-2xl text-gray-600 leading-relaxed">
            교육브랜드 회사로서의 본질적인 가치를 입증
          </p>
          <p className="text-lg text-gray-500">2025년 예상 기준</p>
        </div>

        {/* 오른쪽 - 큰 숫자 */}
        <div className="flex items-end space-x-3">
          <span className="text-9xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {count}
          </span>
          <span className="text-4xl font-bold text-blue-600 mb-6">%</span>
        </div>
      </motion.div>
    </div>
  );
};

export default GrowthRateCard;
