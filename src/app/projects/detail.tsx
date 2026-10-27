"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/content/projects";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="section relative overflow-hidden">
      <div className="section-inner relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-border shadow-lg mb-8 lg:mb-0">
            <Image
              src={project.cover}
              alt={project.alt || project.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
              className="object-cover object-center"
              style={{ width: "100%", height: "100%" }}
              priority
            />
          </div>
          <div className="space-y-8 max-w-lg">
            <span className="font-display font-semibold text-xs uppercase tracking-widest text-accent block">
              {project.category}
            </span>
            <h1 className="h1 font-display font-semibold leading-[1.05] tracking-tight text-primary">
              {project.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.location}
            </p>
            {project.description && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            )}
            <div className="flex flex-wrap gap-4 pt-8">
              {project.features.map((f) => (
                <span
                  key={f}
                  className="text-sm text-muted-foreground border border-border rounded-full px-4 py-1.5"
                >
                  {f}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-medium text-primary hover:text-accent transition-colors mt-10"
            >
              Discuss this project <span className="w-4 h-4">→</span>
            </Link>
          </div>
        </div>

        {project.gallery.length > 0 && (
          <div className="mt-24">
            <h2 className="h2 font-display font-semibold leading-snug mb-10 text-primary">
              Project Gallery
            </h2>
            <div className="grid-3">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative h-56 overflow-hidden rounded-xl border border-border"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center w-full h-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
