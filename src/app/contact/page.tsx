"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { contact, enquiryFormDescription, projectTypes, privacyNotice } from "@/content/contact";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Please enter your phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please tell us more about your project"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <main className="flex-1">
        <section className="section relative overflow-hidden pt-[140px]">
          <div className="section-inner relative z-10">
            <div className="max-w-3xl mx-auto text-center py-20">
              <span className="font-display font-semibold text-xs uppercase tracking-widest text-accent block mb-4">
                Message Sent
              </span>
              <h1 className="h1 font-display font-semibold leading-[1.05] tracking-tight text-primary mb-6">
                Thank you
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                We&rsquo;ve received your inquiry and will get back to you
                shortly.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 font-medium text-primary hover:text-accent transition-colors">
                Return home <span className="w-4 h-4">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <section className="section relative overflow-hidden pt-[140px]">
        <div className="section-inner relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-eyebrow inline-block">Get in touch</span>
            <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary">
              Start Your Project
            </h2>
            <p className="section-subtitle max-w-lg mx-auto mb-12">
              {enquiryFormDescription}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-primary">
                  Full name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className={cn(
                    "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    errors.name && "border-destructive",
                  )}
                  placeholder="Your name"
                />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                  className={cn(
                    "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    errors.email && "border-destructive",
                  )}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-primary">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className={cn(
                    "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    errors.phone && "border-destructive",
                  )}
                  placeholder="+91 90000 00000"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium text-primary">
                  Project type
                </label>
                <select
                  id="projectType"
                  {...register("projectType")}
                  className={cn(
                    "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    errors.projectType && "border-destructive",
                  )}
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-sm text-destructive">{errors.projectType.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className={cn(
                    "flex h-32 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    errors.message && "border-destructive",
                  )}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>
              <Button type="submit" size="lg" disabled={submitting || !isValid} className="w-full">
                {submitting ? "Sending…" : "Send inquiry"}
                {!submitting && <Send className="ml-2 h-4 w-4" />}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                {privacyNotice}
              </p>
            </form>

            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="h3 font-display font-semibold text-primary">
                  AXS Architects Office
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {site.location.split(",").slice(0, 2).join(", ")}
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-primary hover:text-accent transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </li>
                {contact.phones.map((phone, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                    <div>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="text-primary hover:text-accent transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-3 text-muted-foreground leading-relaxed max-w-xs">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <div className="leading-relaxed">{site.address}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
