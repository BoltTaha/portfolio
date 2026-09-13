import Link from "next/link";
const groups = [
  {
    title: "LLM tools, RAG & context systems",
    skills: "Python · FastAPI · PostgreSQL · MCP · Graph-RAG · AST parsing",
    slug: "rabt-codebase-graphrag",
    project: "Rabt Codebase Graph-RAG",
  },
  {
    title: "Document & image processing",
    skills: "Gemini · Streamlit · LaTeX · OpenCV · NumPy",
    slug: "snaptex",
    project: "SnapTeX",
  },
  {
    title: "Full-stack applications",
    skills: "JavaScript · React · Express · MongoDB · Nginx",
    slug: "qr-payment-verification",
    project: "QR Payment Verification",
  },
  {
    title: "Data & machine learning",
    skills: "Hadoop · HDFS · Spark · AWS EC2 · scikit-learn",
    slug: "distributed-data-systems",
    project: "Distributed Data Systems",
  },
];
export default function StackChips() {
  return (
    <section id="stack" className="section">
      <p className="eyebrow">Skills, with evidence</p>
      <h2 className="mb-8">The tools behind the work.</h2>
      <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-8">
        {groups.map((group) => (
          <article key={group.title}>
            <h3 className="font-serif text-2xl mb-2">{group.title}</h3>
            <p className="text-ink-soft mb-3">{group.skills}</p>
            <Link className="text-link" href={`/projects/${group.slug}`}>
              See {group.project} →
            </Link>
            {group.title === "LLM tools, RAG & context systems" && (
              <Link
                className="text-link block mt-2"
                href="/projects/mcp-data-analyst"
              >
                See MCP Data Analyst →
              </Link>
            )}
            {group.title === "Document & image processing" && (
              <Link
                className="text-link block mt-2"
                href="/projects/automated-color-grading"
              >
                See Automated Color Grading →
              </Link>
            )}
            {group.title === "Data & machine learning" && (
              <Link
                className="text-link block mt-2"
                href="/projects/crisis-intelligence"
              >
                See Crisis Intelligence →
              </Link>
            )}
          </article>
        ))}
      </div>
      <p className="mt-8 text-ink-soft">
        This portfolio uses Next.js, React, TypeScript, and Tailwind CSS.{" "}
        <a className="text-link" href="https://github.com/BoltTaha/portfolio">
          View its source →
        </a>
      </p>
    </section>
  );
}
