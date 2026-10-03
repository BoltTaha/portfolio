export interface DiscoveryLink {
  label: string;
  href: string;
  kind: "Service" | "Technical insight" | "Case study";
}

export const projectDiscovery: Record<string, DiscoveryLink[]> = {
  "autonomous-driving-edge-perception": [
    {
      kind: "Service",
      label: "Computer Vision and Edge AI engineering",
      href: "/services/computer-vision-engineer",
    },
  ],
  "local-document-deid": [
    {
      kind: "Service",
      label: "Local document de-identification development",
      href: "/services/local-document-deidentification",
    },
    {
      kind: "Technical insight",
      label: "Preparing scanned archives for Document AI",
      href: "/insights/scanned-document-preprocessing-pipeline",
    },
  ],
  "rabt-codebase-graphrag": [
    {
      kind: "Service",
      label: "RAG and knowledge-system engineering",
      href: "/services/rag-ai-engineer",
    },
    {
      kind: "Technical insight",
      label: "Giving coding agents smaller, relevant context",
      href: "/insights/codebase-context-graph-for-llm-agents",
    },
  ],
  "mcp-data-analyst": [
    {
      kind: "Service",
      label: "Text-to-SQL and FastAPI engineering",
      href: "/services/text-to-sql-fastapi",
    },
    {
      kind: "Technical insight",
      label: "Building a safe Text-to-SQL system",
      href: "/insights/safe-text-to-sql-ai-system",
    },
  ],
  "qr-payment-verification": [
    {
      kind: "Service",
      label: "AI agents and workflow automation",
      href: "/services/ai-agent-developer",
    },
    {
      kind: "Technical insight",
      label: "Building an AI-assisted payment-receipt review workflow",
      href: "/insights/payment-receipt-verification-workflow",
    },
  ],
  "context-window-compressor": [
    {
      kind: "Service",
      label: "RAG and knowledge-system engineering",
      href: "/services/rag-ai-engineer",
    },
    {
      kind: "Technical insight",
      label: "Giving coding agents smaller, relevant context",
      href: "/insights/codebase-context-graph-for-llm-agents",
    },
  ],
  snaptex: [
    {
      kind: "Service",
      label: "Document AI engineering",
      href: "/services/document-ai-engineer",
    },
    {
      kind: "Technical insight",
      label: "Preparing large scanned archives for Document AI",
      href: "/insights/scanned-document-preprocessing-pipeline",
    },
  ],
  "automated-color-grading": [
    {
      kind: "Service",
      label: "Computer Vision and image-processing engineering",
      href: "/services/computer-vision-engineer",
    },
  ],
  "distributed-data-systems": [
    {
      kind: "Case study",
      label: "MCP Data Analyst backend and data workflow",
      href: "/projects/mcp-data-analyst",
    },
  ],
  "crisis-intelligence": [
    {
      kind: "Service",
      label: "AI agents and workflow automation",
      href: "/services/ai-agent-developer",
    },
  ],
  "eventora-planner": [
    {
      kind: "Service",
      label: "AI agents and workflow automation",
      href: "/services/ai-agent-developer",
    },
    {
      kind: "Technical insight",
      label: "Building an AI-assisted Flutter and Firebase app",
      href: "/insights/ai-assisted-flutter-firebase-app",
    },
  ],
};

export const clientWorkDiscovery: Record<string, DiscoveryLink[]> = {
  "basketball-clip-finder": [
    {
      kind: "Service",
      label: "Computer Vision and Edge AI engineering",
      href: "/services/computer-vision-engineer",
    },
    {
      kind: "Technical insight",
      label: "How to build a basketball highlight detector",
      href: "/insights/basketball-highlight-detection",
    },
  ],
  "document-ocr-preprocessing-pipeline": [
    {
      kind: "Service",
      label: "Document AI engineering",
      href: "/services/document-ai-engineer",
    },
    {
      kind: "Technical insight",
      label: "How to prepare large scanned archives for Document AI",
      href: "/insights/scanned-document-preprocessing-pipeline",
    },
  ],
};
