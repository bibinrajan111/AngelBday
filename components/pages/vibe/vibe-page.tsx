"use client";

import { motion } from "motion/react";
import { CakeSlice, Flower2, Gift } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export type AngelMood = "flowers" | "cake" | "chocolate";

const vibes = [
  {
    id: "flowers",
    label: "Tulip Bouquet",
    note: "Open a floral gift with red, yellow, and pink tulips.",
    icon: Flower2
  },
  {
    id: "cake",
    label: "Birthday Cake",
    note: "Open a cake gift with a candle and a birthday wish.",
    icon: CakeSlice
  },
  {
    id: "chocolate",
    label: "Chocolate Box",
    note: "Open a sweet gift box made just for you.",
    icon: Gift
  }
] as const;

export function VibePage({
  selectedMood,
  onPick,
  onNext
}: {
  selectedMood: AngelMood;
  onPick: (mood: AngelMood) => void;
  onNext: () => void;
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
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Pick the gift you want to open 🎁</h2>
        <p className="text-slate-300">Each gift will open on the next page. Nothing is shown before opening it.</p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {vibes.map((vibe, index) => (
          <motion.div
            key={vibe.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
          >
            <Card className="h-full p-5">
              <vibe.icon className="mb-3 h-6 w-6 text-blue-300" />
              <h3 className="text-lg font-medium text-white">{vibe.label}</h3>
              <p className="mt-1 mb-4 text-sm text-slate-300">{vibe.note}</p>
              <Button
                variant={selectedMood === vibe.id ? "default" : "outline"}
                className="w-full"
                onClick={() => onPick(vibe.id)}
              >
                {selectedMood === vibe.id ? "Selected" : "Choose this gift"}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button onClick={onNext}>Go open the gift →</Button>
      </div>
    </section>
  );
}
