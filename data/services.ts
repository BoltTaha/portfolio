export interface ServiceOffer {
  slug: string;
  title: string;
  shortTitle: string;
  searchIntent: string;
  metaDescription: string;
  directAnswer: string;
  whoItHelps: string;
  problems: string[];
  deliverables: string[];
  proof: Array<{ label: string; href: string }>;
  stack: string[];
  keywords: string[];
}

const projectHref = (slug: string) => `/projects/${slug}`;
const clientHref = (slug: string) => `/client-work/${slug}`;

export const services: ServiceOffer[] = [
  {
    slug: "computer-vision-engineer",
    title: "Computer Vision Engineer for Video and Image Workflows",
    shortTitle: "Computer Vision",
    searchIntent:
      "Hire a computer vision freelancer for video analysis, object detection, image processing, and review workflows.",
    metaDescription:
      "Hire Muhammad Taha for computer vision systems using Python, OpenCV, YOLOv8, EfficientNet, video analysis, object detection, and production review workflows.",
    directAnswer:
      "Muhammad Taha builds computer vision systems for real-world video and image workflows, including sports video analysis, object detection, tracking, image preprocessing, and human-review interfaces.",
    whoItHelps:
      "Teams with footage, images, scans, or visual review workflows that need a working detection or processing system instead of a model demo.",
    problems: [
      "You have long videos or image sets that are too slow to review manually.",
      "You need object detection, classification, tracking, or event extraction in messy real-world footage.",
      "You need a pipeline that exports useful clips, records confidence, and lets humans review edge cases.",
    ],
    deliverables: [
      "Python/OpenCV video or image-processing pipeline",
      "YOLOv8, EfficientNet, or lightweight classifier integration when appropriate",
      "Timestamped event extraction, review dashboards, and batch processing",
      "Evaluation notes, failure cases, setup instructions, and deployment-ready code",
    ],
    proof: [
      {
        label: "Basketball made-basket clip finder",
        href: clientHref("basketball-clip-finder"),
      },
      {
        label: "Automated Color Grading",
        href: projectHref("automated-color-grading"),
      },
      {
        label: "Crisis Intelligence ML project",
        href: projectHref("crisis-intelligence"),
      },
    ],
    stack: ["Python", "OpenCV", "YOLOv8", "EfficientNet", "FFmpeg", "NumPy"],
    keywords: [
      "computer vision freelancer",
      "YOLO developer",
      "OpenCV engineer",
      "video analysis developer",
      "object detection freelancer",
    ],
  },
  {
    slug: "document-ai-engineer",
    title: "Document AI Engineer for Scans, PDFs, and Review Workflows",
    shortTitle: "Document AI",
    searchIntent:
      "Hire a document AI freelancer for scanned files, document preprocessing, text extraction, PDF workflows, and review systems.",
    metaDescription:
      "Hire Muhammad Taha for Document AI systems: scanned document preprocessing, PDF/DOCX workflows, text extraction, Tesseract, Poppler, OpenCV, and human review.",
    directAnswer:
      "Muhammad Taha builds Document AI workflows that prepare, extract, review, and safely process scanned documents, PDFs, DOCX files, and image-based records.",
    whoItHelps:
      "Teams that have document-heavy workflows and need cleaner inputs, reviewable extraction, or local processing before downstream automation.",
    problems: [
      "Your scanned documents have skew, shadows, borders, speckle, mixed page quality, or inconsistent formats.",
      "You need PDF/DOCX text extraction and review without blindly trusting model output.",
      "You need resumable processing, logs, manifests, and clear operating instructions.",
    ],
    deliverables: [
      "Document preprocessing and text-extraction pipelines",
      "PDF, TIFF, DOCX, and image-oriented workflow design",
      "Local review screens, manifests, and operator documentation",
      "Validation checks and clear limits around what the system can and cannot guarantee",
    ],
    proof: [
      {
        label: "Dallas County document preprocessing pipeline",
        href: clientHref("document-ocr-preprocessing-pipeline"),
      },
      {
        label: "Local Document De-ID",
        href: projectHref("local-document-deid"),
      },
      { label: "SnapTeX document conversion", href: projectHref("snaptex") },
    ],
    stack: ["Python", "OpenCV", "Tesseract", "Poppler", "DOCX", "PDF"],
    keywords: [
      "document AI engineer",
      "PDF processing developer",
      "scanned document preprocessing",
      "text extraction pipeline",
      "Tesseract developer",
    ],
  },
  {
    slug: "rag-ai-engineer",
    title: "RAG Engineer for Knowledge Systems and AI Search",
    shortTitle: "RAG Systems",
    searchIntent:
      "Hire a RAG developer for document search, grounded answers, citations, retrieval evaluation, and knowledge systems.",
    metaDescription:
      "Hire Muhammad Taha for RAG systems, vector search, Graph-RAG, retrieval evaluation, citations, OpenAI, Anthropic, Gemini, FastAPI, and backend integration.",
    directAnswer:
      "Muhammad Taha builds RAG systems that connect LLMs to documents, databases, codebases, and business knowledge with retrieval, citations, evaluation, and backend integration.",
    whoItHelps:
      "Founders and teams whose AI assistant gives vague answers, misses the right context, or needs a production retrieval workflow around real data.",
    problems: [
      "Your chatbot answers without enough evidence or cites the wrong source.",
      "Your retrieval system sends too much irrelevant context to the model.",
      "You need RAG connected to a product backend, data source, or workflow rather than a notebook demo.",
    ],
    deliverables: [
      "Document ingestion, chunking, retrieval, reranking, and citation workflow",
      "Vector search or graph-based context selection depending on the data shape",
      "Evaluation cases, failure review, and production-oriented API integration",
      "Cost, latency, caching, and fallback decisions documented clearly",
    ],
    proof: [
      {
        label: "Rabt Codebase Graph-RAG",
        href: projectHref("rabt-codebase-graphrag"),
      },
      { label: "MCP Data Analyst", href: projectHref("mcp-data-analyst") },
      {
        label: "Context Window Compressor",
        href: projectHref("context-window-compressor"),
      },
    ],
    stack: [
      "Python",
      "RAG",
      "Graph-RAG",
      "FastAPI",
      "PostgreSQL",
      "Vector Search",
    ],
    keywords: [
      "RAG developer",
      "Graph-RAG engineer",
      "AI search freelancer",
      "retrieval augmented generation",
      "vector database developer",
    ],
  },
  {
    slug: "ai-agent-developer",
    title: "AI Agent Developer for Tool-Calling and Workflow Automation",
    shortTitle: "AI Agents",
    searchIntent:
      "Hire an AI agent developer for tool calling, workflow automation, guardrails, memory, retries, and human review.",
    metaDescription:
      "Hire Muhammad Taha for AI agents, tool-calling workflows, LangGraph-style automation, guardrails, human review, APIs, databases, and reliable backend integration.",
    directAnswer:
      "Muhammad Taha builds AI agents and workflow automation systems that call tools, use memory, validate outputs, retry safely, and keep humans in control when needed.",
    whoItHelps:
      "Teams that want an AI workflow to operate across APIs, files, databases, dashboards, or internal tools with clear safety boundaries.",
    problems: [
      "Your agent works in a demo but fails on messy real inputs.",
      "You need validation, retries, logs, approval steps, and fallback behavior.",
      "You need an AI workflow integrated into an existing backend or operations process.",
    ],
    deliverables: [
      "Tool-calling workflows with validation, memory, retries, and logging",
      "Human-in-the-loop review and approval flows",
      "FastAPI or service-layer integration with existing software",
      "Test cases and documented failure modes for production readiness",
    ],
    proof: [
      { label: "MCP Data Analyst", href: projectHref("mcp-data-analyst") },
      {
        label: "QR Payment Verification",
        href: projectHref("qr-payment-verification"),
      },
      {
        label: "Local Document De-ID",
        href: projectHref("local-document-deid"),
      },
    ],
    stack: ["Python", "FastAPI", "MCP", "OpenAI", "Anthropic", "Gemini"],
    keywords: [
      "AI agent developer",
      "tool calling agent",
      "LangGraph developer",
      "AI workflow automation",
      "LLM integration engineer",
    ],
  },
  {
    slug: "text-to-sql-fastapi",
    title: "Text-to-SQL and FastAPI Engineer for Data Assistants",
    shortTitle: "Text-to-SQL",
    searchIntent:
      "Hire a Text-to-SQL developer for PostgreSQL AI assistants, FastAPI backends, SQL validation, and safe database access.",
    metaDescription:
      "Hire Muhammad Taha for Text-to-SQL systems with PostgreSQL, FastAPI, SQL validation, read-only execution, schema-aware retrieval, MCP, and audit-friendly controls.",
    directAnswer:
      "Muhammad Taha builds Text-to-SQL and AI data assistant systems with schema-aware retrieval, SQL validation, read-only execution, query limits, APIs, and audit-friendly controls.",
    whoItHelps:
      "Teams that want non-technical users to ask questions over business data without opening unsafe database access.",
    problems: [
      "Generated SQL can be wrong, unsafe, slow, or too expensive to run.",
      "Your data assistant needs schema context, validation, read-only controls, and clear logs.",
      "You need deterministic analytics and optional LLM explanations around the result.",
    ],
    deliverables: [
      "FastAPI backend and service layer for data assistant workflows",
      "SQL AST validation, read-only transactions, timeouts, row limits, and cost controls",
      "Schema-aware retrieval and MCP or REST interfaces",
      "Tests, Docker setup, and implementation notes for reviewers",
    ],
    proof: [
      { label: "MCP Data Analyst", href: projectHref("mcp-data-analyst") },
      {
        label: "Gohar Textile sales forecasting and analytics context",
        href: "/about",
      },
      { label: "Client review for RAG and AI systems", href: "/#testimonials" },
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQL", "MCP", "Docker"],
    keywords: [
      "Text-to-SQL developer",
      "FastAPI AI backend",
      "PostgreSQL AI assistant",
      "MCP server developer",
      "AI data assistant",
    ],
  },
  {
    slug: "local-document-deidentification",
    title: "Local Document De-Identification Developer",
    shortTitle: "Document De-ID",
    searchIntent:
      "Hire a developer for local document de-identification, human review, PDF/DOCX processing, and privacy-first document workflows.",
    metaDescription:
      "Hire Muhammad Taha for local document de-identification systems, PDF/DOCX processing, Tesseract, Poppler, rule-based detection, human review, and verified export.",
    directAnswer:
      "Muhammad Taha builds local document de-identification and privacy-review workflows that process sensitive text locally, require human approval, and export reviewed documents with clear limits.",
    whoItHelps:
      "Teams exploring privacy-first document preparation before external AI use, internal review, or downstream analysis.",
    problems: [
      "Sensitive names, emails, identifiers, metadata, and narrative details can leak when documents are sent into AI tools.",
      "Automated detection alone is not enough; operators need review, correction, and approval controls.",
      "You need honest scope, visible limitations, and local processing boundaries rather than compliance promises.",
    ],
    deliverables: [
      "Local system for DOCX/PDF text extraction and review",
      "Rule and dictionary detection with manual redaction and correction",
      "Human approval gate, manifesting, and verified DOCX export",
      "Security and threat-model documentation for the next production phase",
    ],
    proof: [
      {
        label: "Local Document De-ID",
        href: projectHref("local-document-deid"),
      },
      {
        label: "Document AI service page",
        href: "/services/document-ai-engineer",
      },
      { label: "Resume with document privacy workflow", href: "/resume.pdf" },
    ],
    stack: ["Python", "DOCX", "PDF", "Tesseract", "Poppler", "Local UI"],
    keywords: [
      "document de-identification developer",
      "document privacy workflow",
      "PDF redaction workflow",
      "local document AI",
      "pseudonymisation tool",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
