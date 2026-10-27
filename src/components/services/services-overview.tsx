"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/content/services";
import { cn } from "@/lib/utils";

export function ServicesOverview({ services: items }: { services: Service[] }) {
  const visible = items.filter((s) => s.published).slice(0, 4);
  if (visible.length === 0) return null;

  return (
    <section className="section">
      <div className="section-inner">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-eyebrow justify-center">What we do</span>
          <h2 className="font-display font-bold leading-[1.06] tracking-tight mb-4">
            Services we offer
          </h2>
          <p className="section-subtitle">
            Architecture, interiors, planning, and execution — a complete
            design and build service tailored to your project.
          </p>
        </div>

        <div className="grid-4">
          {visible.map((service, i) => {
            const dark = i % 2 === 1;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group flex h-full min-h-[300px] flex-col justify-between rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1",
                    dark
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-primary border border-border",
                  )}
                >
                  <div>
                    <span
                      className={cn(
                        "text-[10px] font-semibold uppercase tracking-[0.16em] block mb-4",
                        dark ? "text-accent" : "text-muted-foreground",
                      )}
                    >
                      {service.category}
                    </span>
                    <h3 className="font-display font-semibold text-xl tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-relaxed line-clamp-4",
                        dark ? "text-white/70" : "text-muted-foreground",
                      )}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-xs font-medium">Learn more</span>
                    <span
                      className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 group-hover:rotate-45",
                        dark
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground",
                      )}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
