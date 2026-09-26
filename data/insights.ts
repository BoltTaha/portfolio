export interface InsightSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Insight {
  slug: string;
  title: string;
  description: string;
  directAnswer: string;
  category: string;
  published: string;
  updated: string;
  readingTime: string;
  keywords: string[];
  sections: InsightSection[];
  questions: { question: string; answer: string }[];
  related: { label: string; href: string }[];
}

export const insights: Insight[] = [
  {
    slug: "basketball-highlight-detection",
    title: "How to Build a Basketball Highlight Detector for Real Game Footage",
    description:
      "A practical architecture for detecting made baskets, reducing false positives, exporting highlight clips, and keeping a human review step for variable game footage.",
    directAnswer:
      "A reliable basketball highlight detector needs more than one object-detection model. It should combine hoop and ball detection with temporal trajectory checks, a second verification stage, timestamped clip export, and a fast review interface for the edge cases that remain.",
    category: "Computer vision · sports video",
    published: "2026-09-26",
    updated: "2026-09-26",
    readingTime: "7 min read",
    keywords: [
      "basketball video analysis",
      "sports highlight detection",
      "YOLO basketball detection",
      "computer vision engineer",
      "made basket detection",
    ],
    sections: [
      {
        heading: "Why real basketball footage is difficult",
        paragraphs: [
          "A model that works on one gym can fail when the camera moves to a new arena. Rim size, lighting, zoom, motion blur, player occlusion, camera shake, and the angle of the backboard all change. A scoreboard is also unreliable for youth games because it may be absent, off-screen, or updated late.",
          "The useful product decision is therefore not simply whether a basketball appears near a hoop in one frame. The system has to decide whether the motion across several frames is consistent with a made basket and whether the evidence is strong enough to export a clip.",
        ],
      },
      {
        heading: "Use a staged decision pipeline",
        paragraphs: [
          "Start with object detection to locate the hoop and ball. Track the ball relative to the hoop region over time, then evaluate direction, entry position, and the sequence of observations. A ball passing beside the rim should not be treated the same way as a ball moving from above the rim to below it.",
          "A second verification stage can examine a tighter visual region around the basket. This stage is useful for rejecting obvious rim-outs, pass-bys, and detections caused by background objects. It should support the temporal evidence rather than replace it with another single-frame guess.",
        ],
        bullets: [
          "Detect the hoop early and maintain a stable region of interest.",
          "Track ball observations across time instead of judging one frame.",
          "Apply geometric and temporal rules around rim entry and exit.",
          "Use a second classifier or verifier for ambiguous events.",
          "Store confidence and event evidence for later review.",
        ],
      },
      {
        heading: "Optimize the workflow, not only model accuracy",
        paragraphs: [
          "In a highlight workflow, missing a real basket may be more expensive than exporting a few extra clips. That changes the operating threshold. The system can favor recall, then give the operator a fast way to remove false positives instead of forcing them to watch the entire game again.",
          "Clip export should also be deterministic. For a detected event, calculate the requested window, seek with FFmpeg, and name the output with the source video and timestamp. A queue, run history, live logs, and selectable time ranges make the system usable by someone who does not work from a terminal.",
        ],
      },
      {
        heading: "Define acceptance criteria before training more models",
        paragraphs: [
          "Measure the workflow on complete games from different arenas. Track real baskets found, baskets missed, extra clips produced, review time, and processing time per hour of footage. These measures reveal whether another model change actually improves the client’s job.",
          "The final system should state its limits clearly. No detector can guarantee perfect results across every obstruction, rim-out, camera angle, and lighting condition. A strong delivery combines useful automation with a review path that makes remaining uncertainty inexpensive.",
        ],
      },
    ],
    questions: [
      {
        question: "Can computer vision automatically create basketball highlight clips?",
        answer:
          "Yes. A system can detect likely made baskets and export clips around each timestamp. Accuracy depends on footage quality and arena variation, so practical systems also include confidence thresholds and a quick false-positive review workflow.",
      },
      {
        question: "Which technologies are useful for made-basket detection?",
        answer:
          "A typical stack combines Python, OpenCV, an object detector such as YOLO, temporal tracking or trajectory rules, an optional image classifier, and FFmpeg for precise video export.",
      },
    ],
    related: [
      {
        label: "Basketball Clip Finder client case study",
        href: "/client-work/basketball-clip-finder",
      },
      {
        label: "Computer vision engineering service",
        href: "/services/computer-vision-engineer",
      },
    ],
  },
  {
    slug: "scanned-document-preprocessing-pipeline",
    title: "How to Prepare Large Scanned Archives for Document AI",
    description:
      "A production-oriented approach to deskewing, artifact cleanup, denoising, illumination correction, TIFF processing, resumable batches, and document-AI readiness.",
    directAnswer:
      "A large scanned archive should be processed with a configurable, resumable pipeline that preserves document and folder identity. Orientation, borders, noise, uneven lighting, contrast, and multi-page TIFF handling should be validated separately before downstream extraction or review.",
    category: "Document AI · image processing",
    published: "2026-09-26",
    updated: "2026-09-26",
    readingTime: "8 min read",
    keywords: [
      "document AI preprocessing",
      "scanned document pipeline",
      "TIFF image processing",
      "OpenCV document processing",
      "large document archive",
    ],
    sections: [
      {
        heading: "Treat preprocessing as a production pipeline",
        paragraphs: [
          "A notebook that improves one sample image is not enough for an archive containing years of scanned records. The system must preserve where every page came from, handle multi-page files, continue after interruption, record failures, and avoid silently dropping content.",
          "Keep environment-specific paths and processing parameters in configuration. Profiles can represent different scan eras or paper conditions without creating separate copies of the application. The same code can then run a pilot year or the complete archive with explicit settings.",
        ],
      },
      {
        heading: "Separate the image-processing stages",
        paragraphs: [
          "Orientation and deskewing should preserve the full page. Artifact cleanup should target borders and scanner debris without erasing marginal text. Denoising should reduce speckle while retaining character strokes. Illumination normalization can mitigate shadows and mild bleed-through before contrast or thresholding is applied.",
          "Keeping these stages separate makes failures easier to diagnose. It also allows older scans to use stronger cleanup while newer scans receive lighter processing. Aggressive thresholding applied to every page can destroy faint text, signatures, stamps, and photographs.",
        ],
        bullets: [
          "Detect orientation and rotate with enough padding to prevent cropping.",
          "Remove borders only after identifying the main page region.",
          "Tune denoising against character preservation, not visual smoothness alone.",
          "Normalize uneven background illumination before global contrast decisions.",
          "Retain stage parameters in named, reviewable configuration profiles.",
        ],
      },
      {
        heading: "Design resumable execution from the beginning",
        paragraphs: [
          "Long batches will be interrupted by machine restarts, storage issues, malformed files, or scheduled maintenance. A processed manifest allows completed inputs to be skipped safely. A failure manifest should record the source path and error without stopping unrelated documents.",
          "Write outputs atomically and preserve the input hierarchy. For multi-page TIFFs, use deterministic page numbers such as document_p0001.png. This makes downstream processing traceable and prevents output-name collisions.",
        ],
      },
      {
        heading: "Validate readiness with representative documents",
        paragraphs: [
          "Image quality should be evaluated on a representative sample from each scan condition. Compare page integrity, readable text, artifacts, processing failures, and downstream extraction results. A visually dramatic transformation is not automatically a better input.",
          "Production documentation matters as much as the algorithm. Record environment setup, worker guidance, storage paths, scheduling assumptions, log locations, resume behavior, and recovery steps so another operator can run the system safely.",
        ],
      },
    ],
    questions: [
      {
        question: "What should a scanned-document preprocessing pipeline correct?",
        answer:
          "Common stages include orientation, deskewing, border cleanup, denoising, illumination normalization, contrast improvement, and carefully tuned thresholding. The correct stages depend on the scan collection and downstream task.",
      },
      {
        question: "How should millions of document pages be processed safely?",
        answer:
          "Use resumable manifests, bounded parallel workers, deterministic output paths, per-document error tracking, append-only operational logs, and representative acceptance tests before scaling the batch.",
      },
    ],
    related: [
      {
        label: "Document preprocessing client case study",
        href: "/client-work/document-ocr-preprocessing-pipeline",
      },
      {
        label: "Document AI engineering service",
        href: "/services/document-ai-engineer",
      },
    ],
  },
  {
    slug: "safe-text-to-sql-ai-system",
    title: "How to Build a Safer Text-to-SQL AI System",
    description:
      "A practical architecture for schema retrieval, SQL syntax-tree validation, read-only execution, query budgets, auditability, and reliable analytics assistants.",
    directAnswer:
      "A safer text-to-SQL system does not send model-generated SQL directly to a database. It retrieves relevant schema context, validates the parsed SQL structure, enforces read-only transactions and resource limits, executes through a controlled service, and records enough evidence for review.",
    category: "LLM systems · data engineering",
    published: "2026-09-26",
    updated: "2026-09-26",
    readingTime: "8 min read",
    keywords: [
      "text to SQL AI",
      "PostgreSQL AI assistant",
      "safe LLM database access",
      "MCP data analyst",
      "FastAPI AI backend",
    ],
    sections: [
      {
        heading: "Generated SQL needs independent controls",
        paragraphs: [
          "A language model can produce valid-looking SQL that reads the wrong table, ignores business definitions, scans too much data, or calls an unsafe function. Prompt instructions help guide generation, but they are not an authorization layer.",
          "The database-facing service should treat model output as untrusted input. Parse the statement into a syntax tree, permit only approved query forms, resolve referenced tables, reject blocked functions, and apply the same checks to nested queries and common table expressions.",
        ],
      },
      {
        heading: "Combine several narrow safeguards",
        paragraphs: [
          "No single safeguard is sufficient. Read-only credentials limit mutation, but an expensive SELECT can still overload a database. A row limit controls response size, but it does not prevent a costly scan. A statement timeout stops long execution, but it does not confirm that the query answers the intended question.",
          "Layered controls reduce different failure modes. They should be enforced by deterministic backend code around the model rather than depending on the model to remember every rule.",
        ],
        bullets: [
          "Use a database identity with the minimum required read permissions.",
          "Validate SQL structure and referenced objects before execution.",
          "Run inside an explicit read-only transaction.",
          "Set statement timeouts, row limits, and query-cost budgets.",
          "Record the question, generated statement, validation result, and execution outcome.",
        ],
      },
      {
        heading: "Retrieve schema and business context deliberately",
        paragraphs: [
          "Large schemas should not be placed in every prompt. Retrieve the relevant tables, relationships, column descriptions, and approved business definitions for the current question. This reduces context size and makes it easier to inspect why a query was generated.",
          "Business vocabulary needs special treatment. Terms such as active customer, fiscal month, recognized revenue, or churn may not map directly to a column name. Store these definitions as governed context and test representative questions against expected query logic.",
        ],
      },
      {
        heading: "Evaluate answers, not only SQL validity",
        paragraphs: [
          "A syntactically valid query can still be wrong. Build an evaluation set containing real question patterns, expected tables, critical filters, time boundaries, and known result checks. Include ambiguous questions that should trigger clarification rather than execution.",
          "Keep deterministic computation separate from language generation. SQL produces the data, tested code calculates statistics, and an optional language-model layer explains the result. This makes the system easier to audit and reduces the number of claims that depend on free-form generation.",
        ],
      },
    ],
    questions: [
      {
        question: "Is read-only database access enough for a text-to-SQL assistant?",
        answer:
          "No. Read-only access prevents many mutations, but costly queries, unauthorized rows, sensitive columns, unsafe functions, and incorrect analysis still require separate validation, authorization, and resource controls.",
      },
      {
        question: "Can the same analytics service support MCP and REST APIs?",
        answer:
          "Yes. MCP tools and REST endpoints can call the same validated service functions so query rules, statistics, logging, and error handling stay consistent across interfaces.",
      },
    ],
    related: [
      {
        label: "MCP Data Analyst technical case study",
        href: "/projects/mcp-data-analyst",
      },
      {
        label: "Text-to-SQL and FastAPI service",
        href: "/services/text-to-sql-fastapi",
      },
    ],
  },
  {
    slug: "codebase-context-graph-for-llm-agents",
    title: "How to Give LLM Coding Agents Smaller, More Relevant Context",
    description:
      "A source-backed guide to AST parsing, dependency graphs, intent routing, minimal subgraphs, and honest evaluation for code-aware LLM systems.",
    directAnswer:
      "A code-aware LLM system can reduce prompt noise by parsing source structure, building a dependency graph, mapping the developer's question to a graph query, and sending only the relevant subgraph to the model. Context reduction must be measured together with answer quality because a smaller prompt is useful only when it preserves the required evidence.",
    category: "LLM infrastructure · code intelligence",
    published: "2026-09-26",
    updated: "2026-09-26",
    readingTime: "8 min read",
    keywords: [
      "LLM code intelligence",
      "codebase context engineering",
      "Graph RAG for code",
      "AST dependency graph",
      "AI coding agent context",
      "repository analysis engineer",
    ],
    sections: [
      {
        heading: "Model the repository as code, not generic text",
        paragraphs: [
          "Generic retrieval often divides a repository into text chunks and ranks them by semantic similarity. That can help with documentation questions, but code questions frequently depend on exact structural relationships: which function calls another, where a symbol is defined, what a method depends on, or which path mutates state.",
          "An AST-aware parser can represent files, functions, classes, imports, definitions, and calls as nodes and edges. The resulting graph gives the retrieval layer explicit relationships to traverse instead of asking an embedding model to infer every connection from nearby text.",
        ],
      },
      {
        heading: "Translate the question into a bounded graph query",
        paragraphs: [
          "A developer question must be mapped to an operation the graph can answer. Deterministic routing works well for known intents such as who calls a function or what a symbol depends on. An optional language-model router can handle natural variations, but its output should be constrained to a small schema and fall back safely when parsing fails.",
          "After routing, traverse only the relationship types and depth needed for that intent. Bound the maximum nodes and traversal depth so cycles and large dependency fans cannot expand into the entire repository. The selected subgraph should remain inspectable before it becomes prompt context.",
        ],
        bullets: [
          "Resolve aliases and imported symbols before building call edges.",
          "Keep direct callers separate from transitive dependency paths.",
          "Use cycle-safe traversal with explicit node and depth limits.",
          "Record why each selected node belongs in the context packet.",
          "Fall back or ask for clarification when the target symbol is ambiguous.",
        ],
      },
      {
        heading: "Measure the economic result without overstating it",
        paragraphs: [
          "Rabt's public evaluation reports 31,661 prompt tokens for full-repository context versus 85 tokens for its minimal subgraph on one query over the Requests library. The same report records an 11-node answer subgraph from a 1,433-node graph for another repository-level view. Those are strong examples of the possible reduction, but they describe specific queries and should not be presented as a universal rate.",
          "A useful benchmark should pair context size with answer correctness, latency, parser coverage, unresolved symbols, and failure cases. Run several question families across repositories of different sizes. Context savings that remove necessary evidence should count as failures rather than wins.",
        ],
      },
      {
        heading: "Turn the graph into a product capability",
        paragraphs: [
          "The commercial value appears when repository analysis becomes a reliable service for coding agents, onboarding tools, change-impact reviews, or CI checks. The graph can be refreshed only when source files change, while runtime traces can add evidence for relationships that static parsing cannot observe directly.",
          "Production work still requires language-specific parsers, repository access controls, tenant isolation, incremental indexing, evaluation against private code conventions, and integration with the editor or agent workflow. The graph is an evidence layer; the surrounding product determines whether teams can trust and operate it.",
        ],
      },
    ],
    questions: [
      {
        question: "How can an AI coding agent use less repository context?",
        answer:
          "Parse the repository into symbols and dependency relationships, classify the question, extract a bounded relevant subgraph, and send that evidence to the model. Evaluate whether the smaller context still produces the correct answer.",
      },
      {
        question: "Is Graph-RAG better than vector search for source code?",
        answer:
          "They solve different retrieval problems. Graph traversal is useful for explicit code relationships such as calls and imports, while vector search can help with semantic descriptions. A production system may combine both and evaluate which evidence each query requires.",
      },
      {
        question: "What can a code dependency graph be used for commercially?",
        answer:
          "Common uses include coding-agent context selection, repository onboarding, dependency exploration, change-impact analysis, code review support, and focused documentation generation.",
      },
    ],
    related: [
      {
        label: "Rabt Codebase Graph-RAG case study",
        href: "/projects/rabt-codebase-graphrag",
      },
      {
        label: "Rabt public testing report",
        href: "https://github.com/BoltTaha/rabt-code-intelligence/blob/8a90e5e4f18ca2ee8ada14e8259cf0bcc2775f2f/docs/TESTING_REPORT.md",
      },
      {
        label: "RAG and knowledge systems service",
        href: "/services/rag-ai-engineer",
      },
    ],
  },
  {
    slug: "payment-receipt-verification-workflow",
    title: "How to Build an AI-Assisted Payment Receipt Review Workflow",
    description:
      "A practical design for receipt intake, duplicate detection, structured extraction, risk signals, asynchronous processing, and human review without claiming that an image proves payment.",
    directAnswer:
      "A payment-receipt review system should treat the uploaded image as evidence for triage, not proof of settlement. Combine exact and perceptual duplicate checks, structured field extraction, deterministic consistency rules, weighted risk signals, asynchronous processing, and an authenticated human-review queue. Confirm payment through a trusted financial source whenever that integration is available.",
    category: "Document AI · risk workflows",
    published: "2026-09-26",
    updated: "2026-09-26",
    readingTime: "7 min read",
    keywords: [
      "payment receipt verification",
      "AI receipt review",
      "duplicate receipt detection",
      "payment fraud workflow",
      "Gemini document extraction",
      "document AI engineer",
    ],
    sections: [
      {
        heading: "Define what the image can and cannot prove",
        paragraphs: [
          "A receipt screenshot can contain an amount, timestamp, sender, recipient, transaction reference, and visual branding. It can also be edited, reused, cropped, recompressed, or generated. Reading the fields accurately does not establish that funds settled in the intended account.",
          "The product should therefore label its output as assisted review or risk triage. If a payment-provider API, bank feed, or internal ledger is available, reconcile the extracted reference and amount against that trusted source before marking the payment as confirmed.",
        ],
      },
      {
        heading: "Layer cheap checks before expensive model calls",
        paragraphs: [
          "Hash the uploaded bytes first to catch exact reuse. A perceptual hash can flag visually similar images that have been resized or recompressed. File type, dimensions, metadata, and previous transaction references add more deterministic signals before a vision model is invoked.",
          "Structured extraction should return a defined schema rather than free-form prose. Validate amounts, dates, identifiers, required fields, and accepted payment providers in application code. Store the extracted values and the evidence behind each rule so a reviewer can understand the result.",
        ],
        bullets: [
          "Reject unsupported files and enforce upload-size limits.",
          "Check exact duplicates before paying for another model request.",
          "Use perceptual similarity as a review signal, not a final verdict.",
          "Validate extracted fields with deterministic business rules.",
          "Keep every risk reason visible to the reviewer.",
        ],
      },
      {
        heading: "Use durable asynchronous processing",
        paragraphs: [
          "Receipt analysis can take longer than a normal request-response cycle. Accept the upload, create a processing record, run analysis in a worker, and let the interface poll or subscribe for completion. This keeps the user interface responsive and makes retries observable.",
          "An in-process background task is suitable for a demonstration but can disappear during a restart. Production systems need a durable queue, idempotent jobs, bounded retries, dead-letter handling, secure object storage, and retention rules for sensitive financial images.",
        ],
      },
      {
        heading: "Optimize for review quality and operational cost",
        paragraphs: [
          "Measure duplicate-detection precision, extraction accuracy per field, false-positive review rate, processing latency, model cost, and the time a reviewer spends on each case. Keep separate thresholds for automatically rejecting malformed uploads and escalating uncertain receipts.",
          "The public QR Payment Verification project demonstrates intake, exact and perceptual duplicate checks, model-assisted extraction, weighted risk scoring, persistence, and an administrative interface. Its strongest commercial path is a controlled review workflow connected to trusted settlement data and hardened authentication.",
        ],
      },
    ],
    questions: [
      {
        question: "Can AI verify that a payment receipt is genuine?",
        answer:
          "AI can extract fields and flag suspicious or repeated images, but an uploaded image alone cannot prove settlement. Reliable confirmation should reconcile the payment with a trusted provider, bank, or internal ledger.",
      },
      {
        question: "How do you detect reused payment receipts?",
        answer:
          "Use a cryptographic file hash for exact duplicates, a perceptual hash for visually similar copies, and database checks for repeated transaction references, amounts, timestamps, or account details.",
      },
      {
        question: "Why process receipt uploads asynchronously?",
        answer:
          "Model extraction and image analysis can be slow or temporarily fail. A durable worker queue makes retries, progress, failures, and resource limits easier to manage without blocking the upload request.",
      },
    ],
    related: [
      {
        label: "QR Payment Verification case study",
        href: "/projects/qr-payment-verification",
      },
      {
        label: "QR Payment Verification public repository",
        href: "https://github.com/BoltTaha/qr-payment-verification-system",
      },
      {
        label: "Document AI engineering service",
        href: "/services/document-ai-engineer",
      },
    ],
  },
  {
    slug: "ai-assisted-flutter-firebase-app",
    title: "How to Build an AI-Assisted Flutter App with Firebase",
    description:
      "A technical guide to structured AI input, user-scoped Firestore data, authentication, local fallbacks, notifications, and reviewable mobile workflows.",
    directAnswer:
      "An AI-assisted Flutter app should keep its normal form and business rules as the source of truth. Use the model to draft structured fields, validate those fields locally, require user review, store data under authenticated user-scoped paths, and preserve a manual fallback when AI or Firebase is unavailable.",
    category: "Mobile engineering · AI integration",
    published: "2026-09-26",
    updated: "2026-09-26",
    readingTime: "7 min read",
    keywords: [
      "Flutter AI app development",
      "Firebase Gemini integration",
      "AI event planner app",
      "Flutter Firebase developer",
      "structured AI mobile workflow",
      "mobile AI engineer",
    ],
    sections: [
      {
        heading: "Use AI to reduce input effort, not control the workflow",
        paragraphs: [
          "Natural-language entry can turn a sentence such as a meeting request into a draft title, date, time, location, and description. The model should return a strict structure that the application parses into the same form used for manual entry.",
          "The user still needs to see and edit every field before saving. Dates and times should be parsed and validated by deterministic code, past events should be rejected or clarified, and a failed AI request should return the user to a fully functional manual form.",
        ],
      },
      {
        heading: "Separate interface, state, and external services",
        paragraphs: [
          "A maintainable Flutter application keeps screens and widgets focused on interaction, providers focused on user and theme state, models focused on domain data, and services focused on authentication, storage, notifications, and AI parsing. This separation keeps Firebase or model changes from spreading through the entire interface.",
          "Eventora follows this layered approach. Its public service layer separates Google authentication, Firestore event storage, Firebase bootstrapping, Gemini event parsing, and local notifications so each integration has a visible boundary.",
        ],
        bullets: [
          "Return structured model output and validate every required field.",
          "Scope cloud records under the authenticated user identifier.",
          "Keep authentication state in one application-level provider.",
          "Schedule and cancel notifications when event data changes.",
          "Show loading, success, and failure states for every asynchronous action.",
        ],
      },
      {
        heading: "Treat Firestore rules as part of the application",
        paragraphs: [
          "A user-scoped path such as users/{uid}/events/{eventId} makes ownership explicit, but the path alone does not enforce access. Firestore security rules must confirm that the authenticated identifier matches the requested user path, and those rules should be tested before deployment.",
          "Local fallback data can keep a demonstration usable when cloud configuration is missing. It should not be described as equivalent to authenticated server-side authorization or reliable cross-device synchronization.",
        ],
      },
      {
        heading: "Prepare the prototype for paid deployment",
        paragraphs: [
          "A client-ready release needs platform-specific Firebase configuration, App Check, tested notification permissions, crash reporting, privacy and retention decisions, offline conflict handling, and release-mode performance checks. AI usage also needs quotas, failure telemetry, model configuration, and cost limits.",
          "The commercial value is the reusable workflow: transform free-form user intent into reviewed structured data while preserving normal mobile controls. The same pattern can support field-service visits, appointment intake, CRM activity, maintenance requests, and other forms that users currently fill manually.",
        ],
      },
    ],
    questions: [
      {
        question: "How should Gemini output be used in a Flutter form?",
        answer:
          "Request a strict structured response, parse it into typed draft fields, validate dates and required values in Dart, show the completed form to the user, and save only after review.",
      },
      {
        question: "How do you isolate each user's Firestore records?",
        answer:
          "Store records below a user-specific path and enforce security rules that compare the authenticated UID with the UID in the requested path. Test the rules with multiple accounts before release.",
      },
      {
        question: "What business apps can use AI-assisted structured entry?",
        answer:
          "The pattern works for scheduling, CRM notes, service requests, inspections, task creation, support intake, expense entry, and other workflows where people translate natural language into structured fields.",
      },
    ],
    related: [
      {
        label: "Eventora Planner case study",
        href: "/projects/eventora-planner",
      },
      {
        label: "Eventora public repository",
        href: "https://github.com/BoltTaha/eventora-planner",
      },
      {
        label: "AI agents and workflow automation service",
        href: "/services/ai-agent-developer",
      },
    ],
  },
];

export const getInsight = (slug: string) =>
  insights.find((insight) => insight.slug === slug);
