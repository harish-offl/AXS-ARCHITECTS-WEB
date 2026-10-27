"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export function FinalCta() {
  return (
    <section className="section pt-0">
      <div className="section-inner">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-primary px-6 py-14 md:px-16 md:py-20 text-center text-primary-foreground">
          <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-4">
            Ready to begin?
          </span>
          <h2 className="font-display font-bold leading-[1.05] tracking-tight mb-5 text-white max-w-2xl mx-auto">
            Let&rsquo;s shape your next space
          </h2>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl mx-auto mb-9">
            Whether it&rsquo;s a residential home, commercial interior, or
            planning consultation, we&rsquo;d love to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:info@axsarchitects.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
