"use client";

import { motion } from "motion/react";

import { Card } from "@/components/ui/card";

const milestones = [
  { date: "23 Apr 2002", text: "You were born." },
  { date: "Dec 2022", text: "We first met properly." },
  { date: "Jan 2023", text: "Sang live choir." },
  { date: "2023 → Mar 2025", text: "We had very little messaging in between." },
  { date: "Mar 2025", text: "Everything started from: 'chettay naatil etharayille ?'" },
  { date: "After Mar 2025", text: "We became good friends and had many conversations." },
  { date: "18 Sep 2025", text: "We confessed love — it came as a YES." },
  { date: "18 days", text: "We had 18 beautiful days before long distance." },
  { date: "07 Oct 2025", text: "You moved to Germany for Master's in Biotechnology." },
  { date: "14 Feb 2026", text: "We celebrated our first Valentine's Day." },
  { date: "18 Mar 2026", text: "We celebrated our 6th month anniversary." },
  { date: "23 Apr 2026", text: "We celebrate your birthday." }
];

export function StoryPage() {
  return (
    <section className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Page 4</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Our timeline</h2>
      </motion.div>

      <div className="space-y-3">
        {milestones.map((item, index) => (
          <motion.div key={`${item.date}-${index}`} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
            <Card className="p-4 md:p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">{item.date}</p>
              <p className="mt-1 text-slate-200">{item.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
