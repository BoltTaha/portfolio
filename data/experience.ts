export interface ExperienceEntry {
  role: string;
  organization: string;
  employmentType?: string;
  dateRange: string;
  duration?: string;
  location: string;
  locationType?: string;
  summary?: string;
  highlights: string[];
  skills?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "AI Engineer Intern",
    organization: "Gohar Textile Mills Pvt Ltd.",
    employmentType: "Internship",
    dateRange: "Jun 2026 – Present",
    duration: "2 mos",
    location: "Faisalabad, Punjab, Pakistan",
    locationType: "On-site",
    highlights: [
      "Architecting and deploying an enterprise-grade, localized RAG-based agentic system to automate and optimize raw SAP production logs and multi-million row sales data matrices.",
      "Engineering end-to-end industrial automation pipelines using Python to completely eliminate manual data entry, streamline shift operations, and bypass operational bottlenecks.",
      "Running open-source large language models (Llama 3) completely offline on an internal corporate server, ensuring zero data leaks and 100% data sovereignty.",
      "Developing high-performance data processing pipelines using Pandas and LangChain to dynamically generate executive summaries and mathematical metric dashboards for the General Manager and Board.",
      "Engineered a purely statistical sales forecasting pipeline extracting multi-year history via SAP OData to predict monthly revenue over a 6-month horizon across company, category, and top customer levels.",
      "Built an automated time-series backtesting framework using XGBoost, Prophet, and Seasonal-Naive models to select the most accurate champion algorithm per segment based on MAPE scoring.",
      "Deployed the final deterministic projections into a Streamlit web dashboard to directly support management with production, cash, and stock planning.",
    ],
  },
  {
    role: "Co-Lead (Development & Projects)",
    organization: "AWS Cloud Club, FAST-NUCES Peshawar",
    dateRange: "Oct 2025 – Present",
    duration: "10 mos",
    location: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
    summary:
      "Collaborate with the core team to plan, manage, and lead cloud-based projects and technical initiatives, strengthening leadership, project management, and technical skills across the AWS ecosystem.",
    highlights: [
      "Overseeing development projects using AWS technologies.",
      "Mentoring students and helping them explore cloud computing.",
      "Coordinating with the core team to organize workshops and hands-on sessions.",
      "Encouraging innovation through real-world AWS project building.",
    ],
    skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
  },
  {
    role: "AI & Fintech Systems Engineer (Contract)",
    organization: "Upwork",
    employmentType: "Freelance",
    dateRange: "Oct 2025 – Dec 2025",
    duration: "3 mos",
    location: "Remote",
    summary:
      "Engineered a production-grade backtesting engine evaluating 1,435+ historical trades with outcome-agnostic strategy evaluation and HRR risk analysis.",
    highlights: [
      "Advanced data architecture: optimized OHLCV data storage using Parquet format across 24K+ files, cutting data query latency by 40% versus standard CSV baselines.",
      "Pipeline automation: built high-throughput data ingestion pipelines using Pandas, NumPy, and live financial APIs to handle real-time asset allocation and automated portfolio optimization logic.",
      "Dashboard deployment: designed and shipped an interactive Streamlit Cloud dashboard featuring live performance metrics and integrated continuous data pipelines for client review.",
    ],
    skills: ["Python", "Data Analysis"],
  },
];
