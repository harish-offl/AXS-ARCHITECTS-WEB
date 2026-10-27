import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ServicesClient from "./client";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "AXS Architects offers architecture, interior design, urban design, planning, 3D modelling, execution, and elevation design services in Chennai, Tamil Nadu.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <ServicesClient />
    </main>
  );
}
