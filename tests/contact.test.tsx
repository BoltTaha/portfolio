import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ContactForm from "@/components/ContactForm";
function submit() {
  fireEvent.change(screen.getByLabelText("Your name"), {
    target: { value: "Test Visitor" },
  });
  fireEvent.change(screen.getByLabelText("Your email"), {
    target: { value: "visitor@example.com" },
  });
  fireEvent.change(screen.getByLabelText("How can I help?"), {
    target: { value: "A test inquiry" },
  });
  fireEvent.submit(
    screen.getByRole("button", { name: "Send message" }).closest("form")!,
  );
}
describe("contact submissions", () => {
  beforeEach(() =>
    vi.stubEnv("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY", "test-public-key"),
  );
  it("keeps labels unique with two forms on the page", () => {
    render(
      <>
        <ContactForm />
        <ContactForm />
      </>,
    );
    const fields = screen.getAllByLabelText("Your name");
    expect(fields[0].id).not.toBe(fields[1].id);
  });
  it("announces success only after provider acceptance", async () => {
    const fetch = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    vi.stubGlobal("fetch", fetch);
    render(<ContactForm />);
    submit();
    expect(await screen.findByText(/Message sent/)).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Message sent");
    const body = fetch.mock.calls[0][1].body as FormData;
    expect(body.get("email")).toBe("visitor@example.com");
    expect(body.get("access_key")).toBe("test-public-key");
  });
  it.each([
    { ok: true, success: false },
    { ok: false, success: true },
  ])("retains input after a rejected response: %j", async (response) => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: response.ok,
        json: async () => ({ success: response.success }),
      }),
    );
    render(<ContactForm />);
    submit();
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "could not be confirmed",
    );
    expect(screen.getByLabelText("How can I help?")).toHaveValue(
      "A test inquiry",
    );
    expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled();
  });
  it("offers email fallback without a configured key", async () => {
    vi.stubEnv("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY", "");
    const fetch = vi.fn();
    vi.stubGlobal("fetch", fetch);
    render(<ContactForm />);
    submit();
    expect(await screen.findByRole("alert")).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });
  it("aborts a stalled request and permits retry", async () => {
    vi.useFakeTimers();
    vi.stubGlobal(
      "fetch",
      vi.fn(
        (_url, options) =>
          new Promise((_resolve, reject) =>
            options.signal.addEventListener("abort", () =>
              reject(new DOMException("Aborted", "AbortError")),
            ),
          ),
      ),
    );
    render(<ContactForm />);
    submit();
    expect(screen.getByRole("button", { name: "Sending…" })).toBeDisabled();
    const { act } = await import("@testing-library/react");
    await act(async () => {
      await vi.advanceTimersByTimeAsync(15000);
    });
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled();
  });
  it("handles network errors without a success message", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    render(<ContactForm />);
    submit();
    await waitFor(() => expect(screen.getByRole("alert")).toBeInTheDocument());
    expect(screen.queryByText(/Message sent/)).not.toBeInTheDocument();
  });
});
