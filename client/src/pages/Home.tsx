import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Chapter1 from "./chapters/Chapter1";
import Chapter2 from "./chapters/Chapter2";
import Chapter3 from "./chapters/Chapter3";
import Chapter4 from "./chapters/Chapter4";
import Chapter5 from "./chapters/Chapter5";
import Chapter6 from "./chapters/Chapter6";
import Chapter7 from "./chapters/Chapter7";
import Chapter8 from "./chapters/Chapter8";
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, Monitor } from "lucide-react";

export default function Home() {
  const [currentChapter, setCurrentQuestion] = useState(1);
  const totalChapters = 8;

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentChapter]);

  const handleNext = () => {
    if (currentChapter < totalChapters) {
      setCurrentQuestion(currentChapter + 1);
    }
  };

  const handlePrev = () => {
    if (currentChapter > 1) {
      setCurrentQuestion(currentChapter - 1);
    }
  };

  const progressPercentage = (currentChapter / totalChapters) * 100;

  return (
    <div className="min-h-screen flex flex-col text-foreground select-none relative pb-12">
      {/* Top Header Nav */}
      <header className="border-b border-primary/20 bg-background/60 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]">🔮</span>
          <div>
            <h1 className="text-sm font-bold tracking-widest text-primary font-esoteric">
              LENORMAND STUDYBOARD
            </h1>
            <p className="text-[10px] text-foreground/50 tracking-wider">
              조합 및 리딩법 마스터보드
            </p>
          </div>
        </div>

        {/* Chapters quick selection bar */}
        <nav className="hidden md:flex items-center gap-1">
          {Array.from({ length: totalChapters }).map((_, i) => {
            const chNum = i + 1;
            const isActive = currentChapter === chNum;
            return (
              <Button
                key={chNum}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentQuestion(chNum)}
                className={`text-[10px] font-esoteric h-7 px-2.5 rounded-md transition-all duration-300 ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(212,175,55,0.4)]" 
                    : "text-foreground/60 hover:text-primary hover:bg-primary/10"
                }`}
              >
                CH {chNum}
              </Button>
            );
          })}
        </nav>

        {/* Quick info / Study mode */}
        <div className="flex items-center gap-1.5 text-[10px] text-primary/80 font-esoteric bg-primary/10 border border-primary/20 px-2 py-1 rounded-md">
          <Monitor className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">STUDY MODE</span>
          <span>CH {currentChapter} / {totalChapters}</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-background/20 sticky top-[61px] z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary via-indigo-500 to-primary transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Main Study Area */}
      <main className="flex-1 container max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
        <div className="transition-all duration-500 transform">
          {currentChapter === 1 && <Chapter1 />}
          {currentChapter === 2 && <Chapter2 />}
          {currentChapter === 3 && <Chapter3 />}
          {currentChapter === 4 && <Chapter4 />}
          {currentChapter === 5 && <Chapter5 />}
          {currentChapter === 6 && <Chapter6 />}
          {currentChapter === 7 && <Chapter7 />}
          {currentChapter === 8 && <Chapter8 />}
        </div>
      </main>

      {/* Floating Bottom Nav Controllers */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border border-primary/30 rounded-full px-4 py-2 shadow-[0_4px_20px_rgba(7,11,25,0.6)] flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          disabled={currentChapter === 1}
          className="rounded-full border-primary/20 hover:bg-primary/10 text-primary h-9 w-9 disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="text-xs font-esoteric font-bold text-primary tracking-widest px-2 min-w-[100px] text-center">
          CHAPTER {currentChapter}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentChapter === totalChapters}
          className="rounded-full border-primary/20 hover:bg-primary/10 text-primary h-9 w-9 disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
