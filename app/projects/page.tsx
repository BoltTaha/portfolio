import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { ProjectCards } from "@/components/ProjectsList";
import { projects, clientWork } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
export const metadata = pageMetadata(
  "Projects & case studies",
  "Explore Muhammad Taha’s AI, Graph-RAG, backend, document privacy, document-processing, computer-vision, and data-engineering projects with implementation notes and evidence links.",
  "/projects",
);
export default function ProjectsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Muhammad Taha project case studies",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/projects/${project.slug}`,
      name: project.title,
      description: project.summary,
    })),
  };
  return (
    <main id="main-content" className="page-wrap">
      <JsonLd data={itemListSchema} />
      <header className="page-intro">
        <p className="eyebrow">The work / curated case studies</p>
        <h1>
          What I built.
          <br />
          <em>How it works.</em>
        </h1>
        <p>
          Curated case studies across AI applications, Graph-RAG, backend
          systems, document processing, document privacy, computer vision, and
          educational data projects. Each one connects the explanation to
          implementation evidence or a clear source-status note.
        </p>
      </header>
      <section aria-labelledby="public-projects-title">
        <h2 id="public-projects-title" className="sr-only">
          Project case studies
        </h2>
        <ProjectCards items={projects} />
      </section>
      <section id="github-coverage" className="section">
        <p className="eyebrow">GitHub coverage</p>
        <h2 className="mb-4">Curated, not inflated.</h2>
        <p className="section-intro">
          My GitHub account contains a broader mix of portfolio projects,
          coursework, experiments, and learning repositories. This portfolio
          highlights the work that best demonstrates AI engineering, backend
          architecture, document processing, document privacy, computer vision,
          and production delivery. Coursework, forks, tutorials, and small
          experiments are not promoted as client-ready products unless they
          teach a useful technical idea.
        </p>
        <div className="note-grid">
          <article>
            <h3>Featured here</h3>
            <p>
              Local Document De-ID, Rabt, MCP Data Analyst, QR Payment
              Verification, SnapTeX, Context Window Compressor, imaging tools,
              data systems, and client AI case studies.
            </p>
          </article>
          <article>
            <h3>Available through GitHub</h3>
            <p>
              Broader repositories remain linked from GitHub. They support the
              learning story, but the site keeps the main hiring path focused on
              stronger, more relevant evidence.
            </p>
          </article>
        </div>
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
