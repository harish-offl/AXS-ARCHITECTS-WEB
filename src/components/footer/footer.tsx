"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { site, navLinks } from "@/content/site";

const projectLinks = [
  { name: "The Grey Barn, Kodaikanal", href: "/projects/the-grey-barn-kodaikanal" },
  { name: "Azad Residence", href: "/projects/azad-residence-iyyapanthangal-chennai" },
  { name: "Mr. George Villa", href: "/projects/mr-george-villa-ayyapanthangal-chennai" },
  { name: "The Valley View Villa", href: "/projects/mr-kolandaivel-residence-the-valley-view-villa" },
  { name: "Mr. Pakkir Residence", href: "/projects/mr-pakkir-residence-vgn-highness-chennai" },
  { name: "Mr. Ranganathan Villa", href: "/projects/mr-ranganathan-villa-vgn-highness-chennai" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Sitemap", href: "/sitemap" },
  { name: "Developer", href: "/developer" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-inner">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-[var(--space-80)]">

          {/* Brand column */}
          <div className="md:col-span-3 space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/axs-logo.png"
                alt="AXS Architects"
                width={140}
                height={56}
                style={{ height: "56px", width: "auto" }}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              {site.tagline} Thoughtful architecture, considered interiors, and
              carefully planned spaces shaped around your vision. Based in
              Chennai, Tamil Nadu.
            </p>
          </div>

          {/* Studio + Services stacked */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-xs tracking-[0.16em] uppercase text-accent">
                Studio
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects column */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-display font-semibold text-xs tracking-[0.16em] uppercase text-accent">
              Projects
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {projectLinks.map((project) => (
                <li key={project.href}>
                  <Link href={project.href} className="hover:text-accent transition-colors">
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-display font-semibold text-xs tracking-[0.16em] uppercase text-accent">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-accent transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
              <li><Link href="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3 space-y-3">
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

        {/* Bottom bar */}
        <div className="border-t border-white/15 py-7 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>{site.copyright}</p>
          <Link href="/developer" className="hover:text-accent transition-colors">
            Developer by Annamalai
          </Link>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}
