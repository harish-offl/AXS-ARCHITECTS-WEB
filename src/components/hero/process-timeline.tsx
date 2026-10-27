"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    step: "01",
    title: "Requirement Analysis",
    body:
      "Before we start any construction project, we gather all the information about the project's objectives, scope, and constraints.",
  },
  {
    step: "02",
    title: "Design",
    body:
      "We create a comprehensive plan for your building — detailed drawings, blueprints, and 3D models showing layout, structure, and systems.",
  },
  {
    step: "03",
    title: "Development / Execution",
    body:
      "We physically build the structure according to the design specifications — excavation, foundation, framing, roofing, electrical, plumbing, and finishing.",
  },
  {
    step: "04",
    title: "Delivery",
    body:
      "We turn over the completed building after a final inspection and walk-through to ensure it meets all specifications and requirements.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="section relative overflow-hidden">
      <div className="section-inner relative z-10">
        <div className="section-header mb-14 text-center">
          <span className="section-eyebrow">Our Process</span>
          <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary mb-4">
            From Brief to Handover
          </h2>
          <p className="section-subtitle">
            A clear, four-stage journey that keeps you informed at every step.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -ml-[1px]" aria-hidden="true" />
          {stages.map((stage, i) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-24 md:mb-0 md:flex md:items-start md:gap-8 last:mb-0"
            >
              <div className="relative z-10 flex shrink-0 items-center justify-center w-12 h-12 rounded-full border border-border bg-background md:ml-[calc(50%-6px)]">
                <span className="font-display font-bold text-primary">{stage.step}</span>
              </div>
              <div className="md:w-full space-y-3">
                <h3 className="h3 font-display font-semibold">{stage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {stage.body}
                </p>
                {i < stages.length - 1 && (
                  <div className="flex items-center gap-2 mt-4">
                    <ArrowRight className="w-4 h-4 text-accent" />
                    <span className="text-xs font-medium text-secondary uppercase tracking-widest">
                      Next stage
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
