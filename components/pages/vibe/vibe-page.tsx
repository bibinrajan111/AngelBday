"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export type AngelMood = "flowers" | "cake" | "chocolate";

const giftIds: AngelMood[] = ["flowers", "cake", "chocolate"];

function GiftContent({ gift }: { gift: AngelMood }) {
  if (gift === "flowers") {
    return (
      <Card className="space-y-4 p-6">
        <h3 className="text-2xl font-semibold text-white">Tulip bouquet 🌷</h3>
        <p className="text-slate-200">A cluster bouquet of red, yellow, and pink tulips for your birthday.</p>
        <div className="grid grid-cols-3 gap-2 rounded-2xl bg-white/5 p-4 text-center text-4xl">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i}>🌷</span>
          ))}
        </div>
      </Card>
    );
  }

  if (gift === "cake") {
    return <CakeGift />;
  }

  return (
    <Card className="space-y-4 p-6">
      <h3 className="text-2xl font-semibold text-white">Chocolate gift box 🍫</h3>
      <p className="text-slate-200">A sweet gift box with your favorite chocolate mood.</p>
      <div className="rounded-2xl bg-white/5 p-4">
        <div className="grid grid-cols-4 gap-2 text-center text-3xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>{i % 2 === 0 ? "🍫" : "🎁"}</span>
          ))}
        </div>
      </div>
    </Card>
  );
}

function CakeGift() {
  const [done, setDone] = useState(false);

  return (
    <Card className="space-y-4 p-6 text-center">
      <h3 className="text-2xl font-semibold text-white">Birthday cake 🎂</h3>
      <p className="text-slate-200">Make a wish and blow the candle.</p>
      <div className="text-7xl">{done ? "🎂" : "🕯️🎂"}</div>
      {!done ? (
        <Button onClick={() => setDone(true)}>Blow the candle and cut the cake</Button>
      ) : (
        <p className="text-xl text-blue-100">Happy Birthday my love 🎉💙</p>
      )}
    </Card>
  );
}

export function VibePage({
  onAllViewed,
  onSelect
}: {
  onAllViewed: () => void;
  onSelect: (gift: AngelMood) => void;
}) {
  const [activeGift, setActiveGift] = useState<AngelMood | null>(null);
  const [seen, setSeen] = useState<Record<AngelMood, boolean>>({ flowers: false, cake: false, chocolate: false });

  const allSeen = useMemo(() => Object.values(seen).every(Boolean), [seen]);

  const openGift = (gift: AngelMood) => {
    setActiveGift(gift);
    setSeen((prev) => ({ ...prev, [gift]: true }));
    onSelect(gift);
  };

  return (
    <section className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Page 2</p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {giftIds.map((gift) => (
          <button
            key={gift}
            type="button"
            onClick={() => openGift(gift)}
            className="rounded-3xl border border-white/20 bg-white/5 p-8 text-center transition hover:border-blue-300/50 hover:bg-white/10"
          >
            <div className="text-5xl">🎁</div>
            <p className="mt-3 text-sm text-slate-200">{seen[gift] ? "Opened" : "Tap to open"}</p>
          </button>
        ))}
      </div>

      {activeGift && (
        <motion.div key={activeGift} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <GiftContent gift={activeGift} />
        </motion.div>
      )}

      {allSeen && (
        <div className="flex justify-center">
          <Button onClick={onAllViewed}>Continue the story →</Button>
        </div>
      )}
    </section>
  );
}
