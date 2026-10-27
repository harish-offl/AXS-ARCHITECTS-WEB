import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import AboutClient from "./client";

export const metadata: Metadata = buildMetadata({
  title: "About AXS Architects",
  description:
    "About AXS Architects — a Chennai-based architecture and interior design studio committed to a personalized, collaborative design journey.",
  path: "/about",
});

export default function About() {
  return (
    <main className="flex-1">
      <AboutClient />
    </main>
  );
}
