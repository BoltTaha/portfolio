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
];

export const getInsight = (slug: string) =>
  insights.find((insight) => insight.slug === slug);
