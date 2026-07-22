import { trustCards } from "@/data/stack";

export default function TrustRow() {
  return (
    <section id="trust" className="py-[70px] border-b border-line">
      <div className="mb-10">
        <div className="font-mono text-xs tracking-[0.08em] uppercase text-clay-deep mb-[10px]">
          track record
        </div>
        <h2 className="font-serif text-[32px] font-medium tracking-[-0.01em]">
          Client success &amp; education
        </h2>
      </div>
      <div className="grid grid-cols-3 max-[820px]:grid-cols-1">
        {trustCards.map((card) => (
          <div
            key={card.value}
            className="py-[26px] px-6 text-center border-l border-line first:border-l-0 max-[820px]:border-l-0 max-[820px]:border-t max-[820px]:pt-5 max-[820px]:first:border-t-0"
          >
            <div className="font-serif text-[30px] font-medium text-clay-deep">
              {card.value}
            </div>
            <div className="text-sm text-ink-soft mt-[6px]">
              {card.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
