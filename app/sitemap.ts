import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

const ROUTES = [
  "",
  "dino",
  "dino/student-digital-twin",
  "dino/jenny-ai",
  "dino/community",
  "dino/university-explorer",
  "dino/opportunities",
  "dino/career",
  "students",
  "parents",
  "universities",
  "partners",
  "investors",
  "investors/thesis",
  "investors/market",
  "investors/business-model",
  "investors/moat",
  "investors/metrics",
  "investors/raise",
  "investors/data-room",
  "company",
  "company/vision",
  "company/mission",
  "company/ethics",
  "company/team",
  "impact",
  "research",
  "insights",
  "press",
  "trust",
  "security",
  "privacy",
  "terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}/${route}`,
    lastModified: "2026-01-01",
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
