export interface StackChip {
  label: string;
  credentialUrl?: string;
}

export const stackChips: StackChip[] = [
  { label: "Python" },
  { label: "Machine Learning" },
  { label: "Deep Learning" },
  { label: "PyTorch" },
  { label: "YOLO / Computer Vision" },
  { label: "Object Detection & Tracking" },
  { label: "OpenCV" },
  { label: "Image Processing" },
  { label: "LangChain" },
  { label: "Retrieval Augmented Generation" },
  { label: "AI Agent Development" },
  { label: "Model Context Protocol (MCP)" },
  { label: "MCP Server Development" },
  { label: "AI Coding Assistants" },
  { label: "GitHub Automation" },
  { label: "Context Management in AI Tools" },
  { label: "Large Language Model" },
  { label: "Generative AI" },
  { label: "Vector Database" },
  { label: "OpenAI API" },
  { label: "AWS Bedrock (Claude)" },
  { label: "Google Gemini API" },
  { label: "FastAPI" },
  { label: "Next.js" },
  { label: "React" },
  { label: "Tailwind CSS" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
  { label: "SQLite" },
  { label: "Data Engineering" },
  { label: "Data Extraction" },
  { label: "XGBoost & Forecasting" },
  { label: "OCR & Data Parsing" },
  { label: "Streamlit" },
  { label: "FFmpeg & Video Pipelines" },
  { label: "MLOps" },
  { label: "Docker" },
  { label: "Amazon Web Services" },
  { label: "Microsoft Azure" },
  { label: "Hadoop & Spark" },
  { label: "Claude Code · certified" },
  {
    label: "MCP · certified",
    credentialUrl: "https://verify.skilljar.com/c/d2z2kt8cy7by",
  },
  {
    label: "AI Fluency · certified",
    credentialUrl: "https://verify.skilljar.com/c/rkdiw9c6rayz",
  },
  {
    label: "Google Cybersecurity · certified",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/YD9YS4PYVVPE",
  },
];

export interface SignatureStat {
  value: string;
  label: string;
}

export const signatureStats: SignatureStat[] = [
  { value: "12", label: "production & open-source systems" },
  { value: "5.0", label: "Upwork rating" },
  { value: "3", label: "Textile Mills deployments" },
  { value: "4", label: "certifications" },
];

export interface TrustCard {
  value: string;
  label: string;
}

export const trustCards: TrustCard[] = [
  {
    value: "5.0 ★",
    label: "Upwork rating, verified enterprise client history",
  },
  {
    value: "BS CS",
    label: "FAST-NUCES (Class of 2027) · Co-lead, AWS Cloud Club",
  },
  {
    value: "Independent Projects",
    label:
      "Delivering end-to-end infrastructure and automation tools for global clients",
  },
];
