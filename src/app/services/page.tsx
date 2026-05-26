import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { StaggeredGrid } from "@/components/staggered-grid";
import { pageMetadata, services } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata.services;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full-service outdoor maintenance for all four seasons."
        description="Worry Free Inc. brings together lawn care, landscaping, design, cleanup, lighting, hardscape support, powerwashing, emergency maintenance, and snow and ice control."
      />
      <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Service Menu"
            title="Clear services that can stand alone or work together as a complete property program."
            description="Browse the core services Worry Free provides for municipal, commercial, condominium, and residential customers across Southeastern Michigan."
          />
          <StaggeredGrid className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </StaggeredGrid>
        </div>
      </AnimatedSection>
      <CTASection />
    </>
  );
}
