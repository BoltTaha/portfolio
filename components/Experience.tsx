import { experience } from "@/data/experience";
export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="eyebrow">Professional & community work</p>
      <h2 className="mb-8">Experience</h2>
      {experience.map((entry) => (
        <article key={entry.role} className="experience-entry">
          <div className="flex flex-wrap justify-between items-baseline gap-x-5 gap-y-2">
            <h3>{entry.role}</h3>
            <p className="font-mono text-xs text-ink-soft">{entry.dateRange}</p>
          </div>
          <p className="text-ink-soft mt-2">
            {entry.organization} · {entry.location}
          </p>
          <p className="mt-4">{entry.summary}</p>
          <ul className="list-disc pl-5 mt-3 text-ink-soft space-y-2">
            {entry.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
