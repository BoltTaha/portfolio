export interface ServiceOffer {
  slug: string;
  title: string;
  metaTitle: string;
  shortTitle: string;
  searchIntent: string;
  metaDescription: string;
  directAnswer: string;
  whoItHelps: string;
  problems: string[];
  deliverables: string[];
  limitations: string[];
  proof: Array<{ label: string; href: string }>;
  relatedInsights: Array<{ label: string; href: string }>;
  stack: string[];
  keywords: string[];
}

const projectHref = (slug: string) => `/projects/${slug}`;
const clientHref = (slug: string) => `/client-work/${slug}`;

export const services: ServiceOffer[] = [
  {
    slug: "computer-vision-engineer",
    title: "Computer Vision and Edge AI Engineer for Visual Systems",
    metaTitle: "Computer Vision & Edge AI Engineer",
    shortTitle: "Computer Vision & Edge AI",
    searchIntent:
      "Hire a computer vision and Edge AI freelancer for video analysis, object detection, tracking, inference, image processing, and deployment-oriented workflows.",
    metaDescription:
      "Hire Muhammad Taha for Computer Vision and Edge AI systems using Python, OpenCV, YOLOv8, ONNX Runtime, video analysis, tracking, inference, and review workflows.",
    directAnswer:
      "Muhammad Taha builds Computer Vision and Edge AI systems for real-world video and image workflows, including road perception, sports analysis, object detection, tracking, ONNX inference, image processing, and human-review interfaces.",
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
      "ONNX inference pipelines and practical edge-deployment recommendations",
    ],
    limitations: [
      "Accuracy and latency targets depend on representative footage, labels, camera placement, and target hardware.",
      "The Raspberry Pi 4B CPU benchmark is kept separate from the development baseline and is not presented as a measured Jetson, Hailo, Coral, or TensorRT result.",
      "Safety-critical perception requires additional validation, sensor integration, and system-level controls beyond a portfolio pipeline.",
    ],
    proof: [
      {
        label: "Autonomous-driving Edge AI perception system",
        href: projectHref("autonomous-driving-edge-perception"),
      },
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
    relatedInsights: [
      {
        label: "How to build a basketball highlight detector",
        href: "/insights/basketball-highlight-detection",
      },
    ],
    stack: ["Python", "OpenCV", "YOLOv8", "ONNX Runtime", "PyTorch", "FFmpeg"],
    keywords: [
      "computer vision freelancer",
      "YOLO developer",
      "OpenCV engineer",
      "video analysis developer",
      "object detection freelancer",
      "Edge AI engineer",
      "ONNX deployment engineer",
    ],
  },
  {
    slug: "document-ai-engineer",
    title: "Document AI Engineer for Scans, PDFs, and Review Workflows",
    metaTitle: "Document AI Engineer for Scans and PDFs",
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
    limitations: [
      "Extraction and preprocessing quality must be measured on representative documents rather than assumed from clean samples.",
      "OCR or model output still needs validation when errors could affect records, payments, or privacy decisions.",
      "Private client documents remain inside approved infrastructure and are not exposed as portfolio evidence.",
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
    relatedInsights: [
      {
        label: "How to prepare large scanned archives for Document AI",
        href: "/insights/scanned-document-preprocessing-pipeline",
      },
      {
        label: "How to build a payment-receipt review workflow",
        href: "/insights/payment-receipt-verification-workflow",
      },
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
    metaTitle: "RAG Engineer for Knowledge Systems",
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
    limitations: [
      "Retrieval quality depends on the source collection, permissions, chunking, indexing, and an evaluation set that reflects real questions.",
      "A smaller context window is useful only when the selected evidence still supports a correct answer.",
      "Production systems need access control, source traceability, monitoring, and a defined response when evidence is insufficient.",
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
    relatedInsights: [
      {
        label: "How to give coding agents smaller, relevant context",
        href: "/insights/codebase-context-graph-for-llm-agents",
      },
      {
        label: "How to build a safe Text-to-SQL system",
        href: "/insights/safe-text-to-sql-ai-system",
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
    metaTitle: "AI Agent & Workflow Automation Developer",
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
    limitations: [
      "Agent autonomy should be bounded by the consequence of each tool action and the reliability of its inputs.",
      "Workflows that move money, alter records, or contact people require explicit authorization and human review where appropriate.",
      "Model behavior can change, so production use needs evaluations, logs, retries, and deterministic fallbacks.",
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
    relatedInsights: [
      {
        label: "Payment-receipt review with deterministic controls",
        href: "/insights/payment-receipt-verification-workflow",
      },
      {
        label: "AI-assisted structured entry in Flutter and Firebase",
        href: "/insights/ai-assisted-flutter-firebase-app",
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
    metaTitle: "Text-to-SQL & FastAPI Engineer",
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
    limitations: [
      "Read-only execution reduces mutation risk but does not prevent costly, unauthorized, or analytically incorrect queries by itself.",
      "Business terms and row-level permissions must be defined with the data owner before the assistant can be trusted.",
      "Generated SQL requires evaluation against representative questions and known result checks.",
    ],
    proof: [
      { label: "MCP Data Analyst", href: projectHref("mcp-data-analyst") },
      {
        label: "Gohar Textile sales forecasting and analytics context",
        href: "/about",
      },
      { label: "Client review for RAG and AI systems", href: "/#testimonials" },
    ],
    relatedInsights: [
      {
        label: "How to build a safe Text-to-SQL system",
        href: "/insights/safe-text-to-sql-ai-system",
      },
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
    metaTitle: "Local Document De-Identification Developer",
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
    limitations: [
      "De-identification software cannot guarantee legal anonymisation or detection of every identifying detail.",
      "Human review remains mandatory before an exported document is approved for downstream use.",
      "Production deployment requires representative testing, parser isolation, retention controls, and organization-specific policy review.",
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
    relatedInsights: [
      {
        label: "How to prepare scanned documents for controlled processing",
        href: "/insights/scanned-document-preprocessing-pipeline",
      },
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
