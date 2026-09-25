export const faqs = [
  {
    question: "What does Muhammad Taha specialize in?",
    answer:
      "Muhammad Taha specializes in practical AI engineering: computer vision, OCR and document preprocessing, local de-identification workflows, LLM applications, RAG, backend systems, and automation. His work includes basketball made-basket clip detection, a US document preprocessing pipeline for OCR readiness, and a local document de-identification system.",
    href: "/about",
    label: "About my work",
  },
  {
    question:
      "Can Muhammad Taha build computer vision systems for sports video?",
    answer:
      "Yes. I built a basketball clip finder for a US sports client that scans game footage, detects made baskets, exports 20-second highlight clips, and includes a dashboard for reviewing false positives from difficult real-game footage.",
    href: "/client-work/basketball-clip-finder",
    label: "Basketball computer vision case study",
  },
  {
    question: "Can Muhammad Taha build OCR preprocessing pipelines?",
    answer:
      "Yes. I am building a production document-preprocessing pipeline for a US client that prepares Dallas County property-scan TIFFs for OCR by correcting orientation and skew, cleaning artifacts, reducing noise, normalizing illumination, and preserving the source folder structure.",
    href: "/client-work/document-ocr-preprocessing-pipeline",
    label: "OCR preprocessing case study",
  },
  {
    question:
      "Can Muhammad Taha build document privacy or de-identification workflows?",
    answer:
      "Yes. I built a local document de-identification system that processes Word/PDF text locally, supports PDF/OCR review, uses rule and dictionary detection, requires human approval, and exports a new text-only DOCX with verification checks. It is presented honestly as a technical case study, not a legal anonymisation guarantee.",
    href: "/projects/local-document-deid",
    label: "Document de-identification case study",
  },
  {
    question: "What is Rabt, and what does it demonstrate?",
    answer:
      "Rabt is a codebase Graph-RAG and context-optimization project. It demonstrates how I use AST parsing, graph relationships, and retrieval discipline to give LLM coding workflows smaller, more relevant context instead of sending entire repositories into a prompt.",
    href: "/projects/rabt-codebase-graphrag",
    label: "Rabt case study",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Python is central to my AI and data work, including FastAPI, Pandas, OpenCV, AST parsing, Graph-RAG, and scikit-learn. My application projects also use React, Next.js, Express, PostgreSQL, MongoDB, Flutter, and Firebase. The skills section connects each area to a specific implementation.",
    href: "/#stack",
    label: "Skills and project evidence",
  },
  {
    question: "Where should I start with your projects?",
    answer:
      "Start with Rabt for codebase Graph-RAG and context engineering, MCP Data Analyst for backend and LLM integration, SnapTeX for document processing, or QR Payment Verification for a full-stack review workflow. Each case study explains the problem, implementation choices, current result, and limitations.",
    href: "/projects",
    label: "Browse all case studies",
  },
  {
    question: "Are these client projects or personal projects?",
    answer:
      "Case studies are labeled as personal, educational, or private-source projects. Public-source projects link to repositories maintained under BoltTaha; private-source and client work are described separately without exposing private code. Repository ownership establishes maintainership; it does not establish sole authorship of every dependency or contribution.",
    href: "/projects#client-work",
    label: "Client work overview",
  },
  {
    question: "Can I see source code or a live demonstration?",
    answer:
      "Public-source case studies link to their GitHub repositories and specific implementation files. Private or client-sensitive work is labeled clearly and summarized without exposing private code. I only list a live demo when a current public address is established; a documented deployment alone is not presented as a working public demo.",
    href: "/projects",
    label: "Find source links",
  },
  {
    question: "How can I contact you about a role or project?",
    answer:
      "Email bolt.taha.work@gmail.com or use the contact form. Include the problem, the kind of help you need, and any useful context about your team or role. You can also find my existing LinkedIn and Upwork profiles on the contact page.",
    href: "/contact",
    label: "Get in touch",
  },
];
