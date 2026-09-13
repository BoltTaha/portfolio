import Link from "next/link";
import { site } from "@/data/site";
export default function Footer() {
  return (
    <footer className="site-footer page-wrap">
      <p className="font-mono text-xs text-ink-soft">
        © {new Date().getFullYear()} {site.name}
      </p>
      <nav aria-label="Footer navigation">
        <Link href="/projects">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <a href="/resume.pdf">Resume</a>
        <a href={`mailto:${site.email}`}>Email</a>
        <a href={site.github}>GitHub</a>
        <a href={site.linkedin}>LinkedIn</a>
      </nav>
    </footer>
  );
}
