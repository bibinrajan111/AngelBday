"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export type AngelMood = "flowers" | "cake" | "chocolate";

const giftIds: AngelMood[] = ["flowers", "cake", "chocolate"];

const labels: Record<AngelMood, string> = {
  flowers: "Tulip Gift",
  cake: "Cake Gift",
  chocolate: "Chocolate Gift"
};

export function VibePage({
  seen,
  onOpenGift,
  onContinue
}: {
  seen: Record<AngelMood, boolean>;
  onOpenGift: (gift: AngelMood) => void;
  onContinue: () => void;
}) {
  const allSeen = Object.values(seen).every(Boolean);

  return (
    <section className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Page 2</p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {giftIds.map((gift, index) => (
          <motion.button
            key={gift}
            type="button"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.08 }}
            onClick={() => onOpenGift(gift)}
            className="rounded-3xl border border-white/20 bg-white/5 p-8 text-center transition hover:border-blue-300/60 hover:bg-white/10"
          >
            <div className="text-6xl">🎁</div>
            <p className="mt-3 text-sm text-slate-200">{labels[gift]}</p>
            <p className="text-xs text-blue-100">{seen[gift] ? "Opened" : "Tap to open"}</p>
          </motion.button>
        ))}
      </div>

      {allSeen && (
        <div className="flex justify-center">
          <Button onClick={onContinue}>Continue to special wishes →</Button>
        </div>
      )}
    </section>
  );
}
