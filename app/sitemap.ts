import type { MetadataRoute } from "next";
import { clientCaseStudies } from "@/data/client-work";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { insights } from "@/data/insights";
import { site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/contact",
    "/projects",
    "/services",
    "/insights",
    ...services.map((service) => `/services/${service.slug}`),
    ...insights.map((insight) => `/insights/${insight.slug}`),
    ...clientCaseStudies.map((study) => `/client-work/${study.slug}`),
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({
    url: path === "/" ? `${site.url}/` : `${site.url}${path}`,
    lastModified: site.updated,
  }));
}
