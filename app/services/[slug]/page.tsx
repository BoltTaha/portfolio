import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const service = getService((await params).slug);
  return service
    ? pageMetadata(
        service.title,
        service.metaDescription,
        `/services/${service.slug}`,
      )
    : {};
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    url: `${site.url}/services/${service.slug}`,
    description: service.directAnswer,
    provider: { "@id": `${site.url}/#person` },
    areaServed: "Worldwide",
    serviceType: service.shortTitle,
    keywords: service.keywords.join(", "),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Who should hire Muhammad Taha for ${service.shortTitle}?`,
        acceptedAnswer: { "@type": "Answer", text: service.whoItHelps },
      },
      {
        "@type": "Question",
        name: `What can Muhammad Taha build for ${service.shortTitle}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: service.deliverables.join(" "),
        },
      },
    ],
  };
  return (
    <main id="main-content" className="page-wrap">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <header className="page-intro">
        <Link className="text-link mb-8 inline-block" href="/services">
          ← All services
        </Link>
        <p className="eyebrow">Hire Muhammad Taha / {service.shortTitle}</p>
        <h1>{service.title}</h1>
        <p>{service.directAnswer}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {service.stack.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          <Link className="button solid" href="/contact">
            Discuss this work
          </Link>
          <a className="button" href="/resume.pdf">
            View resume
          </a>
        </div>
      </header>
      <dl className="case-facts">
        <div>
          <dt>Search intent</dt>
          <dd>{service.searchIntent}</dd>
        </div>
        <div>
          <dt>Best fit</dt>
          <dd>{service.whoItHelps}</dd>
        </div>
        <div>
          <dt>Proof</dt>
          <dd>{service.proof.map((item) => item.label).join(", ")}</dd>
        </div>
      </dl>
      <div className="case-body">
        <section>
          <p className="eyebrow">01 / Client problems</p>
          <h2>Problems this solves.</h2>
          <ul>
            {service.problems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <p className="eyebrow">02 / Deliverables</p>
          <h2>What I can build.</h2>
          <ul>
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <p className="eyebrow">03 / Evidence</p>
          <h2>Relevant proof.</h2>
          <p>
            These links connect the service offer to visible work, client case
            studies, or project pages already published on the portfolio.
          </p>
          <ul className="source-list">
            {service.proof.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label} →</Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <p className="eyebrow">04 / Keywords</p>
          <h2>How clients may search for this.</h2>
          <p>{service.keywords.join(" · ")}</p>
        </section>
      </div>
      <aside className="case-cta">
        <h2>Have a similar workflow?</h2>
        <p className="text-ink-soft my-4">
          Send the input type, current process, target output, and any examples
          you can share. I will suggest a practical first milestone.
        </p>
        <Link className="button" href="/contact">
          Get in touch →
        </Link>
      </aside>
    </main>
  );
}
