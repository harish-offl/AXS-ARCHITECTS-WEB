import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms and conditions that govern the use of the AXS Architects website and our services.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="Please read these terms carefully before using our website or engaging our services."
      updated="27 October 2026"
      sections={[
        {
          heading: "Use of this website",
          body: (
            <p>
              This website is provided for general information about AXS
              Architects and our services. By using it, you agree to use it
              lawfully and not to interfere with its operation or security.
            </p>
          ),
        },
        {
          heading: "Content and intellectual property",
          body: (
            <p>
              All content on this website — including text, drawings, images,
              and project photography — belongs to AXS Architects unless
              otherwise stated. It may not be reproduced or used without written
              permission.
            </p>
          ),
        },
        {
          heading: "Project engagements",
          body: (
            <p>
              Any project engagement is governed by a separate written agreement
              that defines scope, fees, timelines, and deliverables. Information
              on this website does not constitute a binding offer.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              While we strive to keep information accurate and current, we make
              no warranties about the completeness or accuracy of this website.
              We are not liable for any loss arising from its use.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms can be sent to {site.email}.
            </p>
          ),
        },
      ]}
    />
  );
}
