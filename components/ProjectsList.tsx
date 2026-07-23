"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

const DEFAULT_VISIBLE = 6;

export default function ProjectsList() {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, DEFAULT_VISIBLE);
  const remaining = projects.length - DEFAULT_VISIBLE;

  function toggleExpanded(number: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(number)) {
        next.delete(number);
      } else {
        next.add(number);
      }
      return next;
    });
  }

  return (
    <section id="work" className="py-[70px] border-b border-line">
      <div className="mb-10">
        <div className="font-mono text-xs tracking-[0.08em] uppercase text-clay-deep mb-[10px]">
          selected work
        </div>
        <h2 className="font-serif text-[32px] font-medium tracking-[-0.01em]">
          Systems shipped, in order
        </h2>
      </div>

      {visibleProjects.map((project) => {
        const isExpanded = expanded.has(project.number);
        return (
          <div
            key={project.number}
            className="grid grid-cols-[220px_1fr_140px] max-[820px]:grid-cols-1 gap-7 max-[820px]:gap-2 items-start py-7 border-t border-line"
          >
            <div className="font-mono text-[15px] text-ink-mute">
              {project.number} · {project.category}
            </div>
            <div>
              <h3 className="font-serif text-[21px] font-medium mb-2">
                {project.title}
              </h3>
              <p
                className={`text-[15.5px] text-ink-soft max-w-[480px] ${isExpanded ? "" : "line-clamp-3"}`}
              >
                {project.description}
              </p>
              <div className="mt-2 flex items-center gap-4">
                <button
                  onClick={() => toggleExpanded(project.number)}
                  className="font-mono text-[12.5px] text-clay-deep hover:text-ink transition-colors"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12.5px] text-ink-soft hover:text-ink transition-colors"
                  >
                    View code ↗
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end max-[820px]:items-start text-right max-[820px]:text-left font-mono text-[13px] text-ink-mute">
              <span>{project.meta}</span>
              <span className="mt-[6px] text-[12.5px] px-[10px] py-[3px] rounded-pill border border-line-strong text-clay-deep">
                {project.status}
              </span>
            </div>
          </div>
        );
      })}

      {remaining > 0 && (
        <button
          onClick={() => setShowAll((v) => !v)}
          className="mt-2 inline-flex items-center gap-1.5 font-mono text-[14px] text-clay-deep hover:text-ink transition-colors"
        >
          {showAll ? "Show less" : `Show ${remaining} more projects`}
          <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
        </button>
      )}
    </section>
  );
}
