"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Herosection from "@/components/Herosection/index";
import StickyScrollSplit from "@/components/StickyScrollSection/index";
import Faq from "@/components/Faq/index";
import NewsSection from "@/components/NewsSection/index";
import AnimatedSection from "@/components/AnimatedSection/index";

export default function Home() {
  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.1,
            ease: "easeInOut",
          }}
          className="gap-4  md:w-[1200px] max-xl-6  mx-auto px-10"
        >
          <div className="text-3xl tracking-[-1.5px] md:text-[70px] font-medium dark:text-white ">
            대한민국 교육의
          </div>
          <div className="text-3xl tracking-[-1.5px] md:text-[70px] font-bold dark:text-white">
            새로운&nbsp;
            <span
              className="relative z-10 px-2 py-1 rounded"
              style={{
                backgroundImage:
                  "linear-gradient(70.83deg, rgb(43, 127, 255) 40%, rgb(1, 79, 196) 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              방향
            </span>
            을 제시하다.
          </div>
        </motion.div>
      </AuroraBackground>
      <motion.section>
        <Herosection />
      </motion.section>
      <motion.section>
        <StickyScrollSplit />
      </motion.section>
      <AnimatedSection>
        <Faq />
      </AnimatedSection>
      <AnimatedSection>
        <NewsSection />
      </AnimatedSection>
    </div>
  );
}
