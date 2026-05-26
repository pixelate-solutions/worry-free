import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { contactInfo, pageMetadata, serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request service from Worry Free Inc."
        description="Call, email, or send a service request for municipal, commercial, condominium, residential, seasonal, emergency, lawn, landscape, and snow needs."
      />
      <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Get in Touch"
              title="Based in Troy and serving Southeastern Michigan."
              description="For urgent outdoor maintenance and winter response needs, call directly for the fastest path."
            />
            <div className="mt-8 grid gap-4">
              <ContactItem icon={Phone} label="Phone" value={contactInfo.phone} href={`tel:${contactInfo.phone}`} />
              <ContactItem icon={Mail} label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
              <ContactItem icon={MapPin} label="Physical Address" value={contactInfo.physicalAddress.join(", ")} />
              <ContactItem icon={MapPin} label="Mailing Address" value={contactInfo.mailingAddress.join(", ")} />
            </div>
          </div>
          <ContactForm />
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Service Areas"
            title="Oakland County and surrounding Southeastern Michigan communities."
            description="Worry Free serves Auburn Hills, Berkley, Birmingham, Bloomfield Hills, Bloomfield Twp., Clawson, Detroit, Ferndale, Highland Park, Novi, Rochester, Rochester Hills, Royal Oak, Southfield, Troy, and nearby areas."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <div key={area} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm">
                {area}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
            {label}
          </span>
          <span className="mt-1 block font-semibold leading-7 text-slate-950">{value}</span>
        </span>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block transition-transform hover:-translate-y-0.5">
      {content}
    </a>
  ) : (
    content
  );
}
