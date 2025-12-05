"use client";

import styles from "./infomation.module.css";
import Image from "next/image";

interface CardData {
  id: string;
  title: string;
  
  image: string;
  bgColor?: string;
}

const startupCards: CardData[] = [
  {
    id: "startup1",
    title: "생활지원사",
    
    image: "/images/lecture02_visual09.jpg",
    bgColor: "#DC2626",
  },
  {
    id: "startup2",
    title: "병원동행매니저",
    
    image: "/images/lecture04_visual02.jpg",
    bgColor: "#059669",
  },
  {
    id: "startup3",
    title: "심리상담사",
    
    image: "/images/lecture01_visual01.jpg",
    bgColor: "#4F46E5",
  },
  {
    id: "startup4",
    title: "방과후돌봄교실지도사",
    
    image: "/images/lecture02_visual01.jpg",
    bgColor: "#1F2937",
  },
];

const trendCards: CardData[] = [
  {
    id: "trend1",
    title: "실습섭외",
    
    image: "/images/main/main_img05.jpg",
  },
  {
    id: "trend2",
    title: "취업서비스(면접)",
    
    image: "/images/main/main_img06.jpg",
  },
  {
    id: "trend3",
    title: "취업서비스(자소서)",
    
    image: "/images/main/main_img07.jpg",
  },
  {
    id: "trend4",
    title: "취업서비스(취업컨설팅)",
    
    image: "/images/lecture07_visual01.jpg",
  },
];

export default function NewsSection() {
  return (
    <section className={styles.newsSection}>
      <div className={styles.container} style={{ width: '1280px', margin: '0 auto' }}>
        {/* 이달의 창업정보 섹션 */}
        <div className={styles.section}>
          <div className={styles.sectionLayout}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.sectionTitle}>
                <span className="text-blue-600">이달의</span>
                <br />
                <span style={{ color: '#1E1E1E' }}>교육컨텐츠</span>
              </h2>
            </div>
            <div className={styles.cardsGrid}>
              {startupCards.map((card) => (
                <div
                  key={card.id}
                  className={styles.card}
                  style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden' }}
                >
                  {card.image && (
                    <div className={styles.cardImageTop} style={{ width: '100%', height: '180px', position: 'relative' }}>
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        style={{ objectFit: 'cover' ,borderRadius: '8px' }}
                      />
                    </div>
                  )}
                  <div className={styles.cardContent} style={{ marginTop: '10px' }}>
                    <h3 className={styles.cardTitle} style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1E1E1E', lineHeight: '1.5' }}>
                      {card.title}
                    </h3>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HOT 트렌드 교육 섹션 */}
        <div className={styles.section} style={{ marginTop: '60px' }}>
          <div className={styles.sectionLayout}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.sectionTitle}>
                <span className="text-blue-600">HOT</span>
                <br />
                <span style={{ color: '#1E1E1E' }}>교육 서비스</span>
              </h2>
            </div>
            <div className={styles.cardsGrid}>
              {trendCards.map((card) => (
                <div
                  key={card.id}
                  className={styles.card}
                  style={{ backgroundColor: '#fff', overflow: 'hidden' }}
                >
                  {card.image && (
                    <div className={styles.cardImageTop} style={{ width: '100%', height: '180px', position: 'relative' }}>
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        style={{ objectFit: 'cover' ,borderRadius: '8px' }}
                      />
                    </div>
                  )}
                  <div className={styles.cardContent} style={{ marginTop: '10px' }}>
                    <h3 className={styles.cardTitle} style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1E1E1E', lineHeight: '1.5' }}>
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
