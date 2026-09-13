import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/data/faq";
export default function FAQ() {
  return (
    <section id="faq" className="section">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <p className="eyebrow">A few useful answers</p>
      <h2 className="mb-8">Before we talk.</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <article key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <Link className="text-link" href={faq.href}>
              {faq.label} →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
