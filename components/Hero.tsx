import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[90px] pb-[70px]">
      <Image
        src="/profile.png"
        alt="Portrait of Muhammad Taha"
        width={168}
        height={168}
        quality={100}
        priority
        className="rounded-full border border-line-strong object-cover mb-6"
      />
      <div className="font-mono text-[14px] tracking-[0.08em] uppercase text-clay-deep mb-[22px]">
        Forward Deployed Software Engineer · available for select work
      </div>
      <h1 className="font-serif font-medium text-[58px] max-[820px]:text-[38px] tracking-[-0.02em] leading-[1.08] max-w-[760px] mb-[26px]">
        Building AI systems people can{" "}
        <em className="italic text-clay-deep font-normal">actually run</em>,
        not just admire.
      </h1>
      <p className="text-[19px] text-ink-soft max-w-[560px] mb-[38px]">
        I partner with businesses to turn broken, time-consuming workflows
        into automated software systems. Operating as BoltTaha, I handle the
        entire process, from diagnosing exactly what your team needs, to
        writing the code and keeping the infrastructure running smoothly.
      </p>
      <div className="flex gap-[14px] mb-[56px]">
        <a
          href="#work"
          className="font-body text-sm px-[18px] py-[9px] rounded-pill border border-ink transition-all duration-150 hover:bg-ink hover:text-bg"
        >
          View the work
        </a>
        <a
          href="https://www.upwork.com/freelancers/bolttaha"
          className="font-body text-sm px-[18px] py-[9px] rounded-pill border border-clay-deep text-clay-deep transition-all duration-150 hover:bg-ink hover:text-bg"
        >
          Upwork profile ↗
        </a>
      </div>
    </section>
  );
}
