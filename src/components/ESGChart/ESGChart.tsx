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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    <div ref={chartRef} className={styles.container}>
      <div className={styles.content}>
        {/* 텍스트 섹션 */}
        <div className={styles.textSection}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <h3 className={styles.title}>
              <span className={styles.titleText}>
                한평생교육그룹
                <br />
                성장과 도약의 발자취
              </span>
            </h3>
            <div className={styles.descriptionSection}>
              <p className={styles.description}>
                빠르게 성장하고 있습니다
                <br />
                교육의 미래를 선도합니다
              </p>
              <p className={styles.caption}>2025년 예상 기준</p>
            </div>
          </motion.div>
        </div>

        {/* 차트 섹션 */}
        <motion.div
          className={styles.chartSection}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className={styles.chartWrapper}>
            <ResponsiveContainer
              width="100%"
              height={isMobile ? 350 : 500}
              className={styles.chartHeight}
            >
              <BarChart
                data={data}
                margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
              >
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 14, fill: "#6B7280", fontWeight: 500 }}
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
          </div>

          {/* 55억원+ 텍스트 */}
          <div className={styles.valueText}>
            <span>55억</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ESGChart;
