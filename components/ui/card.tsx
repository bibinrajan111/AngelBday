import * as React from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl shadow-slate-950/30",
        className
      )}
      {...props}
    />
  );
}
