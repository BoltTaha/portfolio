from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    PageTemplate,
    Paragraph,
    Spacer,
)


OUTPUT = "public/resume.pdf"
PAGE_WIDTH, PAGE_HEIGHT = letter
MARGIN = 0.58 * inch

pdfmetrics.registerFont(
    TTFont("ResumeSans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
)
pdfmetrics.registerFont(
    TTFont("ResumeSansBold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")
)
pdfmetrics.registerFont(
    TTFont("ResumeSansItalic", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf")
)


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Name",
        parent=styles["Title"],
        fontName="ResumeSansBold",
        fontSize=22,
        leading=25,
        alignment=1,
        spaceAfter=5,
        textColor=colors.HexColor("#1E1A14"),
    )
)
styles.add(
    ParagraphStyle(
        name="Contact",
        parent=styles["Normal"],
        fontName="ResumeSans",
        fontSize=8.8,
        leading=11,
        alignment=1,
        textColor=colors.HexColor("#333027"),
    )
)
styles.add(
    ParagraphStyle(
        name="Section",
        parent=styles["Heading2"],
        fontName="ResumeSansBold",
        fontSize=11.5,
        leading=14,
        spaceBefore=8,
        spaceAfter=3,
        textColor=colors.HexColor("#1E1A14"),
    )
)
styles.add(
    ParagraphStyle(
        name="Body",
        parent=styles["BodyText"],
        fontName="ResumeSans",
        fontSize=8.6,
        leading=10.7,
        spaceAfter=3,
        textColor=colors.HexColor("#1E1A14"),
    )
)
styles.add(
    ParagraphStyle(
        name="Small",
        parent=styles["BodyText"],
        fontName="ResumeSans",
        fontSize=8.1,
        leading=10,
        spaceAfter=2.5,
        textColor=colors.HexColor("#1E1A14"),
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        parent=styles["BodyText"],
        fontName="ResumeSansBold",
        fontSize=9,
        leading=10.5,
        spaceBefore=3.5,
        spaceAfter=1,
        textColor=colors.HexColor("#1E1A14"),
    )
)
styles.add(
    ParagraphStyle(
        name="Meta",
        parent=styles["BodyText"],
        fontName="ResumeSansItalic",
        fontSize=8.2,
        leading=10,
        spaceAfter=2,
        textColor=colors.HexColor("#4F493E"),
    )
)


def hr(width=PAGE_WIDTH - 2 * MARGIN):
    return HRFlowable(
        width=width,
        thickness=0.6,
        color=colors.HexColor("#1E1A14"),
        spaceBefore=0,
        spaceAfter=2,
    )


def section(title):
    return [Paragraph(title, styles["Section"]), hr(), Spacer(1, 2)]


def bullet(text):
    return Paragraph(f"&bull; {text}", styles["Small"])


def role(title, meta, bullets):
    flow = [Paragraph(title, styles["Role"]), Paragraph(meta, styles["Meta"])]
    flow.extend(bullet(item) for item in bullets)
    return flow


def project(title, tech, bullets):
    flow = [
        Paragraph(f"<b>{title}</b> &nbsp; <font color='#4F493E'>{tech}</font>", styles["Role"])
    ]
    flow.extend(Paragraph(item, styles["Small"]) for item in bullets)
    return flow


doc = BaseDocTemplate(
    OUTPUT,
    pagesize=letter,
    leftMargin=MARGIN,
    rightMargin=MARGIN,
    topMargin=0.42 * inch,
    bottomMargin=0.42 * inch,
)
frame = Frame(
    doc.leftMargin,
    doc.bottomMargin,
    doc.width,
    doc.height,
    leftPadding=0,
    bottomPadding=0,
    rightPadding=0,
    topPadding=0,
)
doc.addPageTemplates([PageTemplate(id="normal", frames=[frame])])

story = [
    Paragraph("Muhammad Taha", styles["Name"]),
    Paragraph(
        "AI Engineer | Computer Vision, OCR, LLM/RAG, Backend Automation<br/>"
        "bolt.taha.work@gmail.com | linkedin.com/in/bolttaha | github.com/BoltTaha | muhammadtaha.app",
        styles["Contact"],
    ),
    Spacer(1, 8),
]

story += section("Summary")
story.append(
    Paragraph(
        "AI engineer building production-oriented systems for video understanding, document processing, LLM workflows, and backend automation. I focus on the engineering that makes AI useful after the demo: data quality, evaluation, failure modes, interfaces, deployment, logging, and repeatable operations.",
        styles["Body"],
    )
)
story.append(
    Paragraph(
        "Recent work includes a basketball made-basket clip finder for a US sports client, a document preprocessing pipeline for scanned county records, LLM/RAG systems, guarded data-analysis tools, and full-stack review workflows.",
        styles["Body"],
    )
)

story += section("Professional Experience")
story += role(
    "Basketball Video Analysis System - Freelance AI Engineer",
    "Client project | Mar 2026 - Aug 2026",
    [
        "Built a computer-vision workflow that scans basketball game footage and exports made-basket highlight clips with timestamped 20-second windows.",
        "Combined hoop/ball detection, trajectory checks, and a verification stage to reduce false positives while keeping recall high for real makes.",
        "Delivered a dashboard workflow with queue handling, time-range selection, live logs, Windows launch scripts, and a false-positive review panel for fast client cleanup.",
        "Received public 5.0 client feedback for speed, flexibility, and quality of work.",
    ],
)
story += role(
    "Document OCR Preprocessing Pipeline - Client AI Engineer",
    "US records-processing environment | Active client work",
    [
        "Built a Python/OpenCV preprocessing pipeline for scanned county property records, preserving Year/Month/Date folder structure and multi-page TIFF page order.",
        "Implemented orientation correction, deskewing, artifact cleanup, denoising, illumination normalization, contrast improvement, and adaptive thresholding.",
        "Added configuration profiles, resumable execution, failure tracking, runtime logs, worker controls, and Windows operations documentation for approved client infrastructure.",
    ],
)
story += role(
    "Gohar Textile Mills Pvt Ltd. - AI Engineer Intern",
    "Faisalabad | Jun 2026 - Aug 2026",
    [
        "Built local AI and data workflows around SAP production logs, sales matrices, and executive reporting needs.",
        "Developed Python automation pipelines for shift operations, document handling, and data-entry reduction.",
        "Implemented sales forecasting and backtesting workflows using SAP OData, XGBoost, Prophet, seasonal baselines, MAPE scoring, and Streamlit dashboards.",
    ],
)
story += role(
    "AWS Cloud Club FAST-NUCES - Co-Lead, Development & Projects",
    "Peshawar | Oct 2025 - Present",
    [
        "Helped lead cloud-focused student projects, workshops, and mentoring around AWS architecture, deployment, and production habits.",
        "Guided teams on EC2, Lambda, serverless workflows, CI/CD, and practical project delivery.",
    ],
)

story += section("Selected Projects")
story += project(
    "MCP Data Analyst",
    "Python, FastAPI, PostgreSQL, MCP, Docker",
    [
        "Built a guarded PostgreSQL analysis service exposing query, statistics, and chart workflows through MCP tools and REST endpoints.",
        "Used SQL AST validation, read-only transactions, statement timeouts, row limits, and query-cost controls around generated SQL.",
    ],
)
story += project(
    "Rabt / Context Optimization",
    "Python, AST parsing, NetworkX, Gemini",
    [
        "Built graph-based code-context tooling that extracts smaller relevant subgraphs for code-aware LLM workflows.",
        "Focused on context reduction, dependency understanding, and inspectable memory/context construction.",
    ],
)
story += project(
    "QR Payment Verification",
    "React, Express, MongoDB, Gemini Vision",
    [
        "Built a receipt-review workflow with OCR extraction, duplicate detection, weighted risk signals, async upload status, and an admin review interface.",
    ],
)
story += project(
    "SnapTeX",
    "Python, Streamlit, Gemini, LaTeX",
    [
        "Built a document conversion workflow that turns images and PDFs into editable LaTeX, with page-level parallel processing and optional PDF compilation.",
    ],
)

story += section("Education")
story += role(
    "Bachelor of Science, Computer Science",
    "National University of Computer and Emerging Sciences (FAST-NUCES) | Aug 2023 - Aug 2027 expected",
    [
        "Relevant coursework: machine learning, data structures and algorithms, advanced databases, compiler construction, operating systems, and computer networks.",
    ],
)

story += section("Core Skills")
story.append(
    Paragraph(
        "<b>AI engineering:</b> computer vision, OCR/document AI, LLM applications, RAG, MCP integrations, prompt engineering, evaluation, failure analysis, and human-in-the-loop workflows.",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "<b>Backend and data:</b> Python, FastAPI, Flask, REST APIs, PostgreSQL, SQL, MongoDB, Pandas, NumPy, Parquet, data pipelines, validation, and audit-friendly processing.",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "<b>Computer vision:</b> OpenCV, YOLOv8, EfficientNet, image preprocessing, object detection, video analysis, OCR readiness, perceptual hashing, and risk scoring.",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "<b>Product delivery:</b> dashboards, client workflows, Docker, Git, Linux, Windows operations, FFmpeg, AWS EC2, Firebase, CI/CD, logging, resumable jobs, and deployment documentation.",
        styles["Small"],
    )
)
story.append(
    Paragraph(
        "<b>Frontend and apps:</b> React, Next.js, TypeScript, JavaScript, Streamlit, Flutter, Dart, Firebase Auth, and Firestore.",
        styles["Small"],
    )
)

story += section("How I Work")
story.append(
    Paragraph(
        "I do not start with a model choice. I start with the workflow, data quality, constraints, review process, and failure cost. Then I choose the simplest system that can reliably solve the problem: deterministic processing, computer vision, RAG, LLM tooling, or a hybrid.",
        styles["Body"],
    )
)
story.append(
    Paragraph(
        "I care about production details that make clients trust the system: clear setup, repeatable runs, logs, resume behavior, safe defaults, review screens, documented limitations, and maintainable code.",
        styles["Body"],
    )
)

story += section("Certifications")
story.append(
    Paragraph(
        "Model Context Protocol | AI Fluency: Framework & Foundations | Google Cybersecurity | Claude Code in Action",
        styles["Small"],
    )
)

doc.build(story)
print(OUTPUT)
