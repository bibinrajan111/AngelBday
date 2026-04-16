import { Candy, Gift } from "lucide-react";

import { Card } from "@/components/ui/card";

export function ChocolateView() {
  return (
    <Card className="border-cyan-300/30 bg-gradient-to-br from-blue-950/70 via-cyan-950/20 to-violet-950/20 p-6">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-100">
        <Candy className="h-4 w-4" /> Sweet Lane
      </div>
      <h3 className="text-xl font-semibold text-white">Chocolate rain for Annamma</h3>
      <p className="mt-2 text-slate-200">
        Ferrero Rocher sparkle, Bounty calm, and Munch fun — a mix as adorable as your smile.
      </p>
      <p className="mt-3 inline-flex items-center gap-2 text-sm text-blue-100">
        <Gift className="h-4 w-4" /> Mood: playful, dreamy, sweet.
      </p>
    </Card>
  );
}
