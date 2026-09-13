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
        <br />I build software that makes <em>complex work simpler.</em>
      </h1>
      <p className="hero-description">
        I build AI applications, backend services, and data pipelines—from tools
        that query databases to systems that turn documents into usable
        information.
      </p>
      <p className="text-ink-soft max-w-[620px] mb-8">
        Explore how I approach LLM integration, document processing, and
        workflow automation through public code and detailed case studies.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link className="button solid" href="/projects">
          Explore the work →
        </Link>
        <Link className="button" href="/contact">
          Discuss a role or project
        </Link>
      </div>
    </section>
  );
}
