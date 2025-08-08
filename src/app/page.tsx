"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import Herosection from "@/components/Herosection/index";
import StickyScrollSplit from "@/components/StickyScrollSection/index";
import Faq from "@/components/Faq/index";
import NewsSection from "@/components/NewsSection/index";
import AnimatedSection from "@/components/AnimatedSection/index";

export default function Home() {
  return (
    <div>
      <AuroraBackground>
        <div className="gap-4  md:w-[1200px] max-xl-6  mx-auto px-10">
          <div className="text-[30px] tracking-[-1.5px] md:text-[70px] font-medium dark:text-white ">
            대한민국 교육의
          </div>
          <div className="text-[30px] tracking-[-1.5px] md:text-[70px] font-bold dark:text-white">
            새로운&nbsp;&lsquo;
            <span
              className="relative z-10 px-2 py-1 rounded"
              style={{
                color: "#2B7FFF",
              }}
            >
              방향
            </span>
            &rsquo;을 제시하다.
          </div>
        </div>
      </AuroraBackground>
      <AnimatedSection>
        <Herosection />
      </AnimatedSection>
      <AnimatedSection>
        <StickyScrollSplit />
      </AnimatedSection>
      <AnimatedSection>
        <Faq />
      </AnimatedSection>
      <AnimatedSection>
        <NewsSection />
      </AnimatedSection>
    </div>
  );
}
