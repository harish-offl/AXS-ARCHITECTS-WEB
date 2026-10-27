"use client";

import { motion } from "framer-motion";

const stages = [
  {
    step: "01",
    title: "Requirement Analysis",
    body:
      "Before we start any project, we gather all the information about its objectives, scope, and constraints.",
  },
  {
    step: "02",
    title: "Design",
    body:
      "We create a comprehensive plan — detailed drawings, blueprints, and 3D models showing layout, structure, and systems.",
  },
  {
    step: "03",
    title: "Development / Execution",
    body:
      "We build according to the design specifications — excavation, foundation, framing, electrical, plumbing, and finishing.",
  },
  {
    step: "04",
    title: "Delivery",
    body:
      "We hand over the completed building after a final inspection and walk-through to ensure it meets every requirement.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="section relative overflow-hidden">
      <div className="section-inner relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="section-eyebrow">Our process</span>
            <h2 className="font-display font-bold leading-[1.06] tracking-tight max-w-md">
              Four steps to your new space
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs md:text-right">
            A clear, four-stage journey that keeps you informed at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[1.75rem] border border-border bg-background p-6 flex flex-col"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary font-display font-bold text-lg text-muted-foreground mb-6">
                {stage.step}
              </div>
              <h3 className="font-display font-semibold text-lg tracking-tight mb-2">
                {stage.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stage.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
