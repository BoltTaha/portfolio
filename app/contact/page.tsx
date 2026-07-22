import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact, Muhammad Taha",
  description:
    "Get in touch with Muhammad Taha (BoltTaha) about production AI systems, backend infrastructure, and workflow automation for your business.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="max-w-wrap mx-auto px-8">
        <section className="pt-[90px] pb-[70px]">
          <div className="font-mono text-[12.5px] tracking-[0.08em] uppercase text-clay-deep mb-[22px]">
            Contact
          </div>
          <h1 className="font-serif font-medium text-[48px] max-[820px]:text-[32px] tracking-[-0.02em] leading-[1.1] max-w-[700px] mb-[26px]">
            Let&apos;s talk business.
          </h1>
          <p className="text-[19px] text-ink-soft max-w-[560px] mb-[56px]">
            Tell me what&apos;s broken, slow, or manual on your team, and
            I&apos;ll get back to you shortly with how I can help.
          </p>

          <div className="grid grid-cols-[1fr_320px] max-[820px]:grid-cols-1 gap-16 max-[820px]:gap-10">
            <div className="rounded-2xl border border-line-strong bg-card p-6">
              <ContactForm />
            </div>

            <div>
              <div className="font-mono text-xs tracking-[0.08em] uppercase text-clay-deep mb-[10px]">
                direct
              </div>
              <div className="flex flex-col gap-3 text-[15px]">
                <a
                  href="mailto:contact@muhammadtaha.app"
                  className="text-ink-soft hover:text-ink"
                >
                  contact@muhammadtaha.app
                </a>
                <a
                  href="https://github.com/bolttaha"
                  className="text-ink-soft hover:text-ink"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/bolttaha/"
                  className="text-ink-soft hover:text-ink"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.upwork.com/freelancers/bolttaha"
                  className="text-ink-soft hover:text-ink"
                >
                  Upwork profile ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
