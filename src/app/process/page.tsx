import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ProcessTimeline } from "@/components/hero/process-timeline";

export const metadata: Metadata = buildMetadata({
  title: "Our Process | AXS Architects",
  description:
    "AXS Architects four-stage design and build journey — from brief to handover. Architecture, interiors, planning and execution in Chennai, Tamil Nadu.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <main className="flex-1">
      <section className="section relative overflow-hidden">
        <div className="section-inner relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-eyebrow inline-block">Our Process</span>
            <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary">
              From Brief to Handover
            </h2>
            <p className="section-subtitle max-w-lg mx-auto mt-4">
              A clear, four-stage journey that keeps you informed at every step.
            </p>
          </div>
        </div>
      </section>

      <ProcessTimeline />
    </main>
  );
}
