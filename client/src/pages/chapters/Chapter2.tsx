import React, { useState } from "react";
import { LENORMAND_CARDS } from "@/const";
import StudyCard from "@/components/StudyCard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Heart, Home, Smile, ArrowRight, Info } from "lucide-react";

export default function Chapter2() {
  const [activeTab, setActiveTab] = useState("comm");

  // Helper to find card by English name
  const findCard = (name: string) => LENORMAND_CARDS.find((c) => c.nameEn.toLowerCase() === name.toLowerCase());

  // Themes data
  const themes = {
    comm: {
      title: "의사소통 (Communications)",
      icon: <MessageSquare className="w-5 h-5 text-primary" />,
      description: "기사와 편지는 소식을 가져옵니다. 기사는 아주 곧 직접 대면하는 소식이고, 편지는 전화, 문자, 서류 등을 뜻합니다.",
      cards: ["Cavalier", "Letter", "Birds", "Rod"],
      explanations: [
        {
          cards: ["Cavalier"],
          text: "질문자 카드 근처에 있을 때 '가까운 곳의 소식'(가족, 동거인, 절친한 친구)을 의미합니다."
        },
        {
          cards: ["Birds", "Letter"],
          text: "전화 통화나 스카이프, 또는 온라인 매체를 통한 소식이나 대화를 뜻합니다."
        },
        {
          cards: ["Rod", "Letter"],
          text: "공식적인 소장이나 통지서일 수 있으며, 논쟁을 유발하거나 소식이 전해진 후의 여파(논쟁)를 나타냅니다."
        }
      ]
    },
    love: {
      title: "사랑 (Love)",
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      description: "하트는 일반적인 사랑, 반지는 공식적인 약속과 헌신, 닻은 지속적이고 강인한 성격을 나타냅니다.",
      cards: ["Heart", "Ring", "Anchor", "Lord", "Lady", "Cavalier", "Snake", "Lily"],
      explanations: [
        {
          cards: ["Lord", "Lady"],
          text: "이성애 관계에서의 남녀 파트너 카드 역할을 합니다."
        },
        {
          cards: ["Cavalier", "Snake"],
          text: "동성애 관계에서 파트너 역할을 담당합니다."
        },
        {
          cards: ["Lily"],
          text: "행복하고 깊은 신뢰가 있는 성적인 관계를 상징합니다."
        }
      ]
    },
    family: {
      title: "가족과 집 (Family and Home)",
      icon: <Home className="w-5 h-5 text-emerald-500" />,
      description: "백합은 가족의 상징이며, 집은 반드시 가족이 아니더라도 함께 사는 동거인들을 나타냅니다.",
      cards: ["Lily", "House", "Storks", "Child", "Bear", "Tower", "Fish", "Paths"],
      explanations: [
        {
          cards: ["Storks"],
          text: "지시자나 집 근처에 있을 때 이사, 주거 개선, 가정생활의 임박한 변화를 나타냅니다."
        },
        {
          cards: ["Child", "Bear", "Tower"],
          text: "아이는 자녀를, 곰과 탑은 부모님 또는 중요한 연상의 친척을 의미합니다."
        },
        {
          cards: ["Fish", "Paths"],
          text: "물고기는 형제자매를, 길은 사위 또는 며느리를 상징할 수 있습니다."
        },
        {
          cards: ["Child", "Birds"],
          text: "새 카드가 아이 카드를 뒤따를 때는 임신을 예견할 수 있습니다."
        }
      ]
    },
    happy: {
      title: "행복 (Happiness)",
      icon: <Smile className="w-5 h-5 text-amber-500" />,
      description: "레노먼드에서 행복, 성공, 찬사, 평화를 예견하는 긍정적인 카드들입니다.",
      cards: ["Clover", "Bouquet", "Stars", "Heart", "Lily", "Sun", "Moon"],
      explanations: [
        {
          cards: ["Clover", "Bouquet"],
          text: "클로버는 즉각적인 기쁨과 행운을, 꽃다발은 선물과 우정에서 오는 행복을 예견합니다."
        },
        {
          cards: ["Sun", "Moon"],
          text: "태양은 확실한 성공과 활력을, 달은 타인의 찬사와 감정적 충만함을 의미합니다."
        },
        {
          cards: ["Stars", "Lily"],
          text: "별은 희망과 명확한 방향을, 백합은 평화롭고 성숙한 만족을 가져옵니다."
        }
      ]
    }
  };

  const currentTheme = themes[activeTab as keyof typeof themes];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-2xl font-bold text-primary font-esoteric tracking-wider flex items-center justify-center gap-2">
          CARD THEMES
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed font-serif-kr">
          특정 질문이나 맥락(연애, 이사, 의사소통 등)에서 핵심이 되는 카드 그룹을 공부합니다. 
          각 테마를 탭하여 해당 테마의 카드 구성과 리딩 조합법을 비주얼로 확인하세요.
        </p>
      </div>

      {/* Tabs Control */}
      <div className="flex justify-center">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-2xl">
          <TabsList className="grid grid-cols-4 bg-card/40 border border-primary/20 p-1">
            <TabsTrigger value="comm" className="text-xs font-esoteric py-2 flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5" /> COMM
            </TabsTrigger>
            <TabsTrigger value="love" className="text-xs font-esoteric py-2 flex items-center gap-1">
              <Heart className="w-3.5 h-3.5" /> LOVE
            </TabsTrigger>
            <TabsTrigger value="family" className="text-xs font-esoteric py-2 flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> HOME
            </TabsTrigger>
            <TabsTrigger value="happy" className="text-xs font-esoteric py-2 flex items-center gap-1">
              <Smile className="w-3.5 h-3.5" /> HAPPY
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Main Theme Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Theme Info & Specific Explanations */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="bg-card/30 backdrop-blur-md border-primary/20">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                {currentTheme.icon}
                <CardTitle className="text-lg font-bold text-primary font-esoteric tracking-wide">
                  {currentTheme.title}
                </CardTitle>
              </div>
              <CardDescription className="text-xs text-foreground/80 font-serif-kr pt-1 leading-relaxed">
                {currentTheme.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-t border-primary/10 pt-3">
                <h4 className="text-xs font-semibold text-primary/80 mb-2 flex items-center gap-1 font-serif-kr">
                  <Info className="w-3.5 h-3.5" /> 조합 및 특별 의미
                </h4>
                <div className="space-y-3">
                  {currentTheme.explanations.map((exp, idx) => (
                    <div key={idx} className="bg-background/40 p-2.5 rounded-lg border border-primary/10 text-xs space-y-1.5 font-serif-kr">
                      <div className="flex gap-1 items-center">
                        {exp.cards.map((cname) => {
                          const c = findCard(cname);
                          return c ? (
                            <span key={c.id} className="inline-flex items-center gap-0.5 bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[10px] border border-primary/20">
                              <span>{c.image}</span>
                              <span className="font-esoteric text-[9px]">{c.nameEn}</span>
                            </span>
                          ) : null;
                        })}
                      </div>
                      <p className="text-foreground/80 text-[11px] leading-relaxed">{exp.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Cards Display */}
        <div className="lg:col-span-7">
          <Card className="bg-card/10 backdrop-blur-sm border-primary/10 h-full flex flex-col justify-center p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
              {currentTheme.cards.map((cname) => {
                const card = findCard(cname);
                return card ? (
                  <StudyCard
                    key={card.id}
                    card={card}
                    showDetails={false}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                ) : null;
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
