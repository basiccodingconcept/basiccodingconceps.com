import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { lessons } from "@/data/lessons";
import LessonPageClient from "@/components/LessonPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(lessons).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = lessons[slug];

  if (!lesson) {
    return {
      title: "Lesson Not Found | Basic Coding Concepts",
      description: "The requested programming lesson could not be found.",
    };
  }

  return {
    title: `${lesson.title} - Learn Programming Fundamentals | Basic Coding Concepts`,
    description: lesson.desc,
    keywords: `${lesson.title.toLowerCase()}, coding basics, programming for beginners, computer science fundamentals, interactive coding, coding sandbox`,
    alternates: {
      canonical: `https://www.basiccodingconcepts.online/concepts/${slug}`,
    },
    openGraph: {
      title: `${lesson.title} - Learn Programming Fundamentals | Basic Coding Concepts`,
      description: lesson.desc,
      url: `https://www.basiccodingconcepts.online/concepts/${slug}`,
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${lesson.title} - Basic Coding Concepts`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${lesson.title} - Basic Coding Concepts`,
      description: lesson.desc,
      images: ["/og-image.png"],
    },
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = lessons[slug];

  if (!lesson) {
    notFound();
  }

  return <LessonPageClient lesson={lesson} />;
}
