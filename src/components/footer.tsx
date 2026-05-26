import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { contactInfo, navItems, serviceAreas, servicePageLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr_0.85fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/worry-free-logo.png"
              alt="Worry Free Inc."
              width={52}
              height={52}
              className="size-[52px] rounded-2xl bg-white object-contain p-1"
            />
            <span>
              <span className="block text-xl font-black">Worry Free Inc.</span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Outdoor Service 24/7
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-slate-300">
            Lawn care, landscaping, outdoor maintenance, and snow and ice control
            for municipal, commercial, condominium, and residential customers
            across Oakland County and Southeastern Michigan.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            <a className="flex items-center gap-3 hover:text-white" href={`tel:${contactInfo.phone}`}>
              <Phone className="size-4 text-emerald-300" aria-hidden="true" />
              {contactInfo.phone}
            </a>
            <a className="flex items-center gap-3 hover:text-white" href={`mailto:${contactInfo.email}`}>
              <Mail className="size-4 text-emerald-300" aria-hidden="true" />
              {contactInfo.email}
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 size-4 text-emerald-300" aria-hidden="true" />
              <span>
                {contactInfo.physicalAddress[0]}
                <br />
                {contactInfo.physicalAddress[1]}
              </span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            Explore
          </h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <h2 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            Service Pages
          </h2>
          <div className="mt-5 grid gap-3">
            {servicePageLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            Service Area
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            {serviceAreas.slice(0, -1).join(", ")}, and surrounding {serviceAreas.at(-1)} areas.
          </p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">Mailing Address</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {contactInfo.mailingAddress[0]}
              <br />
              {contactInfo.mailingAddress[1]}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Worry Free Inc. All rights reserved.</p>
          <p>Licensed, insured, and based in Troy, Michigan.</p>
        </div>
      </div>
    </footer>
  );
}
