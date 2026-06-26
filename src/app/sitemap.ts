import { MetadataRoute } from "next";
import { lessons } from "@/data/lessons";
import { basicsData } from "@/data/basics";
import { kidsLessons } from "@/data/kids";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.basiccodingconcepts.online";

  // Static routes
  const staticPaths = [
    "",
    "/concepts",
    "/basics",
    "/for-kids",
    "/about",
    "/contact",
    "/glossary",
    "/playground",
    "/playground/javascript",
    "/playground/python",
    "/quizzes",
    "/resources/cheatsheets",
    "/resources/exercises",
    "/resources/next-steps",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    "/disclaimer",
  ];

  const staticEntries = staticPaths.map((path) => {
    let priority = 0.8;
    if (path === "") priority = 1.0;
    else if (path === "/concepts" || path === "/basics" || path === "/for-kids") priority = 0.9;
    else if (path.startsWith("/privacy") || path.startsWith("/terms") || path.startsWith("/cookie") || path.startsWith("/disclaimer")) priority = 0.5;

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: priority,
    };
  });

  // Dynamic Concepts
  const conceptEntries = Object.keys(lessons).map((slug) => ({
    url: `${baseUrl}/concepts/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dynamic Basics
  const basicEntries = Object.keys(basicsData).map((slug) => ({
    url: `${baseUrl}/basics/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dynamic For Kids
  const kidsEntries = Object.keys(kidsLessons).map((slug) => ({
    url: `${baseUrl}/for-kids/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...conceptEntries, ...basicEntries, ...kidsEntries];
}
