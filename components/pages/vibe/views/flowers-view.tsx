import { Flower2, Sparkles } from "lucide-react";

import { Card } from "@/components/ui/card";

export function FlowersView() {
  return (
    <Card className="border-pink-300/30 bg-gradient-to-br from-blue-950/70 via-fuchsia-950/20 to-rose-950/30 p-6">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-pink-500/20 px-3 py-1 text-xs text-pink-100">
        <Flower2 className="h-4 w-4" /> Tulip Story
      </div>
      <h3 className="text-xl font-semibold text-white">A garden for Angel</h3>
      <p className="mt-2 text-slate-200">
        Red tulips first, then yellow and pink around them — just like how you became the brightest color in my life.
      </p>
      <p className="mt-3 inline-flex items-center gap-2 text-sm text-blue-100">
        <Sparkles className="h-4 w-4" /> Mood: gentle, soft, romantic.
      </p>
    </Card>
  );
}
