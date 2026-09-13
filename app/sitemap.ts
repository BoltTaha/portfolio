import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/contact",
    "/projects",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({
    url: path === "/" ? `${site.url}/` : `${site.url}${path}`,
    lastModified: site.updated,
  }));
}
