"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./card.module.css";
import Image from "next/image";

interface CardItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  image: string;
}

const cardItems: CardItem[] = [
  {
    id: "playground1",
    title: "거주지 근처 실습 섭외<br/>지금 바로 신청해 보세요!",
    description: "실습 섭외는 신청서 작성 후 담당자가 꼼꼼히 확인하고 진행됩니다.",
    buttonText: "실습섭외신청",
    link: "#",
    image: "/images/business/training/training001.jpg",
  },
  {
    id: "playground2",
    title: "취업 서비스로 누구나<br/>근무를 시작할 수 있어요!",
    description: "나이, 경력 상관없이 취업의 출발선에 설 수 있는 사회를 만듭니다.",
    buttonText: "취업서비스신청",
    link: "#",
    image: "/images/business/training/training002.png",
  },
  {
    id: "playground3",
    title: "전문 자격증을 취득해서<br/>나의 스펙을 올릴 수 있어요!",
    description: "전문 자격증 취득을 통해 개인의 역량과 커리어를 높입니다.",
    buttonText: "전문자격증신청",
    link: "#",
    image: "/images/business/training/training003.png",
  },
];

export default function Faq() {
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef<SwiperType | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Navigation 초기화
      if (prevButtonRef.current && nextButtonRef.current) {
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, []);

  const handlePlayPause = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
        setIsPlaying(false);
      } else {
        swiperRef.current.autoplay.start();
        setIsPlaying(true);
      }
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.swiperWrapper}>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={600}
            slidesPerView={1.5}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            touchEventsTarget="container"
            resistance={true}
            resistanceRatio={0.85}
            pagination={{
              clickable: true,
              type: "progressbar",
            }}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== 'boolean') {
                const navigation = swiper.params.navigation;
                if (navigation) {
                  navigation.nextEl = nextButtonRef.current;
                  navigation.prevEl = prevButtonRef.current;
                }
              }
            }}
            onInit={(swiper) => {
              // pagination 렌더링 및 업데이트
              if (swiper.pagination) {
                swiper.pagination.render();
                swiper.pagination.update();
              }
            }}
            onAfterInit={(swiper) => {
              // pagination 요소를 paginationContainer로 안전하게 이동
              const movePagination = () => {
                if (!paginationRef.current || !swiper.pagination?.el) return;
                
                const paginationEl = swiper.pagination.el;
                
                // 이미 올바른 위치에 있으면 이동하지 않음
                if (paginationEl.parentElement === paginationRef.current) {
                  // 이미 올바른 위치에 있으면 렌더링만
                  if (swiper.pagination) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                  }
                  return;
                }
                
                try {
                  // appendChild만 사용 (자동으로 이동, removeChild 불필요)
                  if (!paginationRef.current.contains(paginationEl)) {
                    paginationRef.current.appendChild(paginationEl);
                  }
                  
                  // Swiper pagination 업데이트
                  if (swiper.pagination) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                  }
                } catch (e) {
                  // 에러 무시
                }
              };
              
              // requestAnimationFrame으로 React 렌더링 사이클과 충돌 방지
              requestAnimationFrame(() => {
                movePagination();
                // 한 번 더 시도 (확실하게)
                setTimeout(movePagination, 100);
              });
            }}
            className={`${styles.swiper} swiper-with-progressbar`}
          >
            {cardItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.cardLink}>
                  {item.image && (
                    <>
                      <div className={styles.cardImageWrapper}>
                        <Image
                          src={item.image}
                          alt={item.title || "이미지"}
                          fill
                          className={styles.cardImage}
                        />
                        {/* 그라데이션 오버레이 */}
                        <div className={styles.imageOverlay}></div>
                      </div>
                      <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                          <h3 
                            className={styles.cardTitle}
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />
                          <p className={styles.cardDescription}>
                            {item.description}
                          </p>
                          <a 
                            href={item.link}
                            className={styles.experienceButton}
                          >
                            {item.buttonText}
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* 프로그레스 바와 네비게이션 컨트롤을 하나로 묶기 */}
          <div className={styles.navigationWrapper}>
            {/* 프로그레스 바 */}
            <div ref={paginationRef} className={styles.paginationContainer}></div>
            
            {/* 커스텀 네비게이션 컨트롤 */}
            <div className={styles.swiperControls}>
              <button 
                ref={prevButtonRef}
                className={styles.swiperButtonPrev}
                onClick={handlePrev}
                aria-label="이전 슬라이드"
              >
                &lt;
              </button>
              <button 
                ref={nextButtonRef}
                className={styles.swiperButtonNext}
                onClick={handleNext}
                aria-label="다음 슬라이드"
              >
                &gt;
              </button>
              <button 
                className={styles.swiperButtonPlayPause}
                onClick={handlePlayPause}
                aria-label={isPlaying ? "일시정지" : "재생"}
              >
                {isPlaying ? "II" : "▶"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
