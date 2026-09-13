import ContactForm from "@/components/ContactForm";
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
      <header className="page-intro">
        <p className="eyebrow">Contact</p>
        <h1>
          What are you
          <br />
          <em>working on?</em>
        </h1>
        <p>
          Tell me about the role, the workflow, or the problem you want to
          solve. A little context helps us start a useful conversation.
        </p>
      </header>
      <div className="contact-grid">
        <section aria-label="Send a message" className="contact-panel">
          <ContactForm />
        </section>
        <aside>
          <h2 className="font-serif text-2xl mb-4">
            Prefer a direct conversation?
          </h2>
          <div className="flex flex-col gap-4 items-start">
            <a className="text-link break-all" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="text-link" href={site.github}>
              GitHub ↗
            </a>
            <a className="text-link" href={site.linkedin}>
              LinkedIn ↗
            </a>
            <a className="text-link" href={site.upwork}>
              Upwork ↗
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
