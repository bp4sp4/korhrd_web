"use client";

import Herosection from "@/components/Herosection/index";
import AnimatedSection from "@/components/AnimatedSection/index";

export default function Home() {
  return (
    <div>
      <AnimatedSection>
        <Herosection />
      </AnimatedSection>
      {/* <AnimatedSection>
        <StickyScrollSplit />
      </AnimatedSection> */}
      {/* <AnimatedSection>
        <Faq />
      </AnimatedSection> */}
      {/* <AnimatedSection>
        <NewsSection />
      </AnimatedSection> */}
    </div>
  );
}
