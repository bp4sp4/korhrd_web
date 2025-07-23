"use client";

import React from "react";
import { motion } from "framer-motion";

const CeoMessage = () => {
  return (
    <>
      {/* 6. CEO 메시지 */}
      {/* 데스크톱용 CEO 메시지 */}
      <motion.section
        className="text-black py-16 hidden md:block"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          backgroundImage: "url('/images/about/ceo_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center px-4">
          {/* 메시지 영역 */}
          <div className="flex-1 text-left">
            <div className="font-extrabold text-2xl md:text-3xl mb-6 text-white">
              CEO Message
            </div>
            <div className="text-white text-base md:text-lg leading-relaxed ">
              한평생에듀바이저스 홈페이지에 방문해 주신
              <br /> 모든 분께 감사의 말씀을 전합니다.
              <br />
              <br />
              <strong>
                한평생에듀바이저스는 학생들의 성장과 성공을 최우선으로 생각하며
                <br />
                실질적이고 현장감 있는 교육, 그리고 내일을 바꾸는 서비스를
                제공합니다.
              </strong>
              <br />
              <br />
              앞으로도 더 많은 분들이 성장의 기회를 잡을 수 있도록
              <br /> 혁신을 멈추지 않겠습니다.
              <br />
              <br />
            </div>
          </div>
          {/* 사인 영역 */}
          <div className="flex-1 flex justify-center md:justify-end items-start w-full"></div>
        </div>
      </motion.section>

      {/* 모바일용 CEO 메시지 */}
      <motion.section
        className="text-white py-16 block md:hidden relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          backgroundImage: "url('/images/about/ceo_mobile_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 px-8 relative z-10">
          {/* 메시지 영역 */}
          <div className="flex-1  text-left">
            <div className="font-extrabold text-2xl md:text-3xl mb-6 text-white">
              CEO Message
            </div>
            <div className="text-white text-[14px] md:text-lg leading-relaxed mb-8">
              한평생에듀바이저스 홈페이지에 방문해 주신
              <br /> 모든 분께 감사의 말씀을 전합니다.
              <br />
              <br />
              <strong>
                한평생에듀바이저스는 학생들의 성장과 성공을
                <br />
                최우선으로 생각하며 실질적이고 현장감 있는 교육,
                <br />
                그리고 내일을 바꾸는 서비스를 제공합니다.
              </strong>
              <br />
              <br />
              앞으로도 더 많은 분들이 성장의 기회를 잡을 수
              <br /> 있도록 혁신을 멈추지 않겠습니다.
              <br />
              <br />
            </div>
          </div>
          {/* 사인 영역 */}
          <div className="flex-1 flex justify-center md:justify-end items-start w-full"></div>
        </div>
      </motion.section>
    </>
  );
};

export default CeoMessage;
