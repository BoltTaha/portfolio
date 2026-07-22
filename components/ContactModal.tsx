"use client";

import { useEffect, useRef, useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  function close() {
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        className="font-body text-sm px-[18px] py-[9px] rounded-pill border border-ink transition-all duration-150 hover:bg-ink hover:text-bg"
      >
        Get in touch
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="w-full max-w-md rounded-2xl border border-line-strong bg-card p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-5">
              <h3
                id="contact-modal-title"
                className="font-serif text-xl font-medium text-ink"
              >
                Let&apos;s talk business.
              </h3>
              <button
                onClick={close}
                aria-label="Close"
                className="font-mono text-2xl leading-none text-ink-mute hover:text-ink transition-colors"
              >
                ×
              </button>
            </div>

            <ContactForm
              autoFocus
              onSuccess={() => setTimeout(close, 3000)}
            />
          </div>
        </div>
      )}
    </>
  );
}
