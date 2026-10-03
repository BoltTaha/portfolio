import type { MetadataRoute } from "next";
import { clientCaseStudies } from "@/data/client-work";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { insights } from "@/data/insights";
import { site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const stablePages = [
    "/",
    "/about",
    "/contact",
    "/projects",
    "/services",
    "/insights",
    ...services.map((service) => `/services/${service.slug}`),
    ...clientCaseStudies.map((study) => `/client-work/${study.slug}`),
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({
    url: path === "/" ? `${site.url}/` : `${site.url}${path}`,
    lastModified: site.updated,
  }));

  return [
    ...stablePages,
    ...insights.map((insight) => ({
      url: `${site.url}/insights/${insight.slug}`,
      lastModified: insight.updated,
    })),
  ];
}
