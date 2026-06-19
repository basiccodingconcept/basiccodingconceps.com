// src/app/concepts/page.tsx

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { lessons } from "@/data/lessons";
import styles from "./page.module.css";

export const metadata = {
  title: "Programming Concepts - Learn Computer Science Fundamentals | Basic Coding Concepts",
  description: "Master the 13 core building blocks of computer science. Learn variables, loops, conditionals, functions, arrays, objects, and more with interactive code sandboxes.",
  keywords: "programming concepts, learn coding, computer science basics, coding path, variables, loops, functions, array, objects, debugging, coding lessons",
};

interface ConceptItem {
  id: string;
  num: number;
  title: string;
  shortTitle: string;
  desc: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  gradient: string;
  icon: React.ReactNode;
}

const conceptList: ConceptItem[] = [
  {
    id: "what-is-coding",
    num: 1,
    title: "What is Coding?",
    shortTitle: "Intro",
    desc: "Discover what programming is, why millions are learning it, and write your very first line of code.",
    level: "Beginner",
    time: "15 min",
    gradient: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M15 9l-6 6M9 9l6 6M19 5c1.5-1.5 3-1 3-1s.5 1.5-1 3l-8.5 8.5H9v-3.5L17.5 6.5Z"/>
      </svg>
    )
  },
  {
    id: "comments",
    num: 2,
    title: "Comments",
    shortTitle: "Comments",
    desc: "Learn how to write notes in your code that are read by developers but completely ignored by computers.",
    level: "Beginner",
    time: "15 min",
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  },
  {
    id: "variables",
    num: 3,
    title: "Variables",
    shortTitle: "Variables",
    desc: "Understand how code remembers things by storing data in memory containers called variables.",
    level: "Beginner",
    time: "20 min",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="21" y1="9" x2="3" y2="9"/>
        <text x="12" y="17" fontFamily="var(--font-mono)" fontSize="11" fontWeight="800" textAnchor="middle" fill="currentColor">x</text>
      </svg>
    )
  },
  {
    id: "data-types",
    num: 4,
    title: "Data Types",
    shortTitle: "Types",
    desc: "Discover the different kinds of information a variable can hold, from numbers to text strings.",
    level: "Beginner",
    time: "12 min",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: "strings",
    num: 5,
    title: "Strings",
    shortTitle: "Strings",
    desc: "Learn how to store, manipulate, and format text in your programs safely and efficiently.",
    level: "Beginner",
    time: "15 min",
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15h18M3 9h18M8 6l-5 5 5 5M16 6l5 5-5 5"/>
      </svg>
    )
  },
  {
    id: "operators",
    num: 6,
    title: "Operators",
    shortTitle: "Operators",
    desc: "Learn how to perform calculations, compare values, and build logic using math and comparison symbols.",
    level: "Beginner",
    time: "15 min",
    gradient: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="5" x2="19" y2="19"/>
      </svg>
    )
  },
  {
    id: "conditionals",
    num: 7,
    title: "Conditionals",
    shortTitle: "If/Else",
    desc: "Learn how to make decisions in your code using if, else if, and else statements to handle logic.",
    level: "Beginner",
    time: "15 min",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 12l10 10 10-10L12 2z"/>
        <path d="M12 6v12"/>
        <path d="M9 15l3 3 3-3"/>
      </svg>
    )
  },
  {
    id: "loops",
    num: 8,
    title: "Loops",
    shortTitle: "Loops",
    desc: "Automate repetitive tasks and run code multiple times safely using for and while loops.",
    level: "Beginner",
    time: "18 min",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
      </svg>
    )
  },
  {
    id: "functions",
    num: 9,
    title: "Functions",
    shortTitle: "Functions",
    desc: "Write clean, reusable blocks of code that perform specific tasks, receive variables, and return results.",
    level: "Intermediate",
    time: "20 min",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #6366f1 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    id: "arrays",
    num: 10,
    title: "Arrays",
    shortTitle: "Arrays",
    desc: "Organize and manage structured lists of items or collections of data within a single variable container.",
    level: "Intermediate",
    time: "18 min",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="5" height="18" rx="1"/>
        <rect x="9.5" y="3" width="5" height="18" rx="1"/>
        <rect x="16" y="3" width="5" height="18" rx="1"/>
      </svg>
    )
  },
  {
    id: "objects",
    num: 11,
    title: "Objects",
    shortTitle: "Objects",
    desc: "Model real-world items and structures by grouping related key-value variables and functions together.",
    level: "Intermediate",
    time: "22 min",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    )
  },
  {
    id: "input-output",
    num: 12,
    title: "Input & Output",
    shortTitle: "I/O",
    desc: "Learn how programs communicate by receiving user data and outputting results to screens.",
    level: "Beginner",
    time: "15 min",
    gradient: "linear-gradient(135deg, #10b981 0%, #f59e0b 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )
  },
  {
    id: "debugging",
    num: 13,
    title: "Debugging",
    shortTitle: "Debug",
    desc: "Learn how to find, trace, interpret, and resolve errors in your logic and syntax like a professional.",
    level: "Beginner",
    time: "15 min",
    gradient: "linear-gradient(135deg, #ef4444 0%, #a855f7 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="7" width="12" height="12" rx="2"/>
        <path d="M18 9h2M18 12h2M18 15h2M4 9h2M4 12h2M4 15h2M10 5a2 2 0 0 1 4 0v2h-4V5ZM12 19v3"/>
      </svg>
    )
  }
];

export default function ConceptsPage() {
  return (
    <div className={styles.main}>
      {/* Navigation Header */}
      <Header />

      <main style={{ marginTop: "80px" }}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>13 Core Concepts</span>
            <h1 className={styles.title}>Programming Concepts</h1>
            <p className={styles.subtitle}>
              Master the building blocks of software engineering. Each concept builds on the last, taking you from a complete beginner to a confident coder.
            </p>
          </div>
        </section>

        <div className={styles.container}>
          {/* Horizontal Progress Track */}
          <div className={styles.trackWrapper}>
            <h2 className={styles.trackHeader}>
              <svg className={styles.trackHeaderIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Concept Roadmap
            </h2>
            <div className={styles.trackContainer}>
              {/* Connecting background line */}
              <div className={styles.trackConnector}></div>

              {conceptList.map((concept) => (
                <Link key={concept.id} id={`concept-track-link-${concept.id}`} href={`/concepts/${concept.id}/`} className={styles.trackItem}>
                  <div className={styles.trackNum}>{concept.num}</div>
                  <div className={styles.trackIcon}>{concept.icon}</div>
                  <span className={styles.trackTitle}>{concept.shortTitle}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Detailed Concepts Grid */}
          <div className={styles.grid}>
            {conceptList.map((concept) => (
              <Link key={concept.id} id={`concept-card-link-${concept.id}`} href={`/concepts/${concept.id}/`} className={styles.card}>
                <div className={styles.cardGlow}></div>
                
                {/* Top row with icon & numbering */}
                <div className={styles.cardTopRow}>
                  <div 
                    className={styles.iconWrapper}
                    style={{
                      background: concept.gradient,
                      color: "white"
                    }}
                  >
                    {concept.icon}
                  </div>
                  <span className={styles.conceptBadge}>Concept {concept.num}</span>
                </div>

                {/* Tags */}
                <div className={styles.tagRow}>
                  <span className={`${styles.tag} ${concept.level === "Beginner" ? styles.tagBasics : styles.tagStructures}`}>
                    {concept.level}
                  </span>
                  <span className={`${styles.tag} ${styles.tagTime}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {concept.time}
                  </span>
                </div>

                {/* Text elements */}
                <h3 className={styles.cardTitle}>{concept.title}</h3>
                <p className={styles.cardDesc}>{concept.desc}</p>

                {/* Link CTA */}
                <div className={styles.cardLink}>
                  <span>Start learning</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Call To Action Banner */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaCardGlow}></div>
              <h2 className={styles.ctaTitle}>Ready to Begin?</h2>
              <p className={styles.ctaDesc}>
                Jump straight into our very first concept, "What is Coding?", and learn how instructions guide computers.
              </p>
              <Link id="concepts-start-btn" href="/concepts/what-is-coding/" className={styles.ctaBtn}>
                Start from the Beginning
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
