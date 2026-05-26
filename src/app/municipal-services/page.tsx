import type { Metadata } from "next";

import { AudiencePage } from "@/components/audience-page";
import { pageMetadata } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata.municipal;

export default function MunicipalServicesPage() {
  return (
    <AudiencePage
      eyebrow="Municipal Services"
      title="Public-space maintenance programs for communities across Southeastern Michigan."
      description="Worry Free supports municipalities with landscape management, cleanup, streetscape presentation, lighting, snow readiness, and 24/7 outdoor maintenance response."
      introTitle="A dependable field partner for visible civic spaces."
      introBody="Municipal properties need consistency, communication, and crews that understand public-facing expectations. Worry Free builds practical programs around routine maintenance, seasonal needs, and urgent cleanup."
      highlights={[
        "Landscape management for civic properties, corridors, and streetscapes.",
        "Litter control, powerwashing, graffiti and gum removal, and special event cleanup.",
        "Seasonal flower programs, holiday lighting, and public-space presentation.",
        "Snow and ice control planning for winter access and safety.",
      ]}
      serviceTitles={[
        "Municipal Landscape Managers",
        "Landscape Maintenance and Design",
        "Annual & Perennial Flower Planting",
        "Hanging Basket and Flower Bed Design and Maintenance",
        "Sidewalk Powerwashing",
        "Graffiti & Gum Removal",
        "Garbage & Litter Control",
        "Landscape Lighting",
        "Holiday Lighting",
        "Seasonal Holiday Decorations",
        "24hr/7day Emergency Outdoor Maintenance",
        "24hr/7day Special Event Clean Up",
        "Snow and Ice Control",
      ]}
      ctaTitle="Coordinate municipal outdoor services with a 24/7-ready team."
    />
  );
}
