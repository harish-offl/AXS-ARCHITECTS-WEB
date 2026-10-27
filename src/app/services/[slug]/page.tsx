import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { services, getService } from "@/content/services";
import { getProject } from "@/content/projects";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return notFound();
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
    image: service.image,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return notFound();

  const related = (service.relatedProjects || [])
    .map((s) => getProject(s))
    .filter(Boolean);

  return (
    <main className="flex-1">
      <section className="section relative overflow-hidden pt-[140px]">
        <div className="section-inner relative z-10">
          <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden border border-border shadow-lg mb-10">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="inline-flex rounded-full bg-accent px-3 py-1 font-display font-semibold text-[10px] uppercase tracking-widest text-accent-foreground mb-2">
                {service.category}
              </span>
              <h1 className="h1 font-display font-semibold text-white leading-snug">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="prose-lg mx-auto max-w-3xl text-muted-foreground leading-relaxed mb-12">
            <h2 className="h2 font-display font-semibold text-primary mb-6 leading-snug">
              {service.title}
            </h2>
            <p>{service.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="h3 font-display font-semibold mb-2">Design considerations</h3>
              <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-6">
                {service.considerations.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="h3 font-display font-semibold mb-2">Deliverables</h3>
              <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-6">
                {service.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>

          {related.length > 0 && (
            <div className="space-y-6">
              <h3 className="h3 font-display font-semibold mb-4">Related projects</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((project) => (
                  <Link
                    key={project!.slug}
                    href={`/projects/${project!.slug}`}
                    className="flex items-center gap-3 p-3 rounded-[1.25rem] border border-border bg-card hover:bg-secondary transition-colors"
                  >
                    <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={project!.cover}
                        alt={project!.alt || project!.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        {project!.category}
                      </div>
                      <div className="font-semibold text-sm">{project!.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 rounded-xl border border-border bg-secondary p-8 md:p-12">
            <h3 className="h3 font-display font-semibold mb-4">Discuss your {service.title.toLowerCase()} project</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Get in touch to discuss how we can help with your project.
            </p>
            <Link href="/contact">
              <Button size="lg">Start a Project</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
