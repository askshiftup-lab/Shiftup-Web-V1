export type AnalyticsEvent =
  | "hero_cta_click"
  | "dino_cta_click"
  | "waitlist_submit"
  | "student_form_submit"
  | "parent_form_submit"
  | "investor_form_submit"
  | "deck_request"
  | "data_room_request"
  | "founder_call_request"
  | "campus_ambassador_request"
  | "scroll_depth"
  | "feature_interaction"
  | "journey_interaction"
  | "investor_page_engagement"
  | "search_open"
  | "theme_toggle";

type EventPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(event: AnalyticsEvent, payload?: EventPayload) {
  if (typeof window === "undefined") return;

  const detail = { event, ...payload, ts: Date.now() };
  window.dispatchEvent(new CustomEvent("shiftup-analytics", { detail }));

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", detail);
  }
}
