import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, repoUrl, sourceUrl } from "@/data/projects";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ProjectVisual from "@/components/ProjectVisual";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const project = getProject((await params).slug);
  return project
    ? pageMetadata(project.title, project.summary, `/projects/${project.slug}`)
    : {};
}
export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.title} case study`,
    url: `${site.url}/projects/${project.slug}`,
    description: project.summary,
    author: { "@id": `${site.url}/#person` },
    dateModified: site.updated,
    about: {
      "@type": "SoftwareSourceCode",
      name: project.title,
      ...(project.repo ? { codeRepository: repoUrl(project.repo) } : {}),
      description: project.summary,
      runtimePlatform: project.stack.join(", "),
      maintainer: { "@id": `${site.url}/#person` },
    },
    ...(project.clientReview
      ? {
          review: {
            "@type": "Review",
            reviewBody: project.clientReview.quote,
            reviewRating: {
              "@type": "Rating",
              ratingValue: project.clientReview.rating,
              bestRating: 5,
            },
            author: {
              "@type": "Person",
              name: project.clientReview.source,
            },
          },
        }
      : {}),
  };
  return (
    <main id="main-content" className="page-wrap">
      <JsonLd data={schema} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ]}
      />
      <header className="page-intro">
        <Link className="text-link mb-8 inline-block" href="/projects">
          ← All projects
        </Link>
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          {project.repo ? (
            <>
              <a className="button solid" href={repoUrl(project.repo)}>
                View repository ↗
              </a>
              <a className="button" href={sourceUrl(project.repo)}>
                Read the documentation
              </a>
            </>
          ) : (
            <Link className="button solid" href="/contact">
              Discuss a similar system
            </Link>
          )}
        </div>
      </header>
      <dl className="case-facts">
        <div>
          <dt>Project type</dt>
          <dd>{project.kind}</dd>
        </div>
        <div>
          <dt>Current status</dt>
          <dd>{project.status}</dd>
        </div>
        <div>
          <dt>My role</dt>
          <dd>
            {project.role ? (
              project.role
            ) : project.repo ? (
              <>
                Project maintained under{" "}
                <a className="text-link" href={site.github}>
                  BoltTaha
                </a>
                . The repository records the contribution history.
              </>
            ) : (
              (project.sourceNote ??
              "Private project summary. Public source is not currently linked.")
            )}
          </dd>
        </div>
      </dl>
      <ProjectVisual slug={project.slug} />
      {project.clientReview ? (
        <aside className="case-cta" aria-label="Client review">
          <p
            className="text-[18px] tracking-[0.15em] text-clay-deep mb-3"
            aria-label={`${project.clientReview.rating} out of 5 stars`}
          >
            {"★".repeat(project.clientReview.rating)}
          </p>
          <blockquote className="font-serif italic text-[23px] leading-snug max-w-[760px]">
            “{project.clientReview.quote}”
          </blockquote>
          <p className="font-mono text-xs uppercase tracking-[0.06em] text-ink-mute mt-4">
            {project.clientReview.source}
          </p>
          {project.clientReview.endorsements?.length ? (
            <div className="flex flex-wrap gap-2 mt-5">
              {project.clientReview.endorsements.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </aside>
      ) : null}
      <div className="case-body">
        <section>
          <p className="eyebrow">01 / Situation</p>
          <h2>The problem and the people.</h2>
          <p>{project.problem}</p>
          <h3>Who it is for</h3>
          <p>{project.audience}</p>
        </section>
        <section>
          <p className="eyebrow">02 / Implementation</p>
          <h2>How the pieces fit together.</h2>
          {project.approach.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h3>Main capabilities</h3>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
        <section>
          <p className="eyebrow">03 / Result</p>
          <h2>What the project demonstrates.</h2>
          <p>{project.outcome}</p>
          <h3>Current limits</h3>
          <ul>
            {project.limitations.map((limit) => (
              <li key={limit}>{limit}</li>
            ))}
          </ul>
          <h3>Potential next steps</h3>
          <p>{project.nextSteps}</p>
        </section>
        <section>
          <p className="eyebrow">04 / Evidence</p>
          <h2>
            {project.repo ? "Read the implementation." : "What can be shared."}
          </h2>
          {project.repo ? (
            <>
              <p>
                {project.repositoryNote ??
                  "These links preserve the code revision reviewed for this case study. The repository may have changed since then."}
              </p>
              <ul className="source-list">
                <li>
                  <a href={sourceUrl(project.repo)}>Project README ↗</a>
                </li>
                {project.sourcePaths?.map((path) => (
                  <li key={path}>
                    <a href={sourceUrl(project.repo!, path)}>{path} ↗</a>
                  </li>
                ))}
                {project.relatedRepos?.map((repo) => (
                  <li key={repo}>
                    <a href={sourceUrl(repo)}>{repo} — related repository ↗</a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>{project.sourceNote}</p>
          )}
        </section>
      </div>
      <aside className="case-cta">
        <h2>Working on a related problem?</h2>
        <p className="text-ink-soft my-4">
          Tell me about the workflow, the constraints, and the result you need.
        </p>
        <Link className="button" href="/contact">
          Get in touch →
        </Link>
      </aside>
    </main>
  );
}
