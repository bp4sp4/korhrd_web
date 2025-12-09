"use client";

import React, { useState } from "react";
import NewsSection from "@/components/infomation";
import Faq from "@/components/Card";
import ReviewSection from "@/components/reviewSection/reviewSection";


interface TabData {
  id: string;
  name: string; 
  image: string;
}

const tabsData: TabData[] = [

  {
    id: "guhesseo",
    name: "한평생교육",
    image: "/images/main/main__banner001.png",
  },
  {
    id: "help",
    name: "한평생직업훈련",
    image: "/images/main/main__banner002.png",
  },
  {
    id: "trip",
    name: "한평생요양보호사",
    image: "/images/main/main__banner003.png",
  },
  {
    id: "campus",
    name: "한평생유학",
    image: "/images/main/main__banner004.png",
  },
  {
    id: "lesson",
    name: "한평생AI",
    image: "/images/main/main__banner005.png",
  },
  {
    id: "corporate-education",
    name: "한평생실습지원센터",
    image: "/images/main/main__banner006.png",
  },
 
  {
    id: "credit",
    name: "한평생키즈",
    image: "/images/main/main__banner007.png",
  },
  {
    id: "it-school",
    name: "비즈니스제안",
    image: "/images/main/main__banner008.png",
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
                              ? "bg-blue-500 text-white font-semibold"
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
