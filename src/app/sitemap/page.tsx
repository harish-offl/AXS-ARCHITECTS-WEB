import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { navLinks } from "@/content/site";
import { projects } from "@/content/projects";
import { services } from "@/content/services";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap",
  description: "All pages on the AXS Architects website.",
  path: "/sitemap",
});

export default function SitemapPage() {
  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Developer", href: "/developer" },
  ];

  return (
    <main className="flex-1">
      <section className="section relative overflow-hidden pt-[140px]">
        <span className="watermark hidden md:block" aria-hidden="true">
          Index
        </span>
        <div className="section-inner relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="section-eyebrow justify-center">Navigation</span>
            <h1 className="font-display font-bold leading-[1.05] tracking-tight">
              Sitemap
            </h1>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5">
            <div className="rounded-[1.75rem] bg-secondary p-7">
              <h2 className="font-display font-semibold text-lg mb-4">Pages</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] bg-secondary p-7">
              <h2 className="font-display font-semibold text-lg mb-4">
                Services
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {services
                  .filter((s) => s.published)
                  .map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] bg-secondary p-7">
              <h2 className="font-display font-semibold text-lg mb-4">
                Projects & Legal
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {projects
                  .filter((p) => p.published)
                  .slice(0, 6)
                  .map((project) => (
                    <li key={project.slug}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {project.name}
                      </Link>
                    </li>
                  ))}
                {legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
