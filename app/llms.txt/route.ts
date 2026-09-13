import { projects, repoUrl } from "@/data/projects";
import { site } from "@/data/site";
export const dynamic = "force-static";
export function GET() {
  const text = `# ${site.name} (${site.handle})\n\n> ${site.description}\n\n## Profile\n- [About](${site.url}/about): Background, education, and linked credentials.\n- [Contact](${site.url}/contact): Email and professional profiles.\n- [GitHub](${site.github}): Public source repositories.\n\n## Public case studies\n${projects.map((p) => `- [${p.title}](${site.url}/projects/${p.slug}): ${p.kind}. ${p.summary} Source: ${repoUrl(p.repo)}`).join("\n")}\n\nCase studies distinguish implemented behavior, repository-reported measurements, limitations, and future work. Client summaries are separate from public-source case studies. This file is an experimental discovery aid, not an indexing or training directive.\n`;
  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
