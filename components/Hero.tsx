import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-identity">
        <Image
          src={site.image}
          alt="Portrait of Muhammad Taha"
          width={168}
          height={168}
          sizes="168px"
          preload
          className="portrait"
        />
        <div>
          <p className="eyebrow">Muhammad Taha / BoltTaha</p>
          <p className="text-ink-soft">{site.role}</p>
        </div>
      </div>
      <h1>
        I’m Muhammad Taha.
        <br />I build AI systems that work <em>beyond the demo.</em>
      </h1>
      <p className="hero-description">
        AI engineer building computer vision, OCR, LLM, RAG, backend, and
        automation systems for real client workflows.
      </p>
      <p className="text-ink-soft max-w-[620px] mb-8">
        My work includes a basketball clip finder for made-basket detection, a
        US document preprocessing pipeline for OCR readiness, Rabt for codebase
        Graph-RAG/context optimization, and source-backed projects in LLM
        tooling and document AI.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link className="button solid" href="/projects">
          Explore the work →
        </Link>
        <Link className="button" href="/contact">
          Discuss a role or project
        </Link>
        <a className="button" href="/resume.pdf">
          View resume
        </a>
      </div>
    </section>
  );
}
