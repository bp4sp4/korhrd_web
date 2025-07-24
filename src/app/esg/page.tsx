import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Globe,
  Users,
  Award,
  ArrowRight,
  Target,
  Recycle,
  Heart,
} from "lucide-react";

interface ESGMetric {
  title: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

interface ESGInitiative {
  category: string;
  title: string;
  description: string;
  impact: string;
  image: string;
}

const ESG: React.FC = () => {
  const initiatives: ESGInitiative[] = [
    {
      category: "Environmental",
      title: "친환경 에너지 전환",
      description:
        "2030년까지 100% 재생에너지 사용을 목표로 태양광, 풍력 발전 시설을 확대하고 있습니다.",
      impact: "연간 CO2 10,000톤 감축",
      image: "/api/placeholder/400/250",
    },
    {
      category: "Social",
      title: "지역사회 상생 프로그램",
      description:
        "지역 청년 일자리 창출과 교육 지원을 통해 사회적 가치를 실현하고 있습니다.",
      impact: "1,200명 고용 창출",
      image: "/api/placeholder/400/250",
    },
    {
      category: "Governance",
      title: "투명한 기업 운영",
      description:
        "이사회 독립성 강화와 윤리경영 시스템 구축으로 투명한 경영을 실천합니다.",
      impact: "컴플라이언스 100% 달성",
      image: "/api/placeholder/400/250",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Environmental":
        return <Recycle className="w-5 h-5" />;
      case "Social":
        return <Heart className="w-5 h-5" />;
      case "Governance":
        return <Target className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Environmental":
        return "bg-green-100 text-green-800 border-green-200";
      case "Social":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Governance":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20">
          <video
            src="/images/esg/tree.mp4"
            muted
            autoPlay
            playsInline
            loop
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <p className="text-xl md:text-[50px] text-[#121212] font-bold  mb-10 leading-[63px]">
            책임 있는 교육을 위한
            <br />
            한평생교육의 실천
          </p>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              ESG 주요 이니셔티브
            </h2>
            <p className="text-xl text-muted-foreground">
              환경, 사회, 지배구조 각 영역에서의 구체적인 실천 방안
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${getCategoryColor(
                        initiative.category
                      )} flex items-center gap-1`}
                    >
                      {getCategoryIcon(initiative.category)}
                      {initiative.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {initiative.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-600">
                      {initiative.impact}
                    </span>
                    <Button className="text-primary hover:text-primary/80">
                      자세히 보기
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logo Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              ESG 파트너십
            </h2>
            <p className="text-xl text-muted-foreground">
              지속가능한 미래를 함께 만들어가는 파트너들
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors">
                  <img
                    src="/api/placeholder/100/100"
                    alt={`Partner ${index + 1}`}
                    className="w-16 h-16 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            지속가능한 미래를 함께 만들어가세요
          </h2>
          <p className="text-xl text-white/90 mb-8">
            우리의 ESG 경영 여정에 동참하고, 더 나은 세상을 위한 변화에
            함께해주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4">
              문의하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ESG;
