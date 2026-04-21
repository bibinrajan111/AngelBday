"use client";

import { motion } from "motion/react";
import { Heart, Stars } from "lucide-react";

import { Card } from "@/components/ui/card";

const messages: Record<string, string> = {
  flowers:
    "If I could, I would fill your room with red tulips first, then yellow and pink, just to mirror the way you color my life.",
  cake: "I hope this birthday feels like a sweet cake moment with candle light, laughter, and love.",
  chocolate:
    "May your day be wrapped like Ferrero Rocher, sweet like Bounty, and fun like a Munch break shared with laughter."
};

export function FinalPage({ mood }: { mood: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="pb-12"
    >
      <Card className="space-y-5 border-blue-200/30 p-7 md:p-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 px-4 py-1 text-xs uppercase tracking-[0.18em] text-blue-100">
          <Stars className="h-3.5 w-3.5" /> Page 8 · Final Letter
        </p>
        <h2 className="text-3xl font-bold text-white md:text-5xl">Happy Birthday, Angel Reji 💙</h2>
        <p className="text-base leading-7 text-slate-200 md:text-lg">
          To you, my love — thank you for being the calm, kind, beautiful light in my days. No matter the distance, no
          matter the timezone, my heart keeps choosing you.
        </p>
        <p className="text-base leading-7 text-blue-100 md:text-lg">{messages[mood] ?? messages.flowers}</p>
        <p className="text-base leading-7 text-slate-200 md:text-lg">
          I know life is changing fast, and you&apos;re building your path with courage. I&apos;ll always be proud of you. Let
          us keep learning each other slowly, honestly, and beautifully.
        </p>
        <p className="flex items-center gap-2 text-slate-300">
          <Heart className="h-4 w-4 text-blue-300" />
          Wishing you a beautiful year ahead — on 23 April 2026 and every day after.
        </p>
      </Card>
    </motion.section>
  );
}
