import React, { useState } from "react";
import { LENORMAND_CARDS } from "@/const";
import StudyCard from "@/components/StudyCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Sparkles, HelpCircle, CheckCircle2, RefreshCw, AlertCircle } from "lucide-react";

interface QuizQuestion {
  id: number;
  questionKr: string;
  questionEn: string;
  correctCards: string[]; // English names of key cards
  explanation: string;
}

export default function Chapter4() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      questionKr: "한 여성이 그녀의 여성 파트너에 대해 질문하러 왔습니다. 어떤 카드들을 주로 살펴보아야 할까요?",
      questionEn: "A woman comes to ask questions about her female partner. What cards will you need to look at?",
      correctCards: ["Lady", "Snake", "Heart", "Ring", "Anchor", "Lily"],
      explanation: "여성 질문자는 숙녀(Lady) 카드로 대변되며, 동성 파트너는 뱀(Snake) 카드가 대변합니다. 관계의 본질을 파악하기 위해 하트(사랑), 반지(약속/계약), 닻(지속성), 백합(성숙한 관계) 카드를 함께 조사해야 합니다."
    },
    {
      id: 2,
      questionKr: "한 남성 질문자가 취업 면접을 보러 갈 예정이며, 자신이 성공할 수 있을지 궁금해합니다. 핵심 카드는 무엇일까요?",
      questionEn: "A male querent is going to a job interview and wonders if he will be successful. What are the key cards?",
      correctCards: ["Lord", "Moon", "Anchor", "Sun", "Key"],
      explanation: "남성 질문자는 신사(Lord) 카드로 나타납니다. 직업을 뜻하는 달(Moon)과 고용 안정의 닻(Anchor), 성공을 뜻하는 태양(Sun), 그리고 해결책과 포부를 상징하는 열쇠(Key) 카드가 핵심 지시자입니다."
    },
    {
      id: 3,
      questionKr: "당신의 아들의 여자친구가 그를 떠났고, 당신은 그들이 다시 재결합할지 알고 싶어 합니다. 핵심 카드는 무엇일까요?",
      questionEn: "Your son's girlfriend has left him and you want to know if they will get back together. What are the key cards?",
      correctCards: ["Child", "Paths", "Ring", "Anchor", "Heart"],
      explanation: "당신의 아들은 아이(Child) 카드로, 그의 여자친구는 질문자의 삶에서 공식적인 역할이 없는 젊은 여성을 상징하는 길(Paths) 카드로 대변됩니다. 재결합 여부는 반지(결합), 닻(안정성), 하트(사랑) 카드를 통해 분석합니다."
    }
  ];

  const currentQuestion = questions[currentQuestionIdx];

  const handleCardToggle = (cardEnName: string) => {
    if (showResult) return;
    if (selectedCards.includes(cardEnName)) {
      setSelectedCards(selectedCards.filter((name) => name !== cardEnName));
    } else {
      setSelectedCards([...selectedCards, cardEnName]);
    }
  };

  const handleCheckAnswer = () => {
    // Check if the selected cards exactly match (or contain) the correct cards
    const hasAllCorrect = currentQuestion.correctCards.every((card) => selectedCards.includes(card));
    const hasNoExtra = selectedCards.every((card) => currentQuestion.correctCards.includes(card));
    
    setIsCorrect(hasAllCorrect && hasNoExtra);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setSelectedCards([]);
    setShowResult(false);
    setIsCorrect(false);
    setCurrentQuestionIdx((prev) => (prev + 1) % questions.length);
  };

  const handleResetQuiz = () => {
    setSelectedCards([]);
    setShowResult(false);
    setIsCorrect(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-2xl font-bold text-primary font-esoteric tracking-wider flex items-center justify-center gap-2">
          <HelpCircle className="w-6 h-6" /> EXERCISE #2 : THEME QUIZ
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed font-serif-kr">
          실제 리딩 상황에서 질문의 맥락에 맞는 <strong>핵심 지시자 카드(Key Cards)</strong>들을 올바르게 선택할 수 있는지 테스트합니다.
        </p>
      </div>

      {/* Main Quiz Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Panel: Question and Status */}
        <div className="lg:col-span-4 space-y-4">
          <Card className="bg-card/30 backdrop-blur-md border-primary/20">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-esoteric border border-primary/20">
                  QUESTION {currentQuestionIdx + 1} / {questions.length}
                </span>
              </div>
              <CardTitle className="text-base font-bold text-foreground font-serif-kr leading-relaxed">
                {currentQuestion.questionKr}
              </CardTitle>
              <CardDescription className="text-xs text-foreground/50 italic font-esoteric pt-1">
                {currentQuestion.questionEn}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 font-serif-kr">
              <div className="bg-background/40 p-3 rounded-lg border border-primary/10 text-xs">
                <div className="text-primary font-semibold mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-primary" /> 선택 가이드
                </div>
                <p className="text-foreground/80 leading-relaxed text-[11px]">
                  오른쪽 카드 목록에서 해당 질문의 리딩에 필요한 핵심 카드들을 모두 선택해 주세요. 선택을 마친 후 아래 '정답 확인' 버튼을 클릭합니다.
                </p>
              </div>

              {showResult && (
                <div className={`p-3 rounded-lg border text-xs space-y-2 animate-fade-in ${
                  isCorrect 
                    ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/30" 
                    : "bg-rose-950/40 text-rose-400 border-rose-500/30"
                }`}>
                  <div className="font-bold flex items-center gap-1.5 text-sm">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>훌륭합니다! 정답입니다.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-rose-400" />
                        <span>아쉽습니다. 다시 한 번 생각해 보세요.</span>
                      </>
                    )}
                  </div>
                  <p className="text-[11px] text-foreground/90 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                  <div className="pt-1.5 flex flex-wrap gap-1">
                    <span className="text-[10px] text-foreground/60 w-full mb-0.5 block">올바른 핵심 카드:</span>
                    {currentQuestion.correctCards.map((cname) => {
                      const c = LENORMAND_CARDS.find((card) => card.nameEn === cname);
                      return c ? (
                        <span key={c.id} className="bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded text-[10px] font-esoteric">
                          {c.image} {c.nameEn}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex gap-2">
              {!showResult ? (
                <Button
                  onClick={handleCheckAnswer}
                  disabled={selectedCards.length === 0}
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

        {/* Right Panel: Interactive Card Selector */}
        <div className="lg:col-span-8">
          <Card className="bg-card/10 backdrop-blur-sm border-primary/10 p-4">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 justify-items-center max-h-[550px] overflow-y-auto pr-2">
              {LENORMAND_CARDS.map((card) => {
                const isSelected = selectedCards.includes(card.nameEn);
                const isCorrectAnswer = currentQuestion.correctCards.includes(card.nameEn);
                const showSuccessBorder = showResult && isCorrectAnswer;
                const showFailureBorder = showResult && isSelected && !isCorrectAnswer;

                return (
                  <div
                    key={card.id}
                    onClick={() => handleCardToggle(card.nameEn)}
                    className={`relative cursor-pointer rounded-xl transition-all duration-300 ${
                      isSelected ? "ring-2 ring-primary scale-105 z-10" : "opacity-70 hover:opacity-100"
                    } ${
                      showSuccessBorder ? "ring-2 ring-emerald-500 scale-105" : ""
                    } ${
                      showFailureBorder ? "ring-2 ring-rose-500" : ""
                    }`}
                  >
                    <StudyCard
                      card={card}
                      showDetails={false}
                      interactive={false}
                    />
                    {isSelected && (
                      <div className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shadow-md">
                        ✓
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
