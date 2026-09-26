import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getInsight, insights } from "@/data/insights";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = getInsight((await params).slug);
  if (!insight) return {};
  const metadata = pageMetadata(
    insight.title,
    insight.description,
    `/insights/${insight.slug}`,
  );
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: insight.published,
      modifiedTime: insight.updated,
      authors: [site.name],
      tags: insight.keywords,
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const insight = getInsight((await params).slug);
  if (!insight) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: insight.title,
    description: insight.description,
    url: `${site.url}/insights/${insight.slug}`,
    datePublished: insight.published,
    dateModified: insight.updated,
    author: { "@id": `${site.url}/#person` },
    publisher: { "@id": `${site.url}/#person` },
    mainEntityOfPage: `${site.url}/insights/${insight.slug}`,
    keywords: insight.keywords.join(", "),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: insight.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main id="main-content" className="page-wrap">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <article>
        <header className="page-intro">
          <Link className="text-link mb-8 inline-block" href="/insights">
            ← All insights
          </Link>
          <p className="eyebrow">{insight.category}</p>
          <h1>{insight.title}</h1>
          <p>{insight.directAnswer}</p>
          <p className="font-mono text-xs text-ink-mute mt-6">
            By {site.name} · {insight.readingTime} · Updated {insight.updated}
          </p>
        </header>

        <div className="case-body">
          {insight.sections.map((section, index) => (
            <section key={section.heading}>
              <p className="eyebrow">
                {String(index + 1).padStart(2, "0")} / Analysis
              </p>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section>
            <p className="eyebrow">Questions clients ask</p>
            <h2>Direct answers.</h2>
            {insight.questions.map((item) => (
              <div className="mb-8" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </section>

          <section>
            <p className="eyebrow">Related evidence</p>
            <h2>See the work behind the article.</h2>
            <ul className="source-list">
              {insight.related.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label} →</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <aside className="case-cta">
        <h2>Have a related system to build?</h2>
        <p className="text-ink-soft my-4">
          Share the workflow, sample inputs, current failure points, and the
          result your team needs. I will suggest a practical first milestone.
        </p>
        <Link className="button solid" href="/contact">
          Discuss your project
        </Link>
      </aside>
    </main>
  );
}
