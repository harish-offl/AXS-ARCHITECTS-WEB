"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Layers, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Compass,
    title: "Personalized design",
    body:
      "Every project begins with listening. We shape each space around your lifestyle, your site, and the way you want to live.",
  },
  {
    icon: Layers,
    title: "End-to-end delivery",
    body:
      "From concept and planning through execution and handover, one team stays with you at every stage of the journey.",
  },
  {
    icon: ShieldCheck,
    title: "Attention to detail",
    body:
      "Considered materials, precise drawings, and careful site supervision ensure the finished space matches the vision.",
  },
];

export function SectionIntro() {
  return (
    <section className="section relative overflow-hidden">
      <span className="watermark hidden md:block" aria-hidden="true">
        Studio
      </span>
      <div className="section-inner relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">About the studio</span>
            <h2 className="font-display font-bold leading-[1.04] tracking-tight mb-6 max-w-lg">
              About AXS Architects
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 max-w-xl">
              AXS Architects is committed to providing a personalized and
              collaborative journey to realize your ideal environment. Our
              knowledgeable team offers a thorough service that goes above and
              beyond expectations, with attention to detail on every aspect of
              the project.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Whether you are planning a new home, a commercial space, or an
              interior, we take the time to understand your needs and goals to
              provide an all-encompassing approach to design.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Learn more about us
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="relative mt-10 h-64 md:h-80 overflow-hidden rounded-[1.75rem]">
              <Image
                src="https://axsarchitects.com/wp-content/uploads/2023/03/0_1_11zon.jpg"
                alt="AXS Architects project in Chennai"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 lg:pt-16">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-5 rounded-[1.75rem] bg-primary p-6 md:p-7 text-primary-foreground"
                >
                  <span className="flex items-center justify-center w-14 h-14 shrink-0 rounded-2xl bg-white/10">
                    <Icon className="w-6 h-6 text-accent" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-lg tracking-tight mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
