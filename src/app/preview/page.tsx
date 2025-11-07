"use client";

import React, { useState, Fragment } from "react";
import NewsSection from "@/components/infomation";
import Faq from "@/components/Card";
import ReviewSection from "@/components/reviewSection/reviewSection";

interface TabData {
  id: string;
  name: string; 
  image: string;
  text1: string;
  text2: string;
}

const tabsData: TabData[] = [
  {
    id: "study-cafe",
    name: "한평생스터디카페",
    image: "/images/main/main__banner004.webp",
    text1: "21년 업력의 교육전문그룹 한평생이 만든 신개념 스터디카페",
    text2: "한평생 스터디카페",
  },
  {
    id: "guhesseo",
    name: "한평생구했어",
    image: "/images/main/main__banner004.webp",
    text1: "21년 업력의 교육전문그룹",
    text2: "한평생구했어",
  },
  {
    id: "help",
    name: "한평생헬프",
    image: "/images/main/main__banner004.webp",
    text1: "맞춤형 온·오프라인 마케팅 구독서비스",
    text2: "한평생헬프",
  },
  {
    id: "trip",
    name: "한평생트립",
    image: "/images/main/main__banner004.webp",
    text1: "체험형 교육 여행 프로그램",
    text2: "한평생트립",
  },
  {
    id: "campus",
    name: "한평생캠퍼스",
    image: "/images/main/main__banner004.webp",
    text1: "스터디카페의 NEW PARADIGM 복합학습 사무공간",
    text2: "한평생캠퍼스",
  },
  {
    id: "lesson",
    name: "한평생레슨",
    image: "/images/main/main__banner004.webp",
    text1: "개인 맞춤형 레슨 서비스",
    text2: "한평생레슨",
  },
  {
    id: "corporate",
    name: "한평생기업 교육",
    image: "/images/main/main__banner004.webp",
    text1: "기업을 위한 전문 교육 프로그램",
    text2: "한평생기업교육",
  },
  {
    id: "credit",
    name: "한평생학점은행",
    image: "/images/main/main__banner004.webp",
    text1: "학점은행제를 통한 학위 취득 지원",
    text2: "한평생학점은행",
  },
  {
    id: "seoul-cyber",
    name: "서울사이버평생교육원",
    image: "/images/main/main__banner004.webp",
    text1: "온라인 평생교육 과정을 제공합니다",
    text2: "서울사이버평생교육원",
  },
];

const Herosection = () => {
  const [activeTab, setActiveTab] = useState<string>("study-cafe");

  const activeTabData = tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

  return (
    <div className="relative w-full bg-white" style={{ minWidth: '1280px' }}>
      {/* 메인 콘텐츠 영역 */}
      <div style={{ paddingTop: '86px', minHeight: '504px' }}>
        {/* sections section_02 - 배경 이미지 컨테이너 */}
        <div 
          className="relative w-full"
          style={{
            backgroundImage: `url(${activeTabData.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '504px',
          }}
        >
          {/* width_con - 1280px 컨테이너, 헤더와 정렬 */}
          <div className="w-[1280px] mx-auto relative h-full">
            {/* main_menu */}
            <div className="relative h-full">
              {/* main_nav - 사이드바 */}
              <div className="absolute left-0 top-0 bg-gray-900 h-[504px]" style={{ width: '200px' }}>
                <nav>
                  <ul>
                    {tabsData.map((tab) => (
                      <li key={tab.id} className={activeTab === tab.id ? "on" : ""}>
                        <button
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full text-left px-6 py-[17px] transition-all duration-200 font-bold ${
                            activeTab === tab.id
                              ? "bg-blue-600 text-white font-semibold"
                              : "text-white hover:bg-gray-800"
                          }`}
                          style={{ fontSize: '14px' }}
                        >
                          {tab.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* title_con - 텍스트 오버레이 */}
              <div className="absolute text-white z-10" style={{ left: '250px', top: '30%', transform: 'translateY(-50%)' }}>
                <div
                  key={activeTab}
                  className="space-y-2 animate-fade-in"
                >
                  <h3 
                    className="font-medium text-white leading-relaxed" 
                    style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: 700, letterSpacing: '0.05em'}}
                  >
                    {activeTabData.text1.split(' ').map((word, index, array) => {
                      // "올티칭이" 또는 "한평생이"로 시작하는 단어 앞에 줄바꿈 추가
                      if (word.startsWith('올티칭이') || word.startsWith('한평생이')) {
                        return <React.Fragment key={index}><br/>{word} </React.Fragment>;
                      }
                      return <span key={index}>{word} </span>;
                    })}
                  </h3>
                  <p className="font-semibold text-white" style={{ fontSize: '20px', marginTop: '8px', lineHeight: '1.2', fontWeight: 500, letterSpacing: '0.01em' }}>
                    {activeTabData.text2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsSection />
      <Faq />
      <ReviewSection />
    </div>

  );
};

export default Herosection;
