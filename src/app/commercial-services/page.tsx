import type { Metadata } from "next";

import { AudiencePage } from "@/components/audience-page";
import { pageMetadata } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata.commercial;

export default function CommercialServicesPage() {
  return (
    <AudiencePage
      eyebrow="Commercial Services"
      title="Clean, professional exterior maintenance for business properties."
      description="Worry Free helps commercial properties stay polished and accessible with lawn maintenance, landscaping, powerwashing, lighting, cleanup, and snow and ice control."
      introTitle="Property presentation that supports daily business."
      introBody="Commercial clients need dependable scheduling, responsive communication, and outdoor services that protect curb appeal. Worry Free can handle routine maintenance and seasonal needs from one coordinated team."
      highlights={[
        "Routine lawn maintenance, fertilizing, edging, and bed care.",
        "Landscape design, irrigation support, pavers, retaining walls, and lighting.",
        "Powerwashing, litter control, graffiti and gum removal, and event cleanup.",
        "Winter snow and ice control for access, parking areas, and walkways.",
      ]}
      serviceTitles={[
        "Lawn Maintenance/Fertilizing",
        "Landscape Maintenance and Design",
        "Irrigation",
        "Brick Pavers",
        "Retaining Walls",
        "Powerwashing",
        "Sidewalk Powerwashing",
        "Garbage & Litter Control",
        "Landscape Lighting",
        "Holiday Lighting",
        "24hr/7day Emergency Outdoor Maintenance",
        "Snow and Ice Control",
      ]}
      ctaTitle="Keep your commercial property ready for customers, tenants, and employees."
    />
  );
}
