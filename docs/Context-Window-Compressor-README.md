# Context Window Compressor

An experimental Python and Gradio application for managing long conversations with hierarchical summaries and extracted facts. It uses Gemini to compress older exchanges and rebuild the context supplied to the next model call.

This is a working proof of concept. Summarization is lossy, model context limits still apply, and memory is stored in process. The tool does not provide infinite memory, lossless compression, or guaranteed recall.

## How it works

1. Keep recent messages in their original form.
2. Group older messages into chunks and ask Gemini for summaries and extracted facts.
3. Consolidate older compressed chunks into an archive summary.
4. Assemble retained recent content, summaries, and facts into the next prompt.
5. Inspect the tiers and estimated token counts in the Gradio interface.

The implementation currently integrates Gemini. Adapters for other model providers and persistent storage are future work.

## Source map

- `app.py`: Gradio interface and conversation loop.
- `compressor.py`: chunking, summarization, and archive orchestration.
- `memory_store.py`: in-process memory tiers.
- `context_builder.py`: prompt reconstruction.
- `fact_extractor.py`: model-assisted fact extraction.
- `token_utils.py`: character-based token estimation.
- `rate_limiter.py`: rate limiting, retries, and fallback handling.
- `config.py`: model names and compression settings.

## Setup

Use Python 3.12 and a Gemini API key with access to the models configured in `config.py`.

```bash
git clone https://github.com/BoltTaha/Context-Window-Compressor.git
cd Context-Window-Compressor
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

On Windows, activate with `.venv\\Scripts\\activate`. Create a local `.env` file containing `GEMINI_API_KEY=your_key_here`; do not commit real credentials. Then run:

```bash
python app.py
```

Open the local address printed by Gradio, normally [127.0.0.1:7860](http://127.0.0.1:7860). API access, quotas, model availability, and charges depend on the provider and account; verify them before a long session.

## Configuration and verification

Review `config.py` for the compression threshold, recent-turn retention, chunk size, summary targets, primary model, and fallback model. The UI’s token figures are estimates based on text length, not counts from a model-specific tokenizer.

A useful manual test is to introduce a fact, continue until compression occurs, inspect the stored summary/facts, and ask the model to recall it. Repeat with dates, corrections, negation, and details that appear only once. A successful example does not establish reliable recall across arbitrary conversations.

The rate limiter and retry path handle some API failures, but cannot eliminate provider limits or guarantee completion. Inspect the error message and model configuration when a call fails.

## Limitations and next steps

- Summaries and extracted facts may omit or alter information. Review important recalled details against original source material.
- In-process memory is lost on restart; durable cross-session storage is not implemented.
- Repeated compression can accumulate information loss.
- Character-based token estimates can differ from the model’s actual token usage.
- The application sends conversation material to Gemini. Use only content appropriate for that service and deployment.
- A recall benchmark, model-specific token accounting, durable storage, and provider adapters would make useful next steps.

## Project context

Maintained under [BoltTaha](https://github.com/BoltTaha). See [Muhammad Taha’s portfolio](https://muhammadtaha.app) for related AI and software projects. This README describes implemented behavior separately from proposed extensions and does not claim a universal context-extension ratio.
