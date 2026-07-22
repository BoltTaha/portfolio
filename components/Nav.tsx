"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#stack", label: "Stack" },
  { href: "/#trust", label: "Track record" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-line relative">
      <div className="max-w-wrap mx-auto px-8 flex items-center justify-between h-[76px]">
        <div className="font-serif text-xl font-semibold tracking-[-0.01em]">
          bolt<span className="text-clay">taha</span>
        </div>

        <div className="max-[820px]:hidden flex gap-[34px] text-[15px] text-ink-soft">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="hidden max-[820px]:flex items-center justify-center w-9 h-9 border border-ink rounded-full font-mono text-base leading-none"
          >
            {menuOpen ? "×" : "☰"}
          </button>
          <ContactModal />
        </div>
      </div>

      {menuOpen && (
        <div className="hidden max-[820px]:block absolute inset-x-0 top-full border-t border-line bg-bg z-40">
          <div className="max-w-wrap mx-auto px-8 py-5 flex flex-col gap-4 text-[15px] text-ink-soft">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
