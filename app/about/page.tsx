import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { stackChips } from "@/data/stack";

export const metadata: Metadata = {
  title: "About, Muhammad Taha",
  description:
    "About Muhammad Taha (BoltTaha), a Forward Deployed Software Engineer who partners with businesses to turn broken, time-consuming workflows into automated software systems.",
};

const certifications = stackChips.filter((chip) =>
  chip.label.includes("certified"),
);

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="max-w-wrap mx-auto px-8">
        <section className="pt-[90px] pb-[70px] border-b border-line">
          <Image
            src="/profile.png"
            alt="Portrait of Muhammad Taha"
            width={168}
            height={168}
            quality={100}
            priority
            className="rounded-full border border-line-strong object-cover mb-6"
          />
          <div className="font-mono text-[12.5px] tracking-[0.08em] uppercase text-clay-deep mb-[22px]">
            About
          </div>
          <h1 className="font-serif font-medium text-[48px] max-[820px]:text-[32px] tracking-[-0.02em] leading-[1.1] max-w-[700px] mb-[26px]">
            Hi, I&apos;m Muhammad Taha.
          </h1>
          <p className="text-[19px] text-ink-soft max-w-[640px] mb-4">
            Operating as BoltTaha, I partner with businesses to turn broken,
            time-consuming workflows into automated software systems,
            handling the entire process, from diagnosing exactly what a team
            needs, to writing the code and keeping the infrastructure running
            smoothly.
          </p>
          <p className="text-[19px] text-ink-soft max-w-[640px]">
            My work spans computer vision, LLM infrastructure, backend
            systems, and data pipelines, shipped for real clients including
            Gohar Textile Mills, a sports analytics client, and a US legal
            records company, alongside a run of self-directed systems and
            open-source tools.
          </p>
        </section>

        <section className="py-[70px] border-b border-line">
          <div className="mb-10">
            <div className="font-mono text-xs tracking-[0.08em] uppercase text-clay-deep mb-[10px]">
              approach
            </div>
            <h2 className="font-serif text-[32px] font-medium tracking-[-0.01em]">
              How I work
            </h2>
          </div>
          <div className="grid grid-cols-3 max-[820px]:grid-cols-1 gap-x-10 gap-y-8">
            <div>
              <div className="font-mono text-[12px] tracking-[0.08em] uppercase text-clay-deep mb-2">
                01 · the why
              </div>
              <p className="text-[15.5px] text-ink-soft">
                Start with the business pain, not the tech. What&apos;s
                broken, slow, or manual before I show up matters more than
                which framework I reach for.
              </p>
            </div>
            <div>
              <div className="font-mono text-[12px] tracking-[0.08em] uppercase text-clay-deep mb-2">
                02 · the how
              </div>
              <p className="text-[15.5px] text-ink-soft">
                Own the entire lifecycle: diagnosing the real problem,
                architecting the system, writing the code, and deploying and
                maintaining the infrastructure it runs on.
              </p>
            </div>
            <div>
              <div className="font-mono text-[12px] tracking-[0.08em] uppercase text-clay-deep mb-2">
                03 · the what
              </div>
              <p className="text-[15.5px] text-ink-soft">
                Measure success by what a business can do afterward that it
                couldn&apos;t before, not by lines of code or model
                benchmarks.
              </p>
            </div>
          </div>
        </section>

        <section className="py-[70px] border-b border-line">
          <div className="mb-10">
            <div className="font-mono text-xs tracking-[0.08em] uppercase text-clay-deep mb-[10px]">
              background
            </div>
            <h2 className="font-serif text-[32px] font-medium tracking-[-0.01em]">
              Education &amp; community
            </h2>
          </div>
          <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-x-10 gap-y-8">
            <div>
              <div className="font-serif text-[24px] font-medium text-clay-deep">
                BS Computer Science
              </div>
              <div className="text-[15px] text-ink-soft mt-[6px]">
                FAST-NUCES, Class of 2027
              </div>
            </div>
            <div>
              <div className="font-serif text-[24px] font-medium text-clay-deep">
                Co-lead
              </div>
              <div className="text-[15px] text-ink-soft mt-[6px]">
                AWS Cloud Club, FAST-NUCES
              </div>
            </div>
          </div>
        </section>

        <section className="py-[70px]">
          <div className="mb-10">
            <div className="font-mono text-xs tracking-[0.08em] uppercase text-clay-deep mb-[10px]">
              verified
            </div>
            <h2 className="font-serif text-[32px] font-medium tracking-[-0.01em]">
              Certifications
            </h2>
          </div>
          <div className="flex flex-wrap gap-[10px] mb-10">
            {certifications.map((cert) =>
              cert.credentialUrl ? (
                <a
                  key={cert.label}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12.5px] text-ink-soft border border-line-strong px-4 py-2 rounded-pill bg-card hover:text-ink hover:border-clay-deep transition-colors"
                >
                  {cert.label}
                </a>
              ) : (
                <span
                  key={cert.label}
                  className="font-mono text-[12.5px] text-ink-soft border border-line-strong px-4 py-2 rounded-pill bg-card"
                >
                  {cert.label}
                </span>
              ),
            )}
          </div>
          <div className="flex gap-[14px]">
            <a
              href="/#work"
              className="font-body text-sm px-[18px] py-[9px] rounded-pill border border-ink transition-all duration-150 hover:bg-ink hover:text-bg"
            >
              View the work
            </a>
            <a
              href="/contact"
              className="font-body text-sm px-[18px] py-[9px] rounded-pill border border-clay-deep text-clay-deep transition-all duration-150 hover:bg-ink hover:text-bg"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
