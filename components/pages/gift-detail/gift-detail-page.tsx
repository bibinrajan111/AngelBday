"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type AngelMood } from "@/components/pages/vibe/vibe-page";

export function GiftDetailPage({ gift, onBack }: { gift: AngelMood; onBack: () => void }) {
  return (
    <section className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Gift Reveal</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-3xl"
      >
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.45), transparent 60%)",
              "radial-gradient(circle at 80% 30%, rgba(236,72,153,0.45), transparent 60%)",
              "radial-gradient(circle at 40% 80%, rgba(59,130,246,0.45), transparent 60%)"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative p-1">{gift === "flowers" ? <FlowersGift /> : gift === "cake" ? <CakeGift /> : <ChocolateGift />}</div>
      </motion.div>

      <div className="flex justify-center">
        <Button onClick={onBack}>Back to gifts</Button>
      </div>
    </section>
  );
}

function FlowersGift() {
  return (
    <Card className="space-y-5 border-pink-300/40 bg-slate-900/85 p-6">
      <h3 className="text-2xl font-semibold text-white">Tulip bouquet for your birthday 🌷</h3>
      <p className="text-slate-200">A cinematic bloom of red, yellow, and pink tulips just for you.</p>
      <motion.div className="grid grid-cols-3 gap-2 rounded-2xl bg-white/5 p-4 text-center text-5xl">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.span key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            🌷
          </motion.span>
        ))}
      </motion.div>
    </Card>
  );
}

function CakeGift() {
  const [done, setDone] = useState(false);

  return (
    <Card className="space-y-5 border-amber-300/40 bg-slate-900/85 p-6 text-center">
      <h3 className="text-2xl font-semibold text-white">Birthday cake with a candle 🎂</h3>
      <p className="text-slate-200">Make your wish, then blow the candle and cut the cake.</p>
      <motion.div initial={{ scale: 0.92 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 150 }} className="text-8xl">
        {done ? "🎂" : "🕯️🎂"}
      </motion.div>
      {!done ? (
        <Button onClick={() => setDone(true)}>Blow the candle and cut the cake</Button>
      ) : (
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-2xl text-blue-100">
          Happy Birthday my love 🎉💙
        </motion.p>
      )}
    </Card>
  );
}

function ChocolateGift() {
  return (
    <Card className="space-y-5 border-cyan-300/40 bg-slate-900/85 p-6">
      <h3 className="text-2xl font-semibold text-white">Chocolate gift box 🍫</h3>
      <p className="text-slate-200">A box full of sweetness and warmth, wrapped in love.</p>
      <motion.div className="grid grid-cols-4 gap-2 rounded-2xl bg-white/5 p-4 text-center text-4xl">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span key={i} initial={{ opacity: 0, rotate: -8 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: i * 0.04 }}>
            {i % 3 === 0 ? "🎁" : "🍫"}
          </motion.span>
        ))}
      </motion.div>
    </Card>
  );
}
