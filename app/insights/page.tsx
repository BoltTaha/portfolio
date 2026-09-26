import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { insights } from "@/data/insights";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "AI engineering insights",
  "Technical articles by Muhammad Taha on computer vision, sports video analysis, document AI pipelines, RAG, AI agents, and safer text-to-SQL systems.",
  "/insights",
);

export default function InsightsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Muhammad Taha AI engineering insights",
    url: `${site.url}/insights`,
    description:
      "Practical technical writing on computer vision, document AI, RAG, AI agents, and data systems.",
    author: { "@id": `${site.url}/#person` },
    hasPart: insights.map((insight) => ({
      "@type": "BlogPosting",
      headline: insight.title,
      url: `${site.url}/insights/${insight.slug}`,
      datePublished: insight.published,
      dateModified: insight.updated,
    })),
  };

  return (
    <main id="main-content" className="page-wrap">
      <JsonLd data={schema} />
      <header className="page-intro">
        <p className="eyebrow">Insights / practical AI engineering</p>
        <h1>
          Technical decisions,
          <br />
          <em>explained with evidence.</em>
        </h1>
        <p>
          Detailed articles on building computer vision, document-processing,
          and AI data systems around real constraints, review workflows, and
          production failure modes.
        </p>
      </header>
      <section className="project-grid" aria-label="AI engineering articles">
        {insights.map((insight) => (
          <article className="project-card" key={insight.slug}>
            <p className="eyebrow">{insight.category}</p>
            <h2 className="font-serif text-[27px] leading-tight">
              <Link href={`/insights/${insight.slug}`}>{insight.title}</Link>
            </h2>
            <p className="text-ink-soft mt-4 mb-5">{insight.description}</p>
            <p className="font-mono text-xs text-ink-mute mb-5">
              {insight.readingTime} · Published {insight.published}
            </p>
            <Link
              className="text-link mt-auto"
              href={`/insights/${insight.slug}`}
            >
              Read the article →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
