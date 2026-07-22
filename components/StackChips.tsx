"use client";

import { useState } from "react";
import { stackChips } from "@/data/stack";

const DEFAULT_VISIBLE = 15;

export default function StackChips() {
  const [showAll, setShowAll] = useState(false);
  const visibleChips = showAll
    ? stackChips
    : stackChips.slice(0, DEFAULT_VISIBLE);

  return (
    <section id="stack" className="py-[70px] border-b border-line">
      <div className="mb-10">
        <div className="font-mono text-xs tracking-[0.08em] uppercase text-clay-deep mb-[10px]">
          tooling
        </div>
        <h2 className="font-serif text-[32px] font-medium tracking-[-0.01em]">
          Stack &amp; certifications
        </h2>
      </div>
      <div className="flex flex-wrap gap-[10px]">
        {visibleChips.map((chip) =>
          chip.credentialUrl ? (
            <a
              key={chip.label}
              href={chip.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12.5px] text-ink-soft border border-line-strong px-4 py-2 rounded-pill bg-card hover:text-ink hover:border-clay-deep transition-colors"
            >
              {chip.label}
            </a>
          ) : (
            <span
              key={chip.label}
              className="font-mono text-[12.5px] text-ink-soft border border-line-strong px-4 py-2 rounded-pill bg-card"
            >
              {chip.label}
            </span>
          ),
        )}
      </div>

      {stackChips.length > DEFAULT_VISIBLE && (
        <button
          onClick={() => setShowAll((v) => !v)}
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-[12.5px] text-clay-deep hover:text-ink transition-colors"
        >
          {showAll ? "Show less" : `Show all ${stackChips.length} skills`}
          <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
        </button>
      )}
    </section>
  );
}
