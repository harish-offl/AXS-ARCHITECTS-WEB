"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  title?: string;
  projects: Project[];
}

export function ProjectGrid({ title, projects: items }: ProjectGridProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className={cn("section", title ? "" : "pt-0")}>
      <div className="section-inner">
        {title && (
          <div className="section-header mb-12 text-center">
            <span className="section-eyebrow">Selected Work</span>
            <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary">
              {title}
            </h2>
          </div>
        )}
        <div className="grid-3">
          {items.map((project) => (
            <motion.div
              key={project.slug}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: items.indexOf(project) * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block"
                aria-label={`View ${project.name} project`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.alt || project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority={items.indexOf(project) === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-5 w-full">
                    <span className="font-display font-bold text-xs uppercase tracking-widest text-accent block mb-1">
                      {project.category}
                    </span>
                <h3 className="h3 font-display font-semibold text-white leading-snug">
                  {project.name}
                </h3>
                    <p className="text-sm text-white/80 mt-1">
                      {project.location}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-medium text-primary hover:text-accent transition-colors"
          >
            View all projects <span className="w-4 h-4">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

