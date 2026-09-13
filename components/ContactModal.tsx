"use client";
import { useEffect, useId, useRef, useState } from "react";
import ContactForm from "@/components/ContactForm";
export default function ContactModal() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  function close() {
    dialog.current?.close();
  }
  return (
    <>
      <button
        ref={trigger}
        onClick={() => setOpen(true)}
        className="button nav-contact"
      >
        Get in touch
      </button>
      <dialog
        ref={dialog}
        aria-labelledby={titleId}
        className="contact-dialog"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = Array.from(
            event.currentTarget.querySelectorAll<HTMLElement>(
              'button:not(:disabled), input:not(:disabled):not([tabindex="-1"]), textarea:not(:disabled), a[href]',
            ),
          );
          const first = controls[0];
          const last = controls.at(-1);
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              close();
          }
        }}
      >
        {open && (
          <>
            <div className="flex items-center justify-between gap-4 mb-5">
              <h2 id={titleId} className="font-serif text-2xl">
                Let’s talk.
              </h2>
              <button
                autoFocus
                onClick={close}
                className="close-button"
                aria-label="Close contact form"
              >
                ×
              </button>
            </div>
            <ContactForm />
          </>
        )}
      </dialog>
    </>
  );
}
