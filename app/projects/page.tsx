import Link from "next/link";
import { ProjectCards } from "@/components/ProjectsList";
import { projects, clientWork } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Projects & case studies",
  "Explore Muhammad Taha’s AI, backend, document-processing, and data-engineering projects with implementation notes and public source code.",
  "/projects",
);
export default function ProjectsPage() {
  return (
    <main id="main-content" className="page-wrap">
      <header className="page-intro">
        <p className="eyebrow">The work / public case studies</p>
        <h1>
          What I built.
          <br />
          <em>How it works.</em>
        </h1>
        <p>
          Eight case studies across AI applications, backend systems, document
          processing, and educational data projects. Each one links the
          explanation to the implementation.
        </p>
      </header>
      <section aria-labelledby="public-projects-title">
        <h2 id="public-projects-title" className="sr-only">
          Public projects
        </h2>
        <ProjectCards items={projects} />
      </section>
      <section id="client-work" className="section">
        <p className="eyebrow">Professional experience</p>
        <h2 className="mb-4">Client work, in context.</h2>
        <p className="section-intro">
          These summaries come from my existing public portfolio. Client
          implementations are separate from the public-source case studies
          above.
        </p>
        <div className="client-list">
          {clientWork.map((work) => (
            <article key={work.title}>
              <p className="eyebrow">{work.context}</p>
              <h3>{work.title}</h3>
              <p>{work.summary}</p>
              {"href" in work && work.href ? (
                <Link className="text-link inline-block mt-4" href={work.href}>
                  Read professional case study →
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
