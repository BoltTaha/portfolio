import { clientCaseStudies } from "./client-work";
import { evidence } from "./sources";

type Repo = keyof typeof evidence;
export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  kind: "Personal project" | "Educational project" | "Private project";
  status: string;
  stack: string[];
  repo?: Repo;
  sourceNote?: string;
  featured?: boolean;
  problem: string;
  audience: string;
  approach: string[];
  features: string[];
  outcome: string;
  limitations: string[];
  nextSteps: string;
  sourcePaths?: string[];
  relatedRepos?: Repo[];
}

export const projects: Project[] = [
  {
    slug: "local-document-deid",
    title: "Local Document De-ID Prototype",
    category: "Document AI · privacy workflow",
    summary:
      "A local Ubuntu prototype for reviewing, pseudonymising, and exporting sensitive Word/PDF text before external AI use, with mandatory human approval and verification checks.",
    kind: "Private project",
    status:
      "Working prototype built from a real de-identification problem; not a paid client delivery",
    featured: true,
    sourceNote:
      "This case study is based on a local private prototype and synthetic demo pack. It was built for a real document de-identification problem, but the client did not purchase or receive it. The page avoids exposing private source files or client material.",
    stack: ["Python", "DOCX", "PDF/OCR", "Tesseract", "Poppler", "Local UI"],
    problem:
      "Teams that want to use external AI on documents can accidentally expose personal names, emails, phone numbers, IDs, dates, payment details, hidden Word text, PDF text, OCR output, or document metadata. A safe workflow needs more than a regex pass: it needs local processing, review, export controls, and honest limits.",
    audience:
      "Operators and teams preparing sensitive Word or PDF text for later analysis while keeping the review workflow local and human-controlled.",
    approach: [
      "The prototype processes files locally on Ubuntu and reconstructs supported inputs into new text-only DOCX outputs instead of copying source packages or original PDF drawing/image data.",
      "DOCX handling reads body text, tables, headers, footers, footnotes, endnotes, hidden text, and split runs while discarding comments, deleted revisions, source metadata, custom XML, thumbnails, relationships, and unsupported active content.",
      "PDF handling uses local Poppler extraction for text PDFs and local Tesseract OCR for scanned or mixed PDFs. OCR output enters the same review flow, while original image pixels are not copied into the export.",
      "Detection combines rules, validation checks, dictionaries, consistent within-document tokens, manual redaction, correction of false positives, mandatory review, approved export, manifesting, output rescans, and package whitelist checks.",
      "The local review UI runs on loopback only with an unpredictable session URL, Host/Origin checks, no external assets, and a Linux seccomp guard that blocks new internet-family sockets in the processing process and inherited native children.",
    ],
    features: [
      "DOCX and PDF/OCR ingestion for synthetic demo inputs",
      "Before-and-after review screen with manual redaction",
      "Consistent within-document pseudonymisation tokens",
      "Mandatory human attestation before export",
      "Atomic approved DOCX export and operational manifest",
      "41 passing automated tests plus validation and benchmark artifacts",
    ],
    outcome:
      "The prototype demonstrates a practical privacy-first document workflow: local extraction, review, pseudonymisation, manual correction, export, and independent checks. The validation record reports 41 passing automated tests, browser checks for review/export flows, wheel build/install smoke tests, and synthetic benchmark runs. These are prototype results on synthetic fixtures, not a production compliance claim.",
    limitations: [
      "It does not guarantee anonymisation, legal compliance, forensic erasure, or complete detection of every identifier.",
      "The tested default uses rules and synthetic dictionaries; no statistical NER model was installed or benchmarked.",
      "Supported outputs are new text-only DOCX files. Source layout, images, signatures, accessibility structure, tables as tables, and PDF output are not preserved.",
      "The metrics come from a tiny synthetic corpus and should not be presented as performance on real client data.",
      "Parser sandboxing, production retention controls, operator identity, multilingual evaluation, and adversarial re-identification testing remain future work.",
    ],
    nextSteps:
      "Turn the prototype into a production-grade product by scoping real supported formats, adding representative acceptance tests, installing and calibrating a local NER model, hardening parser isolation, and defining retention and operator controls.",
  },
  {
    slug: "rabt-codebase-graphrag",
    title: "Rabt Codebase Graph-RAG",
    category: "LLM infrastructure · code intelligence",
    summary:
      "A codebase-context system that uses AST and graph analysis to give LLM workflows smaller, more relevant code context instead of dumping whole repositories into prompts.",
    kind: "Private project",
    status: "Implemented private project; public source not currently linked",
    featured: true,
    sourceNote:
      "Rabt is included as a portfolio case study from Muhammad Taha's resume and professional profile details. Its public repository was not available through the connected GitHub check, so this page avoids source-only claims and does not expose private code.",
    stack: ["Python", "AST parsing", "Graph-RAG", "NetworkX", "LLM context"],
    problem:
      "LLM coding assistants often waste context on files and text that are not relevant to the current question. Full-repository prompts are expensive, noisy, and hard to inspect when a task only needs a focused slice of the codebase.",
    audience:
      "Developers building code-aware AI tools, repository assistants, and context pipelines for LLM agents.",
    approach: [
      "Rabt treats a codebase as a graph of symbols, files, dependencies, and runtime relationships rather than a flat folder of text chunks.",
      "AST parsing identifies code structure so context can be selected around functions, classes, imports, and call relationships instead of arbitrary text windows.",
      "Graph-based retrieval builds a smaller context packet for the model, keeping the relevant neighborhood while leaving unrelated files out of the prompt.",
      "The project demonstrates context engineering discipline: reduce prompt size by choosing better evidence, then make the selected context inspectable before an LLM uses it.",
    ],
    features: [
      "AST-aware codebase parsing",
      "Graph-based context selection",
      "Repository-level relationship modeling",
      "Prompt/context reduction for code-aware LLM workflows",
    ],
    outcome:
      "The project demonstrates an important AI-engineering skill: building retrieval and context systems around the shape of the data. Resume/profile material reports a 99.2% context reduction in a tested workflow; this portfolio presents that as a reported project result, not an independently reproduced benchmark.",
    limitations: [
      "The source repository is not currently public through the connected GitHub check, so implementation links are not shown here.",
      "Context reduction is task-dependent. A smaller prompt is only useful if the selected context still preserves the evidence needed for the coding task.",
      "Graph construction, symbol resolution, and runtime telemetry need continuous validation across languages and repository styles.",
    ],
    nextSteps:
      "Publish a sanitized technical write-up with diagrams, representative examples, and repeatable benchmark cases if the project can be shared publicly.",
  },
  {
    slug: "mcp-data-analyst",
    title: "MCP Data Analyst",
    category: "LLM tools · backend",
    summary:
      "A PostgreSQL analysis service that exposes the same guarded query, statistics, and charting workflows through MCP tools and a REST API.",
    kind: "Personal project",
    status: "Implemented reference application",
    featured: true,
    repo: "mcp-data-analyst",
    stack: ["Python", "FastAPI", "PostgreSQL", "MCP", "Chroma", "Docker"],
    problem:
      "An assistant needs database context to answer analytical questions, but generated SQL must be checked before it reaches a database. Tool integrations also need consistent behavior across clients.",
    audience:
      "Developers connecting AI assistants to a PostgreSQL dataset for exploration and reporting.",
    approach: [
      "MCP tools and REST endpoints share service functions, so query execution, statistical analysis, and visualization follow the same implementation.",
      "Schema retrieval provides relevant database context. A sqlglot syntax-tree validator checks permitted query types, nested CTEs, blocked functions, and table access before execution.",
      "The query service combines validation with read-only transactions, statement timeouts, result row limits, and a query-cost budget. These are separate controls around generated SQL.",
      "Pandas computes statistics deterministically; an optional language-model step explains them. Chart selection follows the shape of the returned data.",
    ],
    features: [
      "Nine MCP tools alongside REST endpoints",
      "Schema retrieval and SQL validation",
      "Statistical summaries and Plotly chart generation",
      "Container-based setup and a documented test suite",
    ],
    outcome:
      "Implements an end-to-end path from database discovery to checked queries, computed summaries, and charts. The public repository includes the application, setup instructions, and tests; its reported coverage was not independently reproduced for this case study.",
    limitations: [
      "A reference application, not a complete multi-tenant authorization system. Per-user row and column permissions need further work.",
      "No dedicated frontend or multi-turn conversation interface is included.",
      "Read-only and query-budget controls reduce specific risks; they do not make arbitrary database access inherently safe.",
    ],
    nextSteps:
      "Add user-scoped authorization, audit logging, and evaluation against representative databases before a production rollout.",
    sourcePaths: [
      "src/mcp_data_analyst/security/sql_validator.py",
      "src/mcp_data_analyst/services/query_service.py",
    ],
  },
  {
    slug: "qr-payment-verification",
    title: "QR Payment Verification",
    category: "Document AI · full stack",
    summary:
      "A receipt-review workflow combining Gemini extraction, duplicate detection, weighted risk signals, and an administrative review interface.",
    kind: "Personal project",
    status: "Implemented application; deployment documented",
    featured: true,
    repo: "qr-payment-verification-system",
    stack: ["JavaScript", "React", "Express", "MongoDB", "Gemini", "Nginx"],
    problem:
      "Reviewing uploaded payment receipts requires more than reading an amount. Reused images, repeated transaction references, and inconsistent details can all warrant closer inspection.",
    audience:
      "Teams evaluating an assisted receipt-review workflow with a human reviewing the result.",
    approach: [
      "An upload endpoint returns a processing response while an in-process background task performs analysis. The frontend polls for completion.",
      "A file hash identifies exact duplicates before another model call. Perceptual hashing, metadata checks, and Gemini extraction provide additional signals.",
      "Business rules reconcile extracted amounts, timestamps, transaction IDs, and references. A risk-scoring service combines the signals into a reviewable result.",
      "A React admin interface provides filters, record details, and review actions. Nginx and PM2 deployment instructions document the hosting setup.",
    ],
    features: [
      "Asynchronous upload status",
      "Exact and perceptual duplicate checks",
      "Receipt extraction and weighted risk scoring",
      "Admin review and filtering",
    ],
    outcome:
      "Implements receipt intake, analysis, persistence, and review in one application. The repository documents an EC2 deployment; no current public demo is asserted here.",
    limitations: [
      "An image and its extracted text cannot establish bank settlement or prove that a payment is genuine.",
      "The in-process background work is not a durable queue and can be interrupted by a server restart.",
      "Authentication and access controls for the admin workflow need hardening before exposing a deployment.",
    ],
    nextSteps:
      "Add authenticated administration, durable background jobs, and reconciliation with a trusted payment source.",
    sourcePaths: [
      "backend/src/controllers/uploadController.js",
      "backend/src/services/riskScoringService.js",
    ],
  },
  {
    slug: "context-window-compressor",
    title: "Context Window Compressor",
    category: "LLM infrastructure",
    summary:
      "An experimental conversation-memory system that retains recent messages, compresses older exchanges, and rebuilds a bounded prompt context.",
    kind: "Personal project",
    status: "Working experimental prototype",
    featured: true,
    repo: "Context-Window-Compressor",
    stack: ["Python", "Gemini", "Gradio"],
    problem:
      "Long conversations exceed model context limits. Keeping every message increases prompt size, while dropping old messages can remove useful context.",
    audience:
      "Developers experimenting with the tradeoffs between prompt size and conversation recall.",
    approach: [
      "A memory store separates recent messages, compressed chunks, extracted facts, and archived content into tiers.",
      "The compressor asks Gemini for summaries and fact extraction. Older material moves through the tiers as the conversation grows.",
      "The context builder assembles retained material for the next prompt. Token accounting uses a character-based estimate rather than a model-specific tokenizer.",
      "Rate limiting, retries, and fallback handling address external API failures; the Gradio interface exposes the workflow for exploration.",
    ],
    features: [
      "Tiered conversation memory",
      "Summary and fact extraction",
      "Context reconstruction",
      "Interactive Gradio demonstration",
    ],
    outcome:
      "Demonstrates conversation compression and context rebuilding. Its value is the inspectable memory workflow, not a guarantee of unlimited recall or a universal compression ratio.",
    limitations: [
      "Summarization is lossy: important details can be omitted or changed.",
      "The memory store is in process and does not provide durable persistence.",
      "Token counts are estimates, and model/API limits still apply.",
    ],
    nextSteps:
      "Evaluate recall on a repeatable conversation dataset, use the target model’s tokenizer, and add persistent storage.",
    sourcePaths: ["compressor.py", "memory_store.py", "context_builder.py"],
  },
  {
    slug: "snaptex",
    title: "SnapTeX",
    category: "Document processing · AI",
    summary:
      "A Streamlit workflow that turns document pages into editable LaTeX with Gemini and optionally compiles the result into a PDF.",
    kind: "Personal project",
    status: "Implemented document-conversion tool",
    featured: true,
    repo: "SnapTeX",
    stack: ["Python", "Streamlit", "Gemini", "Pillow", "Poppler", "LaTeX"],
    problem:
      "Moving handwritten or scanned mathematical material into an editable document involves transcription, equation formatting, and page ordering.",
    audience:
      "Students and technical writers preparing editable drafts from document images or PDFs.",
    approach: [
      "A conversion facade coordinates input processing, model transcription, and document output through separate services.",
      "PDF pages are rendered as images. A bounded thread pool processes pages concurrently, with staggered submissions to the model service.",
      "Results are sorted by page number after concurrent completion to preserve the source document’s order.",
      "Session-specific output directories separate generated files. Compilation is optional: a compilation failure can still leave editable LaTeX source available.",
    ],
    features: [
      "Image and PDF input",
      "Page-level parallel processing",
      "Editable LaTeX output",
      "Optional PDF compilation and downloads",
    ],
    outcome:
      "Connects document input, page transcription, ordered assembly, and export in a usable interface. The source handles optional compilation errors rather than treating every model output as valid LaTeX.",
    limitations: [
      "Equations and transcription need human review; model output can be incorrect.",
      "Gemini credentials, Poppler, and a suitable LaTeX installation are required for the corresponding features.",
      "Throughput depends on document size, API limits, and the local runtime.",
    ],
    nextSteps:
      "Add document-level regression fixtures and clearer feedback for transcription and compilation errors.",
    sourcePaths: ["facade/converter_facade.py", "services/latex_compiler.py"],
  },
  {
    slug: "automated-color-grading",
    title: "Automated Color Grading",
    category: "Computer vision · imaging",
    summary:
      "A command-line image-processing tool that transfers a reference image’s color characteristics using LAB-space statistics.",
    kind: "Personal project",
    status: "Core transfer pipeline implemented",
    featured: true,
    repo: "automated-color-grading",
    stack: ["Python", "OpenCV", "NumPy", "Pillow"],
    problem:
      "Applying a reference look to a group of photos manually is repetitive. A deterministic color-transfer pipeline offers a reproducible starting point.",
    audience:
      "Developers and photographers exploring reference-based image processing from the command line.",
    approach: [
      "The pipeline reads a reference and target images, converts their color representation to LAB, and computes channel statistics.",
      "Luminance adjustment combines a mean shift with an adaptive factor for bright regions. Standard-deviation normalization changes the tonal spread.",
      "Chrominance scaling blends in the target’s original variation, then clips processed values to the valid range before output.",
      "The CLI writes processed files into an output directory, making the transformation repeatable across a batch.",
    ],
    features: [
      "Reference-based LAB transfer",
      "Luminance and chrominance adjustments",
      "Batch-oriented CLI",
      "Committed source, target, and processed examples",
    ],
    outcome:
      "The core color-transfer implementation and an example output are present in the public repository. This is an algorithmic image-processing tool, with no trained generative model.",
    limitations: [
      "Global color statistics do not understand faces, objects, or scene semantics.",
      "Clipping and mismatched reference scenes can produce unwanted color or tonal changes.",
    ],
    nextSteps:
      "Add image regression tests and optional masks or strength controls for more selective adjustments.",
    sourcePaths: ["color_transfer.py", "output/processed_target_city.jpg"],
  },
  {
    slug: "distributed-data-systems",
    title: "Distributed Data Systems",
    category: "Data engineering · cloud",
    summary:
      "Educational Hadoop, Spark, and satellite-telemetry exercises covering cluster setup, streaming jobs, RDD operations, and benchmark scripts.",
    kind: "Educational project",
    status: "Coursework and reproducible lab material",
    featured: true,
    repo: "hadoop-aws-distributed-cluster",
    relatedRepos: [
      "satellite-telemetry-hadoop-analytics",
      "hadoop-spark-rdd-exploration",
    ],
    stack: ["Python", "Hadoop", "HDFS", "YARN", "PySpark", "AWS EC2"],
    problem:
      "Distributed processing is easier to understand by configuring a cluster, running jobs, and inspecting how partitions and job settings affect execution.",
    audience:
      "Students and developers learning Hadoop deployment and distributed data-processing fundamentals.",
    approach: [
      "The cluster repository documents single-node setup followed by a two-node EC2 configuration, including SSH, HDFS, and YARN. Python streaming scripts demonstrate aggregation.",
      "The Spark exploration uses small RDD examples to inspect partitions, transformations, filtering, unions, and repartitioning.",
      "The satellite-telemetry repository adds CSV-oriented analysis and MapReduce benchmark scripts. Its Q9 script varies mapper and reducer counts across sixteen configurations.",
      "The three repositories are linked separately so setup exercises, Spark examples, and telemetry experiments retain their original context.",
    ],
    features: [
      "Single-node and two-node setup guides",
      "Python Hadoop Streaming examples",
      "Inspectable Spark RDD transformations",
      "Telemetry analysis and benchmark scripts",
    ],
    outcome:
      "Provides documented labs and committed code for configuring and exercising a data-processing environment. The telemetry measurements describe the repository’s sample environment, not production-scale capacity.",
    limitations: [
      "Educational cluster and sample-data exercises do not establish production reliability or scale.",
      "Benchmark results depend on the supplied data and environment and were not rerun for this case study.",
    ],
    nextSteps:
      "Add infrastructure automation and a pinned benchmark environment before making cross-machine performance comparisons.",
    sourcePaths: ["scripts/mapper.py"],
  },
  {
    slug: "crisis-intelligence",
    title: "Crisis Intelligence",
    category: "Machine learning · decision support",
    summary:
      "An educational text-classification and search application exploring crisis-message categories and heuristic resource-allocation strategies.",
    kind: "Educational project",
    status: "Implemented coursework prototype",
    repo: "crisis-intelligence-decision-support",
    stack: ["Python", "Flask", "scikit-learn", "TensorFlow", "TF-IDF"],
    problem:
      "A large collection of crisis-related messages is difficult to inspect manually. Classification and search can help explore categories and compare prioritization strategies.",
    audience:
      "Students studying applied classification and search algorithms on crisis-text datasets.",
    approach: [
      "The classifier uses TF-IDF features and compares logistic regression with a neural-network model across five message categories.",
      "A saved accuracy report records 104,052 cleaned samples split into training and test sets, rather than treating every referenced dataset row as training data.",
      "A Flask interface connects prediction and exploration. The search module implements greedy and A*-style selection over heuristic impact scores.",
      "Classifier measurements and allocation heuristics are separate: a generated impact score is not a measured real-world benefit.",
    ],
    features: [
      "Five-category message classification",
      "Saved model evaluation report",
      "Search and allocation experiments",
      "Flask interface",
    ],
    outcome:
      "The repository’s saved report records 71.30% held-out test accuracy for logistic regression on 20,811 test samples and 67.26% mean cross-validation accuracy. These are repository-reported results, not an independently rerun evaluation.",
    limitations: [
      "Class imbalance and weak minority-class recall limit how headline accuracy should be interpreted.",
      "Resource-allocation scores are heuristic and not operational evidence for emergency decisions.",
      "This is an educational prototype, not a validated emergency-response system.",
    ],
    nextSteps:
      "Evaluate per-class recall, improve imbalance handling, and validate the task with domain expertise before operational use.",
    sourcePaths: [
      "models/accuracy_report.json",
      "predict.py",
      "search_module.py",
    ],
  },
  {
    slug: "eventora-planner",
    title: "Eventora Planner",
    category: "Mobile · AI interaction",
    summary:
      "A Flutter event planner with calendar views, reminders, Firebase-backed accounts, and Gemini-assisted natural-language event entry.",
    kind: "Educational project",
    status: "Implemented HCI course project",
    repo: "eventora-planner",
    stack: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Firestore",
      "Provider",
      "Gemini",
    ],
    problem:
      "Creating an event often means translating a plain-language plan into several form fields. A planner can combine conventional editing with an assisted entry flow.",
    audience:
      "Individuals organizing events and students exploring human-computer interaction in a mobile app.",
    approach: [
      "Flutter screens and Provider-managed state connect event creation, editing, filtering, calendar navigation, and theme preferences.",
      "The storage service uses user-scoped Firestore paths for signed-in users and a local fallback for offline or local use.",
      "A Gemini parsing service turns a description into structured event details, validates date and time fields, and rejects past events.",
      "Authentication, cloud storage, and reminders have platform-specific setup requirements documented in the repository.",
    ],
    features: [
      "Event creation, editing, and deletion",
      "Calendar views and filters",
      "Firebase account and cloud storage integration",
      "AI-assisted event entry and reminders",
    ],
    outcome:
      "Implements an educational planning workflow with manual and AI-assisted input. The public code demonstrates the integrations; no app-store release or paid-user adoption is claimed.",
    limitations: [
      "Firebase configuration, access rules, and platform permissions require deployment-specific verification.",
      "Local fallback identity keys are not a substitute for authenticated server-side authorization.",
      "Model-parsed event details should be reviewed by the user.",
    ],
    nextSteps:
      "Verify Firestore access rules, strengthen offline synchronization, and test reminders on each supported platform.",
    sourcePaths: [
      "lib/services/event_storage_service.dart",
      "lib/services/gemini_event_parser_service.dart",
    ],
  },
];

// Already-public portfolio history; separate from the source-backed case studies.
export const clientWork = [
  ...clientCaseStudies.map((study) => ({
    title: study.shortTitle,
    context: study.clientContext,
    summary: study.summary,
    href: `/client-work/${study.slug}`,
  })),
  {
    title: "Purchase-order automation",
    context: "Gohar Textile Mills",
    summary:
      "Document parsing and Python automation supporting purchase-order data entry.",
  },
  {
    title: "Sales forecasting",
    context: "Gohar Textile Mills",
    summary:
      "Time-series backtesting, model comparison, and a Streamlit dashboard for sales projections.",
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
export const repoUrl = (repo: Repo) => `https://github.com/BoltTaha/${repo}`;
export const sourceUrl = (repo: Repo, path = "README.md") =>
  `${repoUrl(repo)}/blob/${evidence[repo]}/${path}`;
