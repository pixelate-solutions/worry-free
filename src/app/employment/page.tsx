import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { AnimatedButtonLink } from "@/components/animated-button-link";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { contactInfo, pageMetadata } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata.employment;

export default function EmploymentPage() {
  return (
    <>
      <PageHero
        eyebrow="Employment"
        title="Join a year-round outdoor services team in Troy, Michigan."
        description="Worry Free Inc. hires people who take pride in field work, property presentation, reliable service, and seasonal outdoor operations."
        primaryLabel="Contact About Employment"
        primaryHref="/contact"
      />
      <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeader
            eyebrow="Work With Us"
            title="Outdoor maintenance, landscaping, lawn care, cleanup, and snow operations."
            description="Employment needs can shift by season. Reach out to share your experience, availability, and the type of work you are interested in."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Lawn maintenance crews",
              "Landscape maintenance and planting",
              "Snow and ice control operations",
              "Powerwashing and cleanup support",
              "Seasonal lighting and decorations",
              "Special event cleanup",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mb-4 size-6 text-emerald-600" aria-hidden="true" />
                <p className="font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              Apply or Ask Questions
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
              Send your contact information and work background to start the conversation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Email {contactInfo.email} or call {contactInfo.phone}.
            </p>
          </div>
          <AnimatedButtonLink href="/contact" size="lg" variant="seasonal">
            Contact Worry Free
            <ArrowRight aria-hidden="true" />
          </AnimatedButtonLink>
        </div>
      </AnimatedSection>
    </>
  );
}
