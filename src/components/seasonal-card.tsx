"use client";

import { motion } from "framer-motion";

import { cardReveal } from "@/components/animated-section";
import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  spring: "from-emerald-500 to-lime-300 text-emerald-950",
  summer: "from-lime-400 to-amber-300 text-slate-950",
  fall: "from-amber-500 to-orange-300 text-slate-950",
  winter: "from-sky-300 to-cyan-100 text-slate-950",
};

type SeasonalCardProps = {
  season: string;
  title: string;
  description: string;
  items: string[];
  color: string;
};

export function SeasonalCard({ season, title, description, items, color }: SeasonalCardProps) {
  return (
    <motion.article
      variants={cardReveal}
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-950/10"
    >
      <div className={cn("bg-gradient-to-br p-6", colorMap[color])}>
        <p className="text-sm font-bold uppercase tracking-[0.18em]">{season}</p>
        <h3 className="mt-3 text-2xl font-black tracking-tight">{title}</h3>
      </div>
      <div className="p-6">
        <p className="leading-7 text-slate-600">{description}</p>
        <ul className="mt-5 grid gap-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
              <span className="size-2 rounded-full bg-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
