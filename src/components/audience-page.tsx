"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

import { AnimatedSection, staggerContainer } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";

type AudiencePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  introTitle: string;
  introBody: string;
  highlights: string[];
  serviceTitles: string[];
  ctaTitle: string;
};

export type PageMetadata = Metadata;

export function AudiencePage({
  eyebrow,
  title,
  description,
  introTitle,
  introBody,
  highlights,
  serviceTitles,
  ctaTitle,
}: AudiencePageProps) {
  const filtered = services.filter((service) => serviceTitles.includes(service.title));

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <SectionHeader eyebrow="Program Approach" title={introTitle} description={introBody} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mb-4 size-6 text-emerald-600" aria-hidden="true" />
                <p className="font-semibold leading-7 text-slate-800">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Relevant Services"
            title="Built around the outdoor work your property needs most."
            description="Choose a focused service or ask Worry Free to coordinate a complete maintenance program."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
      <CTASection title={ctaTitle} />
    </>
  );
}
