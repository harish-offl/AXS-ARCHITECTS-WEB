"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { site, navLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-black">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-[var(--space-96)]">
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display font-semibold text-xl tracking-tight text-white">
                AXS Architects
              </span>
            </Link>
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              {site.tagline}. Thoughtful architecture, considered interiors,
              and carefully planned spaces shaped around your vision. Based in
              Chennai, Tamil Nadu.
            </p>
          </div>

          <div className="md:col-span-3 md:border-l md:border-white/20 md:pl-8 space-y-3">
            <h3 className="font-display font-semibold text-sm tracking-widest uppercase text-accent">
              Studio
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
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

          <div className="md:col-span-5 md:border-l md:border-white/20 md:pl-8 space-y-3">
            <h3 className="font-display font-semibold text-sm tracking-widest uppercase text-accent">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  <a
                    href="mailto:info@axsarchitects.com"
                    className="hover:text-accent transition-colors"
                  >
                    {site.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
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
                        <span className="mx-1 text-white/50">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/80 leading-relaxed max-w-md">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-[var(--space-64)] pt-[var(--space-48)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
          <div className="flex flex-wrap items-center gap-4">
            <p>{site.copyright}</p>
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-accent transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}
