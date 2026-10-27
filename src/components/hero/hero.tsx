"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats, site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-[104px] pb-10 md:pt-[120px] md:pb-14">
      <span className="watermark hidden md:block" aria-hidden="true">
        AXS
      </span>

      <div className="section-inner relative z-10">
        <div className="grid lg:grid-cols-[1.02fr_1fr] gap-5">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.25rem] bg-secondary p-7 sm:p-10 lg:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-medium text-muted-foreground mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                AXS Architects · Chennai
              </div>

              <h1 className="font-display font-bold leading-[1.02] tracking-tight text-balance mb-6">
                Thoughtful spaces,
                <br />
                <span className="text-muted-foreground">
                  tailored to how you live.
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
                Thoughtful architecture, considered interiors, and carefully
                planned spaces shaped around your vision — from first sketch to
                final handover.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start a Project
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-background"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-background px-4 py-5"
                >
                  <div className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] md:text-xs leading-snug text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right image panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2.25rem] min-h-[420px] lg:min-h-full"
          >
            <Image
              src="https://axsarchitects.com/wp-content/uploads/2023/02/home-sli.jpg"
              alt="AXS Architects residential project exterior"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 top-0 p-5 md:p-6 flex items-center justify-between gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-black shadow-sm transition-opacity hover:opacity-90"
              >
                Book a consultation
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-black shadow-sm transition-opacity hover:opacity-90"
              >
                <Phone className="w-3.5 h-3.5" />
                {site.phones[0]}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
