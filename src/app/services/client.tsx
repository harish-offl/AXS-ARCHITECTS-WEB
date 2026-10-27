"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/content/services";

export default function ServicesClient() {
  const visible = services.filter((s) => s.published);

  return (
    <>
      <section className="section relative overflow-hidden pt-[140px]">
        <div className="section-inner relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-eyebrow inline-block">Our Services</span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="h1 font-display font-semibold leading-[0.95] tracking-tighter text-primary mb-6"
            >
              Expertise Across Every Stage
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-subtitle max-w-xl mx-auto"
            >
              From concept and planning through to execution and delivery, we
              provide a full range of design and build services tailored to your
              project.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-border pt-0">
        <div className="section-inner">
          <div className="grid-3">
            {visible.map((service) => (
              <motion.div
                key={service.slug}
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: visible.indexOf(service) * 0.06 }}
                className="group flex flex-col rounded-[1.75rem] overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <span className="inline-flex rounded-full bg-accent px-3 py-1 font-display font-semibold text-[10px] uppercase tracking-widest text-accent-foreground">
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
    </>
  );
}
