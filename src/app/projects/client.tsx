"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/content/projects";

interface ProjectsListProps {
  projects: Project[];
}

function Cover({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [current, setCurrent] = useState(src);

  return (
    <Image
      src={current}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      priority={priority}
      onError={() => setCurrent("/project-placeholder.png")}
    />
  );
}

export default function ProjectsList({ projects: items }: ProjectsListProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid-3">
      {items.map((project, i) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.05 }}
          className="group"
        >
          <Link
            href={`/projects/${project.slug}`}
            className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-shadow duration-300 hover:shadow-md"
            aria-label={`View ${project.name} project`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <Cover
                src={project.cover}
                alt={project.alt || project.name}
                priority={i === 0}
              />
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <span className="mb-3 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                {project.category}
              </span>
              <h3 className="font-display font-semibold text-xl leading-snug text-primary mb-1">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.location}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
