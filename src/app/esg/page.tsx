import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Target, Recycle, Heart } from "lucide-react";

interface ESGInitiative {
  category: string;
  title: string;
  description: string;

  image: string;
}

const ESG: React.FC = () => {
  const initiatives: ESGInitiative[] = [
    {
      category: "Environmental",
      title: "환경보존",
      description:
        "기후 변화 대응과 자원 절약을 위한 친환경 경영을 실천하며, 지속 가능한 미래를 위한 환경 보호에 앞장서고 있습니다.",

      image: "/images/esg/environment.jpg",
    },
    {
      category: "Social",
      title: "사회공헌",
      description:
        "‘나눔, 채움, 배움, 이룸’이라는 철학 아래 지역사회와의 상생을 도모하며, 모두가 함께 성장할 수 있는 건강한 사회를 만들어가고 있습니다.",

      image: "/images/esg/giver.jpg",
    },
    {
      category: "Governance",
      title: "기업가치",
      description:
        "투명한 경영과 책임 있는 의사결정을 통해 기업의 지속가능성과 신뢰도를 높이며, 장기적인 가치 창출에 기여합니다.",

      image: "/images/esg/social.jpg",
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
          <img
            src="/images/esg/image001.png"
            className="h-full w-full object-cover esgbanner"
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
            <h2 className="font-bold text-[36px] mb-4 leading-[45px]">
              한평생교육원은 환경보존과 사회공헌,
              <br /> 사회적 가치를 함께 가르칩니다.
            </h2>
            <p className="text-[20px] text-muted-foreground">
              한평생교육원은 지속 가능한 미래를 위해 ESG 가치를 교육의 중심에
              두고 있습니다.
              <br /> 교육기관으로서 사회적 책임을 다하며, 더 나은 세상을 위한
              실천을 끊임없이 이어가고 있습니다.
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
                      )} flex items-center gap-1 hover:bg-white`}
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
                  <div className="flex items-center justify-between"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ESG;
