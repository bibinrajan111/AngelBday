import { Drumstick, UtensilsCrossed } from "lucide-react";

import { Card } from "@/components/ui/card";

export function FoodView() {
  return (
    <Card className="border-amber-300/30 bg-gradient-to-br from-blue-950/70 via-amber-950/20 to-orange-950/20 p-6">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1 text-xs text-amber-100">
        <UtensilsCrossed className="h-4 w-4" /> Comfort Plate
      </div>
      <h3 className="text-xl font-semibold text-white">Biriyani celebration mode</h3>
      <p className="mt-2 text-slate-200">
        Fluffy biriyani, chicken or pork side, and a happy table — this vibe feels warm, home-like, and full of joy.
      </p>
      <p className="mt-3 inline-flex items-center gap-2 text-sm text-blue-100">
        <Drumstick className="h-4 w-4" /> Mood: cozy, tasty, unforgettable.
      </p>
    </Card>
  );
}
