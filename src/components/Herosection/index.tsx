import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Herosection = () => {
  // 이미지 프리로딩
  useEffect(() => {
    const preloadImages = [
      "/images/main/main__banner003.webp",
      "/images/main/main__banner004.webp",
    ];

    preloadImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="/images/main/main__banner003.webp"
        subheading="품질"
        heading="완벽을 기준으로."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/images/main/main__banner004.webp"
        subheading="브랜딩"
        heading="최고를 위한 준비."
      >
        <ExampleContent2 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 0;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

interface StickyImageProps {
  imgUrl: string;
}

const StickyImage = ({ imgUrl }: StickyImageProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="sticky z-0 overflow-hidden"
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
        willChange: "transform",
        transform: "translateZ(0)", // 하드웨어 가속 활성화
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={imgUrl}
          alt="Hero background"
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          onLoad={() => setImageLoaded(true)}
          className={`transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <motion.div
          className="absolute inset-0 bg-neutral-950/70"
          style={{
            opacity,
          }}
        />
      </div>
    </motion.div>
  );
};

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-[#1E1E1E]">
      평생교육
      <br className="hidden md:block" />
      컨설팅
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-[#1E1E1E] md:text-2xl">
        각종 교육제도와 자격증 과정을 보다 쉽게 편리하게 이수할 수 있도록
      </p>
      <p className="mb-8 text-xl text-[#1E1E1E] md:text-2xl">
        고객 맞춤형 컨설팅 서비스를 지속적으로 편리하게 제공하고 있습니다.
      </p>
    </div>
  </div>
);

const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold text-[#1E1E1E] md:col-span-4">
      평생교육&nbsp;
      <br className="hidden md:block" />
      플랫폼 구축
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-[#1E1E1E] md:text-2xl">
        다양한 교육 콘텐츠와 전문 인력을 체계적으로 연계하여,
      </p>
      <p className="mb-8 text-xl text-[#1E1E1E] md:text-2xl">
        브랜드 가치에 걸맞는 고품질 평생교육 플랫폼을 구축하였습니다.
      </p>
    </div>
  </div>
);

export default Herosection;
