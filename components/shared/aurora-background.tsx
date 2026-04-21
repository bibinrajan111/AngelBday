"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function AuroraBackground({ children }: { children: React.ReactNode }) {
  const [cursor, setCursor] = useState({ x: 50, y: 35 });

  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-blue-300/20 bg-slate-950/85 p-8 md:p-14"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setCursor({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100
        });
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-30 opacity-80"
        animate={{
          background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(59,130,246,0.45), rgba(6,182,212,0.26), transparent 55%)`
        }}
        transition={{ type: "spring", damping: 30, stiffness: 120, mass: 1.4 }}
      />
      <div className="noise pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative">{children}</div>
    </div>
  );
}
