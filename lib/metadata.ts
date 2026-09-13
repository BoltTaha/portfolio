import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`;
  const url = path === "/" ? `${site.url}/` : `${site.url}${path}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: `${site.name} Portfolio`,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
export const personSchema = {
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  alternateName: site.handle,
  url: site.url,
  jobTitle: site.role,
  description: site.description,
  image: `${site.url}${site.image}`,
  email: site.email,
  sameAs: [site.github, site.linkedin, site.upwork],
  knowsAbout: [
    "AI engineering",
    "Computer vision",
    "OCR and document preprocessing",
    "Large language model applications",
    "Retrieval augmented generation",
    "Graph-RAG",
    "Model Context Protocol integrations",
    "Backend development",
    "Data pipelines",
    "Workflow automation",
  ],
};
