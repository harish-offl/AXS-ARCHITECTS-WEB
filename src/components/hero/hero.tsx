"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[640px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-white/70 to-secondary" />
        <div
          className="absolute inset-0 opacity-50 bg-[url('https://axsarchitects.com/wp-content/uploads/2023/02/home-sli.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex flex-col items-start justify-center pt-24 pb-16 px-6 md:px-8 lg:px-12 max-w-6xl mx-auto h-full">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-display font-semibold text-sm tracking-widest uppercase text-accent mb-6"
          >
            <span className="w-1 h-3 bg-accent" />
            AXS Architects · Chennai
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="h1 font-display font-semibold leading-[0.95] tracking-tighter text-primary mb-6 text-balance"
          >
            Spaces Designed Around<br />
            <span className="text-accent">the Way You Live.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg"
          >
            Thoughtful architecture, considered interiors, and carefully planned
            spaces shaped around your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Discuss Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
