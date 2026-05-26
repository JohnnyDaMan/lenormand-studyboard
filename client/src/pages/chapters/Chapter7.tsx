import React, { useState } from "react";
import { LENORMAND_CARDS } from "@/const";
import StudyCard from "@/components/StudyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { HelpCircle, CheckCircle2, RefreshCw, AlertCircle, Sparkles, Compass } from "lucide-react";

interface StudyQuizQuestion {
  id: number;
  questionKr: string;
  questionEn: string;
  options: string[];
  correctIdx: number;
  explanation: string;
  cards: string[]; // Cards to display for reference
}

export default function Chapter7() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const questions: StudyQuizQuestion[] = [
    {
      id: 1,
      questionKr: "다음 카드 조합에서 '신사'가 '물고기'를 미러링(Mirroring)하고 있을 때, 추가되는 해석 세부 사항은 무엇인가요?\n[ 신사 – 편지 – 배 – 꽃다발 – 물고기 ]",
      questionEn: "In the combination [ Lord – Letter – Ship – Bouquet – Fish ], when 'Lord' mirrors 'Fish', what additional detail is revealed?",
      options: [
        "이 남성은 편지를 보내는 집배원이다.",
        "이 남성은 매우 부유하거나 사업을 영위하는 남성이다.",
        "이 남성은 조만간 배를 타고 먼 여행을 떠날 예정이다.",
        "이 남성은 아름다운 꽃다발 선물을 받고 크게 감동했다."
      ],
      correctIdx: 1,
      explanation: "신사(Lord)와 물고기(Fish)는 가로 5장 배열의 양 끝에 위치하여 서로 거울처럼 마주 봅니다. 물고기는 재정 및 풍요를 상징하므로, 신사가 물고기를 미러링하는 것은 이 남성이 부유하거나 사업가임을 구체화해 줍니다.",
      cards: ["Lord", "Letter", "Ship", "Bouquet", "Fish"]
    },
    {
      id: 2,
      questionKr: "다음 체인(Chain) 리딩에서 새-숙녀-채찍 카드가 '반지'와 '하트' 사이에 놓여 있습니다. 올바른 해석은 무엇인가요?\n[ 반지 – 새 – 숙녀 – 채찍 – 하트 ]",
      questionEn: "In the chain [ Ring – Birds – Lady – Rod – Heart ], what is the correct interpretation?",
      options: [
        "질문자가 새로운 직장을 얻어 계약을 체결하고 매우 기뻐한다.",
        "질문자가 사랑의 기쁨으로 가득 찬 새로운 동반자를 만나 가정을 이룬다.",
        "질문자의 관계가 갈등 때문에 파국을 맞이하고, 큰 마음의 상처를 입는다.",
        "질문자가 애완동물인 새를 잃어버렸으나 결국 다시 찾아 행복해진다."
      ],
      correctIdx: 2,
      explanation: "양 끝의 반지(Ring)와 하트(Heart)는 사랑과 연인 관계라는 명확한 테마를 설정합니다. 그 사이의 갈등과 불화(새-숙녀-채찍)는 직무 스트레스가 아닌 연인 관계의 파탄과 상처로 해석되어야 합니다.",
      cards: ["Ring", "Birds", "Lady", "Rod", "Heart"]
    }
  ];

  const currentQuestion = questions[currentQuestionIdx];

  const handleOptionSelect = (idx: number) => {
    if (showResult) return;
    setSelectedOption(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowResult(false);
    setCurrentQuestionIdx((prev) => (prev + 1) % questions.length);
  };

  const handleResetQuiz = () => {
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-2xl font-bold text-primary font-esoteric tracking-wider flex items-center justify-center gap-2">
          <Compass className="w-6 h-6 animate-spin-slow" /> EXERCISE #3 : ADVANCED METHODS QUIZ
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed font-serif-kr">
          미러링과 체인 등 110-112페이지에 수록된 고급 리딩 기법을 바탕으로 한 실전 복기 퀴즈입니다. 
          스터디원들과 토론하며 올바른 답을 도출해 보세요.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Panel: Question and Options */}
        <div className="lg:col-span-6 space-y-4">
          <Card className="bg-card/30 backdrop-blur-md border-primary/20">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-esoteric border border-primary/20">
                  ADVANCED QUIZ {currentQuestionIdx + 1} / {questions.length}
                </span>
              </div>
              <CardTitle className="text-base font-bold text-foreground font-serif-kr leading-relaxed whitespace-pre-line">
                {currentQuestion.questionKr}
              </CardTitle>
              <CardDescription className="text-xs text-foreground/50 italic font-esoteric pt-1">
                {currentQuestion.questionEn}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 font-serif-kr">
              {/* Options list */}
              <div className="space-y-2">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correctIdx;
                  
                  let optionStyle = "bg-background/40 border-primary/10 hover:bg-primary/5 text-foreground/80";
                  if (isSelected) {
                    optionStyle = "bg-primary/10 border-primary text-primary font-semibold";
                  }
                  if (showResult) {
                    if (isCorrect) {
                      optionStyle = "bg-emerald-950/40 border-emerald-500 text-emerald-400 font-semibold";
                    } else if (isSelected) {
                      optionStyle = "bg-rose-950/40 border-rose-500 text-rose-400";
                    } else {
                      optionStyle = "bg-background/10 border-primary/5 text-foreground/30";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={showResult}
                      className={`w-full text-left p-3 rounded-lg border text-xs transition-all duration-200 leading-relaxed flex items-start gap-2 ${optionStyle}`}
                    >
                      <span className="font-esoteric text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div className={`p-3.5 rounded-lg border text-xs space-y-2 animate-fade-in ${
                  selectedOption === currentQuestion.correctIdx 
                    ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/30" 
                    : "bg-rose-950/40 text-rose-400 border-rose-500/30"
                }`}>
                  <div className="font-bold flex items-center gap-1.5 text-sm">
                    {selectedOption === currentQuestion.correctIdx ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>정답입니다! 완벽한 이해도입니다.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-rose-400" />
                        <span>오답입니다. 아래 해설을 확인해 보세요.</span>
                      </>
                    )}
                  </div>
                  <p className="text-[11px] text-foreground/90 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex gap-2">
              {!showResult ? (
                <Button
                  onClick={handleCheckAnswer}
                  disabled={selectedOption === null}
                  className="w-full text-xs font-serif-kr"
                >
                  정답 확인하기
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  className="w-full text-xs font-serif-kr"
                >
                  다음 문제 풀기
                </Button>
              )}
              <Button
                variant="outline"
                size="icon"
                onClick={handleResetQuiz}
                className="border-primary/20 hover:bg-primary/10 text-primary"
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right Panel: Displaying Question Cards */}
        <div className="lg:col-span-6">
          <Card className="bg-card/10 backdrop-blur-sm border-primary/10 p-6 flex flex-col justify-center items-center h-full">
            <div className="text-center text-xs text-primary/70 font-esoteric mb-4 tracking-wider">
              QUESTION CARD SEQUENCE
            </div>
            <div className="flex justify-center items-center gap-2 flex-wrap">
              {currentQuestion.cards.map((cname, idx) => {
                const card = LENORMAND_CARDS.find((c) => c.nameEn.toLowerCase() === cname.toLowerCase());
                const isMirroredOrTheme = 
                  currentQuestion.id === 1 && (idx === 0 || idx === 4) || // Lord mirrors Fish
                  currentQuestion.id === 2 && (idx === 0 || idx === 4);   // Ring and Heart theme anchors

                return card ? (
                  <div key={card.id} className="relative">
                    <StudyCard
                      card={card}
                      showDetails={false}
                      interactive={false}
                      highlighted={isMirroredOrTheme}
                      className="scale-90"
                    />
                    {isMirroredOrTheme && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary/95 text-primary-foreground text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-md font-esoteric whitespace-nowrap">
                        {currentQuestion.id === 1 ? "MIRROR" : "THEME"}
                      </div>
                    )}
                  </div>
                ) : null;
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
