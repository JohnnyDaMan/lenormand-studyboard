import React, { useState } from "react";
import { LENORMAND_CARDS } from "@/const";
import StudyCard from "@/components/StudyCard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Coins, AlertTriangle, Activity, HelpCircle, PawPrint, Info } from "lucide-react";

export default function Chapter3() {
  const [activeTab, setActiveTab] = useState("work");

  const findCard = (name: string) => LENORMAND_CARDS.find((c) => c.nameEn.toLowerCase() === name.toLowerCase());

  const themes = {
    work: {
      title: "직업 (Work)",
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
      description: "업무 상태, 고용 안정성, 경쟁 관계 등을 나타내는 카드들입니다.",
      cards: ["Moon", "Anchor", "Ship", "Dog", "Fox"],
      explanations: [
        {
          cards: ["Moon"],
          text: "당신의 업무나 구직 활동, 그리고 그것이 얼마나 잘 진행되고 있는지를 나타냅니다."
        },
        {
          cards: ["Anchor"],
          text: "고용 안정성과 지속성을 설명합니다."
        },
        {
          cards: ["Ship"],
          text: "자영업자나 소매업 및 무역에 깊이 관여하는 사람에게 중요하며 새로운 기회를 의미합니다."
        },
        {
          cards: ["Dog"],
          text: "동료와 직원들을 나타냅니다."
        },
        {
          cards: ["Fox"],
          text: "직무상 경쟁자 또는 주의해야 할 인물을 나타냅니다."
        }
      ]
    },
    finances: {
      title: "재정 (Finances)",
      icon: <Coins className="w-5 h-5 text-yellow-500" />,
      description: "수입, 금전적 손실, 기회 등 재정적 흐름과 안락함을 보여줍니다.",
      cards: ["Fish", "Bear", "Ship", "Anchor", "House", "Coffin", "Mice"],
      explanations: [
        {
          cards: ["Fish"],
          text: "당신의 직접적인 수입, 사업 배당금, 유동 자금을 의미합니다."
        },
        {
          cards: ["Bear"],
          text: "큰 행운이나 든든한 재정적 배경을 보여줍니다."
        },
        {
          cards: ["House"],
          text: "당신이 현재 재정적으로 얼마나 편안하고 여유로운 상태인지를 측정하는 좋은 척도입니다."
        },
        {
          cards: ["Coffin"],
          text: "심각한 재정적 손실을 예견할 수 있으므로 매우 주의 깊게 보아야 합니다."
        },
        {
          cards: ["Mice"],
          text: "종종 금전적인 도난, 야금야금 지출되는 비용을 보여줍니다."
        }
      ]
    },
    warnings: {
      title: "경고 (Warnings)",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      description: "주의를 기울여야 하는 위험 신호들과 대처 방법을 경고합니다.",
      cards: ["Snake", "Fox", "Mice", "Scythe", "Mountain", "Bear"],
      explanations: [
        {
          cards: ["Snake"],
          text: "당신이 현재 복잡하고 꼬여있는 상황에 놓여 있다는 경고입니다."
        },
        {
          cards: ["Fox"],
          text: "무언가 잘못되었으므로 속임수에 걸려들지 않도록 매우 조심해야 함을 뜻합니다."
        },
        {
          cards: ["Scythe"],
          text: "갑작스러운 위험, 위협, 단절을 예견합니다."
        },
        {
          cards: ["Mountain"],
          text: "구복자(seeker)의 카드 근처에 있을 때 적이나 큰 장애물의 신호입니다."
        },
        {
          cards: ["Bear"],
          text: "부정적인 카드들과 함께 있을 때 질투나 '악의적인 시선(evil eye)'을 경고합니다."
        }
      ]
    },
    sickness: {
      title: "질병 (Sickness)",
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
      description: "주요 건강 카드와 질병의 만성도, 회복 여부를 예측하는 카드들입니다.",
      cards: ["Tree", "Coffin", "Tower", "Rod", "Clouds"],
      explanations: [
        {
          cards: ["Tree"],
          text: "주요한 건강 카드입니다. 주변에 집, 정원, 길, 태양 카드가 있으면 부정적 영향이 완화됩니다."
        },
        {
          cards: ["Coffin"],
          text: "질병 그 자체나 활력의 저하를 직접적으로 보여줍니다."
        },
        {
          cards: ["Tower", "Rod"],
          text: "탑이 채찍, 구름, 또는 관 카드와 함께 있을 때는 심각하고 장기적인 건강 문제를 나타냅니다."
        },
        {
          cards: ["Rod", "Tree"],
          text: "나무나 관 카드와 함께 있는 채찍은 심각하고 만성적인 상태나 병의 재발을 보여줍니다."
        }
      ]
    },
    trouble: {
      title: "문제 (Trouble)",
      icon: <HelpCircle className="w-5 h-5 text-rose-500" />,
      description: "장애물과 고난을 가져오고 다른 카드의 긍정성을 갉아먹는 카드들입니다.",
      cards: ["Clouds", "Snake", "Coffin", "Scythe", "Rod", "Birds", "Fox", "Bear", "Mountain", "Cross", "Book", "Cavalier", "Letter"],
      explanations: [
        {
          cards: ["Clouds"],
          text: "항상 장애물과 고난을 예견하며, 주변 다른 카드들에게도 혼란을 가져옵니다."
        },
        {
          cards: ["Book"],
          text: "질문자의 카드 근처에 있을 때 예기치 못한 문제나 당혹스러운 상황(비밀 폭로 등)을 경고합니다."
        },
        {
          cards: ["Cavalier", "Letter"],
          text: "부정적인 카드 근처에 기사와 편지 카드가 함께 나오면 나쁜 소식을 보여줍니다."
        }
      ]
    },
    animals: {
      title: "동물 (Animals)",
      icon: <PawPrint className="w-5 h-5 text-indigo-400" />,
      description: "실제 기르는 반려동물이나 자연의 동물들을 대변하는 카드 매핑입니다.",
      cards: ["Dog", "Fox", "Cavalier", "Bear", "Birds", "Storks", "Mice", "Fish", "Snake"],
      explanations: [
        {
          cards: ["Dog", "Fox"],
          text: "개는 일반적인 반려동물 및 개를 뜻하고, 여우는 고양이나 여우를 나타냅니다."
        },
        {
          cards: ["Cavalier", "Bear"],
          text: "기사는 말이나 가축(소, 돼지)을, 곰은 곰이나 대형 야생 동물을 나타냅니다."
        },
        {
          cards: ["Birds", "Storks"],
          text: "새는 올빼미 크기 이하의 작은 새를, 황새는 그보다 큰 대형 조류를 상징합니다."
        },
        {
          cards: ["Mice", "Fish", "Snake"],
          text: "생쥐는 설치류(토끼, 햄스터), 물고기는 해양 생물, 뱀은 파충류나 희귀 반려동물을 대변합니다."
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
          THEME MAPS
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed font-serif-kr">
          직업, 재정, 경고, 건강, 문제, 동물 등 스터디보드에 필요한 핵심적인 상황별 테마들을 비주얼로 마스터합니다.
        </p>
      </div>

      {/* Tabs Control */}
      <div className="flex justify-center">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl">
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 bg-card/40 border border-primary/20 p-1 h-auto gap-1">
            <TabsTrigger value="work" className="text-[10px] sm:text-xs font-esoteric py-2 flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5" /> WORK
            </TabsTrigger>
            <TabsTrigger value="finances" className="text-[10px] sm:text-xs font-esoteric py-2 flex items-center gap-1">
              <Coins className="w-3.5 h-3.5" /> MONEY
            </TabsTrigger>
            <TabsTrigger value="warnings" className="text-[10px] sm:text-xs font-esoteric py-2 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" /> WARN
            </TabsTrigger>
            <TabsTrigger value="sickness" className="text-[10px] sm:text-xs font-esoteric py-2 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5" /> HEALTH
            </TabsTrigger>
            <TabsTrigger value="trouble" className="text-[10px] sm:text-xs font-esoteric py-2 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" /> TROUBLE
            </TabsTrigger>
            <TabsTrigger value="animals" className="text-[10px] sm:text-xs font-esoteric py-2 flex items-center gap-1">
              <PawPrint className="w-3.5 h-3.5" /> ANIMAL
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Explanations */}
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
                  <Info className="w-3.5 h-3.5" /> 세부 해석 지침
                </h4>
                <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
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
              {currentTheme.cards.map((cname, idx) => {
                const card = findCard(cname);
                // For 'trouble' or large sets, we might limit display or wrap beautifully
                return card ? (
                  <StudyCard
                    key={`${card.id}-${idx}`}
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
