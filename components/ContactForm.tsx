"use client";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const id = useId();
  const request = useRef<AbortController | null>(null);
  useEffect(() => () => request.current?.abort(), []);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.current) return;
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!key) {
      setStatus("error");
      return;
    }
    const controller = new AbortController();
    request.current = controller;
    const timer = setTimeout(() => controller.abort(), 15000);
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", key);
    formData.append("subject", "Portfolio inquiry — muhammadtaha.app");
    setStatus("submitting");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.success !== true)
        throw new Error("Submission not accepted");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timer);
      request.current = null;
    }
  }
  return (
    <div>
      <div role="status" aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p className="success-message">
            Message sent. Thank you for getting in touch.
          </p>
        )}
      </div>
      {status !== "success" && (
        <form
          onSubmit={handleSubmit}
          aria-busy={status === "submitting"}
          className="contact-form"
        >
          <label htmlFor={`${id}-name`}>Your name</label>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            required
            maxLength={150}
            placeholder="Your name"
          />
          <label htmlFor={`${id}-email`}>Your email</label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
          <label htmlFor={`${id}-message`}>How can I help?</label>
          <textarea
            id={`${id}-message`}
            name="message"
            required
            rows={5}
            maxLength={10000}
            placeholder="Tell me about the role or the problem you’re working on."
          />
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <p className="text-sm text-ink-soft mb-4">
            Your message is sent through Web3Forms. Please keep it to
            information you are comfortable sharing by email.
          </p>
          <button
            className="button solid"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>
          {status === "error" && (
            <p role="alert" className="mt-4 text-clay-deep">
              Your message could not be confirmed as sent. Please try again or{" "}
              <a className="text-link" href={`mailto:${site.email}`}>
                email me directly
              </a>
              .
            </p>
          )}
        </form>
      )}
    </div>
  );
}
