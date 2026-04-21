"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CakeSlice, Candy, Flower2, Gift, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type AngelMood } from "@/components/pages/vibe/vibe-page";

function GiftBox({ onOpen }: { onOpen: () => void }) {
  return (
    <Card className="mx-auto max-w-xl p-8 text-center">
      <Gift className="mx-auto mb-4 h-14 w-14 text-blue-300" />
      <h3 className="text-2xl font-semibold text-white">A gift is waiting for you</h3>
      <p className="mt-2 text-slate-300">This stays hidden until you open it.</p>
      <Button className="mt-5" onClick={onOpen}>
        Open gift 🎁
      </Button>
    </Card>
  );
}

function TulipGift() {
  return (
    <Card className="space-y-4 p-6">
      <h3 className="text-2xl font-semibold text-white">Tulip bouquet for you 🌷</h3>
      <p className="text-slate-200">A cluster bouquet of red, yellow, and pink tulips — made with love for your birthday.</p>
      <div className="grid grid-cols-3 gap-2 rounded-2xl bg-white/5 p-4 text-center text-4xl">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i}>🌷</span>
        ))}
      </div>
      <p className="text-blue-100">Happy Birthday, my love 💙</p>
    </Card>
  );
}

function CakeGift() {
  const [blown, setBlown] = useState(false);

  return (
    <Card className="space-y-4 p-6 text-center">
      <h3 className="text-2xl font-semibold text-white">Birthday cake just for you 🎂</h3>
      <p className="text-slate-200">A sweet cake with a candle on top, waiting for your wish.</p>
      <div className="text-7xl">{blown ? "🎂" : "🕯️🎂"}</div>
      {!blown ? (
        <Button onClick={() => setBlown(true)}>Blow the candle and cut the cake</Button>
      ) : (
        <p className="inline-flex items-center gap-2 justify-center text-xl text-blue-100">
          Happy Birthday my love <Heart className="h-5 w-5" /> 🎉
        </p>
      )}
    </Card>
  );
}

function ChocolateGift() {
  return (
    <Card className="space-y-4 p-6">
      <h3 className="text-2xl font-semibold text-white">Chocolate gift box for you 🍫</h3>
      <p className="text-slate-200">A special box with Ferrero Rocher sparkle, Bounty calm, and Munch fun.</p>
      <div className="rounded-2xl bg-white/5 p-4">
        <div className="grid grid-cols-4 gap-2 text-center text-3xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>{i % 2 === 0 ? "🍫" : "🎁"}</span>
          ))}
        </div>
      </div>
      <p className="text-blue-100">Happy Birthday, my love 💙</p>
    </Card>
  );
}

export function GiftPage({ mood }: { mood: AngelMood }) {
  const [opened, setOpened] = useState(false);

  return (
    <section className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Page 3</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Your selected gift</h2>
      </motion.div>

      {!opened ? (
        <GiftBox onOpen={() => setOpened(true)} />
      ) : mood === "flowers" ? (
        <TulipGift />
      ) : mood === "cake" ? (
        <CakeGift />
      ) : (
        <ChocolateGift />
      )}
    </section>
  );
}
