import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPreview() {
  const featured = services.slice(0, 6);
  return (
    <section id="services" className="section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Services clients search for</p>
          <h2>Clear offers tied to project evidence.</h2>
        </div>
        <Link href="/services" className="text-link">
          All services →
        </Link>
      </div>
      <p className="section-intro">
        If someone needs computer vision, Document AI, RAG, AI agents,
        Text-to-SQL, or local document privacy workflows, these pages explain
        exactly what I can build and which case studies prove it.
      </p>
      <div className="note-grid">
        {featured.map((service) => (
          <article key={service.slug}>
            <p className="eyebrow">{service.shortTitle}</p>
            <h3>{service.title}</h3>
            <p>{service.directAnswer}</p>
            <Link
              className="text-link inline-block mt-4"
              href={`/services/${service.slug}`}
            >
              View offer →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
