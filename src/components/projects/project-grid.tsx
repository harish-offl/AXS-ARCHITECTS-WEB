"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Project } from "@/content/projects";

interface ProjectGridProps {
  title?: string;
  projects: Project[];
}

function ProjectCover({
  src,
  alt,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  const [current, setCurrent] = useState(src);

  return (
    <Image
      src={current}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setCurrent("/project-placeholder.svg")}
      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export function ProjectGrid({ title, projects: items }: ProjectGridProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="section pt-0">
      <div className="section-inner">
        <div className="rounded-[2.25rem] bg-secondary p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="section-eyebrow">Selected work</span>
              <h2 className="font-display font-bold leading-[1.06] tracking-tight text-3xl md:text-4xl text-primary">
                {title || "Our Projects"}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs md:text-right">
              Residential, commercial, and interior projects delivered across
              Chennai and beyond.
            </p>
          </div>

          <div className="grid-4">
            {items.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06 }}
                className="group"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-background transition-shadow duration-300 hover:shadow-md"
                  aria-label={`View ${project.name} project`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                    <ProjectCover
                      src={project.cover}
                      alt={project.alt || project.name}
                      sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={i === 0}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 md:p-5">
                    <span className="mb-3 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                      {project.category}
                    </span>
                    <h3 className="font-display font-semibold text-base leading-snug text-primary mb-1">
                      {project.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {project.location}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View all projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/projects"
                aria-label="Browse projects"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-border bg-background text-primary transition-colors hover:bg-accent"
              >
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                aria-label="Browse projects"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-border bg-background text-primary transition-colors hover:bg-accent"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
