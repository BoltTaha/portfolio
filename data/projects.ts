export type ProjectStatus = "production" | "in build" | "research";

export interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  meta: string;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    number: "01",
    category: "computer vision",
    title: "Basketball Highlight Detection",
    description:
      "Built a basketball highlight-detection system for a sports client: scans raw game footage and auto-exports clips of made baskets. Uses a two-stage AI pipeline: a geometry-based detector flags candidate makes, then a dedicated verification model (trained on 13,000+ labeled images) confirms the ball was truly in the net, cutting false positives. Added a review dashboard so staff can scan flagged clips in a grid, loop-play each one, zoom on the hoop, and reject false positives in one click, turning minutes of manual review into seconds. Latest validation: 100% of real makes caught in a 50-clip test batch.",
    meta: "sports client",
    status: "production",
  },
  {
    number: "02",
    category: "enterprise integrations",
    title: "GTM Sales Intelligence Assistant",
    description:
      "Gohar Textile Mills' sales team needed an analyst on call just to answer routine revenue questions. I architected and deployed a hybrid text-to-SQL engine (8 zero-LLM certified query patterns plus a validated Bedrock Sonnet fallback), so staff now get auditable, data-backed answers in plain English in under 500ms, with zero analyst time.",
    meta: "Gohar Textile Mills",
    status: "production",
  },
  {
    number: "03",
    category: "workflow automation",
    title: "Automated Extraction Engine",
    description:
      "Built a custom software tool for Gohar Textile Mills that reads PDF purchase orders and automatically types the data into Excel, eliminating hours of manual data entry from their daily operations.",
    meta: "Gohar Textile Mills",
    status: "production",
  },
  {
    number: "04",
    category: "time series forecasting",
    title: "GTM Sales Forecasting Engine",
    description:
      "Gohar Textile Mills' planners had no visibility into upcoming revenue: production, cash, and stock decisions were made blind. I architected an end-to-end forecasting pipeline: SAP data ingestion, a fiscal-calendar-aware time series engine, and a backtested 3-model competition (XGBoost, Prophet, Seasonal-Naive) that gives planners a rolling 6-month forecast per category and customer, roughly halving forecast error versus a naive baseline.",
    meta: "Gohar Textile Mills",
    status: "production",
  },
  {
    number: "05",
    category: "document processing",
    title: "OCR Preprocessing Pipeline",
    description:
      "Built a production OCR preprocessing pipeline for a US legal records company, cleaning an estimated 20M+ scanned property documents (1962–2026). A custom 5-stage OpenCV pipeline (deskew via Otsu thresholding, artifact/border cleanup, denoising, illumination correction via Gaussian + CLAHE, and adaptive thresholding) separates clean text from noisy scans. Runs as a parallelized, resume-safe batch system on Azure, with per-file manifests so multi-million-document runs recover from interruptions without reprocessing.",
    meta: "legal records client",
    status: "production",
  },
  {
    number: "06",
    category: "fraud detection",
    title: "QR Payment Verification System",
    description:
      "Screenshot-based mobile payments are common but trivial to fake or reuse, and businesses had no reliable way to verify them beyond trusting a photo. Built a full-stack fraud-detection pipeline: Gemini vision extracts transaction details from each screenshot, business rules catch duplicate images, repeat transaction IDs, and payment fingerprints, and a weighted risk engine flags anything suspicious. Deployed to EC2 behind Nginx with PM2 auto-recovery and a live React admin dashboard for review.",
    meta: "open-source",
    status: "production",
  },
  {
    number: "07",
    category: "distributed systems",
    title: "Distributed Big Data Pipeline",
    description:
      "Wanted real infrastructure experience beyond a single-node word-count tutorial. Built a Hadoop 3.3.6 cluster from scratch, first single-node, then a distributed two-node cluster on AWS EC2, then connected Apache Spark 3.5.1 over YARN for RDD and DAG-level analysis, and finally pulled live telemetry from 9 real satellites via the SatNOGS network and ran MapReduce analytics across 56 mapper/reducer configurations to benchmark parallelism on 16,000+ real orbital sensor readings.",
    meta: "self-directed",
    status: "research",
  },
  {
    number: "08",
    category: "decision intelligence",
    title: "Crisis Intelligence Decision Support System",
    description:
      "Built a Flask-based decision-support system that classifies breaking crisis news into 5 categories (disaster, economy, war, tech, general), scores potential impact 0–100, and explains its reasoning by surfacing the most influential words. Trained on 130,000+ real news articles across two Kaggle datasets, with a logistic regression classifier (71.3% accuracy) validated against a neural network, plus a greedy ranker and A* search to find the most dangerous combination of up to 3 simultaneous events.",
    meta: "open-source",
    status: "in build",
  },
  {
    number: "09",
    category: "LLM infrastructure",
    title: "Context Window Compressor",
    description:
      "Every LLM forgets the start of a long conversation once its context window fills up. Built a hierarchical memory system that compresses old turns instead of deleting them: a 3-tier pipeline (raw recent turns, Gemini-summarized chunks, an ultra-compressed archive) keeps key facts alive indefinitely while bounding token usage, with a live inspector panel showing exactly what was kept and why.",
    meta: "open-source",
    status: "in build",
  },
  {
    number: "10",
    category: "image processing",
    title: "Automated Color Grading",
    description:
      "Built a Python tool that statistically transfers a reference photo's color aesthetic onto any target image, no AI model required. Uses LAB color-space statistical transfer (the Reinhard method) with a custom luminance clamp to prevent blown-out highlights and saturation-preserving blending, turning a flat, overcast photo into a warm golden-hour shot in one pass.",
    meta: "open-source",
    status: "in build",
  },
  {
    number: "11",
    category: "generative AI",
    title: "SnapTeX",
    description:
      "Built an AI tool that converts messy handwritten notes, equations, and diagrams into clean, compilable LaTeX and PDF. Unlike plain OCR, it understands context: auto-correcting handwriting mistakes, closing unclosed brackets in equations, and converting hand-drawn flowcharts and UML sketches directly into TikZ code. Bulk-processes an entire 50-page notebook in parallel using multi-threading.",
    meta: "open-source",
    status: "in build",
  },
  {
    number: "12",
    category: "mobile / HCI",
    title: "Eventora Planner",
    description:
      "Built a Flutter event-planning app with Firebase-backed per-user data, Google sign-in, and AI-assisted event creation: describe an event in plain language and Gemini drafts the structured event for you. Designed around core HCI principles (visibility of system status, error prevention, reduced cognitive load) for a university human-computer interaction course.",
    meta: "HCI coursework",
    status: "in build",
  },
];
