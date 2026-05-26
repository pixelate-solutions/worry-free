import type { Metadata } from "next";
import { Clock, Route, ShieldAlert, Snowflake } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { StaggeredGrid } from "@/components/staggered-grid";
import { pageMetadata, services } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata.snow;

export default function SnowIceControlPage() {
  const related = services.filter((service) =>
    [
      "Snow and Ice Control",
      "24hr/7day Emergency Outdoor Maintenance",
      "24hr/7day Special Event Clean Up",
      "Garbage & Litter Control",
      "Sidewalk Powerwashing",
      "Powerwashing",
    ].includes(service.title),
  );

  return (
    <>
      <PageHero
        eyebrow="Snow & Ice Control"
        title="Winter response designed for Michigan access, safety, and continuity."
        description="Worry Free provides snow and ice control for municipal, commercial, condominium, and residential customers with 24/7 service readiness through winter weather."
      />
      <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeader
            eyebrow="Winter Operations"
            title="Storm-ready planning for walkways, lots, entries, and critical exterior areas."
            description="A strong snow program starts before the storm. Worry Free supports winter access with practical service planning, responsive crews, and clear priorities for each property."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "24/7 Readiness", icon: Clock },
              { title: "Access-Focused Routes", icon: Route },
              { title: "Ice Management", icon: ShieldAlert },
              { title: "Snow Response", icon: Snowflake },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="mb-5 size-7 text-sky-600" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Related Services"
            title="Winter support plus cleanup services before and after weather events."
            description="Combine snow and ice control with emergency maintenance, event cleanup, litter control, and washing services to keep properties functional through the full season."
          />
          <StaggeredGrid className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </StaggeredGrid>
        </div>
      </AnimatedSection>
      <CTASection title="Prepare your property before the next winter weather event." />
    </>
  );
}
