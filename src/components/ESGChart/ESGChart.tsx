"use client";

import React, { useRef, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import styles from "./ESGChart.module.css";

const data = [
  { date: "2023", value: 20 },
  { date: "2024", value: 35 },
  { date: "2025", value: 55 },
];

const ESGChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CustomBar = (props: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    index?: number;
    [key: string]: unknown;
  }) => {
    const { x = 0, y = 0, width = 0, height = 0, index = 0 } = props;
    const isLast = index === data.length - 1;

    // 긴 동그라미(캡슐 모양) 그리기
    const radius = width / 2; // 상단/하단 둥근 부분의 반지름
    const rectHeight = height - width; // 직사각형 부분의 높이

    return (
      <g>
        {/* 중간 직사각형 부분 */}
        <rect
          x={x}
          y={y + radius}
          width={width}
          height={rectHeight}
          fill={isLast ? "#2B7FFF" : "#E5E7EB"}
        />
        {/* 상단 둥근 부분 */}
        <circle
          cx={x + width / 2}
          cy={y + radius}
          r={radius}
          fill={isLast ? "#2B7FFF" : "#E5E7EB"}
        />
        {/* 하단 둥근 부분 */}
        <circle
          cx={x + width / 2}
          cy={y + height - radius}
          r={radius}
          fill={isLast ? "#2B7FFF" : "#E5E7EB"}
        />
      </g>
    );
  };

  return (
    <div
      ref={chartRef}
      className={`w-full h-screen p-8 ${styles.chartContainer}`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 h-full ">
        {/* 왼쪽 - 차트 */}
        <motion.div
          className="w-full lg:w-1/2 h-full relative"
          style={{ height: "80%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                hide
              />
              <Bar
                dataKey="value"
                shape={<CustomBar />}
                isAnimationActive={isVisible}
                animationDuration={800}
                animationEasing="ease-out"
                animationBegin={0}
              />
            </BarChart>
          </ResponsiveContainer>

          {/* 1200만 텍스트 */}
          <div className="absolute top-4 right-[30px] transform -translate-x-1/2">
            <span className="text-2xl font-bold text-blue-600">55억원+</span>
          </div>
        </motion.div>

        {/* 오른쪽 - 텍스트 */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 pl-20"
          style={{ height: "80%" }}
        >
          <div>
            <h3 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
              <span className="text-[#1e1e1e] font-bold">한평생교육그룹</span>
            </h3>
            <p className="text-3xl font-semibold tracking-wide">
              빠르게 성장하고 있습니다
            </p>
            <p className="text-3xl font-semibold tracking-wide">
              교육의 미래를 선도합니다
            </p>
          </div>

          <div className="mt-2">
            <p className="text-base font-medium text-gray-500 italic">
              2025년 예상 기준
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESGChart;
