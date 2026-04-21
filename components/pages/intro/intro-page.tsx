"use client";

import { motion } from "motion/react";
import { Clock3, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/shared/aurora-background";

function getBirthdayCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  const targetThisYear = new Date(year, 3, 23);
  const target = now <= targetThisYear ? targetThisYear : new Date(year + 1, 3, 23);

  const oneDay = 1000 * 60 * 60 * 24;
  const days = Math.ceil((target.getTime() - now.getTime()) / oneDay);

  if (days === 0) {
    return "It is birthday day today 🎉";
  }

  if (days > 0) {
    return `${days} day${days === 1 ? "" : "s"} to birthday ✨`;
  }

  const passed = Math.abs(days);
  return `Birthday was ${passed} day${passed === 1 ? "" : "s"} ago 💙`;
}

export function IntroPage({ onNext }: { onNext: () => void }) {
  const countdown = getBirthdayCountdown();

  return (
    <AuroraBackground>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-blue-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-blue-100">
          <Sparkles className="h-3.5 w-3.5" />
          Birthday Surprise Journey
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">A tiny birthday world made with love.</h1>
        <p className="max-w-2xl text-base text-slate-200 md:text-lg">
          Open each page one by one and enjoy the day. This story is designed to be read right around birthday time.
        </p>
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-blue-100">
          <Clock3 className="h-4 w-4" />
          {countdown}
        </p>
        <Button onClick={onNext}>Open surprise gifts 🎁</Button>
      </motion.div>
    </AuroraBackground>
  );
}
