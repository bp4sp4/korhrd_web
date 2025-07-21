"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Herosection from "@/components/Herosection";

export default function Home() {
  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="gap-4 px-10 w-[1280px]"
        >
          <div className="text-3xl tracking-[-1.5px]  md:text-[45px] font-bold dark:text-white ">
            대한민국 교육의 새로운
          </div>
          <div className="text-3xl tracking-[-1.5px] md:text-[45px] font-bold dark:text-white">
            방향을 제시합니다.
          </div>
        </motion.div>
      </AuroraBackground>
      <motion.section>
        <Herosection />
      </motion.section>
    </div>
  );
}
