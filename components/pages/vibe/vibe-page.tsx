"use client";

import { motion } from "motion/react";
import { Beef, CakeSlice, Flower2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export type AngelMood = "flowers" | "food" | "chocolate";

const moods = [
  {
    id: "flowers",
    label: "A Tulip Mood",
    note: "Red tulips first, yellow and pink right after.",
    icon: Flower2
  },
  {
    id: "food",
    label: "Biriyani + Meat",
    note: "Biriyani with chicken or pork energy today.",
    icon: Beef
  },
  {
    id: "chocolate",
    label: "Chocolate Time",
    note: "Ferrero Rocher, Bounty, and Munch playlist.",
    icon: CakeSlice
  }
] as const;

export function VibePage({
  onPick
}: {
  onPick: (mood: AngelMood) => void;
}) {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-2"
      >
        <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Page 2</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Choose Angel&apos;s birthday vibe</h2>
        <p className="text-slate-300">Pick what matches her mood and I&apos;ll reveal the next page accordingly.</p>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-3">
        {moods.map((mood, index) => (
          <motion.div
            key={mood.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
          >
            <Card className="h-full p-5">
              <mood.icon className="mb-3 h-6 w-6 text-blue-300" />
              <h3 className="text-lg font-medium text-white">{mood.label}</h3>
              <p className="mt-1 mb-4 text-sm text-slate-300">{mood.note}</p>
              <Button variant="outline" className="w-full" onClick={() => onPick(mood.id)}>
                Pick this
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
