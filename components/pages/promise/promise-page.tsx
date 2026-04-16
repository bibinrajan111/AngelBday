"use client";

import { motion } from "motion/react";
import { HeartHandshake, ShieldCheck, Smile } from "lucide-react";

import { Card } from "@/components/ui/card";

const promises = [
  { icon: HeartHandshake, text: "I will keep communication honest and kind." },
  { icon: ShieldCheck, text: "I will respect your pace and your dreams in Germany." },
  { icon: Smile, text: "I will keep choosing joy with you, one day at a time." }
];

export function PromisePage() {
  return (
    <section className="space-y-5">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Page 6</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">What I promise you</h2>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-3">
        {promises.map((item, index) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Card className="h-full p-5">
              <item.icon className="mb-2 h-6 w-6 text-blue-300" />
              <p className="text-slate-200">{item.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
