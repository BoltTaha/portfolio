import { signatureStats } from "@/data/stack";

export default function SignatureStats() {
  return (
    <div className="border-y border-line py-[26px] grid grid-cols-4 max-[820px]:grid-cols-2 gap-6">
      {signatureStats.map((stat) => (
        <div
          key={stat.label}
          className="font-mono text-[12.5px] text-ink-mute"
        >
          <strong className="block font-serif text-[22px] font-medium text-ink mb-1">
            {stat.value}
          </strong>
          {stat.label}
        </div>
      ))}
    </div>
  );
}
