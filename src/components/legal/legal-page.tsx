import { ReactNode } from "react";

interface LegalSection {
  heading: string;
  body: ReactNode;
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  sections: LegalSection[];
}) {
  return (
    <main className="flex-1">
      <section className="section relative overflow-hidden pt-[140px]">
        <span className="watermark hidden md:block" aria-hidden="true">
          Legal
        </span>
        <div className="section-inner relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="section-eyebrow justify-center">{eyebrow}</span>
            <h1 className="font-display font-bold leading-[1.05] tracking-tight mb-5">
              {title}
            </h1>
            <p className="section-subtitle">{intro}</p>
            {updated && (
              <p className="text-xs text-muted-foreground mt-4">
                Last updated: {updated}
              </p>
            )}
          </div>

          <div className="max-w-3xl mx-auto rounded-[2rem] bg-secondary p-6 sm:p-10 space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display font-semibold text-xl tracking-tight mb-3">
                  {section.heading}
                </h2>
                <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
