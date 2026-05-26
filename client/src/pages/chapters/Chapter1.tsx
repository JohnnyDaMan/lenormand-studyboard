import React, { useState } from "react";
import { LENORMAND_CARDS } from "@/const";
import StudyCard from "@/components/StudyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Sparkles, BookOpen, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Chapter1() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [flippedAll, setFlippedAll] = useState(false);

  const filteredCards = LENORMAND_CARDS.filter((card) => {
    const matchesSearch =
      card.nameKr.includes(search) ||
      card.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      card.keywords.nouns.some((n) => n.includes(search)) ||
      card.keywords.adjectives.some((a) => a.includes(search));

    const matchesType = selectedType === "all" || card.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-2xl font-bold text-primary font-esoteric tracking-wider flex items-center justify-center gap-2">
          <BookOpen className="w-6 h-6" /> EXERCISE #1 : REFERENCE SHEET
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed font-serif-kr">
          레노먼드 카드의 핵심 정의를 자신만의 언어로 요약하는 단계입니다. 
          각 카드당 <strong>2개의 명사(주제)</strong>와 <strong>2개의 형용사(수식)</strong>를 추출하여 카드 조합의 기본을 다집니다.
        </p>
        <blockquote className="border-l-2 border-primary/50 pl-4 py-1 my-3 text-xs text-primary/70 italic text-left max-w-xl mx-auto font-serif-kr bg-primary/5 rounded-r">
          "카드 조합에서 첫 번째 카드는 <strong>명사</strong>와 유사하여 주제를 설정하고, 뒤따르는 카드는 <strong>형용사</strong>처럼 그 주제를 상세히 수식합니다."
        </blockquote>
      </div>

      {/* Control Panel */}
      <div className="bg-card/40 backdrop-blur-md border border-primary/20 rounded-xl p-4 flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60" />
          <Input
            placeholder="카드 이름 또는 키워드 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-background/50 border-primary/20 text-foreground placeholder:text-foreground/40 text-xs focus-visible:ring-primary"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 justify-center">
          {["all", "positive", "positive-neutral", "neutral", "neutral-negative", "negative"].map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType(type)}
              className="text-[10px] h-7 px-2.5 font-esoteric"
            >
              {type.toUpperCase()}
            </Button>
          ))}
        </div>

        {/* Interactive Tip */}
        <div className="text-[11px] text-primary/80 flex items-center gap-1.5 font-serif-kr">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-primary" />
          <span>카드를 클릭하면 3D 회전하며 핵심 명사/형용사가 나타납니다.</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {filteredCards.map((card) => (
          <StudyCard
            key={card.id}
            card={card}
            className="hover:scale-105 transition-transform duration-300"
          />
        ))}
        {filteredCards.length === 0 && (
          <div className="col-span-full py-12 text-center text-foreground/50 text-xs font-serif-kr">
            검색 결과와 일치하는 카드가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
