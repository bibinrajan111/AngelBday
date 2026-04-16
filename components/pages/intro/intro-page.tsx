"use client";

import { motion } from "motion/react";
import { Heart, MapPin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/shared/aurora-background";

export function IntroPage({ onNext }: { onNext: () => void }) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-blue-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-blue-100">
          <Sparkles className="h-3.5 w-3.5" />
          Angel&apos;s Birthday Journey
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Happy early birthday, <span className="text-blue-300">Angel (Annamma)</span>.
        </h1>
        <p className="max-w-2xl text-base text-slate-200 md:text-lg">
          23 April 2026 is almost here, and this tiny interactive world was made to celebrate you — from Piravom to
          Nuremberg, with all my love.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-200">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
            <MapPin className="h-4 w-4 text-blue-200" /> Piravom → Nuremberg
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
            <Heart className="h-4 w-4 text-blue-200" /> Built for Angel Reji
          </span>
        </div>
        <Button onClick={onNext}>Start the surprise ✨</Button>
      </motion.div>
    </AuroraBackground>
  );
}
