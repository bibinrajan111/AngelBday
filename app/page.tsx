"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { LenisProvider } from "@/components/shared/lenis-provider";
import { IntroPage } from "@/components/pages/intro/intro-page";
import { type AngelMood, VibePage } from "@/components/pages/vibe/vibe-page";
import { GiftDetailPage } from "@/components/pages/gift-detail/gift-detail-page";
import { FeaturesPage } from "@/components/pages/features/features-page";
import { StoryPage } from "@/components/pages/story/story-page";
import { ChatPage } from "@/components/pages/chat/chat-page";
import { PromisePage } from "@/components/pages/promise/promise-page";
import { FinalPage } from "@/components/pages/final/final-page";
import { Button } from "@/components/ui/button";

type Stage = "intro" | "vibe" | "giftDetail" | "features" | "story" | "chat" | "promise" | "final";

const stageOrder: Stage[] = ["intro", "vibe", "features", "story", "chat", "promise", "final"];

export default function HomePage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [mood, setMood] = useState<AngelMood>("flowers");
  const [activeGift, setActiveGift] = useState<AngelMood>("flowers");
  const [seen, setSeen] = useState<Record<AngelMood, boolean>>({ flowers: false, cake: false, chocolate: false });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [stage]);

  const stageIndex = stageOrder.indexOf(stage === "giftDetail" ? "vibe" : stage);
  const progress = useMemo(() => `${stageIndex + 1}/${stageOrder.length}`, [stageIndex]);

  const nextStage = () => {
    const current = stage === "giftDetail" ? "vibe" : stage;
    const idx = stageOrder.indexOf(current);
    const next = stageOrder[Math.min(idx + 1, stageOrder.length - 1)];
    setStage(next);
  };

  return (
    <LenisProvider>
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 py-8 md:px-6 md:py-12">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
          <span>Birthday Story</span>
          <span>{progress}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {stage === "intro" && <IntroPage onNext={() => setStage("vibe")} />}

            {stage === "vibe" && (
              <VibePage
                seen={seen}
                onOpenGift={(gift) => {
                  setActiveGift(gift);
                  setMood(gift);
                  setSeen((prev) => ({ ...prev, [gift]: true }));
                  setStage("giftDetail");
                }}
                onContinue={() => setStage("features")}
              />
            )}

            {stage === "giftDetail" && <GiftDetailPage gift={activeGift} onBack={() => setStage("vibe")} />}

            {stage === "features" && (
              <section className="space-y-6">
                <FeaturesPage mood={mood} />
                <div className="flex justify-center">
                  <Button onClick={nextStage}>Continue →</Button>
                </div>
              </section>
            )}

            {stage === "story" && (
              <section className="space-y-6">
                <StoryPage />
                <div className="flex justify-center">
                  <Button onClick={nextStage}>Continue →</Button>
                </div>
              </section>
            )}

            {stage === "chat" && (
              <section className="space-y-6">
                <ChatPage />
                <div className="flex justify-center">
                  <Button onClick={nextStage}>Continue →</Button>
                </div>
              </section>
            )}

            {stage === "promise" && (
              <section className="space-y-6">
                <PromisePage />
                <div className="flex justify-center">
                  <Button onClick={nextStage}>Final page 💌</Button>
                </div>
              </section>
            )}

            {stage === "final" && <FinalPage mood={mood} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </LenisProvider>
  );
}
