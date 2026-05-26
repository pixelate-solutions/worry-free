"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { staggerContainer } from "@/components/animated-section";
import { cn } from "@/lib/utils";

export function StaggeredGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
