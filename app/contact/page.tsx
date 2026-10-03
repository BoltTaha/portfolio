import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact",
  "Contact Muhammad Taha about AI applications, backend engineering, document processing, or a software engineering role. Email and professional profile links.",
  "/contact",
);
export default function ContactPage() {
  return (
    <main id="main-content" className="page-wrap">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${site.url}/contact`,
          name: `Contact ${site.name}`,
          description:
            "Contact Muhammad Taha about AI engineering roles, contract work, or a production AI system.",
          mainEntity: { "@id": `${site.url}/#person` },
          isPartOf: { "@id": `${site.url}/#website` },
        }}
      />
      <header className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>
          What are you
          <br />
          <em>working on?</em>
        </h1>
        <p>
          Tell me about the role, the workflow, or the problem you want to
          solve. I am open to remote AI engineering roles and contract projects
          with international teams. A little context helps us start a useful
          conversation.
        </p>
      </header>
      <div className="contact-grid">
        <section aria-label="Send a message" className="contact-panel">
          <ContactForm analyticsLocation="contact_page" />
        </section>
        <aside>
          <h2 className="font-serif text-2xl mb-4">
            Prefer a direct conversation?
          </h2>
          <div className="flex flex-col gap-4 items-start">
            <a className="text-link break-all" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="text-link" href={site.github} rel="me">
              GitHub ↗
            </a>
            <a className="text-link" href={site.linkedin} rel="me">
              LinkedIn ↗
            </a>
            <a className="text-link" href={site.upwork} rel="me">
              Upwork ↗
            </a>
            <a className="text-link" href="/resume.pdf">
              Resume ↗
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
