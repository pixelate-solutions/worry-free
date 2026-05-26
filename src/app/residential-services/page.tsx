import type { Metadata } from "next";

import { AudiencePage } from "@/components/audience-page";
import { pageMetadata } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata.residential;

export default function ResidentialServicesPage() {
  return (
    <AudiencePage
      eyebrow="Residential Services"
      title="Home lawn care and landscape services with a polished, worry-free finish."
      description="From mowing and fertilizing to plantings, pavers, irrigation, lighting, holiday decor, and snow control, Worry Free helps homeowners keep outdoor spaces looking their best."
      introTitle="Approachable service with professional standards."
      introBody="Worry Free started with residential lawn cutting and snow plowing around Royal Oak. That practical homeowner focus remains part of the company’s work today."
      highlights={[
        "Lawn maintenance and fertilizing for consistent curb appeal.",
        "Landscape maintenance, planting, and seasonal color programs.",
        "Brick pavers, retaining walls, irrigation, lighting, and putting greens.",
        "Holiday lighting, seasonal decorations, and snow and ice control.",
      ]}
      serviceTitles={[
        "Lawn Maintenance/Fertilizing",
        "Landscape Maintenance and Design",
        "Irrigation",
        "Brick Pavers",
        "Retaining Walls",
        "Annual & Perennial Flower Planting",
        "Hanging Basket and Flower Bed Design and Maintenance",
        "Landscape Lighting",
        "Holiday Lighting",
        "Seasonal Holiday Decorations",
        "Snow and Ice Control",
        "Putting Green Installation & Maintenance",
      ]}
      ctaTitle="Bring Worry Free outdoor care to your home."
    />
  );
}
