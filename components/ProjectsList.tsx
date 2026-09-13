import Link from "next/link";
import { projects, repoUrl, type Project } from "@/data/projects";

export function ProjectCards({ items }: { items: Project[] }) {
  return (
    <div className="project-grid">
      {items.map((project, i) => (
        <article key={project.slug} className="project-card">
          <div className="eyebrow">
            <span aria-hidden="true">{String(i + 1).padStart(2, "0")} / </span>
            {project.category}
          </div>
          <h3 className="font-serif text-[27px] leading-tight">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="text-ink-soft mt-4 mb-5">{project.summary}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.slice(0, 4).map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <p className="font-mono text-xs text-ink-soft mb-5">{project.kind}</p>
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3">
            <Link
              className="text-link"
              href={`/projects/${project.slug}`}
              aria-label={`Read ${project.title} case study`}
            >
              Read case study <span aria-hidden="true">↗</span>
            </Link>
            <a
              className="text-link secondary"
              href={repoUrl(project.repo)}
              aria-label={`${project.title} source on GitHub`}
            >
              Source code
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ProjectsList() {
  return (
    <section id="work" className="section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected public work</p>
          <h2>From a problem to a working system.</h2>
        </div>
        <Link href="/projects" className="text-link">
          All {projects.length} case studies →
        </Link>
      </div>
      <p className="section-intro">
        AI tools, document workflows, and data systems. Each case study explains
        the implementation, its current limits, and the code behind it.
      </p>
      <ProjectCards items={projects.filter((p) => p.featured)} />
    </section>
  );
}
