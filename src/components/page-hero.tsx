import { ArrowRight, Phone } from "lucide-react";

import { AnimatedButtonLink } from "@/components/animated-button-link";
import { AnimatedSection } from "@/components/animated-section";
import { contactInfo } from "@/lib/site-data";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Request Service",
  primaryHref = "/contact",
}: PageHeroProps) {
  return (
    <AnimatedSection className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#f0fdf4_0%,#ffffff_48%,#f8fafc_100%)]" />
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AnimatedButtonLink href={primaryHref} size="lg">
              {primaryLabel}
              <ArrowRight aria-hidden="true" />
            </AnimatedButtonLink>
            <AnimatedButtonLink href={`tel:${contactInfo.phone}`} size="lg" variant="outline">
              <Phone aria-hidden="true" />
              Call {contactInfo.phone}
            </AnimatedButtonLink>
          </div>
        </div>
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
            Based in Troy, MI
          </p>
          <p className="mt-3 text-3xl font-black tracking-tight text-slate-950">
            Licensed, insured, and built for four-season Michigan maintenance.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
