import React, { useState } from "react";
import { LenormandCard, CARD_BACK_IMG } from "@/const";
import { cn } from "@/lib/utils";

interface StudyCardProps {
  card: LenormandCard;
  className?: string;
  showDetails?: boolean;
  interactive?: boolean;
  highlighted?: boolean;
  dimmed?: boolean;
}

export default function StudyCard({
  card,
  className,
  showDetails = true,
  interactive = true,
  highlighted = false,
  dimmed = false,
}: StudyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (interactive) {
      setIsFlipped(!isFlipped);
    }
  };

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
          "relative w-36 h-48 cursor-pointer perspective-1000 transition-transform duration-500",
          interactive && "hover:-translate-y-2 active:scale-95"
        )}
      >
        <div
          className={cn(
            "relative w-full h-full duration-500 transform-style-3d border border-primary/20 rounded-xl shadow-lg",
            isFlipped && "rotate-y-180",
            highlighted && "animate-mystical-glow"
          )}
        >
          {/* Card Front */}
          <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-b from-card to-background flex flex-col justify-between p-3 backface-hidden border border-primary/20">
            {/* Top Info */}
            <div className="flex justify-between items-center text-[10px] text-primary/70 font-esoteric">
              <span>No. {card.id}</span>
              <span className="text-[9px] bg-primary/10 px-1 rounded text-primary border border-primary/20">
                {card.playingCard}
              </span>
            </div>

            {/* Central Symbol */}
            <div className="text-5xl my-auto flex items-center justify-center filter drop-shadow-[0_4px_6px_rgba(212,175,55,0.3)]">
              {card.image}
            </div>

            {/* Bottom Info */}
            <div className="text-center">
              <div className="text-xs font-semibold text-primary font-esoteric tracking-wider">
                {card.nameEn.toUpperCase()}
              </div>
              <div className="text-[11px] text-foreground/80 font-medium">
                {card.nameKr}
              </div>
            </div>
          </div>

          {/* Card Back */}
          <div className="absolute inset-0 w-full h-full rounded-xl rotate-y-180 backface-hidden overflow-hidden border border-primary/30">
            <img
              src={CARD_BACK_IMG}
              alt="Card Back"
              className="w-full h-full object-cover"
            />
            {/* Key Words Overlay on Flip */}
            <div className="absolute inset-0 bg-background/90 flex flex-col justify-center p-3 text-center">
              <div className="text-[10px] text-primary/80 font-esoteric mb-1">
                No. {card.id} {card.nameEn}
              </div>
              <div className="border-t border-primary/20 my-1"></div>
              <div className="text-[10px] text-foreground/60 mb-0.5">명사</div>
              <div className="text-xs font-semibold text-primary mb-2">
                {card.keywords.nouns.join(", ")}
              </div>
              <div className="text-[10px] text-foreground/60 mb-0.5">형용사</div>
              <div className="text-xs font-semibold text-secondary-foreground">
                {card.keywords.adjectives.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details underneath card if specified */}
      {showDetails && (
        <div className="mt-2 text-center max-w-[150px]">
          <span
            className={cn(
              "inline-block text-[9px] px-1.5 py-0.5 rounded-full font-esoteric border",
              card.type === "positive" && "bg-emerald-950/40 text-emerald-400 border-emerald-500/30",
              card.type === "positive-neutral" && "bg-teal-950/40 text-teal-400 border-teal-500/30",
              card.type === "neutral" && "bg-amber-950/40 text-amber-400 border-amber-500/30",
              card.type === "neutral-negative" && "bg-orange-950/40 text-orange-400 border-orange-500/30",
              card.type === "negative" && "bg-rose-950/40 text-rose-400 border-rose-500/30"
            )}
          >
            {card.type.toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
}
