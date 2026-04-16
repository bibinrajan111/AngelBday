"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { LenisProvider } from "@/components/shared/lenis-provider";
import { IntroPage } from "@/components/pages/intro/intro-page";
import { type AngelMood, VibePage } from "@/components/pages/vibe/vibe-page";
import { FeaturesPage } from "@/components/pages/features/features-page";
import { FinalPage } from "@/components/pages/final/final-page";
import { Button } from "@/components/ui/button";

type Stage = "intro" | "vibe" | "features" | "final";

export default function HomePage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [mood, setMood] = useState<AngelMood>("flowers");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [stage]);

  return (
    <LenisProvider>
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-4 py-8 md:px-6 md:py-12">
        {(stage === "intro" || stage === "vibe" || stage === "features" || stage === "final") && (
          <IntroPage onNext={() => setStage("vibe")} />
        )}

        {(stage === "vibe" || stage === "features" || stage === "final") && (
          <VibePage
            onPick={(nextMood) => {
              setMood(nextMood);
              setStage("features");
            }}
          />
        )}

        {(stage === "features" || stage === "final") && <FeaturesPage mood={mood} />}

        {stage === "features" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Button onClick={() => setStage("final")}>Reveal the heartfelt message 💌</Button>
          </motion.div>
        )}

        {stage === "final" && <FinalPage mood={mood} />}
      </main>
    </LenisProvider>
  );
}
