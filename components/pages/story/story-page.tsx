"use client";

import { motion } from "motion/react";
import { CalendarDays, GraduationCap, Plane } from "lucide-react";

import { Card } from "@/components/ui/card";

const milestones = [
  {
    title: "23 April 2002",
    detail: "Angel Reji was born — the beginning of a beautiful story.",
    icon: CalendarDays
  },
  {
    title: "Piravom roots",
    detail: "Home heart in Kerala, carrying warmth everywhere.",
    icon: GraduationCap
  },
  {
    title: "Nuremberg chapter",
    detail: "Bravely building dreams in Bavaria, Germany.",
    icon: Plane
  }
];

export function StoryPage() {
  return (
    <section className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Page 5</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">A little timeline of Angel</h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {milestones.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
          >
            <Card className="h-full p-5">
              <item.icon className="mb-3 h-6 w-6 text-blue-300" />
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
