"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionIntro() {
  return (
    <section className="section relative overflow-hidden">
      <div className="section-inner relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <span className="section-eyebrow inline-block">About the studio</span>
            <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary mb-4">
              About AXS Architects
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AXS Architects is committed to providing a personalized and
              collaborative journey to realize your ideal environment. Our
              knowledgeable team offers a thorough service that goes above and
              beyond expectations, with attention to detail on every aspect of
              the project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you are planning a new home, a commercial space, or an
              interior, we take the time to comprehend your demands and goals to
              provide an all-encompassing approach to design.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-medium text-primary hover:text-accent transition-colors"
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[520px] w-full rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <div
              className="absolute inset-0 bg-[url('https://axsarchitects.com/wp-content/uploads/2023/03/0_1_11zon.jpg')] bg-cover bg-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="font-display font-semibold text-xs uppercase tracking-widest text-accent block mb-2">
                Chennai, Tamil Nadu
              </span>
              <h3 className="h3 font-display font-semibold text-white leading-snug">
                A personalized journey
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
