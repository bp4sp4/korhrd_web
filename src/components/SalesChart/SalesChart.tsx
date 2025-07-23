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

const data = [
  { name: "2023", 매출: 130000, 성장률: 5 },
  {
    name: "2024",
    매출: 350000,
    매출성장액: 220000, // 350000 - 130000
    성장률: 200,
  },
  {
    name: "2025~진행중",
    매출: 270000,
  },
];

const SalesChart = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true });
  const [hasChartAnimated, setHasChartAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasChartAnimated(true);
    }
  }, [isInView]);

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
          한평생교육은 빠르게 성장하고 있습니다.
        </motion.h3>
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
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ dy: 10 }} // 레이블을 아래로 10px 이동
              />
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  paddingLeft: 100,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Legend
                  verticalAlign="top"
                  align="left"
                  wrapperStyle={{
                    fontWeight: 700,
                  }}
                  className="legend-wrapper"
                />
              </motion.div>
              <Bar
                yAxisId="left"
                dataKey="매출"
                fill="#84B4FC" // 막대 색상 변경
                barSize={80} // 막대 두께 증가
                isAnimationActive={hasChartAnimated}
                animationDuration={1500}
              >
                <LabelList
                  dataKey="매출"
                  position="top"
                  style={{ fontSize: "1.2em", fontWeight: "700" }}
                  offset={30}
                  formatter={(value: React.ReactNode) =>
                    typeof value === "number" ? `${value / 10000}억` : ""
                  }
                />
              </Bar>
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="성장률"
                stroke="#f94239" // 선 색상 변경
                strokeWidth={7} // 선 두께 증가
                activeDot={{ r: 8 }}
                label={{
                  position: "top",
                  style: {
                    fontSize: "1.2em",
                    fill: "#f94239",
                    fontWeight: "700",
                  }, // 글씨 색상 변경
                  offset: -140, // 레이블을 아래로 이동
                  dx: -200,
                  formatter: (value: React.ReactNode) => {
                    if (typeof value === "number") {
                      if (value === 0) return "";
                      if (value % 1 === 0) return `${value}% 증가`;
                      return `${value.toFixed(2)}% 증가`;
                    }
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
