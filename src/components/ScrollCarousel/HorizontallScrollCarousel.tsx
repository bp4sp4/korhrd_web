import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";

type CardType = {
  url: string;
  title: string;
  id: number;
  description?: string;
  icon?: string;
};

interface HorizontalScrollCarouselProps {
  cards: CardType[];
  className?: string;
}

const HorizontalScrollCarousel = ({
  cards,
  className,
}: HorizontalScrollCarouselProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-160%"]);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <section
      ref={targetRef}
      className={`relative h-[220vh] ${className || ""}`}
    >
      <div className="sticky top-0 flex h-[90vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 will-change-transform">
          {cards.map((card, index) => {
            return (
              <Card
                card={card}
                key={card.id}
                isSelected={selectedCard === card.id}
                onSelect={() => setSelectedCard(card.id)}
                onDeselect={() => setSelectedCard(null)}
                index={index}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  card,
  isSelected,
  onSelect,
  onDeselect,
  index,
}: {
  card: CardType;
  isSelected: boolean;
  onSelect: () => void;
  onDeselect: () => void;
  index: number;
}) => {
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[420px] overflow-hidden bg-neutral-200 will-change-transform"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 will-change-transform"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <div className="bg-black/70 p-4 text-center rounded-lg border border-white/20">
          <p className="text-2xl font-black uppercase text-white mb-1 drop-shadow-lg">
            {card.title}
          </p>
          {card.description && (
            <p className="text-sm text-white font-medium max-w-xs leading-tight drop-shadow-md">
              {card.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Eduvisors용 카드 데이터
export const eduvisorsCards: CardType[] = [
  {
    url: "/images/business/eduvisor/edu003.png",
    title: "검증된 에듀바이저 1:1 매칭",
    description: "한평생교육 정식 소속",
    id: 1,
  },
  {
    url: "/images/business/eduvisor/edu004.png",
    title: "맞춤형 커리큘럼 설계",
    description: "개인의 목표와 역량에 맞춘, 교육 로드맵",
    id: 2,
  },
  {
    url: "/images/business/eduvisor/edu005.png",
    title: "실습 섭외 서비스",
    description: "전국 실습기관 섭외 가능",
    id: 3,
  },
  {
    url: "/images/business/eduvisor/edu006.png",
    title: "취업 연계 서비스",
    description: "실제 취업까지 연계되는 시스템",
    id: 4,
  },
];

// 한평생직업훈련용 카드 데이터
export const trainingCards: CardType[] = [
  {
    url: "/images/business/korhrd/korhrd005.jpg",
    title: "방과후 학교 지도사",
    description: "방과후 학교 지도사 양성 과정",
    id: 1,
  },
  {
    url: "/images/business/korhrd/korhrd006.jpg",
    title: "아동심리상담사",
    description: "심리상담 전문가 과정",
    id: 2,
  },
  {
    url: "/images/business/korhrd/korhrd007.jpg",
    title: "다문화가정복지상담사 1급",
    description: "다문화가정복지상담사 과정",
    id: 3,
  },
  {
    url: "/images/business/korhrd/korhrd008.jpg",
    title: "노인심리상담사 1급",
    description: "실버케어 전문가과정",
    id: 4,
  },
  {
    url: "/images/business/korhrd/korhrd009.jpg",
    title: "병원동행매니저 1급",
    description: "병원동행매니저 과정",
    id: 5,
  },
  {
    url: "/images/business/korhrd/korhrd010.jpg",
    title: "바리스타 1급",
    description: "바리스타 과정",
    id: 6,
  },
  {
    url: "/images/business/korhrd/korhrd011.jpg",
    title: "실버인지활동지도사",
    description: "실버인지활동지도사 과정",
    id: 7,
  },
  {
    url: "/images/business/korhrd/korhrd012.jpg",
    title: "안전교육지도사 1급",
    description: "안전교육지도사 과정",
    id: 8,
  },
];

// 한평생실습지원용 카드 데이터
export const practiceCards: CardType[] = [
  {
    url: "/images/business/training/training004.png",
    title: "실습 섭외 서비스 거주지 근처 직접 섭외",
    description: "전국 실습기관 섭외 가능",
    id: 1,
  },
  {
    url: "/images/business/training/training005.png",
    title: "취업지원 서비스 이력서 면접 코칭",
    description: "걱정되는 취업준비 1:1로 함께가능",
    id: 2,
  },
  {
    url: "/images/business/training/training006.png",
    title: "취업 연계 서비스 실제 취업까지 연계",
    description: "자격증 최종 목표를 이뤄드립니다",
    id: 3,
  },
  {
    url: "/images/business/training/training007.jpg",
    title: "실습 중 문제 해결 및 지원",
    description: "실습 중 발생할 수 있는 문제들을 해결",
    id: 4,
  },
];

export default HorizontalScrollCarousel;
