export default function Footer() {
  return (
    <footer className="pt-10 pb-[60px]">
      <div className="max-w-wrap mx-auto px-8 flex items-center justify-between flex-wrap gap-5">
        <div className="font-mono text-xs text-ink-mute">
          &copy; 2026 Muhammad Taha
        </div>
        <div className="flex gap-[26px] text-sm text-ink-soft">
          <a href="/about" className="hover:text-ink">
            About
          </a>
          <a href="/contact" className="hover:text-ink">
            Contact
          </a>
          <a href="mailto:contact@muhammadtaha.app" className="hover:text-ink">
            Email
          </a>
          <a href="https://github.com/bolttaha" className="hover:text-ink">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bolttaha/"
            className="hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
