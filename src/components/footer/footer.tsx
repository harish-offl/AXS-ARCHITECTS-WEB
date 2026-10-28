"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { site, navLinks } from "@/content/site";
import { services } from "@/content/services";

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Careers", href: "/contact" },
  { name: "Sitemap", href: "/sitemap" },
  { name: "Developer", href: "/developer" },
];

export function Footer() {
  const serviceLinks = services.filter((s) => s.published).slice(0, 4);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-[var(--space-80)]">
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display font-bold text-xl tracking-tight text-white">
                AXS
              </span>
              <span className="font-display font-medium text-sm tracking-tight text-white/60">
                Architects
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              {site.tagline} Thoughtful architecture, considered interiors, and
              carefully planned spaces shaped around your vision. Based in
              Chennai, Tamil Nadu.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h3 className="font-display font-semibold text-xs tracking-[0.16em] uppercase text-accent">
              Studio
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h3 className="font-display font-semibold text-xs tracking-[0.16em] uppercase text-accent">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {serviceLinks.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="font-display font-semibold text-xs tracking-[0.16em] uppercase text-accent">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <a
                  href="mailto:info@axsarchitects.com"
                  className="hover:text-accent transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  {site.phones.map((p, i) => (
                    <React.Fragment key={i}>
                      <a
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="hover:text-accent transition-colors inline"
                      >
                        {p}
                      </a>
                      {i < site.phones.length - 1 && (
                        <span className="mx-1 text-white/40">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/70 leading-relaxed max-w-md">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 py-7 flex flex-col lg:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <p>{site.copyright}</p>
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}
