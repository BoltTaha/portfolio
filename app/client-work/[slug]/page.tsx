import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { clientCaseStudies, getClientCaseStudy } from "@/data/client-work";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return clientCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getClientCaseStudy(slug);
  if (!study) return {};
  return pageMetadata(
    `${study.title} client case study`,
    `${study.directAnswer} Read Muhammad Taha's implementation approach, outcomes, proof points, and limitations.`,
    `/client-work/${study.slug}`,
  );
}

export const dynamicParams = false;

export default async function ClientWorkPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getClientCaseStudy(slug);
  if (!study) notFound();

  return (
    <main id="main-content" className="page-wrap">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${study.title} client case study`,
          description: study.directAnswer,
          author: { "@id": `${site.url}/#person` },
          publisher: { "@id": `${site.url}/#website` },
          about: study.stack,
          mainEntityOfPage: `${site.url}/client-work/${study.slug}`,
        }}
      />
      <header className="page-intro">
        <p className="eyebrow">{study.category}</p>
        <h1>
          {study.title}
          <br />
          <em>{study.clientContext}</em>
        </h1>
        <p>{study.directAnswer}</p>
      </header>

      <dl className="case-facts">
        <div>
          <dt>Engagement</dt>
          <dd>{study.dateRange}</dd>
        </div>
        <div>
          <dt>Evidence</dt>
          <dd>{study.commercialEvidence}</dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd>{study.stack.join(" · ")}</dd>
        </div>
      </dl>

      <article className="case-body">
        <section>
          <h2>Problem</h2>
          <p>{study.problem}</p>
        </section>

        <section>
          <h2>Production constraints</h2>
          <ul>
            {study.constraints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>What I built</h2>
          <ul>
            {study.implementation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Outcome</h2>
          <ul>
            {study.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Proof points</h2>
          <ul>
            {study.proofPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Limitations</h2>
          <ul>
            {study.limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Questions this work answers</h2>
          <ul>
            {study.searchQuestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>

      <div className="case-cta">
        <h2>Need a similar AI system?</h2>
        <p className="text-ink-soft mt-3 max-w-[620px]">
          I can help with computer vision, OCR preprocessing, LLM workflows,
          backend services, and production automation.
        </p>
        <div className="flex flex-wrap gap-3 mt-5">
          <Link className="button solid" href="/contact">
            Contact Muhammad Taha
          </Link>
          <Link className="button" href="/projects">
            See more work
          </Link>
        </div>
      </div>
    </main>
  );
}
