import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

import { AnimatedButtonLink } from "@/components/animated-button-link";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { HeroVisual } from "@/components/hero-visual";
import { IconFromName } from "@/components/icon-from-name";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { StaggeredGrid } from "@/components/staggered-grid";
import {
  audienceCards,
  contactInfo,
  featuredServices,
  seasonalServices,
  serviceAreas,
  trustItems,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Worry Free Inc. | Outdoor Maintenance in Troy, Michigan",
  description:
    "Modern outdoor maintenance, lawn care, landscaping, seasonal services, and snow and ice control for Southeastern Michigan since 1998.",
};

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#f0fdf4_0%,#ffffff_42%,#eff6ff_100%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-lime-200/35 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <AnimatedSection as="div" className="pt-8">
            <p className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm">
              Worry Free Service - 24/7
            </p>
            <h1 className="mt-7 max-w-4xl text-balance text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Outdoor maintenance that stays ahead of every Michigan season.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
              Lawn care, landscaping, outdoor maintenance, and snow and ice
              control for municipal, commercial, condominium, and residential
              properties across Oakland County and Southeastern Michigan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnimatedButtonLink href="/contact" size="lg">
                Request Service
                <ArrowRight aria-hidden="true" />
              </AnimatedButtonLink>
              <AnimatedButtonLink href="/services" size="lg" variant="outline">
                View Services
              </AnimatedButtonLink>
              <AnimatedButtonLink href={`tel:${contactInfo.phone}`} size="lg" variant="navy">
                <Phone aria-hidden="true" />
                Call {contactInfo.phone}
              </AnimatedButtonLink>
            </div>
          </AnimatedSection>
          <HeroVisual />
        </div>
      </section>

      <AnimatedSection className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 border-y border-slate-200 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            return (
              <div key={item.label} className="flex items-center gap-4">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <IconFromName name={item.icon} className="size-5" />
                </span>
                <span>
                  <span className="block font-black text-slate-950">{item.label}</span>
                  <span className="text-sm text-slate-500">{item.detail}</span>
                </span>
              </div>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <SectionHeader
            eyebrow="What We Do"
            title="Outdoor maintenance for municipalities, businesses, communities, and homes."
            description="Choose a service path or start with the full service menu. The detailed pages are still available without crowding the top navigation."
          />
          <div className="grid gap-3">
            {audienceCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
              >
                <span className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-white">
                    <IconFromName name={card.icon} className="size-5" />
                  </span>
                  <span>
                    <span className="block font-bold text-slate-950">{card.title}</span>
                    <span className="text-sm text-slate-500">{card.description}</span>
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-slate-400 group-hover:text-emerald-700" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured Services"
            title="Core services, clearly organized."
            description="A focused look at the work clients most often need. The full service list is available on the Services page."
          />
          <StaggeredGrid className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </StaggeredGrid>
          <div className="mt-10">
            <AnimatedButtonLink href="/services" variant="outline">
              View All Services
              <ArrowRight aria-hidden="true" />
            </AnimatedButtonLink>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Seasonal Services"
            title="Four-season support without four separate vendors."
            description="Spring, summer, fall, and winter needs are handled through a single outdoor maintenance partner."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {seasonalServices.map((season) => (
              <div key={season.season} className="border-l-2 border-emerald-500 pl-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                  {season.season}
                </p>
                <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950">
                  {season.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{season.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Service Area"
              title="Based in Troy. Serving Oakland County and Southeastern Michigan."
              description={`${serviceAreas.slice(0, -1).join(", ")}, and surrounding Southeastern Michigan areas.`}
            />
            <div className="mt-8 flex items-start gap-3 rounded-3xl border border-emerald-100 bg-emerald-50 p-5 text-emerald-950">
              <MapPin className="mt-1 size-5 shrink-0 text-emerald-700" aria-hidden="true" />
              <p className="leading-7">
                Physical address: {contactInfo.physicalAddress.join(", ")}
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-950/10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              24/7 Service
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight">
              Emergency outdoor maintenance and snow response when conditions change.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Call for urgent exterior maintenance, winter access, storm cleanup,
              and special event needs.
            </p>
            <div className="mt-6">
              <AnimatedButtonLink href={`tel:${contactInfo.phone}`} variant="seasonal">
                <Phone aria-hidden="true" />
                Call {contactInfo.phone}
              </AnimatedButtonLink>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
