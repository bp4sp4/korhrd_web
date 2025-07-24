"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import "./sale.css";

interface StatsItem {
  value: string;
  label: string;
}

const data = [
  { name: "2023년", 매출: 130000, 성장률: 5 },
  { name: "202년4", 매출: 350000, 매출성장액: 220000, 성장률: 35 },
  { name: "2025~진행중", 매출: 550000, 성장률: 55 },
];

const statsData: StatsItem[] = [
  { value: "13억원+", label: "2023년도" },
  { value: "35억원+", label: "2024년도" },
  { value: "200%", label: "회사성장률" },
];

interface CustomLabelProps {
  x?: string | number;
  y?: string | number;
  value?: string | number;
  index?: number;
}

const SalesChart = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true });
  const [hasChartAnimated, setHasChartAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasChartAnimated(true);
    }
  }, [isInView]);

  const CustomLabel = (props: CustomLabelProps) => {
    const { x, y, value, index } = props;

    if (
      x === undefined ||
      y === undefined ||
      value === undefined ||
      index === undefined
    ) {
      return null;
    }

    const numericX = typeof x === "string" ? parseFloat(x) : x;
    const numericY = typeof y === "string" ? parseFloat(y) : y;
    const numericValue = typeof value === "string" ? parseFloat(value) : value;

    if (isNaN(numericX) || isNaN(numericY) || isNaN(numericValue)) {
      return null;
    }

    const dataPoint = data[index];
    const name = dataPoint ? dataPoint.name : "";

    const formattedValue = `${numericValue / 10000}억`;
    let textToDisplay = formattedValue;

    if (name === "2025~진행중") {
      textToDisplay = `예상 ${formattedValue}`;
    }

    return (
      <text
        x={numericX + 40}
        y={numericY}
        dy={-30}
        fill="#666"
        fontSize="1.2em"
        fontWeight="700"
        textAnchor="middle"
      >
        {textToDisplay}
      </text>
    );
  };

  return (
    <section className="bg-white py-[100px]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[20px] md:text-4xl font-bold mb-12 text-center text-[#1e1e1e]"
        >
          <span className="text-[#2B7FFF]">한평생교육</span>은 빠르게 성장하고
          있습니다.
        </motion.h3>

        {/* 통계 수치 */}
        <div className="flex justify-around text-center py-10">
          {statsData.map((item, index) => (
            <div key={index}>
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-gray-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* 차트 영역 */}
        <motion.div
          ref={chartRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ dy: 10 }}
              />

              <Legend
                verticalAlign="top"
                align="left"
                wrapperStyle={{ fontWeight: 700 }}
              />

              <Bar
                yAxisId="left"
                dataKey="매출"
                fill="#84B4FC"
                barSize={80}
                isAnimationActive={hasChartAnimated}
                animationDuration={1500}
              >
                <LabelList
                  dataKey="매출"
                  position="top"
                  style={{ fontSize: "1.2em", fontWeight: "700" }}
                  offset={30}
                  content={CustomLabel}
                />
              </Bar>

              <Line
                yAxisId="right"
                type="natural"
                dataKey="성장률"
                stroke="#f94239"
                strokeWidth={7}
                activeDot={{ r: 8 }}
                label={{
                  position: "top",
                  style: {
                    fontSize: "1.2em",
                    fill: "#f94239",
                    fontWeight: "700",
                  },
                  offset: 50, // Adjusted offset
                  dx: 50, // Adjusted dx
                  formatter: (value: React.ReactNode) => {
                    return "";
                  },
                }}
                isAnimationActive={hasChartAnimated}
                animationDuration={2000}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesChart;
