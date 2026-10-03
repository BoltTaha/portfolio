import Link from "next/link";
import type { DiscoveryLink } from "@/data/discovery";

export default function RelatedDiscovery({
  links,
}: {
  links: DiscoveryLink[];
}) {
  if (!links.length) return null;

  return (
    <section>
      <p className="eyebrow">Related expertise</p>
      <h2>Continue with the supporting service and technical evidence.</h2>
      <ul className="source-list">
        {links.map((link) => (
          <li key={link.href}>
            <span className="font-mono text-xs text-ink-mute">
              {link.kind}:{" "}
            </span>
            <Link href={link.href}>{link.label} →</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
