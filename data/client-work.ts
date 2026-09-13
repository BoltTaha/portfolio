export interface ClientCaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  clientContext: string;
  summary: string;
  directAnswer: string;
  dateRange: string;
  commercialEvidence: string;
  stack: string[];
  problem: string;
  constraints: string[];
  implementation: string[];
  outcomes: string[];
  proofPoints: string[];
  limitations: string[];
  searchQuestions: string[];
}

export const clientCaseStudies: ClientCaseStudy[] = [
  {
    slug: "basketball-clip-finder",
    title: "Basketball Clip Finder",
    shortTitle: "Basketball video analysis",
    category: "Computer vision · sports video AI",
    clientContext: "US sports analytics client on Upwork",
    dateRange: "March 31, 2026 - August 14, 2026",
    commercialEvidence:
      "$540 fixed-price engagement with two public 5.0 client reviews on Upwork.",
    summary:
      "A basketball video-analysis system that scans game footage, detects made baskets, and exports 20-second highlight clips around each score.",
    directAnswer:
      "Muhammad Taha built a client-ready basketball clip finder using computer vision, video processing, a dashboard workflow, and false-positive review tools. The system scans game videos, exports made-basket clips with timestamps, and helps coaches review remaining edge cases quickly.",
    stack: [
      "Python",
      "YOLO",
      "EfficientNet",
      "OpenCV",
      "FFmpeg",
      "Dashboard UI",
      "Windows automation",
    ],
    problem:
      "The client needed a practical way to turn long youth basketball game videos into made-basket highlight clips. The footage came from many gyms, camera angles, lighting conditions, and rim styles, so the system had to work beyond a single controlled arena.",
    constraints: [
      "The camera was usually mid-court and followed the ball, but arena, zoom, lighting, rim visibility, and scoreboard availability varied.",
      "A missed real basket was more damaging to the client workflow than a small number of extra clips.",
      "Rim-outs, pass-bys, blocked views, glare, and motion blur made perfect automation unrealistic.",
      "The client needed a non-technical workflow rather than a command-line-only tool.",
    ],
    implementation: [
      "Built a two-model detection workflow for hoop/rim and basketball localization, then added made-basket decision logic around ball trajectory and rim interaction.",
      "Added a second verification gate for ball-in-basket evidence so obvious rim-outs and near misses could be rejected before export.",
      "Exported clips with the requested timing window: 15 seconds before the detected basket and 5 seconds after, with timestamp-based filenames.",
      "Built a dashboard flow with queue handling, all-video processing, shared time ranges, per-video time ranges, live logs, and saved run history.",
      "Added a false-positive review panel where the client can scan output folders, preview many clips in a grid, zoom on the hoop, and move bad clips to a False_Positive folder with one click.",
      "Prepared Windows launch scripts and setup notes so the client could run the system with a simpler local workflow.",
    ],
    outcomes: [
      "Turned long basketball footage into timestamped made-basket clips for review.",
      "Reduced manual clip hunting by shifting the workflow from full-game review to AI-generated clips plus fast false-positive cleanup.",
      "Delivered a client-facing dashboard and review workflow beyond the original script requirement.",
      "Received two public 5.0 Upwork reviews from the client for speed, flexibility, and quality of work.",
    ],
    proofPoints: [
      "Client review, June 24, 2026: 'Would always be willing to hire this freelancer. He is so great, quick and hard working.'",
      "Client review, April 21, 2026: 'Muhammad was great. Fast, very smart and flexible. Would love to keep working with him on upgrades.'",
      "Project documentation covers dashboard use, false-positive review, timing modes, FFmpeg export, timestamp naming, GPU/CPU selection, and Windows setup.",
    ],
    limitations: [
      "No basketball AI system can guarantee 100% accuracy across every gym, camera setup, rim-out, occlusion, and lighting condition.",
      "The product intentionally favors recall first, then uses fast false-positive review to clean remaining edge cases.",
      "Jersey-number or team identification was left as a possible future enhancement rather than presented as completed.",
    ],
    searchQuestions: [
      "Who can build a basketball video analysis script?",
      "Who builds computer vision systems for sports highlights?",
      "Which AI engineer can detect made baskets from game footage?",
    ],
  },
  {
    slug: "document-ocr-preprocessing-pipeline",
    title: "Dallas County OCR Preprocessing Pipeline",
    shortTitle: "Large-scale OCR preprocessing",
    category: "Document AI · OCR preprocessing",
    clientContext: "US-based records-processing client environment",
    dateRange: "Active client work",
    commercialEvidence:
      "Private client repository and environment documentation; production data stays inside approved client infrastructure.",
    summary:
      "A production document-preprocessing pipeline for Dallas County property scans that prepares TIFF records for downstream OCR and image review.",
    directAnswer:
      "Muhammad Taha is building a production OCR preprocessing pipeline for a US client. The system processes Dallas County property-scan TIFFs, preserves folder structure, corrects orientation and skew, removes artifacts, reduces noise, normalizes illumination, and writes processed PNG outputs with resumable batch execution.",
    stack: [
      "Python",
      "OpenCV",
      "TIFF processing",
      "Batch pipelines",
      "Azure VM",
      "Task Scheduler",
      "GitHub",
    ],
    problem:
      "The client needed a controlled preprocessing workflow for large collections of scanned county property records, with data remaining on approved client machines and outputs preserving the operational folder structure.",
    constraints: [
      "Client documents must not be processed on personal machines or unapproved infrastructure.",
      "Production data lives on the TFD-Utility environment under E:\\County Data\\Dallas County\\Property and outputs are written to E:\\Processed_Output.",
      "The input structure is organized by Year\\Month\\Date and may contain multi-page TIFF files.",
      "Large unattended batches need resume behavior, failure tracking, and stable scheduler execution.",
    ],
    implementation: [
      "Configured environment access through approved NordVPN Meshnet and Remote Desktop workflows.",
      "Built a configurable pipeline driven by config/pipeline.yaml with profiles for all years, 2025 pilot, 1972, and 2021 batches.",
      "Implemented preprocessing stages for orientation correction, deskewing, artifact cleanup, noise reduction, illumination correction, contrast normalization, and adaptive thresholding.",
      "Preserved input folder structure under the processed-output root and handled multi-page TIFFs page by page with document_p0001-style output naming.",
      "Added resume and failure manifests so long runs can continue safely after interruption.",
      "Documented Windows setup, virtual environment creation, worker counts, Task Scheduler execution, logs, and drive-letter risks.",
    ],
    outcomes: [
      "Gave the client a repeatable image-preprocessing workflow for production county-record scans.",
      "Improved OCR readiness by addressing skew, borders, speckle, shadows, bleed-through, and foreground-background separation.",
      "Created operations documentation so client-side execution can happen on approved infrastructure.",
      "Separated code/configuration from environment-specific storage paths so drive changes can be handled in configuration.",
    ],
    proofPoints: [
      "Documented production paths: E:\\County Data\\Dallas County\\Property and E:\\Processed_Output.",
      "Profiles cover all_years_nas, 2025_pilot_nas, 1972, and 2021 processing modes.",
      "Operational guide documents resume logs, failure TSVs, runtime logs, multi-page TIFF output, and scheduled unattended execution.",
    ],
    limitations: [
      "The work describes preprocessing and OCR readiness; it does not claim perfect OCR accuracy.",
      "Client data and repository access are private, so the public portfolio summarizes architecture and operations without exposing documents.",
      "Drive mappings and scheduler permissions depend on client IT configuration.",
    ],
    searchQuestions: [
      "Who can build an OCR preprocessing pipeline?",
      "Who builds document AI systems for scanned records?",
      "Which AI engineer can process large TIFF archives for OCR?",
    ],
  },
];

export const getClientCaseStudy = (slug: string) =>
  clientCaseStudies.find((study) => study.slug === slug);
