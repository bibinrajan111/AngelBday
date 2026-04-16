"use client";

import { useMemo } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { Cake, Flower, MapPinned, PartyPopper } from "lucide-react";

import { Card } from "@/components/ui/card";

type Feature = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

function TiltCard({ feature }: { feature: Feature }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useMotionTemplate`${mouseY}deg`, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(useMotionTemplate`${mouseX}deg`, { stiffness: 140, damping: 18 });

  return (
    <motion.div
      className="group"
      style={{ perspective: 1200 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const middleX = rect.width / 2;
        const middleY = rect.height / 2;

        mouseX.set(((x - middleX) / middleX) * 6);
        mouseY.set(-((y - middleY) / middleY) * 6);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div style={{ rotateX, rotateY }}>
        <Card className="relative overflow-hidden p-6 transition group-hover:border-blue-200/40">
          <div className="pointer-events-none absolute -inset-14 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
          <feature.icon className="relative mb-4 h-7 w-7 text-blue-300" />
          <h3 className="relative text-xl font-semibold text-white">{feature.title}</h3>
          <p className="relative mt-2 text-sm leading-6 text-slate-300">{feature.description}</p>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function FeaturesPage({ mood }: { mood: string }) {
  const features = useMemo<Feature[]>(
    () => [
      {
        title: "Birthday Countdown",
        description: "A soft reminder that 23/04/2026 is your moment to shine extra bright.",
        icon: PartyPopper
      },
      {
        title: "Favorite Things",
        description:
          mood === "flowers"
            ? "Red tulips lead this story, with yellow and pink petals dancing behind."
            : mood === "food"
              ? "Biriyani, chicken, and pork vibes — exactly your comfort celebration plate."
              : "Ferrero Rocher, Bounty, and Munch energy for your sweetest smile.",
        icon: mood === "flowers" ? Flower : mood === "food" ? Cake : Cake
      },
      {
        title: "Distance Means Nothing",
        description: "From Piravom, Kerala to Nuremberg, Bavaria — love always finds the way.",
        icon: MapPinned
      }
    ],
    [mood]
  );

  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Page 3</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Three reasons your day is magical</h2>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
          >
            <TiltCard feature={feature} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
