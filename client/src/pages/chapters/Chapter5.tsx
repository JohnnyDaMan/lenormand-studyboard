import React, { useState } from "react";
import { LENORMAND_CARDS } from "@/const";
import StudyCard from "@/components/StudyCard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ruler, Info } from "lucide-react";

export default function Chapter5() {
  const [activeGroup, setActiveGroup] = useState("all");

  const groups = {
    positive: {
      title: "긍정 (Positive)",
      color: "text-emerald-700 bg-emerald-100 border-emerald-300",
      desc: "질문에 매우 긍정적인 신호를 주며, 예/아니오 질문에서 '예(Yes)'를 나타냅니다.",
      cards: LENORMAND_CARDS.filter((c) => c.polarity === "positive")
    },
    "positive-neutral": {
      title: "긍정-중립 (Positive-Neutral)",
      color: "text-teal-700 bg-teal-100 border-teal-300",
      desc: "기본적으로 긍정적인 성향을 띠나 주변 카드에 의해 쉽게 영향을 받습니다.",
      cards: LENORMAND_CARDS.filter((c) => c.polarity === "positive-neutral")
    },
    neutral: {
      title: "중립 (Neutral)",
      color: "text-amber-700 bg-amber-100 border-amber-300",
      desc: "자체로는 길흉이 없으며 오직 인접한 카드가 긍정인지 부정인지에 따라 성격이 완전히 결정됩니다.",
      cards: LENORMAND_CARDS.filter((c) => c.polarity === "neutral")
    },
    "neutral-negative": {
      title: "중립-부정 (Neutral-Negative)",
      color: "text-orange-700 bg-orange-100 border-orange-300",
      desc: "약간의 부정적인 경향을 내포하고 있어 조심스러운 접근이 필요합니다.",
      cards: LENORMAND_CARDS.filter((c) => c.polarity === "neutral-negative")
    },
    negative: {
      title: "부정 (Negative)",
      color: "text-rose-700 bg-rose-100 border-rose-300",
      desc: "질문에 강한 거절, 장애물, 상실을 나타내며 예/아니오 질문에서 '아니오(No)'를 상징합니다.",
      cards: LENORMAND_CARDS.filter((c) => c.polarity === "negative")
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-2xl font-bold text-primary font-esoteric tracking-wider flex items-center justify-center gap-2">
          <Ruler className="w-6 h-6 text-primary" /> POSITIVE TO NEGATIVE SPECTRUM
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed font-serif-kr">
          0cm(긍정)에서 30cm(부정)까지 이어지는 <strong>영향력의 자(Ruler)</strong>를 상상해 보세요. 
          각 카드가 위치한 스펙트럼 상의 위치를 파악하는 것은 간단한 '예/아니오' 질문 해결의 핵심 열쇠가 됩니다.
        </p>
      </div>

      {/* Visual Ruler Indicator */}
      <Card className="bg-card border-primary/20 p-4 shadow-sm">
        <div className="relative h-16 w-full bg-gradient-to-r from-emerald-100 via-amber-100 to-rose-100 rounded-lg border border-primary/10 flex items-center justify-between px-4 sm:px-8 select-none shadow-inner">
          {/* Ruler markings */}
          <div className="absolute inset-x-0 bottom-0 h-3 flex justify-between px-2 text-[8px] text-foreground/40 font-esoteric">
            {Array.from({ length: 31 }).map((_, i) => (
              <span key={i} className="flex flex-col items-center">
                <span className={`w-[1px] bg-foreground/30 ${i % 5 === 0 ? "h-3" : "h-1.5"}`}></span>
                {i % 5 === 0 && <span className="mt-0.5">{i}cm</span>}
              </span>
            ))}
          </div>

          {/* Spectrum labels */}
          <div className="w-full flex justify-between text-xs font-bold font-esoteric z-10">
            <span className="text-emerald-700 flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> 긍정 (0-10cm)
            </span>
            <span className="text-amber-700 flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> 중립 (10-20cm)
            </span>
            <span className="text-rose-700 flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> 부정 (20-30cm)
            </span>
          </div>
        </div>
      </Card>

      {/* Selector Tabs */}
      <div className="flex justify-center">
        <Tabs value={activeGroup} onValueChange={setActiveGroup} className="w-full max-w-3xl">
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 bg-card border border-primary/20 p-1 h-auto gap-1 shadow-sm">
            <TabsTrigger value="all" className="text-xs font-esoteric py-2">
              ALL SPECTRUM
            </TabsTrigger>
            <TabsTrigger value="positive" className="text-xs font-esoteric py-2 text-emerald-700">
              POSITIVE
            </TabsTrigger>
            <TabsTrigger value="positive-neutral" className="text-xs font-esoteric py-2 text-teal-700">
              POS-NEU
            </TabsTrigger>
            <TabsTrigger value="neutral" className="text-xs font-esoteric py-2 text-amber-700">
              NEUTRAL
            </TabsTrigger>
            <TabsTrigger value="neutral-negative" className="text-xs font-esoteric py-2 text-orange-700">
              NEU-NEG
            </TabsTrigger>
            <TabsTrigger value="negative" className="text-xs font-esoteric py-2 text-rose-700">
              NEGATIVE
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Spectrum Content Display */}
      {activeGroup === "all" ? (
        <div className="space-y-6">
          {Object.entries(groups).map(([key, group]) => (
            <Card key={key} className="bg-card border-primary/10 p-4 shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-primary/10 pb-2 mb-4 gap-2">
                <div className="flex items-center gap-2">
                  <span className={`inline-block text-xs px-2.5 py-0.5 rounded-full font-esoteric border ${group.color}`}>
                    {group.title.toUpperCase()}
                  </span>
                  <p className="text-xs text-foreground/70 font-serif-kr">{group.desc}</p>
                </div>
                <span className="text-[10px] text-primary/70 font-esoteric">
                  총 {group.cards.length}장
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
                {group.cards.map((card) => (
                  <StudyCard
                    key={card.id}
                    card={card}
                    showDetails={false}
                    className="scale-90 hover:scale-100 transition-all duration-300"
                  />
                ))}
              </div>
            </Card>
          ))}
          
          {/* Rule Note */}
          <blockquote className="border-l-2 border-primary/50 pl-4 py-2 text-xs text-primary/80 italic font-serif-kr bg-primary/5 rounded-r max-w-3xl mx-auto space-y-1 shadow-sm">
            <div className="font-bold flex items-center gap-1"><Info className="w-3.5 h-3.5 text-primary" /> 꼭 기억해야 할 예외 및 보충 규칙</div>
            <p className="text-[11px] leading-relaxed pl-4.5">
              • <strong>신사(Man)와 숙녀(Lady)</strong> 카드는 리딩의 대상(주인공)이 되므로 이 수치 스펙트럼에서 제외됩니다.<br />
              • 중립 및 중립-긍정/부정 카드들은 긍정적이거나 부정적인 카드와 나란히 나옴으로써 성격이 강화되거나 완화됩니다.<br />
              • 예: <strong>편지(중립)</strong>가 <strong>물고기 + 태양(긍정)</strong>과 함께 나오면 '재정적 성공 소식'이 되지만, <strong>관 + 생쥐(부정)</strong>와 나오면 '재정적 손실 소식'이 됩니다.<br />
              • <strong>클로버</strong>와 <strong>별</strong> 카드는 <strong>구름</strong> 카드와 함께 있을 때 부정적으로 변합니다.
            </p>
          </blockquote>
        </div>
      ) : (
        <Card className="bg-card border border-primary/10 p-6 shadow-sm">
          <div className="border-b border-primary/10 pb-3 mb-6">
            <span className={`inline-block text-sm px-3 py-1 rounded-full font-esoteric border mb-2 ${groups[activeGroup as keyof typeof groups].color}`}>
              {groups[activeGroup as keyof typeof groups].title}
            </span>
            <p className="text-xs text-foreground/80 font-serif-kr leading-relaxed">
              {groups[activeGroup as keyof typeof groups].desc}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {groups[activeGroup as keyof typeof groups].cards.map((card) => (
              <StudyCard
                key={card.id}
                card={card}
                showDetails={false}
                className="hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
