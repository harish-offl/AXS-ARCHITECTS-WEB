import { Metadata } from "next";
import { Hero } from "@/components/hero/hero";
import { SectionIntro } from "@/components/hero/section-intro";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ServicesOverview } from "@/components/services/services-overview";
import { DesignPhilosophy } from "@/components/hero/design-philosophy";
import { ProcessTimeline } from "@/components/hero/process-timeline";
import { Testimonials } from "@/components/testimonials/testimonials";
import { FinalCta } from "@/components/hero/final-cta";
import { projects, featuredProjectSlugs } from "@/content/projects";
import { testimonials } from "@/content/testimonials";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "AXS Architects | Design. Build. Deliver.",
  description:
    "Thoughtful architecture, considered interiors, and carefully planned spaces shaped around your vision. Architecture, interior design, planning and execution in Chennai, Tamil Nadu.",
};

export default function Home() {
  const featured = projects
    .filter((p) => featuredProjectSlugs.includes(p.slug) && p.published)
    .slice(0, 5);

  return (
    <main className="flex-1">
      <Hero />
      <SectionIntro />
      <ProjectGrid title="Featured Projects" projects={featured} />
      <ServicesOverview services={services} />
      <DesignPhilosophy />
      <ProcessTimeline />
      <Testimonials items={testimonials} />
      <FinalCta />
    </main>
  );
}
