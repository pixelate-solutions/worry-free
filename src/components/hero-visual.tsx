"use client";

import { motion } from "framer-motion";
import { Leaf, Sun, Waves } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-8 rounded-[2.25rem] bg-gradient-to-br from-emerald-600 via-lime-500 to-amber-300 shadow-xl shadow-emerald-900/15" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 overflow-hidden rounded-[2.25rem] border border-white/70 bg-white p-4 shadow-xl"
      >
        <div className="relative h-full overflow-hidden rounded-[2rem] bg-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#063a35,#0f172a_68%,#1e293b)]" />
          <div className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-emerald-700 via-emerald-500 to-lime-400" />
          <div className="absolute bottom-[36%] left-0 right-0 h-8 rounded-[100%] bg-lime-200/70 blur-sm" />
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, index) => (
              <motion.span
                key={index}
                initial={{ height: 18 }}
                animate={{ height: [18, 26, 18] }}
                transition={{ duration: 2.8, delay: index * 0.07, repeat: Infinity }}
                className="rounded-full bg-white/30"
              />
            ))}
          </div>
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-8 top-8 flex size-14 items-center justify-center rounded-full bg-amber-300 text-slate-950 shadow-lg shadow-amber-950/15"
          >
            <Sun className="size-7" aria-hidden="true" />
          </motion.div>
          <div className="absolute bottom-28 left-8 rounded-3xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
            <Leaf className="mb-3 size-7 text-lime-200" aria-hidden="true" />
            <p className="max-w-44 text-xl font-bold leading-tight">Outdoor care without the worry.</p>
          </div>
          <div className="absolute bottom-8 right-8 rounded-2xl bg-white/95 p-4 text-slate-950 shadow-xl">
            <div className="flex items-center gap-3">
              <Waves className="size-5 text-emerald-700" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold">24/7 Ready</p>
                <p className="text-xs text-slate-500">All four seasons</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
