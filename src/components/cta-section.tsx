import { ArrowRight, Phone } from "lucide-react";

import { AnimatedButtonLink } from "@/components/animated-button-link";
import { AnimatedSection } from "@/components/animated-section";
import { contactInfo } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function CTASection({
  eyebrow = "Worry Free Service - 24/7",
  title = "Need a dependable outdoor maintenance partner?",
  description = "Request service for municipal, commercial, condominium, residential, seasonal, and emergency outdoor maintenance needs across Southeastern Michigan.",
  className,
}: CTASectionProps) {
  return (
    <AnimatedSection className={cn("px-4 py-20 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <AnimatedButtonLink href="/contact" size="lg" variant="seasonal">
              Request Service
              <ArrowRight aria-hidden="true" />
            </AnimatedButtonLink>
            <AnimatedButtonLink href={`tel:${contactInfo.phone}`} size="lg" variant="outline">
              <Phone aria-hidden="true" />
              Call {contactInfo.phone}
            </AnimatedButtonLink>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
