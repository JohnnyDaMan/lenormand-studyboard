import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Grid3X3, Layers, LayoutGrid, Triangle, ShieldAlert, Sparkles, BookOpen } from "lucide-react";

export default function Chapter8() {
  const spreads = [
    {
      title: "그랑 타블로 (Grand Tableau)",
      icon: <LayoutGrid className="w-5 h-5 text-primary" />,
      duration: "3개월 ~ 1년",
      desc: "레노먼드 리딩의 꽃이자 가장 전통적인 방식입니다. 36장 전체 카드를 한 번에 펼쳐 삶의 모든 영역(사랑, 직업, 건강, 돈 등)을 종합적으로 복기하고 예측하는 거대한 지도 역할을 합니다."
    },
    {
      title: "모던 타블로 (Modern Tableau)",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      duration: "다양함 (질문에 따름)",
      desc: "과거, 현재, 미래를 입체적으로 검토해야 하는 매우 복잡하고 다각적인 질문에 최적화된 스프레드 방식입니다. 흐름의 연속성을 정밀하게 짚어내기에 적합합니다."
    },
    {
      title: "팬 스프레드 (Fan Spreads)",
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      duration: "즉각적인 이슈",
      desc: "부채꼴 모양으로 카드를 전개합니다. 아주 단순한 '예/아니오(Yes/No)' 질문부터 심층적인 다각적 상황 분석까지, 구체적인 쿼리에 대해 신속하고 직관적인 답을 줄 때 사용합니다."
    },
    {
      title: "3 × 3 배열법 (3x3 Spread)",
      icon: <Grid3X3 className="w-5 h-5 text-amber-400" />,
      duration: "2주 ~ 8주",
      desc: "가까운 미래(최대 두 달)의 전반적인 상황적 그림을 파악하기 위해 총 9장의 카드를 가로세로 3장씩 배치하는 스프레드입니다. 단기 예측에 가장 탁월한 정확도를 보여줍니다."
    },
    {
      title: "피라미드 스프레드 (Pyramid Spread)",
      icon: <Triangle className="w-5 h-5 text-rose-400" />,
      duration: "원인 규명",
      desc: "피라미드 구조로 카드를 놓아 문제와 상황의 '기원(Origins)' 및 '근본 원인(Root Causes)'을 깊숙이 파고들어 정확하게 짚어낼 수 있게 돕는 고급 스프레드 기법입니다."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-2xl font-bold text-primary font-esoteric tracking-wider flex items-center justify-center gap-2">
          <BookOpen className="w-6 h-6" /> PART THREE : LAYING THE CARDS
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed font-serif-kr">
          레노먼드 공부의 종착지인 <strong>실전 카드 놓기(Spreads)</strong> 개요입니다. 
          질문의 성격과 필요한 예측 기간에 맞춰 올바른 배열법을 선택하는 법을 요약해 봅니다.
        </p>
      </div>

      {/* Spreads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-serif-kr">
        {spreads.map((spread, idx) => (
          <Card key={idx} className="bg-card/20 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20 text-primary">
                  {spread.icon}
                </div>
                <span className="text-[9px] bg-secondary text-secondary-foreground px-2 py-0.5 rounded font-esoteric border border-primary/10">
                  {spread.duration}
                </span>
              </div>
              <CardTitle className="text-sm font-bold text-primary pt-3 font-serif-kr">
                {spread.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-[11px] text-foreground/70 leading-relaxed">
              {spread.desc}
            </CardContent>
          </Card>
        ))}

        {/* Study Group Closing Note */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-3 bg-primary/5 border border-primary/25 p-5 flex flex-col sm:flex-row gap-4 items-center">
          <div className="text-4xl">🎓</div>
          <div className="space-y-1 text-xs">
            <div className="font-bold text-primary font-serif-kr flex items-center gap-1.5">
              레노먼드 카드 조합 및 리딩법 마스터를 축하합니다!
            </div>
            <p className="text-foreground/80 leading-relaxed text-[11px]">
              이 스터디보드는 스터디 멤버들이 모니터에 띄워두고, 텍스트는 최소화한 채 비주얼 위주로 카드 리딩 원리를 복기할 수 있도록 제작되었습니다. 
              상단 내비게이션의 챕터들을 하나씩 넘기며 실전 카드를 뒤집고 조합을 맞춰보면서 직관적인 리딩 능력을 길러보세요.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
