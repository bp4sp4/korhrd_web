"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ESG: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] bg-black/50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/esg/image001.png"
            className="h-full w-full object-cover blur-[5px]"
            alt="ESG Banner"
            fill
            priority
          />
        </div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="md:text-[60px] text-[35px] text-white font-bold md:leading-[80px] leading-[45px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            지속가능한 미래를 위한
            <br />
            한평생교육그룹의 실천
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content - Three Sections */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Environment Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Left - Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/esg/environment.jpg"
                  alt="환경보존"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <span className="text-lg">🌱</span>
                Environment
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                지구를 위한 교육,
                <br />
                미래를 위한 투자
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                한평생교육그룹은 친환경 교육 플랫폼을 통해 탄소 중립을 실현하고
                있습니다. 디지털 교육으로 종이 사용을 최소화하고, 클라우드 기반
                학습 시스템으로 에너지 효율성을 극대화하여 지속가능한 교육
                환경을 조성합니다.
              </p>
            </div>
          </motion.div>

          {/* Social Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Left - Content */}
            <div className="space-y-6 lg:order-1 order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="text-lg">🤝</span>
                Social
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                모든 이에게 열린 교육,
                <br />
                함께 성장하는 사회
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                &apos;나눔, 채움, 배움, 이룸&apos;이라는 철학 아래 지역사회와의
                상생을 도모합니다. 모든 학습자가 차별 없이 양질의 교육을 받을 수
                있도록 지원하며, 교육을 통해 사회적 가치를 창출합니다.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative lg:order-2 order-1">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/esg/giver.jpg"
                  alt="사회공헌"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Governance Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Left - Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/esg/social.jpg"
                  alt="기업가치"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                <span className="text-lg">⚖️</span>
                Governance
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                투명한 경영,
                <br />
                지속가능한 가치 창출
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                투명한 경영과 책임 있는 의사결정을 통해 기업의 지속가능성과
                신뢰도를 높입니다. 윤리적이고 책임 있는 경영을 통해 장기적인
                가치 창출에 기여하며, 모든 이해관계자와의 신뢰 관계를
                구축합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              지속가능한 미래를 함께 만들어가요
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              한평생교육그룹과 함께 ESG 가치를 실천하며, 더 나은 세상을 위한
              교육을 이어가겠습니다.
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ESG 보고서 보기
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ESG;
