"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AnimatedButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "default" | "navy" | "outline" | "ghost" | "seasonal";
  size?: "default" | "sm" | "lg" | "icon";
  children: ReactNode;
};

export function AnimatedButtonLink({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: AnimatedButtonLinkProps) {
  return (
    <motion.span whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.97 }} className="inline-flex">
      <Link className={cn(buttonVariants({ variant, size, className }))} {...props}>
        {children}
      </Link>
    </motion.span>
  );
}
