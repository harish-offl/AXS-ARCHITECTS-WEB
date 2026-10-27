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
    <section className="section pt-0">
      <div className="section-inner">
        <div className="rounded-[2.25rem] bg-secondary p-5 sm:p-8 lg:p-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-eyebrow justify-center">
              Client feedback
            </span>
            <h2 className="font-display font-bold leading-[1.06] tracking-tight">
              What our clients say
            </h2>
          </div>
          <div className="grid-3">
            {visible.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col rounded-[1.75rem] bg-background border border-border p-7"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent mb-5">
                  <Quote className="w-4 h-4 text-accent-foreground" aria-hidden="true" />
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-6 flex-1">
                  &ldquo;{item.text}&rdquo;
                </p>
                <p className="font-display font-semibold text-sm text-primary">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
