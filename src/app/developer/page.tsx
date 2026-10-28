import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Briefcase, Camera, Code2, MessageCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Developer",
  description:
    "M.RM. Annamalai — Founder & Digital Developer at Arrise Digital. Web development, UI/UX design, video editing, graphic design, and digital solutions.",
  path: "/developer",
});

const specializations = [
  "Web Development",
  "UI/UX Design",
  "Video Editing",
  "Graphic Design",
  "Digital Solutions",
];

const socials = [
  {
    name: "Instagram",
    detail: "@h4rish_offl",
    href: "https://instagram.com/h4rish_offl",
    icon: Camera,
  },
  {
    name: "LinkedIn",
    detail: "M.RM. Annamalai",
    href: "https://linkedin.com/in/mrmannamalai",
    icon: Briefcase,
  },
  {
    name: "GitHub",
    detail: "harish-offl",
    href: "https://github.com/harish-offl",
    icon: Code2,
  },
  {
    name: "WhatsApp",
    detail: "+91 93639 73591",
    href: "https://wa.me/919363973591",
    icon: MessageCircle,
  },
];

export default function DeveloperPage() {
  return (
    <main className="flex-1">
      <section className="section relative overflow-hidden pt-[140px] pb-24">
        <span className="watermark hidden md:block" aria-hidden="true">
          Developer
        </span>

        <div className="section-inner relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <span className="section-eyebrow">Partners in Progress</span>
                <h1 className="font-display font-bold leading-[1.05] tracking-tight mb-4 flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden border-2 border-accent">
                    <Image
                      src="/developer/annamalai-logo.jpeg"
                      alt="M.RM. Annamalai logo"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  M.RM. Annamalai
                </h1>
                <p className="text-lg text-muted-foreground">
                  Founder &amp; Digital Developer at Arrise Digital
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  M.RM. Annamalai is a web developer, video editor, and digital
                  creator focused on building modern, responsive, and
                  user-friendly digital experiences. Through Arrise Digital, he
                  helps businesses establish and strengthen their online
                  presence through website development, thoughtful user
                  interface design, creative media production, and practical
                  digital solutions.
                </p>

                <div className="rounded-[1.75rem] border-l-4 border-accent bg-secondary p-7">
                  <h2 className="font-display font-semibold text-lg mb-3">
                    AXS Architects Website
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The AXS Architects website was designed and developed to
                    deliver a refined, accessible, and performance-focused
                    digital presence that reflects the studio&rsquo;s
                    commitment to thoughtful, detail-driven design.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="font-display font-semibold text-xs tracking-[0.16em] uppercase text-muted-foreground">
                    Connect
                  </h2>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {socials.map(({ name, detail, href, icon: Icon }) => (
                      <li key={name}>
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                          <span className="min-w-0 flex-1 truncate">
                            {detail}
                          </span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="rounded-[1.75rem] bg-secondary p-7 space-y-4">
                  <h2 className="font-display font-semibold text-xs tracking-[0.16em] uppercase text-muted-foreground">
                    Specializations
                  </h2>
                  <ul className="space-y-2 text-sm text-primary">
                    {specializations.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.75rem] border border-border p-7">
                  <h2 className="font-display font-semibold text-xs tracking-[0.16em] uppercase text-muted-foreground mb-2">
                    Experience
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    3+ years. Project statistics are shared only once verified.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
