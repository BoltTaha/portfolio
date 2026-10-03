import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import { eventForHref } from "@/lib/analytics";

const { track } = vi.hoisted(() => ({ track: vi.fn() }));

vi.mock("@vercel/analytics", () => ({ track }));

describe("privacy-conscious analytics", () => {
  beforeEach(() => track.mockClear());

  it.each([
    ["https://github.com/BoltTaha/project", "click_github"],
    ["/resume.pdf", "click_resume"],
    ["/contact", "click_contact"],
    ["mailto:bolt.taha.work@gmail.com", "click_contact"],
    ["https://www.linkedin.com/in/bolttaha/", "click_linkedin"],
    ["https://www.upwork.com/freelancers/example", "click_upwork"],
  ])("classifies %s as %s", (href, expected) => {
    expect(eventForHref(href)).toBe(expected);
  });

  it("ignores unrelated links", () => {
    expect(eventForHref("/projects")).toBeNull();
    expect(eventForHref("https://example.com")).toBeNull();
  });

  it("fires one event per tracked link click without personal data", () => {
    render(
      <main>
        <AnalyticsEvents />
        <a
          href="https://github.com/BoltTaha/project"
          onClick={(event) => event.preventDefault()}
        >
          <span>GitHub project</span>
        </a>
      </main>,
    );

    fireEvent.click(screen.getByText("GitHub project"));

    expect(track).toHaveBeenCalledTimes(1);
    expect(track).toHaveBeenCalledWith("click_github", {
      page: "/",
      location: "main",
    });
    expect(JSON.stringify(track.mock.calls)).not.toContain("email");
    expect(JSON.stringify(track.mock.calls)).not.toContain("message");
  });

  it("tracks the contact modal trigger once", () => {
    render(
      <nav>
        <AnalyticsEvents />
        <button
          data-analytics-event="click_contact"
          data-analytics-location="nav"
        >
          Get in touch
        </button>
      </nav>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Get in touch" }));

    expect(track).toHaveBeenCalledTimes(1);
    expect(track).toHaveBeenCalledWith("click_contact", {
      page: "/",
      location: "nav",
    });
  });
});
