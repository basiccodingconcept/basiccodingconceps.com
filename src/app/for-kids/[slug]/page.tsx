import { notFound } from "next/navigation";
import { kidsLessons } from "@/data/kids";
import KidsLessonClient from "@/components/KidsLessonClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const lesson = kidsLessons[slug];
  if (!lesson) return {};
  return {
    title: `${lesson.title} | Coding for Kids | Basic Coding Concepts`,
    description: `Learn ${lesson.title} in a fun, interactive way. ${lesson.analogyTitle}: ${lesson.analogyDesc}`,
    keywords: `coding for kids, ${lesson.title.toLowerCase()}, visual programming, kids programming logic`,
  };
}

export default async function KidsLessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = kidsLessons[slug];
  
  if (!lesson) {
    notFound();
  }

  return <KidsLessonClient lesson={lesson} />;
}

export async function generateStaticParams() {
  return Object.keys(kidsLessons).map((slug) => ({
    slug,
  }));
}
