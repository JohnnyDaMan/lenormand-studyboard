import React, { useState } from "react";
import { LENORMAND_CARDS } from "@/const";
import StudyCard from "@/components/StudyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, ArrowRight, Layers, RefreshCw, GitCommit, Info, Compass } from "lucide-react";

export default function Chapter6() {
  const [simTab, setSimTab] = useState("order");
  
  // A+B vs B+A Order Simulator State
  const [cardAId, setCardAId] = useState<number>(1); // Cavalier (Rider)
  const [cardBId, setCardBId] = useState<number>(9); // Bouquet

  const cardA = LENORMAND_CARDS.find((c) => c.id === cardAId)!;
  const cardB = LENORMAND_CARDS.find((c) => c.id === cardBId)!;

  const handleSwap = () => {
    const temp = cardAId;
    setCardAId(cardBId);
    setCardBId(temp);
  };

  // Get combination meanings based on document
  const getCombinationMeaning = (a: number, b: number) => {
    const combos: Record<string, string> = {
      "1-9": "기사(Cavalier) + 꽃다발(Bouquet): 매우 빠르고 기쁜 선물이나 초대 소식이 도착합니다. (명사: 소식 + 형용사: 기쁜)",
      "9-1": "꽃다발(Bouquet) + 기사(Cavalier): 선물이나 초대(명사)가 매우 빠르게 직접 방문하는 형태(형용사)로 전달됩니다.",
      "1-10": "기사(Cavalier) + 낫(Scythe): 갑작스럽고 위협적인 나쁜 소식이 급하게 찾아옵니다.",
      "10-1": "낫(Scythe) + 기사(Cavalier): 갑작스러운 수확이나 위험한 단절(명사)이 매우 신속하게 일어납니다.",
      "24-25": "하트(Heart) + 반지(Ring): 사랑하는 마음(명사)이 공식적인 결혼 계약이나 약속(형용사)으로 발전합니다.",
      "25-24": "반지(Ring) + 하트(Heart): 공식적인 계약이나 관계(명사)가 사랑과 애정이 넘치는 형태(형용사)로 가득 채워집니다.",
      "28-34": "신사(Man) + 물고기(Fish): 남성 질문자(명사)가 재정적으로 매우 풍요롭거나 사업을 하는 사람(형용사)임을 나타냅니다.",
      "27-9": "편지(Letter) + 꽃다발(Bouquet): 당신을 행복하게 만드는 소식이나 초대장(명사: 소식 + 형용사: 기쁜 선물)을 뜻합니다.",
      "32-11": "달(Moon) + 채찍(Whip): 직업적 명성(명사)이 심한 불화와 갈등(형용사)으로 인해 얼룩지게 됨을 뜻합니다."
    };

    const key = `${a}-${b}`;
    if (combos[key]) return combos[key];

    // Dynamic Generator based on Noun + Adjective rule
    const nounStr = `${cardA.nearNouns[0]}(근거리) 또는 ${cardA.farNouns[0]}(원거리)`;
    const adjStr = cardB.adjectives[0] || "상징하는";

    return `${cardA.krName}(${cardA.name}) + ${cardB.krName}(${cardB.name}): [주제] ${nounStr}에 대해 [수식] ${adjStr}한 성격이 가미됩니다. 즉, '${adjStr}한 ${cardA.krName}'의 뉘앙스로 해석할 수 있습니다.`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-2xl font-bold text-primary font-esoteric tracking-wider flex items-center justify-center gap-2">
          READING METHODS & SIMULATOR
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed font-serif-kr">
          레노먼드 카드는 한 장씩 따로 읽지 않고 <strong>최소 2장 이상을 조합</strong>하여 읽습니다. 
          순서에 따른 의미 변화(A+B vs B+A), 미러링, 체스 나이트의 움직임을 활용한 나이팅, 그리고 체인 리딩법을 실시간 시뮬레이터로 학습합니다.
        </p>
      </div>

      {/* Tabs for different methods */}
      <div className="flex justify-center">
        <Tabs value={simTab} onValueChange={setSimTab} className="w-full max-w-3xl">
          <TabsList className="grid grid-cols-4 bg-card border border-primary/20 p-1 shadow-sm">
            <TabsTrigger value="order" className="text-xs font-esoteric py-2 flex items-center justify-center gap-1">
              <RefreshCw className="w-3.5 h-3.5" /> A+B vs B+A
            </TabsTrigger>
            <TabsTrigger value="mirror" className="text-xs font-esoteric py-2 flex items-center justify-center gap-1">
              <Compass className="w-3.5 h-3.5" /> MIRRORING
            </TabsTrigger>
            <TabsTrigger value="knight" className="text-xs font-esoteric py-2 flex items-center justify-center gap-1">
              <Layers className="w-3.5 h-3.5" /> KNIGHTING
            </TabsTrigger>
            <TabsTrigger value="chain" className="text-xs font-esoteric py-2 flex items-center justify-center gap-1">
              <GitCommit className="w-3.5 h-3.5" /> CHAINING
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Chapter Content Panels */}
      <Card className="bg-card border border-primary/15 p-6 shadow-sm">
        {/* TAB 1: Order Simulator */}
        {simTab === "order" && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-base font-bold text-primary font-esoteric mb-1">A+B vs B+A 순서 시뮬레이터</h3>
              <p className="text-xs text-foreground/70 font-serif-kr">
                레노먼드는 카드가 배치되는 <strong>방향(왼쪽에서 오른쪽)</strong>에 따라 주어(명사)와 수식어(형용사)가 완전히 뒤바뀝니다.
              </p>
            </div>

            {/* Selector dropdowns */}
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-primary/80 font-esoteric">CARD A (주제: 명사)</span>
                <select
                  value={cardAId}
                  onChange={(e) => setCardAId(Number(e.target.value))}
                  className="bg-background border border-primary/20 text-foreground text-xs rounded px-2.5 py-1 focus:ring-primary focus:border-primary font-serif-kr shadow-sm"
                >
                  {LENORMAND_CARDS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.id}. {c.krName} ({c.name})
                    </option>
                  ))}
                </select>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleSwap}
                className="border-primary/20 hover:bg-primary/10 text-primary mt-4 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" /> SWAP
              </Button>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-primary/80 font-esoteric">CARD B (수식: 형용사)</span>
                <select
                  value={cardBId}
                  onChange={(e) => setCardBId(Number(e.target.value))}
                  className="bg-background border border-primary/20 text-foreground text-xs rounded px-2.5 py-1 focus:ring-primary focus:border-primary font-serif-kr shadow-sm"
                >
                  {LENORMAND_CARDS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.id}. {c.krName} ({c.name})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Visualization Grid */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-4">
              <div className="flex items-center gap-4">
                <StudyCard card={cardA} showDetails={false} interactive={false} highlighted={true} />
                <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                <StudyCard card={cardB} showDetails={false} interactive={false} />
              </div>

              {/* Combination Meaning Output */}
              <div className="bg-background border border-primary/20 p-4 rounded-xl max-w-md w-full font-serif-kr space-y-3 shadow-inner">
                <div className="flex items-center gap-1 text-xs font-semibold text-primary">
                  <Sparkles className="w-4 h-4" /> 조합 리딩 결과
                </div>
                <p className="text-xs text-foreground/90 leading-relaxed bg-primary/5 p-3 rounded border border-primary/10">
                  {getCombinationMeaning(cardAId, cardBId)}
                </p>
                <div className="text-[10px] text-foreground/50 leading-relaxed pl-1">
                  * <strong>Card A({cardA.krName})</strong>는 문장에서 주어/명사 역할을 하며 질문의 대상이나 상황을 설정하고, <strong>Card B({cardB.krName})</strong>는 형용사 역할을 하여 상황의 양상이나 분위기를 묘사합니다.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Mirroring */}
        {simTab === "mirror" && (
          <div className="space-y-6 font-serif-kr">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-base font-bold text-primary font-esoteric mb-1">미러링 (Mirroring / 투영)</h3>
              <p className="text-xs text-foreground/70">
                한 줄의 카드 스프레드를 가로/세로로 반으로 접었을 때, <strong>서로 거울처럼 대칭으로 마주 보는 카드</strong>들을 조합하여 추가적인 디테일을 도출하는 고급 기법입니다.
              </p>
            </div>

            {/* Mirroring Visualizer */}
            <div className="bg-background border border-primary/10 p-4 rounded-xl space-y-6 shadow-inner">
              <div className="text-center text-xs text-primary font-semibold">예시: 5장 스프레드 가로 미러링</div>
              
              <div className="flex justify-center items-center gap-3 md:gap-6 flex-wrap">
                {/* Card 1: Man */}
                <div className="flex flex-col items-center gap-1.5 relative">
                  <span className="text-[10px] text-primary/70 font-esoteric">1. 신사 (Man)</span>
                  <div className="ring-2 ring-indigo-500/50 rounded-xl p-1">
                    <StudyCard card={LENORMAND_CARDS.find(c => c.id === 28)!} showDetails={false} interactive={false} />
                  </div>
                  <div className="absolute -bottom-4 text-[9px] text-indigo-500 font-esoteric font-bold">MIRROR ⇄ 5</div>
                </div>

                {/* Card 2: Letter */}
                <div className="flex flex-col items-center gap-1.5 relative">
                  <span className="text-[10px] text-primary/70 font-esoteric">2. 편지 (Letter)</span>
                  <div className="ring-2 ring-emerald-500/50 rounded-xl p-1">
                    <StudyCard card={LENORMAND_CARDS.find(c => c.id === 27)!} showDetails={false} interactive={false} />
                  </div>
                  <div className="absolute -bottom-4 text-[9px] text-emerald-600 font-esoteric font-bold">MIRROR ⇄ 4</div>
                </div>

                {/* Card 3: Ship */}
                <div className="flex flex-col items-center gap-1.5 relative">
                  <span className="text-[10px] text-primary/70 font-esoteric">3. 배 (Ship)</span>
                  <div className="ring-1 ring-primary/20 rounded-xl p-1">
                    <StudyCard card={LENORMAND_CARDS.find(c => c.id === 3)!} showDetails={false} interactive={false} />
                  </div>
                  <div className="absolute -bottom-4 text-[9px] text-primary/50 font-esoteric">중앙 카드</div>
                </div>

                {/* Card 4: Bouquet */}
                <div className="flex flex-col items-center gap-1.5 relative">
                  <span className="text-[10px] text-primary/70 font-esoteric">4. 꽃다발 (Bouquet)</span>
                  <div className="ring-2 ring-emerald-500/50 rounded-xl p-1">
                    <StudyCard card={LENORMAND_CARDS.find(c => c.id === 9)!} showDetails={false} interactive={false} />
                  </div>
                </div>

                {/* Card 5: Fish */}
                <div className="flex flex-col items-center gap-1.5 relative">
                  <span className="text-[10px] text-primary/70 font-esoteric">5. 물고기 (Fish)</span>
                  <div className="ring-2 ring-indigo-500/50 rounded-xl p-1">
                    <StudyCard card={LENORMAND_CARDS.find(c => c.id === 34)!} showDetails={false} interactive={false} />
                  </div>
                </div>
              </div>

              {/* Explanatory text */}
              <div className="pt-6 border-t border-primary/10 max-w-2xl mx-auto space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-primary font-semibold">
                  <Info className="w-4 h-4" /> 미러링 상세 해석 흐름
                </div>
                <div className="text-foreground/80 leading-relaxed text-[11px] bg-primary/5 p-3 rounded border border-primary/10 space-y-1">
                  <p>• <strong>기본 리딩</strong>: 한 남성(신사)이 소식(편지)을 받았는데, 그것은 그에게 재정적(물고기) 및 사업적 기회(배)를 주었으며, 그는 이에 대해 매우 기뻐(꽃다발)하고 있습니다.</p>
                  <p>• <strong>미러링 1 (1번 신사 ⇄ 5번 물고기)</strong>: 신사가 물고기 카드를 거울처럼 비추고 있으므로, 이 남성이 <strong>'부유하거나 사업을 하는 사업가 남성'</strong>임을 추가로 알 수 있습니다.</p>
                  <p>• <strong>미러링 2 (2번 편지 ⇄ 4번 꽃다발)</strong>: 편지 카드가 꽃다발을 미러링하므로, 전달된 소식이 단순한 메시지가 아니라 <strong>'당신을 행복하게 만드는 축하 소식이나 공식 초대장'</strong>임을 구체화합니다.</p>
                  <p>• <strong>최종 심화 리딩</strong>: "사업가 남성이 해외로부터 아주 유망하고 행복한 비즈니스 초대장을 받아 여행을 떠나게 됩니다."</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Knighting */}
        {simTab === "knight" && (
          <div className="space-y-6 font-serif-kr">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-base font-bold text-primary font-esoteric mb-1">나이팅 (Knighting)</h3>
              <p className="text-xs text-foreground/70">
                체스의 <strong>나이트(Knight)</strong> 기물처럼 'L'자 형태로 점프하여 위치한 카드들을 연결해 읽는 고급 리딩법입니다. 3행 이상의 대형 배열법(그랑 타블로 등)에서 특정 삶의 영역을 입체적으로 규명할 때 활용됩니다.
              </p>
            </div>

            {/* Chess Grid Visualizer */}
            <div className="bg-background border border-primary/10 p-4 rounded-xl space-y-4 max-w-xl mx-auto shadow-inner">
              <div className="text-center text-xs text-primary font-semibold">예시: 3×3 그리드 상의 나이팅 경로</div>
              
              <div className="grid grid-cols-3 gap-3 justify-items-center w-72 mx-auto">
                {/* Row 1 */}
                <div className="w-20 h-24 bg-emerald-50 border border-emerald-300 rounded flex flex-col items-center justify-center text-center p-1 relative shadow-sm">
                  <span className="text-[10px] text-emerald-800 font-esoteric font-semibold">나이트 종점 A</span>
                  <span className="text-xl">⚓</span>
                  <span className="text-[9px] text-foreground/60">닻 (Anchor)</span>
                  <div className="absolute -top-1.5 -left-1.5 bg-emerald-500 text-white text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center">L1</div>
                </div>
                <div className="w-20 h-24 bg-card border border-primary/10 rounded flex flex-col items-center justify-center text-center p-1 opacity-40">
                  <span className="text-xl">🏠</span>
                  <span className="text-[9px] text-foreground/40">집</span>
                </div>
                <div className="w-20 h-24 bg-emerald-50 border border-emerald-300 rounded flex flex-col items-center justify-center text-center p-1 relative shadow-sm">
                  <span className="text-[10px] text-emerald-800 font-esoteric font-semibold">나이트 종점 B</span>
                  <span className="text-xl">🔑</span>
                  <span className="text-[9px] text-foreground/60">열쇠 (Key)</span>
                  <div className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center">L2</div>
                </div>

                {/* Row 2 */}
                <div className="w-20 h-24 bg-card border border-primary/10 rounded flex flex-col items-center justify-center text-center p-1 opacity-40">
                  <span className="text-xl">🦊</span>
                  <span className="text-[9px] text-foreground/40">여우</span>
                </div>
                <div className="w-20 h-24 bg-card border border-primary/10 rounded flex flex-col items-center justify-center text-center p-1 opacity-40">
                  <span className="text-xl">🌳</span>
                  <span className="text-[9px] text-foreground/40">나무</span>
                </div>
                <div className="w-20 h-24 bg-card border border-primary/10 rounded flex flex-col items-center justify-center text-center p-1 opacity-40">
                  <span className="text-xl">✉️</span>
                  <span className="text-[9px] text-foreground/40">편지</span>
                </div>

                {/* Row 3 */}
                <div className="w-20 h-24 bg-card border border-primary/10 rounded flex flex-col items-center justify-center text-center p-1 opacity-40">
                  <span className="text-xl">🚢</span>
                  <span className="text-[9px] text-foreground/40">배</span>
                </div>
                {/* Center Knight Start */}
                <div className="w-20 h-24 bg-primary/10 border-2 border-primary rounded flex flex-col items-center justify-center text-center p-1 relative shadow-md">
                  <span className="text-[10px] text-primary font-esoteric font-bold">핵심 카드 (Start)</span>
                  <span className="text-xl">🌙</span>
                  <span className="text-[9px] text-primary font-bold">달 (Moon)</span>
                  <div className="absolute -bottom-1.5 bg-primary text-primary-foreground text-[8px] font-bold px-1 rounded-full">나이트 기점</div>
                </div>
                <div className="w-20 h-24 bg-card border border-primary/10 rounded flex flex-col items-center justify-center text-center p-1 opacity-40">
                  <span className="text-xl">🍀</span>
                  <span className="text-[9px] text-foreground/40">클로버</span>
                </div>
              </div>

              {/* Explanatory text */}
              <div className="pt-4 border-t border-primary/10 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-primary font-semibold">
                  <Info className="w-4 h-4" /> 나이팅 작동 메커니즘
                </div>
                <p className="text-foreground/80 leading-relaxed text-[11px] bg-primary/5 p-3 rounded border border-primary/10">
                  • <strong>출발점</strong>: 3행 2열에 있는 <strong>달(Moon, 직업/명성)</strong> 카드에서 시작합니다.<br />
                  • <strong>이동 경로 L1</strong>: 위로 두 칸, 왼쪽으로 한 칸 이동하여 1행 1열의 <strong>닻(Anchor, 고용안정)</strong>에 도달합니다.<br />
                  • <strong>이동 경로 L2</strong>: 위로 두 칸, 오른쪽으로 한 칸 이동하여 1행 3열의 <strong>열쇠(Key, 해결책/성공)</strong>에 도달합니다.<br />
                  • <strong>해석</strong>: 달(직업)에서 닻(안정성)과 열쇠(성공)가 동시에 나이팅되므로, "이 직업은 확실하게 성공과 고용 안정을 가져다줄 열쇠가 될 것"임을 입체적으로 확증합니다.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Chaining */}
        {simTab === "chain" && (
          <div className="space-y-6 font-serif-kr">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-base font-bold text-primary font-esoteric mb-1">체인 리딩법 (Chaining / 사슬 연결)</h3>
              <p className="text-xs text-foreground/70">
                특정 테마를 나타내는 <strong>두 장의 핵심 테마 카드(예: 직업을 의미하는 달과 닻)</strong> 사이에 놓인 카드들을 체인(사슬)처럼 엮어서, 오직 그 테마의 맥락 속에서만 해석을 집중하는 기법입니다.
              </p>
            </div>

            {/* Chaining Comparison */}
            <div className="space-y-6">
              {/* Scenario 1: Work Chain */}
              <div className="bg-background border border-blue-500/20 p-4 rounded-xl space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-blue-100 pb-2">
                  <span className="text-xs font-bold text-blue-700 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> 예시 A: 직업의 맥락에서 체인 연결
                  </span>
                  <span className="text-[10px] text-foreground/40 font-esoteric">THEME: WORK</span>
                </div>

                <div className="flex justify-center items-center gap-3 md:gap-4 flex-wrap">
                  <div className="flex flex-col items-center gap-1 opacity-70 scale-90">
                    <span className="text-[9px] text-blue-600 font-bold">기점 1</span>
                    <StudyCard card={LENORMAND_CARDS.find(c => c.id === 32)!} showDetails={false} interactive={false} />
                    <span className="text-[9px] text-foreground/60 font-semibold">달 (Moon: 직업)</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-300" />
                  <div className="flex flex-col items-center gap-1 ring-2 ring-amber-400 rounded-xl p-1 shadow-sm">
                    <span className="text-[9px] text-amber-600 font-bold">연결 고리</span>
                    <StudyCard card={LENORMAND_CARDS.find(c => c.id === 10)!} showDetails={false} interactive={false} />
                    <span className="text-[9px] text-foreground/60 font-semibold">낫 (Scythe: 단절)</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-300" />
                  <div className="flex flex-col items-center gap-1 opacity-70 scale-90">
                    <span className="text-[9px] text-blue-600 font-bold">기점 2</span>
                    <StudyCard card={LENORMAND_CARDS.find(c => c.id === 35)!} showDetails={false} interactive={false} />
                    <span className="text-[9px] text-foreground/60 font-semibold">닻 (Anchor: 안정)</span>
                  </div>
                </div>

                <p className="text-[11px] text-foreground/80 leading-relaxed bg-blue-50/50 p-2.5 rounded border border-blue-100">
                  • <strong>체인 해석</strong>: 직업(달)과 안정(닻) 사이에 낫(단절) 카드가 놓여 사슬을 형성합니다. 따라서 이는 일반적인 부상이나 위험이 아니라 <strong>"직업적인 안정성이 갑작스럽게 잘려 나가는 위기(해고, 실직 등)"</strong>로 정밀 타격 해석됩니다.
                </p>
              </div>

              {/* Scenario 2: Relationship Chain */}
              <div className="bg-background border border-rose-500/20 p-4 rounded-xl space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-rose-100 pb-2">
                  <span className="text-xs font-bold text-rose-700 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span> 예시 B: 사랑의 맥락에서 체인 연결
                  </span>
                  <span className="text-[10px] text-foreground/40 font-esoteric">THEME: RELATIONSHIP</span>
                </div>

                <div className="flex justify-center items-center gap-3 md:gap-4 flex-wrap">
                  <div className="flex flex-col items-center gap-1 opacity-70 scale-90">
                    <span className="text-[9px] text-rose-600 font-bold">기점 1</span>
                    <StudyCard card={LENORMAND_CARDS.find(c => c.id === 24)!} showDetails={false} interactive={false} />
                    <span className="text-[9px] text-foreground/60 font-semibold">하트 (Heart: 사랑)</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-rose-300" />
                  <div className="flex flex-col items-center gap-1 ring-2 ring-amber-400 rounded-xl p-1 shadow-sm">
                    <span className="text-[9px] text-amber-600 font-bold">연결 고리</span>
                    <StudyCard card={LENORMAND_CARDS.find(c => c.id === 10)!} showDetails={false} interactive={false} />
                    <span className="text-[9px] text-foreground/60 font-semibold">낫 (Scythe: 단절)</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-rose-300" />
                  <div className="flex flex-col items-center gap-1 opacity-70 scale-90">
                    <span className="text-[9px] text-rose-600 font-bold">기점 2</span>
                    <StudyCard card={LENORMAND_CARDS.find(c => c.id === 25)!} showDetails={false} interactive={false} />
                    <span className="text-[9px] text-foreground/60 font-semibold">반지 (Ring: 약속)</span>
                  </div>
                </div>

                <p className="text-[11px] text-foreground/80 leading-relaxed bg-rose-50/50 p-2.5 rounded border border-rose-100">
                  • <strong>체인 해석</strong>: 사랑(하트)과 결혼/약속(반지) 사이에 동일한 낫(단절) 카드가 체인을 연결합니다. 이 경우 직업과는 무관하게 오직 연인 관계의 맥락으로 수렴되어 <strong>"사랑하는 사람과의 관계나 약속이 갑작스럽게 찢어지는 실연(이별, 파혼 등)"</strong>으로 해석됩니다.
                </p>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
