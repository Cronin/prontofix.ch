import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { services, cities } from "@/lib/data";

const BASE = "https://prontofix.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage per language
  for (const lang of locales) {
    entries.push({
      url: `${BASE}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    });
  }

  // Service pages
  for (const lang of locales) {
    for (const s of services) {
      entries.push({
        url: `${BASE}/${lang}/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // City pages
  for (const lang of locales) {
    for (const c of cities) {
      entries.push({
        url: `${BASE}/${lang}/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  // Combo pages (service + city) - the money pages
  for (const lang of locales) {
    for (const s of services) {
      for (const c of cities) {
        entries.push({
          url: `${BASE}/${lang}/${s.slug}/${c.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.9,
        });
      }
    }
  }

  return entries;
}
