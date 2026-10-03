"use client";

import { useEffect } from "react";
import {
  eventForHref,
  trackEvent,
  type AnalyticsEvent,
  type AnalyticsLocation,
} from "@/lib/analytics";

const validEvents = new Set<AnalyticsEvent>([
  "click_github",
  "click_resume",
  "click_contact",
  "click_linkedin",
  "click_upwork",
]);

function eventLocation(element: HTMLElement): AnalyticsLocation {
  const explicit = element.dataset.analyticsLocation;
  if (
    explicit === "nav" ||
    explicit === "footer" ||
    explicit === "dialog" ||
    explicit === "main" ||
    explicit === "contact_page" ||
    explicit === "contact_modal"
  )
    return explicit;

  if (element.closest("dialog")) return "dialog";
  if (element.closest("footer")) return "footer";
  if (element.closest("nav")) return "nav";
  if (element.closest("main")) return "main";
  return "unknown";
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const element = event.target.closest<HTMLElement>(
        "a[href], [data-analytics-event]",
      );
      if (!element) return;

      const explicit = element.dataset.analyticsEvent;
      const analyticsEvent =
        explicit && validEvents.has(explicit as AnalyticsEvent)
          ? (explicit as AnalyticsEvent)
          : element instanceof HTMLAnchorElement
            ? eventForHref(element.getAttribute("href") ?? element.href)
            : null;

      if (!analyticsEvent) return;
      trackEvent(analyticsEvent, eventLocation(element));
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
