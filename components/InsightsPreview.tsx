import Link from "next/link";
import { insights } from "@/data/insights";

export default function InsightsPreview() {
  return (
    <section className="section" aria-labelledby="insights-heading">
      <div className="section-head">
        <div>
          <p className="eyebrow">Engineering insights</p>
          <h2 id="insights-heading">How reliable AI systems are built.</h2>
        </div>
        <Link className="text-link" href="/insights">
          Read all insights →
        </Link>
      </div>
      <div className="project-grid">
        {insights.map((insight) => (
          <article className="project-card" key={insight.slug}>
            <p className="eyebrow">{insight.category}</p>
            <h3 className="font-serif text-2xl leading-tight">
              <Link href={`/insights/${insight.slug}`}>{insight.title}</Link>
            </h3>
            <p className="text-ink-soft mt-4 mb-5">{insight.description}</p>
            <Link className="text-link mt-auto" href={`/insights/${insight.slug}`}>
              Read the article →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
