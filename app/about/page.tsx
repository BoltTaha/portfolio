import Image from "next/image";
import Link from "next/link";
import Experience from "@/components/Experience";
import JsonLd from "@/components/JsonLd";
import { stackChips } from "@/data/stack";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About",
  "Meet Muhammad Taha (BoltTaha), an AI engineer building computer vision, OCR, LLM, RAG, backend, and automation systems for client workflows.",
  "/about",
);
export default function AboutPage() {
  const credentials = stackChips.filter((chip) => chip.credentialUrl);
  return (
    <main id="main-content" className="page-wrap">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: `${site.url}/about`,
          mainEntity: { "@id": `${site.url}/#person` },
        }}
      />
      <header className="page-intro">
        <Image
          src={site.image}
          alt="Muhammad Taha"
          width={168}
          height={168}
          sizes="168px"
          preload
          className="portrait mb-8"
        />
        <p className="eyebrow">About / BoltTaha</p>
        <h1>
          Software grounded in
          <br />
          <em>a useful problem.</em>
        </h1>
        <p>
          I’m Muhammad Taha, an AI engineer focused on computer vision, OCR, LLM
          applications, RAG, backend systems, and automation. I build software
          that works with messy real-world inputs: game footage, scanned
          documents, databases, and operational workflows.
        </p>
      </header>
      <section className="section pt-0">
        <h2 className="mb-5">How I approach the work.</h2>
        <div className="reading-copy">
          <p>
            I start by understanding the workflow: what information comes in,
            what a person needs to do with it, and where the manual effort sits.
            That shapes the data model, the interface, and where AI is useful.
          </p>
          <p>
            My professional work includes a basketball made-basket clip finder
            for a US sports client and a production OCR preprocessing workflow
            for US records data. My public work includes a guarded
            database-analysis service, document-to-LaTeX conversion,
            conversation-memory experiments, and a receipt-review application.
          </p>
          <p>
            My existing professional work history includes automation at Gohar
            Textile Mills and freelance computer-vision, document-processing,
            and data projects.
          </p>
          <Link className="text-link" href="/projects">
            Explore the project evidence →
          </Link>
        </div>
      </section>
      <section className="section">
        <p className="eyebrow">Education & community</p>
        <h2 className="mb-6">Learning by building.</h2>
        <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-8">
          <div>
            <h3 className="font-serif text-2xl">BS Computer Science</h3>
            <p className="text-ink-soft">FAST-NUCES · expected class of 2027</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl">AWS Cloud Club</h3>
            <p className="text-ink-soft">
              Co-lead, Development & Projects
              <br />
              FAST-NUCES Peshawar
            </p>
          </div>
        </div>
      </section>
      <Experience />
      <section className="section">
        <p className="eyebrow">Further learning</p>
        <h2 className="mb-6">Credentials</h2>
        <p className="text-ink-soft mb-5">
          Credential records linked from my professional portfolio.
        </p>
        <div className="flex flex-wrap gap-3">
          {credentials.map((cert) => (
            <a className="button" href={cert.credentialUrl} key={cert.label}>
              {cert.label} ↗
            </a>
          ))}
        </div>
      </section>
      <div className="case-cta">
        <h2>Let’s make something useful.</h2>
        <div className="flex flex-wrap gap-3 mt-5">
          <Link className="button solid" href="/contact">
            Discuss a role or project
          </Link>
          <a className="button" href="/resume.pdf">
            View resume
          </a>
        </div>
      </div>
    </main>
  );
}
