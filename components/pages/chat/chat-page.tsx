"use client";

import { motion } from "motion/react";
import { MessageCircleHeart } from "lucide-react";

import { Card } from "@/components/ui/card";
import { chatMessages } from "@/data/chat-messages";

export function ChatPage() {
  return (
    <section className="space-y-5">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Page 5</p>
        <h2 className="flex items-center gap-2 text-3xl font-semibold text-white md:text-4xl">
          <MessageCircleHeart className="h-7 w-7 text-blue-300" />
          Our chat, saved forever
        </h2>
      </motion.div>

      <Card className="border-emerald-300/20 bg-[#0b141a] p-0">
        <div className="rounded-t-3xl border-b border-white/10 bg-[#202c33] px-4 py-3 text-sm text-[#d1f4cc]">
          Angel 💚 (WhatsApp Memory)
        </div>
        <div className="max-h-[420px] space-y-3 overflow-y-auto p-4">
          {chatMessages.map((message, index) => (
            <motion.div
              key={`${message.time}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              className={message.from === "me" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={
                  message.from === "me"
                    ? "max-w-[85%] rounded-xl rounded-br-md bg-[#005c4b] px-3 py-2 text-[#e9fffa]"
                    : "max-w-[85%] rounded-xl rounded-bl-md bg-[#202c33] px-3 py-2 text-[#e9edef]"
                }
              >
                <p className="text-sm leading-6">{message.text}</p>
                <p className="mt-1 text-right text-[11px] opacity-70">{message.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </section>
  );
}
