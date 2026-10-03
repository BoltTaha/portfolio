import { track } from "@vercel/analytics";

export type AnalyticsEvent =
  | "click_github"
  | "click_resume"
  | "click_contact"
  | "submit_contact"
  | "click_linkedin"
  | "click_upwork";

export type AnalyticsLocation =
  | "nav"
  | "footer"
  | "dialog"
  | "main"
  | "contact_page"
  | "contact_modal"
  | "unknown";

export function trackEvent(
  name: AnalyticsEvent,
  location: AnalyticsLocation,
) {
  if (typeof window === "undefined") return;

  track(name, {
    page: window.location.pathname,
    location,
  });
}

export function eventForHref(href: string): AnalyticsEvent | null {
  if (href.startsWith("mailto:")) return "click_contact";

  let url: URL;
  try {
    url = new URL(href, "https://muhammadtaha.app");
  } catch {
    return null;
  }

  const hostname = url.hostname.toLowerCase().replace(/^www\./, "");
  const pathname = url.pathname.replace(/\/$/, "") || "/";

  if (hostname === "github.com") return "click_github";
  if (hostname === "linkedin.com") return "click_linkedin";
  if (hostname === "upwork.com") return "click_upwork";
  if (hostname === "muhammadtaha.app" && pathname === "/resume.pdf")
    return "click_resume";
  if (hostname === "muhammadtaha.app" && pathname === "/contact")
    return "click_contact";

  return null;
}
