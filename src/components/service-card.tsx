"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cardReveal } from "@/components/animated-section";
import { IconFromName, type IconName } from "@/components/icon-from-name";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  category?: string;
  href?: string;
  icon: IconName;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  category,
  href,
  icon,
  className,
}: ServiceCardProps) {
  const body = (
    <motion.article
      variants={cardReveal}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22 }}
      className={cn(
        "group h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/10",
        className,
      )}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
          <IconFromName name={icon} className="size-6" />
        </div>
        {href ? (
          <ArrowUpRight
            className="size-5 text-slate-300 transition-colors group-hover:text-emerald-600"
            aria-hidden="true"
          />
        ) : null}
      </div>
      {category ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
          {category}
        </p>
      ) : null}
      <h3 className="text-xl font-bold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </motion.article>
  );

  if (!href) {
    return body;
  }

  return (
    <Link href={href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4">
      {body}
    </Link>
  );
}
