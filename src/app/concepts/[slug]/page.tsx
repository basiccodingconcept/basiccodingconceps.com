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
    openGraph: {
      title: `${lesson.title} - Learn Programming Fundamentals | Basic Coding Concepts`,
      description: lesson.desc,
      type: "article",
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
