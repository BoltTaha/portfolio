import Link from "next/link";
import { faqs } from "@/data/faq";
export default function FAQ() {
  return (
    <section id="faq" className="section">
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
