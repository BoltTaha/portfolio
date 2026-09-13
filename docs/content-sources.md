# Content provenance and editorial rules

Reviewed public repositories on 12 September 2026. This update inspected repository documentation and selected implementation files; it did not execute or independently certify every external project. Immutable source revisions are recorded in `data/sources.ts` and used for case-study citations.

## Public projects reviewed

- `BoltTaha/mcp-data-analyst`: README, SQL AST validator, query service, contribution instructions. Shared MCP/REST services, PostgreSQL guards, deterministic statistics, optional narration. Tests and coverage are repository-reported.
- `BoltTaha/qr-payment-verification-system`: README, upload controller, risk-scoring service. Receipt-review signals and an in-process asynchronous pipeline. Deployment is documented; public bank settlement verification and production-ready admin authorization are not established.
- `BoltTaha/Context-Window-Compressor`: README, compressor, memory store, context builder. Lossy hierarchical summaries, in-memory storage, estimated token counts. No infinite-memory or universal compression-ratio claim.
- `BoltTaha/SnapTeX`: README, converter facade, LaTeX compiler. Concurrent page processing, order restoration, session-specific output, optional compilation. Uncurated uploaded document files are not republished.
- `BoltTaha/automated-color-grading`: README, `color_transfer.py`, committed reference/target/output image paths. Core LAB transfer is implemented. Two 960 × 640 WebP derivatives of the committed target and processed output are displayed, with links preserving source provenance.
- `BoltTaha/hadoop-aws-distributed-cluster`: README and streaming mapper. Educational single/two-node setup; mapper groups CSV fields, so it is not described as a word-count implementation.
- `BoltTaha/hadoop-spark-rdd-exploration`: README and `02_PYSPARK_CODE.py`. Educational RDD operations and partition inspection.
- `BoltTaha/satellite-telemetry-hadoop-analytics`: README and `run_q9_benchmark.sh`. Telemetry experiments and parameter sweeps, not an independently rerun production-scale benchmark.
- `BoltTaha/crisis-intelligence-decision-support`: README, `models/accuracy_report.json`, prediction and search modules. Reported 104,052 cleaned samples, 20,811 test samples, 71.30% logistic-regression test accuracy, and 67.26% mean cross-validation accuracy. Heuristic allocation scores are not measured emergency outcomes.
- `BoltTaha/eventora-planner`: README, storage and Gemini parsing services, Firestore rules. Flutter HCI coursework. Cloud rules restrict access to authenticated owner UIDs; deployed rule configuration and cross-account behavior were not independently tested. Local fallback identity does not prove authorization.
- `BoltTaha/BoltTaha`: existing profile README. The profile update uses the same verified public work and avoids unsupported project/client counts, optimization metrics, and stale availability claims.

All selected project repositories were public, owned by BoltTaha, and marked as non-forks when reviewed. Ownership supports attribution as maintainer; it does not prove sole authorship. Educational projects are labeled separately. Selection favored substantial projects relevant to AI, software, and data work over small exercises or unrelated repositories.

## Existing public identity and history

Name, handle, contact email, LinkedIn, Upwork, FAST-NUCES expected class of 2027, AWS Cloud Club role, client summaries, and testimonials come from the pre-existing public portfolio and profile. They are not newly invented or independently verified employment claims. Stale elapsed durations, aggregate rating claims, absolute security promises, and unsupported business-impact metrics were removed. Existing testimonial text and attribution were preserved; no new endorsement was created.

Only credentials with existing public record links are displayed. The unlinked Claude Code credential is omitted pending a record. No availability, rate, remote-work policy, or completion-time promise is inferred.

## Updating content

1. Review a public README and implementation at a known commit.
2. Record the commit and source files; identify coursework, experiments, forks, and collaborations honestly.
3. Explain what is implemented separately from measured outcomes and future plans.
4. Label measurements as repository-reported unless reproduced with the dataset and environment documented.
5. Link current demos only when a public address and working behavior are established.
6. Keep metadata, visible content, case studies, and `llms.txt` consistent by using the shared data files.
7. Preserve client confidentiality. Do not publish private code, internal URLs, uploaded personal documents, or credentials.

A future update can add a short technical write-up for MCP query controls or context-compression evaluation, linked to reproducible examples. Posting such a write-up to external platforms is a separate action.
