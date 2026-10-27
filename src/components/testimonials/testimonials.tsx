"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Testimonial } from "@/content/testimonials";

interface TestimonialsProps {
  items: Testimonial[];
}

export function Testimonials({ items }: TestimonialsProps) {
  const visible = items.filter((t) => t.published);
  if (visible.length === 0) return null;

  return (
    <section className="section bg-white border-y border-border">
      <div className="section-inner">
        <div className="section-header mb-12">
          <span className="section-eyebrow">Client Feedback</span>
          <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid-3 max-w-5xl mx-auto">
          {visible.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: visible.indexOf(item) * 0.08 }}
              className="rounded-xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <Quote className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <p className="text-base text-muted-foreground leading-relaxed italic mb-6">
                “{item.text}”
              </p>
              <p className="font-display font-semibold text-sm text-primary">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
