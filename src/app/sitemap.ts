import { MetadataRoute } from "next";

const BASE_URL = "https://www.basiccodingconcepts.online";

// ─── Static pages ────────────────────────────────────────────────────────────
const staticRoutes: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/",                         priority: 1.0, changeFreq: "weekly"  },
  { path: "/concepts",                 priority: 0.9, changeFreq: "weekly"  },
  { path: "/basics",                   priority: 0.9, changeFreq: "weekly"  },
  { path: "/for-kids",                 priority: 0.9, changeFreq: "weekly"  },
  { path: "/playground",               priority: 0.8, changeFreq: "monthly" },
  { path: "/playground/javascript",    priority: 0.8, changeFreq: "monthly" },
  { path: "/playground/python",        priority: 0.8, changeFreq: "monthly" },
  { path: "/quizzes",                  priority: 0.8, changeFreq: "weekly"  },
  { path: "/glossary",                 priority: 0.7, changeFreq: "monthly" },
  { path: "/resources/cheatsheets",    priority: 0.7, changeFreq: "monthly" },
  { path: "/resources/exercises",      priority: 0.7, changeFreq: "monthly" },
  { path: "/resources/next-steps",     priority: 0.7, changeFreq: "monthly" },
  { path: "/about",                    priority: 0.6, changeFreq: "monthly" },
  { path: "/contact",                  priority: 0.6, changeFreq: "monthly" },
  { path: "/privacy-policy",           priority: 0.4, changeFreq: "yearly"  },
  { path: "/terms-of-service",         priority: 0.4, changeFreq: "yearly"  },
  { path: "/cookie-policy",            priority: 0.4, changeFreq: "yearly"  },
  { path: "/disclaimer",               priority: 0.4, changeFreq: "yearly"  },
];

// ─── Dynamic concept slugs ────────────────────────────────────────────────────
const conceptSlugs = [
  "what-is-coding",
  "comments",
  "variables",
  "data-types",
  "strings",
  "operators",
  "conditionals",
  "loops",
  "functions",
  "arrays",
  "objects",
  "input-output",
  "debugging",
];

// ─── Dynamic basics slugs ─────────────────────────────────────────────────────
const basicsSlugs = [
  "basic-coding-concepts",
  "programming-fundamentals",
  "coding-basics",
  "programming-basics",
];

// ─── Dynamic for-kids slugs ──────────────────────────────────────────────────
const kidsSlugs = [
  "what-is-coding",
  "variables",
  "data-types",
  "operators",
  "conditionals",
  "loops",
  "functions",
  "arrays",
  "objects",
  "debugging",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2025-06-28");

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFreq }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: changeFreq,
    priority,
  }));

  const conceptEntries: MetadataRoute.Sitemap = conceptSlugs.map((slug) => ({
    url: `${BASE_URL}/concepts/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const basicsEntries: MetadataRoute.Sitemap = basicsSlugs.map((slug) => ({
    url: `${BASE_URL}/basics/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const kidsEntries: MetadataRoute.Sitemap = kidsSlugs.map((slug) => ({
    url: `${BASE_URL}/for-kids/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...conceptEntries,
    ...basicsEntries,
    ...kidsEntries,
  ];
}
