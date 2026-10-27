"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DesignPhilosophy() {
  return (
    <section className="section relative overflow-hidden">
      <div className="section-inner relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[520px] w-full rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <div
              className="absolute inset-0 bg-[url('https://axsarchitects.com/wp-content/uploads/2023/03/1-1.jpg')] bg-cover bg-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#242424]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="font-display font-semibold text-xs uppercase tracking-widest text-accent block mb-2">
                Design philosophy
              </span>
              <h3 className="h3 font-display font-semibold text-white leading-snug">
                Precision meets creativity
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <span className="section-eyebrow inline-block">Our Approach</span>
            <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary">
              Balancing aesthetics, function and purpose
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We believe great architecture is shaped around the people who
              inhabit it. Every decision — from site orientation to material
              selection — is guided by function, context, and the way you live.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our process is collaborative and personalized. We listen first,
              then translate your vision into spaces that are both beautiful and
              buildable.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-medium text-primary hover:text-accent transition-colors"
            >
              About the studio <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
