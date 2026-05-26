import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SeasonalCard } from "@/components/seasonal-card";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { StaggeredGrid } from "@/components/staggered-grid";
import { pageMetadata, seasonalServices, services } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata.seasonal;

export default function SeasonalServicesPage() {
  const seasonal = services.filter((service) =>
    [
      "Annual & Perennial Flower Planting",
      "Hanging Basket and Flower Bed Design and Maintenance",
      "Holiday Lighting",
      "Seasonal Holiday Decorations",
      "24hr/7day Special Event Clean Up",
      "Snow and Ice Control",
    ].includes(service.title),
  );

  return (
    <>
      <PageHero
        eyebrow="Seasonal Services"
        title="Four-season outdoor care for Michigan properties."
        description="Spring cleanup, summer maintenance, fall preparation, holiday lighting, winter snow response, and special event cleanup from one responsive team."
      />
      <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Seasonal Rhythm"
            title="Plan ahead, stay polished, and respond quickly when conditions change."
            description="Worry Free works through the whole calendar so properties are ready for visitors, customers, residents, public use, and weather events."
          />
          <StaggeredGrid className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {seasonalServices.map((season) => (
              <SeasonalCard key={season.season} {...season} />
            ))}
          </StaggeredGrid>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Seasonal Capabilities"
            title="Color, decoration, cleanup, and storm response without extra coordination."
            description="Seasonal services can be scheduled as one-time work or folded into a broader outdoor maintenance program."
          />
          <StaggeredGrid className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {seasonal.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </StaggeredGrid>
        </div>
      </AnimatedSection>
      <CTASection title="Make the next season easier to manage." />
    </>
  );
}
