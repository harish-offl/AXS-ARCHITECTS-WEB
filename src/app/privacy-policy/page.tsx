import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How AXS Architects collects, uses, and protects the information you share through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains what information we collect and how it is used."
      updated="27 October 2026"
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>
                When you submit an inquiry through our website, we collect the
                details you provide — such as your name, email address, phone
                number, project type, and message.
              </p>
              <p>
                We may also collect basic, non-identifying usage information
                such as pages visited and browser type to help us improve this
                website.
              </p>
            </>
          ),
        },
        {
          heading: "How we use your information",
          body: (
            <>
              <p>
                We use the information you share to respond to your inquiry,
                discuss your project, and provide the services you request. We
                do not sell or rent your personal information to third parties.
              </p>
            </>
          ),
        },
        {
          heading: "Storage and security",
          body: (
            <p>
              We take reasonable measures to protect the information you share.
              Data is retained only for as long as needed to respond to your
              inquiry and maintain our records.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              You may request access to, correction of, or deletion of the
              personal information you have shared with us. To do so, contact us
              at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-primary underline underline-offset-4"
              >
                {site.email}
              </a>
              .
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              For any questions about this policy, write to {site.email} or
              visit our studio at {site.address}.
            </p>
          ),
        },
      ]}
    />
  );
}
