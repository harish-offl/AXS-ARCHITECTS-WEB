"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getTeam } from "@/content/team";
import { getTestimonials } from "@/content/testimonials";
import { Button } from "@/components/ui/button";

export default function AboutClient() {
  const members = getTeam();
  const praise = getTestimonials();

  return (
    <>
      <section className="section relative overflow-hidden pt-[140px]">
        <div className="section-inner relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 font-display font-semibold text-sm tracking-widest uppercase text-muted-foreground mb-4"
            >
              <span className="w-1 h-3 bg-accent" />
              About the studio
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="h1 font-display font-semibold leading-[0.95] tracking-tighter text-primary mb-6 text-balance"
            >
              A personalized journey to your ideal space
            </motion.h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              AXS Architects is committed to providing a personalized and
              collaborative journey to realize your ideal environment. Our
              knowledgeable team offers a thorough service that goes above and
              beyond expectations, with attention to detail on every aspect of
              the project. No matter the size, we believe every project deserves
              the same level of quality and customer care.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-border">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <span className="section-eyebrow inline-block">Our Philosophy</span>
              <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary">
                Design that serves how you live
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We understand that designing the ideal interior space requires
                a collaborative and personalized approach. We work closely
                with our clients to understand their vision and provide
                customized solutions that meet their specific requirements.
              </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We treat every project with the same level of quality and
              customer care, from small-scale renovations to large-scale
              projects.
            </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[520px] w-full rounded-[2rem] overflow-hidden border border-border shadow-lg"
            >
              <div
                className="absolute inset-0 bg-[url('https://axsarchitects.com/wp-content/uploads/2023/03/0_1_11zon.jpg')] bg-cover bg-center"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#242424]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-display font-semibold text-xs uppercase tracking-widest text-accent block mb-2">
                  Chennai, Tamil Nadu
                </span>
                <h3 className="h3 font-display font-semibold text-white leading-snug">
                  AXS Architects
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {members.length > 0 && (
        <section className="section">
          <div className="section-inner">
            <div className="section-header mb-12 text-center">
              <span className="section-eyebrow">Our Team</span>
              <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary">
                The People Behind the Design
              </h2>
            </div>
            <div className="grid-4">
              {members.map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -6 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: members.indexOf(member) * 0.08 }}
                  className="rounded-[1.75rem] border border-border bg-card p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
                >
                  {member.image ? (
                    <div className="relative w-24 h-24 rounded-full mb-4 overflow-hidden border border-border">
                      <Image
                        src={member.image}
                        alt={member.imageAlt || member.name}
                        sizes="96px"
                        className="object-cover"
                        fill
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4 border border-border">
                      <span className="text-muted-foreground font-medium">A</span>
                    </div>
                  )}
                  <h3 className="h3 font-display font-semibold mb-1">{member.name}</h3>
                  <span className="mb-3 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {member.role}
                  </span>
                  {member.bio && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-10 text-center">
              Team photography and biographies to be supplied by the studio.
            </p>
          </div>
        </section>
      )}

      <section className="section bg-white border-y border-border">
        <div className="section-inner">
          <div className="section-header mb-10 text-center">
            <span className="section-eyebrow">Client Feedback</span>
            <h2 className="h2 font-display font-semibold leading-[1.05] tracking-tight text-primary">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid-3 max-w-5xl mx-auto">
            {praise.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -4 }}
                className="rounded-[1.75rem] border border-border bg-card p-8 shadow-sm"
              >
                <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                  “{item.text}”
                </p>
                <p className="font-display font-semibold text-sm text-primary">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <div className="section-inner relative z-10">
          <div className="rounded-[2rem] bg-primary p-10 md:p-16 text-center text-white">
            <span className="font-display font-semibold text-xs uppercase tracking-widest text-accent block mb-4">
              Ready to begin?
            </span>
            <h2 className="h2 font-display font-semibold leading-snug mb-6 text-white">
              Start Your Project
            </h2>
            <p className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
              Tell us about your residential, commercial, or interior project
              and we&rsquo;ll guide you from concept to delivery.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="accent">Start a Project</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
