import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "How AXS Architects uses cookies and similar technologies on this website.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="This policy explains how we use cookies and similar technologies on our website."
      updated="27 October 2026"
      sections={[
        {
          heading: "What are cookies",
          body: (
            <p>
              Cookies are small text files stored on your device that help
              websites function and remember your preferences.
            </p>
          ),
        },
        {
          heading: "How we use cookies",
          body: (
            <>
              <p>
                We use essential cookies to keep the website working correctly,
                and may use analytics cookies to understand how visitors use the
                site so we can improve it.
              </p>
            </>
          ),
        },
        {
          heading: "Managing cookies",
          body: (
            <p>
              You can control or delete cookies through your browser settings.
              Disabling cookies may affect some features of this website.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: <p>For questions about this policy, contact {site.email}.</p>,
        },
      ]}
    />
  );
}
