import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "AI engineering services",
  "Hire Muhammad Taha for computer vision, Document AI, RAG, AI agents, Text-to-SQL, FastAPI backends, and local document privacy workflows.",
  "/services",
);

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Muhammad Taha AI engineering services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/services/${service.slug}`,
      name: service.title,
      description: service.directAnswer,
    })),
  };
  return (
    <main id="main-content" className="page-wrap">
      <JsonLd data={schema} />
      <header className="page-intro">
        <p className="eyebrow">Services / hire Muhammad Taha</p>
        <h1>
          Searchable offers for
          <br />
          <em>real AI work.</em>
        </h1>
        <p>
          These pages map my strongest work to the problems clients actually
          search for: computer vision, Document AI, RAG, AI agents, Text-to-SQL,
          and local document privacy workflows.
        </p>
      </header>
      <section className="project-grid" aria-label="AI engineering services">
        {services.map((service) => (
          <article key={service.slug} className="project-card">
            <p className="eyebrow">{service.shortTitle}</p>
            <h2 className="font-serif text-[27px] leading-tight">
              <Link href={`/services/${service.slug}`}>{service.title}</Link>
            </h2>
            <p className="text-ink-soft mt-4 mb-5">{service.directAnswer}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {service.stack.slice(0, 5).map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <Link
              className="text-link mt-auto"
              href={`/services/${service.slug}`}
            >
              Read the offer →
            </Link>
          </article>
        ))}
      </section>
      <aside className="case-cta">
        <h2>Want the fastest route to a useful first version?</h2>
        <p className="text-ink-soft my-4">
          Send the workflow, a sample input if available, and the output you
          want. I will reply with a practical first milestone.
        </p>
        <Link className="button solid" href="/contact">
          Discuss a project
        </Link>
      </aside>
    </main>
  );
}
