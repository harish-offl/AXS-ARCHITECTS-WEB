"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Service } from "@/content/services";

export function ServicesOverview({ services: items }: { services: Service[] }) {
  const visible = items.filter((s) => s.published);
  if (visible.length === 0) return null;

  return (
    <section className="section bg-white">
      <div className="section-inner">
        <div className="section-header mb-12 text-center">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary">
            Services We Offer
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Architecture, interior design, planning, 3D modelling, execution,
            and elevation design — tailored to your project.
          </p>
        </div>
        <div className="grid-3">
          {visible.map((service) => (
            <motion.div
              key={service.slug}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: visible.indexOf(service) * 0.06 }}
              className="group flex flex-col rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <span className="font-display font-semibold text-xs uppercase tracking-widest text-accent">
                    {service.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="h3 font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 font-medium text-primary hover:text-accent transition-colors"
                >
                  Read more <span className="w-3 h-3">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
