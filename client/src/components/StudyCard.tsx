import React, { useState } from "react";
import { LenormandCard } from "@/const";
import { cn } from "@/lib/utils";

// 카드 이미지 대신 유니코드/이모지 또는 심플 텍스트를 사용할 수 있도록 매핑
export const CARD_EMOJIS: Record<number, string> = {
  1: "🏇",  // Cavalier
  2: "🍀",  // Clover
  3: "⛵",  // Ship
  4: "🏠",  // House
  5: "🌳",  // Tree
  6: "☁️",  // Clouds
  7: "🐍",  // Snake
  8: "⚰️",  // Coffin
  9: "💐",  // Bouquet
  10: "⚔️", // Scythe (낫 대신 칼/무기)
  11: "🧹", // Whip (채찍 대신 빗자루)
  12: "🦉", // Birds (새)
  13: "👶", // Child
  14: "🦊", // Fox
  15: "🐻", // Bear
  16: "⭐", // Star
  17: "🪶", // Stork
  18: "🐕", // Dog
  19: "🏰", // Tower
  20: "🏡", // Garden (공원/정원)
  21: "⛰️", // Mountain
  22: "🛣️", // Road
  23: "🐀", // Mouse
  24: "❤️", // Heart
  25: "💍", // Ring
  26: "📖", // Book
  27: "✉️", // Letter
  28: "🤵", // Man
  29: "👩", // Lady
  30: "💮", // Lily (백합/꽃)
  31: "☀️", // Sun
  32: "🌙", // Moon
  33: "🔑", // Key
  34: "🐟", // Fish
  35: "⚓", // Anchor
  36: "✝️", // Cross
};

export default function StudyCard({
  card,
  className,
  showDetails = true,
  interactive = true,
  highlighted = false,
  dimmed = false,
}: {
  card: LenormandCard;
  className?: string;
  showDetails?: boolean;
  interactive?: boolean;
  highlighted?: boolean;
  dimmed?: boolean;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (interactive) {
      setIsFlipped(!isFlipped);
    }
  };

  const emoji = CARD_EMOJIS[card.id] || "🃏";

  return (
    <div
      className={cn(
        "flex flex-col items-center select-none transition-all duration-300",
        dimmed && "opacity-30 scale-95",
        highlighted && "scale-105 z-10",
        className
      )}
    >
      {/* 3D Card Flip Container */}
      <div
        onClick={handleFlip}
        className={cn(
          "relative w-36 h-48 cursor-pointer [perspective:1000px] transition-transform duration-300",
          interactive && "hover:-translate-y-2 active:scale-95"
        )}
      >
        <div
          className={cn(
            "relative w-full h-full duration-500 [transform-style:preserve-3d] border border-primary/20 rounded-xl shadow-md bg-card text-card-foreground",
            isFlipped && "[transform:rotateY(180deg)]",
            highlighted && "ring-2 ring-accent shadow-lg shadow-accent/20"
          )}
        >
          {/* Card Front (isFlipped가 아닐 때만 내부 텍스트 렌더링하여 z-index 겹침/충돌을 방지합니다) */}
          <div 
            className={cn(
              "absolute inset-0 w-full h-full rounded-xl bg-gradient-to-b from-card to-background flex flex-col justify-between p-3 border border-primary/10 [backface-visibility:hidden]",
              isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            {/* Top Info */}
            <div className="flex justify-between items-center text-[10px] text-primary/70 font-esoteric">
              <span>No. {card.id}</span>
              <span className="text-[9px] bg-primary/10 px-1 rounded text-primary border border-primary/20">
                {card.playingCard}
              </span>
            </div>

            {/* Central Symbol */}
            <div className="text-5xl my-auto flex items-center justify-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              {emoji}
            </div>

            {/* Bottom Info */}
            <div className="text-center">
              <div className="text-xs font-semibold text-primary font-esoteric tracking-wider">
                {card.name.toUpperCase()}
              </div>
              <div className="text-[11px] text-foreground/80 font-medium font-serif-kr">
                {card.krName}
              </div>
            </div>
          </div>

          {/* Card Back (isFlipped일 때만 텍스트를 노출하여 브라우저 3D 겹침 에러를 완벽 우회합니다) */}
          <div 
            className={cn(
              "absolute inset-0 w-full h-full rounded-xl [transform:rotateY(180deg)] overflow-hidden border border-primary/20 bg-amber-50/95 flex flex-col justify-center p-3 text-center [backface-visibility:hidden]",
              isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <div className="text-[9px] text-primary/80 font-esoteric mb-1">
              No. {card.id} {card.name}
            </div>
            <div className="border-t border-primary/20 my-1"></div>
            
            {/* Near Meaning */}
            <div className="text-[9px] text-foreground/50 font-serif-kr">근거리 (Near) 명사</div>
            <div className="text-[11px] font-semibold text-primary mb-1.5 font-serif-kr">
              {card.nearNouns.join(", ")}
            </div>

            {/* Far Meaning */}
            <div className="text-[9px] text-foreground/50 font-serif-kr">원거리 (Far) 명사</div>
            <div className="text-[11px] font-semibold text-amber-800 mb-1.5 font-serif-kr">
              {card.farNouns.join(", ")}
            </div>

            {/* Adjectives */}
            <div className="text-[9px] text-foreground/50 font-serif-kr">형용사 (Adjective)</div>
            <div className="text-[11px] font-semibold text-emerald-800 font-serif-kr">
              {card.adjectives.join(", ")}
            </div>
          </div>
        </div>
      </div>

      {/* Details underneath card */}
      {showDetails && (
        <div className="mt-2 text-center max-w-[150px]">
          <span
            className={cn(
              "inline-block text-[9px] px-1.5 py-0.5 rounded-full font-esoteric border",
              card.polarity === "positive" && "bg-emerald-100 text-emerald-800 border-emerald-300",
              card.polarity === "positive-neutral" && "bg-teal-100 text-teal-800 border-teal-300",
              card.polarity === "neutral" && "bg-amber-100 text-amber-800 border-amber-300",
              card.polarity === "neutral-negative" && "bg-orange-100 text-orange-800 border-orange-300",
              card.polarity === "negative" && "bg-rose-100 text-rose-800 border-rose-300"
            )}
          >
            {card.polarity.toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
}
