import { type Metadata } from "next";
import { site } from "@/content/site";

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = new URL(path, site.url).href;
  return {
    title: title ? `${title} | ${site.name}` : site.name,
    description: description || site.description,
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    openGraph: {
      title: title ? `${title} | ${site.name}` : site.name,
      description: description || site.description,
      url,
      siteName: site.name,
      type: "website",
      images: image ? [{ url: image }] : undefined,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${site.name}` : site.name,
      description: description || site.description,
      images: image ? [image] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildProjectMetadata(project: {
  name: string;
  location: string;
  category: string;
  cover?: string;
  description?: string | null;
}): Metadata {
  const title = project.name;
  const description =
    project.description ||
    `${project.name} — ${project.category.toLowerCase()} project in ${project.location}.`;
  return buildMetadata({
    title,
    description,
    path: `/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`,
    image: project.cover,
  });
}
