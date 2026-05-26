import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { memberships, pageMetadata } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Worry Free Inc."
        title="A Troy-based outdoor services company built from hands-on field experience."
        description="Worry Free Inc. has served Southeastern Michigan since 1998 with licensed, insured lawn care, landscaping, outdoor maintenance, and snow and ice control."
      />
      <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-emerald-700 via-slate-950 to-slate-900 p-8 text-white shadow-2xl shadow-slate-950/20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              Company Story
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Founded in 1998 by Jeff Birkett and Travis Beard.
            </h2>
            <p className="mt-5 leading-8 text-slate-200">
              After working together at a lawn care company, Jeff and Travis
              started Worry Free with lawn cutting and snow plowing for
              residential customers around Royal Oak and nearby suburbs.
            </p>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-slate-600">
            <p>
              The company grew from those early residential routes into a
              multifaceted outdoor services partner serving commercial,
              residential, and municipal customers throughout Southeastern
              Michigan.
            </p>
            <p>
              Today, Worry Free supports properties with lawn maintenance,
              fertilizing, landscape maintenance and design, irrigation, brick
              pavers, retaining walls, seasonal color, powerwashing, snow and
              ice control, event cleanup, and emergency outdoor maintenance.
            </p>
            <p>
              The team’s position is simple: Worry Free Service - 24/7. Clients
              get dependable outdoor work, clear service categories, and
              responsive support through every season.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Credentials"
            title="Licensed, insured, and connected to professional industry associations."
            description="Worry Free invests in the standards and trade groups that support better outdoor maintenance, green industry practices, and snow operations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {["Licensed and insured", ...memberships].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <CheckCircle2 className="mb-5 size-7 text-emerald-600" aria-hidden="true" />
                <h3 className="text-lg font-bold text-slate-950">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CTASection />
    </>
  );
}
