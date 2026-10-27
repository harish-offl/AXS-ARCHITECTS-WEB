"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const principles = [
  "Function-first spatial planning",
  "Materials chosen for context and longevity",
  "Light, ventilation, and comfort at every scale",
];

export function DesignPhilosophy() {
  return (
    <section className="section relative overflow-hidden">
      <span className="watermark hidden md:block" aria-hidden="true">
        Design
      </span>
      <div className="section-inner relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[380px] md:h-[520px] w-full overflow-hidden rounded-[2.25rem]"
          >
            <Image
              src="https://axsarchitects.com/wp-content/uploads/2023/03/1-1.jpg"
              alt="AXS Architects design detail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent block mb-2">
                Design philosophy
              </span>
              <h3 className="font-display font-semibold text-white text-2xl leading-snug">
                Precision meets creativity
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-eyebrow">Our approach</span>
            <h2 className="font-display font-bold leading-[1.05] tracking-tight mb-6 max-w-lg">
              Balancing aesthetics, function and purpose
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
              We believe great architecture is shaped around the people who
              inhabit it. Every decision — from site orientation to material
              selection — is guided by function, context, and the way you live.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Our process is collaborative and personalized. We listen first,
              then translate your vision into spaces that are both beautiful and
              buildable.
            </p>

            <ul className="space-y-3 mb-9">
              {principles.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="flex items-center justify-center w-5 h-5 shrink-0 rounded-full bg-accent mt-0.5">
                    <Check className="w-3 h-3 text-accent-foreground" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              About the studio
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
