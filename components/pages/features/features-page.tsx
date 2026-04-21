"use client";

import { motion } from "motion/react";
import { Gift, Heart, Sparkles, Stars } from "lucide-react";

import { Card } from "@/components/ui/card";

const wishes = [
  {
    icon: Gift,
    title: "Let her get many gifts",
    description: "May this day keep surprising you with joy from every side."
  },
  {
    icon: Sparkles,
    title: "Let her get so many wishes",
    description: "May every message, call, and prayer reach you with love."
  },
  {
    icon: Stars,
    title: "So many of us are praying for her",
    description: "May your dreams in life and studies bloom beautifully."
  },
  {
    icon: Heart,
    title: "She defines beauty to me",
    description: "Your heart, your kindness, and your strength are your real beauty."
  }
];

export function FeaturesPage({ mood }: { mood: string }) {
  return (
    <section className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Page 3</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Today is about making you feel truly special</h2>
        <p className="mt-2 text-slate-300">Gift mood selected: {mood}</p>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-2">
        {wishes.map((wish, index) => (
          <motion.div key={wish.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
            <Card className="h-full p-6">
              <wish.icon className="mb-3 h-6 w-6 text-blue-300" />
              <h3 className="text-xl font-semibold text-white">{wish.title}</h3>
              <p className="mt-2 text-slate-300">{wish.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
