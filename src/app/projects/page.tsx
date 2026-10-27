import { Metadata } from "next";
import { projects } from "@/content/projects";
import ProjectsList from "./client";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const metadata: Metadata = {
  title: "Projects | AXS Architects",
  description:
    "Explore AXS Architects portfolio of residential, commercial, and interior design projects across Chennai, Tamil Nadu.",
};

export default function ProjectsPage() {
  const visible = projects.filter((p) => p.published);

  return (
    <main className="flex-1">
      <section className="section relative overflow-hidden">
        <div className="section-inner relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-eyebrow inline-block">Selected Work</span>
            <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary">
              Our Projects
            </h2>
            <p className="section-subtitle max-w-lg mx-auto">
              A curated selection of residential, commercial, and interior
              design projects delivered across Chennai and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-inner">
          <ProjectsList projects={visible} />
        </div>
      </section>
    </main>
  );
}
