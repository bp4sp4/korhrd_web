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
    id: "guhesseo",
    name: "한평생직업훈련",
    image: "/images/main/main__banner004.webp",
    text1: "이력서 한줄,<br/>나의 경쟁력이 됩니다",
    text2: "듣고 끝나는 강의가 아닌 정식 등록 자격증으로<br/> 직무 전문성을 증명해보세요!",
  },
  {
    id: "help",
    name: "한평생요양보호사",
    image: "/images/main/main__banner004.webp",
    text1: "요양보호사 전문기관",
    text2: "한평생헬프",
  },
  {
    id: "trip",
    name: "한평생유학",
    image: "/images/main/main__banner004.webp",
    text1: "유학 전문기관",
    text2: "한평생트립",
  },
  {
    id: "campus",
    name: "한평생AI",
    image: "/images/main/main__banner004.webp",
    text1: "한평생AI 시스템",
    text2: "한평생AI",
  },
  {
    id: "lesson",
    name: "한평생바로취업",
    image: "/images/main/main__banner004.webp",
    text1: "바로취업 전문기관",
    text2: "한평생레슨",
  },
  {
    id: "corporate-education",
    name: "한평생기업교육",
    image: "/images/main/main__banner004.webp",
    text1: "기업교육 전문기관",
    text2: "한평생기업교육",
  },
 
  {
    id: "credit",
    name: "한평생실습지원센터",
    image: "/images/main/main__banner004.webp",
    text1: "실습지원 전문기관",
    text2: "한평생실습지원센터",
  },
  {
    id: "it-school",
    name: "비즈니스제안",
    image: "/images/main/main__banner004.webp",
    text1: "비즈니스제안",
    text2: "비즈니스제안",
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
                          onMouseEnter={() => setActiveTab(tab.id)}
                          className={`w-full text-left px-6 py-[21px] transition-all duration-200 font-bold ${
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
                    style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '10px'}}
                  >
                    {activeTabData.text1.split('<br/>').map((part, index, array) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < array.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="font-semibold text-white" style={{ fontSize: '20px', marginTop: '8px', lineHeight: '1.2', fontWeight: 500, letterSpacing: '0.01em' }}>
                    {activeTabData.text2.split('<br/>').map((part, index, array) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < array.length - 1 && <br />}
                      </React.Fragment>
                    ))}
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
