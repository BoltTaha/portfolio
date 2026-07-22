"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  onSuccess?: () => void;
  autoFocus?: boolean;
  titleId?: string;
}

export default function ContactForm({
  onSuccess,
  autoFocus,
  titleId,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const idPrefix = titleId ?? "contact";

  useEffect(() => {
    if (autoFocus) firstFieldRef.current?.focus();
  }, [autoFocus]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
    );
    formData.append("subject", "New lead from muhammadtaha.app");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        onSuccess?.();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-6 text-center font-mono text-sm text-clay-deep">
        Message sent successfully. I&apos;ll get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <label
        htmlFor={`${idPrefix}-name`}
        className="font-mono text-xs uppercase tracking-[0.06em] text-ink-soft mb-1"
      >
        Your name
      </label>
      <input
        ref={firstFieldRef}
        id={`${idPrefix}-name`}
        type="text"
        name="name"
        required
        placeholder="John Doe"
        className="mb-4 rounded-lg border border-line-strong bg-bg px-3 py-2 font-body text-ink placeholder:text-ink-mute focus:outline-none focus:border-clay-deep transition-colors"
      />

      <label
        htmlFor={`${idPrefix}-email`}
        className="font-mono text-xs uppercase tracking-[0.06em] text-ink-soft mb-1"
      >
        Your email
      </label>
      <input
        id={`${idPrefix}-email`}
        type="email"
        name="email"
        required
        placeholder="john@company.com"
        className="mb-4 rounded-lg border border-line-strong bg-bg px-3 py-2 font-body text-ink placeholder:text-ink-mute focus:outline-none focus:border-clay-deep transition-colors"
      />

      <label
        htmlFor={`${idPrefix}-message`}
        className="font-mono text-xs uppercase tracking-[0.06em] text-ink-soft mb-1"
      >
        How can I help you?
      </label>
      <textarea
        id={`${idPrefix}-message`}
        name="message"
        required
        rows={4}
        placeholder="We need an AI pipeline deployed..."
        className="mb-5 resize-none rounded-lg border border-line-strong bg-bg px-3 py-2 font-body text-ink placeholder:text-ink-mute focus:outline-none focus:border-clay-deep transition-colors"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-pill bg-ink px-[18px] py-[10px] text-center font-body text-sm text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p className="mt-3 font-mono text-xs text-clay-deep">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
