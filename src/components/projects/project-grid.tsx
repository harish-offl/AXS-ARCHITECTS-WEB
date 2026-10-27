"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Project } from "@/content/projects";

interface ProjectGridProps {
  title?: string;
  projects: Project[];
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
              <h2 className="font-display font-bold leading-[1.06] tracking-tight text-3xl md:text-4xl">
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
                  className="block relative overflow-hidden rounded-[1.5rem] aspect-[3/4]"
                  aria-label={`View ${project.name} project`}
                >
                  <Image
                    src={project.cover}
                    alt={project.alt || project.name}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent block mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="font-display font-semibold text-white text-base leading-snug">
                      {project.name}
                    </h3>
                    <p className="text-xs text-white/70 mt-1">
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
