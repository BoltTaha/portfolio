import { describe, expect, it } from "vitest";
import { projects, getProject, sourceUrl } from "@/data/projects";
import { evidence } from "@/data/sources";
import { site } from "@/data/site";
import { services, getService } from "@/data/services";
import { insights, getInsight } from "@/data/insights";
import { pageMetadata, personSchema } from "@/lib/metadata";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { GET } from "@/app/llms.txt/route";
describe("public discovery contract", () => {
  it("gives every case study a unique canonical and sitemap entry", () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
    expect(new Set(services.map((s) => s.slug)).size).toBe(services.length);
    expect(new Set(insights.map((i) => i.slug)).size).toBe(insights.length);
    const urls = sitemap().map((entry) => entry.url);
    for (const project of projects) {
      const path = `/projects/${project.slug}`;
      expect(urls).toContain(site.url + path);
      expect(
        pageMetadata(project.title, project.summary, path).alternates
          ?.canonical,
      ).toBe(path);
      if (project.repo) {
        expect(sourceUrl(project.repo)).toContain(
          `/blob/${evidence[project.repo]}/README.md`,
        );
      } else {
        expect(project.sourceNote).toBeTruthy();
      }
    }
    for (const service of services) {
      const path = `/services/${service.slug}`;
      expect(urls).toContain(site.url + path);
      expect(
        pageMetadata(service.title, service.metaDescription, path).alternates
          ?.canonical,
      ).toBe(path);
    }
    for (const insight of insights) {
      const path = `/insights/${insight.slug}`;
      expect(urls).toContain(site.url + path);
      expect(
        pageMetadata(insight.title, insight.description, path).alternates
          ?.canonical,
      ).toBe(path);
    }
    expect(getProject("does-not-exist")).toBeUndefined();
    expect(getService("does-not-exist")).toBeUndefined();
    expect(getInsight("does-not-exist")).toBeUndefined();
  });
  it("keeps the optional discovery text aligned with the public cases", async () => {
    const text = await GET().text();
    projects.forEach((project) =>
      expect(text).toContain(`${site.url}/projects/${project.slug}`),
    );
    services.forEach((service) =>
      expect(text).toContain(`${site.url}/services/${service.slug}`),
    );
    insights.forEach((insight) =>
      expect(text).toContain(`${site.url}/insights/${insight.slug}`),
    );
    expect(robots().sitemap).toBe(`${site.url}/sitemap.xml`);
  });
  it("uses the new portrait and does not label a current student as an alumnus", () => {
    expect(personSchema.image).toBe(`${site.url}/profile.jpeg`);
    expect(personSchema).not.toHaveProperty("alumniOf");
  });
});
