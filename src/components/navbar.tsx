"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { AnimatedButtonLink } from "@/components/animated-button-link";
import { Button } from "@/components/ui/button";
import { contactInfo, navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0.78)", "rgba(255,255,255,0.96)"],
  );
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(15,23,42,0)", "0 18px 45px rgba(15,23,42,0.10)"],
  );

  return (
    <motion.header
      style={{ background, boxShadow: shadow }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/worry-free-logo.png"
            alt="Worry Free Inc."
            width={48}
            height={48}
            className="size-12 object-contain"
            priority
          />
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight text-slate-950">
              Worry Free Inc.
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:block">
              Service 24/7
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-800",
                pathname === item.href && "bg-emerald-50 text-emerald-800",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <AnimatedButtonLink href={`tel:${contactInfo.phone}`} variant="outline">
            <Phone aria-hidden="true" />
            {contactInfo.phone}
          </AnimatedButtonLink>
          <AnimatedButtonLink href="/contact">Request Service</AnimatedButtonLink>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24 }}
            className="overflow-hidden border-t border-slate-200 bg-white/98 shadow-xl lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 px-4 py-5 sm:px-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-800",
                    pathname === item.href && "bg-emerald-50 text-emerald-800",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <AnimatedButtonLink href="/contact" onClick={() => setOpen(false)}>
                  Request Service
                </AnimatedButtonLink>
                <AnimatedButtonLink
                  href={`tel:${contactInfo.phone}`}
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  <Phone aria-hidden="true" />
                  Call {contactInfo.phone}
                </AnimatedButtonLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
