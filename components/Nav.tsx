"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import ContactModal from "@/components/ContactModal";
const links = [
  { href: "/projects", label: "Work" },
  { href: "/#stack", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <nav
      aria-label="Main navigation"
      className="site-nav"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="page-wrap nav-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Muhammad Taha home"
          onClick={() => setOpen(false)}
        >
          bolt<span>taha</span>
        </Link>
        <div className="desktop-links">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            ref={toggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="menu-toggle"
          >
            {open ? "×" : "☰"}
          </button>
          <ContactModal />
        </div>
      </div>
      <div
        id="mobile-navigation"
        hidden={!open}
        className="mobile-links page-wrap"
      >
        {links.map((link) => (
          <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
