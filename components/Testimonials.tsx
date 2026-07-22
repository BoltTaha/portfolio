import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[70px] border-b border-line">
      <div className="mb-10">
        <div className="font-mono text-xs tracking-[0.08em] uppercase text-clay-deep mb-[10px]">
          client feedback
        </div>
        <h2 className="font-serif text-[32px] font-medium tracking-[-0.01em]">
          What clients say
        </h2>
      </div>

      <div className="grid grid-cols-2 max-[820px]:grid-cols-1 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col rounded-2xl border border-line-strong bg-card p-6"
          >
            <div
              className="text-[18px] tracking-[0.15em] text-clay-deep mb-3"
              aria-label={`${t.rating} out of 5 stars`}
            >
              {"★".repeat(t.rating)}
            </div>
            <p className="flex-1 font-serif italic text-[17px] leading-snug text-ink mb-4">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-mute">
              {t.author && <>{t.author} · </>}
              {t.source}
              {t.date && <> · {t.date}</>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
