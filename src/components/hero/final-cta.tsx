"use client";

import Link from "next/link";

export function FinalCta() {
  return (
    <section className="section relative overflow-hidden">
      <div className="section-inner relative z-10">
        <div className="rounded-3xl border border-border bg-[#242424] p-10 md:p-16 text-center text-white shadow-xl">
          <span className="font-display font-semibold text-xs uppercase tracking-widest text-accent block mb-4">
            Ready to begin?
          </span>
            <h2 className="h2 font-display font-semibold leading-snug mb-6 text-white">
              Let&rsquo;s Shape Your Next Space
            </h2>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether it's a residential home, commercial interior, or planning
            consultation, we&rsquo;d love to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-medium py-4 px-8 rounded-full transition-colors hover:bg-accent/90"
            >
              Start a Project
            </Link>
            <Link
              href="mailto:info@axsarchitects.com"
              className="flex items-center justify-center gap-2 border border-white/20 bg-white/10 font-medium py-4 px-8 rounded-full transition-colors hover:bg-white/20"
            >
              Email Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
