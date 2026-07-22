"use client";

import { useState } from "react";
import { experience } from "@/data/experience";

const BULLET_LIMIT = 4;

export default function Experience() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <section id="experience" className="py-[70px] border-b border-line">
      <div className="mb-10">
        <div className="font-mono text-xs tracking-[0.08em] uppercase text-clay-deep mb-[10px]">
          career
        </div>
        <h2 className="font-serif text-[32px] font-medium tracking-[-0.01em]">
          Experience
        </h2>
      </div>

      {experience.map((entry, i) => {
        const isExpanded = expanded.has(i);
        const hasMore = entry.highlights.length > BULLET_LIMIT;
        const visibleHighlights =
          isExpanded || !hasMore
            ? entry.highlights
            : entry.highlights.slice(0, BULLET_LIMIT);

        return (
          <div
            key={entry.role + entry.organization}
            className="py-7 border-t border-line"
          >
            <div className="flex justify-between items-baseline flex-wrap gap-x-4 gap-y-1 mb-1">
              <h3 className="font-serif text-[21px] font-medium">
                {entry.role}
              </h3>
              <div className="font-mono text-[13px] text-ink-mute whitespace-nowrap">
                {entry.dateRange}
                {entry.duration && ` · ${entry.duration}`}
              </div>
            </div>

            <div className="font-mono text-[14.5px] text-ink-mute mb-1">
              {entry.organization}
              {entry.employmentType && ` · ${entry.employmentType}`}
            </div>

            <div className="font-mono text-[13px] text-ink-mute mb-4">
              {entry.location}
              {entry.locationType && ` · ${entry.locationType}`}
            </div>

            {entry.summary && (
              <p className="text-[15.5px] text-ink-soft max-w-[640px] mb-3">
                {entry.summary}
              </p>
            )}

            <ul className="list-disc pl-5 marker:text-clay-deep space-y-2">
              {visibleHighlights.map((h) => (
                <li key={h} className="text-[15px] text-ink-soft max-w-[640px]">
                  {h}
                </li>
              ))}
            </ul>

            {hasMore && (
              <button
                onClick={() => toggle(i)}
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[14px] text-clay-deep hover:text-ink transition-colors"
              >
                {isExpanded
                  ? "Show less"
                  : `Show ${entry.highlights.length - BULLET_LIMIT} more`}
                <span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span>
              </button>
            )}

            {entry.skills && (
              <div className="mt-4 font-mono text-[11.5px] text-ink-mute">
                {entry.skills.join(", ")}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
