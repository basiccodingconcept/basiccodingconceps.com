"use client";

import React from "react";
import Link from "next/link";
import styles from "./LearningPath.module.css";

interface Step {
  num: number;
  icon: React.ReactNode;
  title: string;
  slug: string;
}

export default function LearningPath() {
  const steps: Step[] = [
    {
      num: 1,
      title: "Intro",
      slug: "what-is-coding",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M15 9l-6 6M9 9l6 6M19 5c1.5-1.5 3-1 3-1s.5 1.5-1 3l-8.5 8.5H9v-3.5L17.5 6.5Z"/>
        </svg>
      )
    },
    {
      num: 2,
      title: "Comments",
      slug: "comments",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    },
    {
      num: 3,
      title: "Variables",
      slug: "variables",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="21" y1="9" x2="3" y2="9"/>
          <text x="12" y="17" fontFamily="var(--font-mono)" fontSize="12" fontWeight="700" textAnchor="middle" fill="currentColor">x</text>
        </svg>
      )
    },
    {
      num: 4,
      title: "Types",
      slug: "data-types",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
        </svg>
      )
    },
    {
      num: 5,
      title: "Strings",
      slug: "strings",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 15h18M3 9h18M8 6l-5 5 5 5M16 6l5 5-5 5"/>
        </svg>
      )
    },
    {
      num: 6,
      title: "Operators",
      slug: "operators",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="5" x2="19" y2="19"/>
        </svg>
      )
    },
    {
      num: 7,
      title: "If/Else",
      slug: "conditionals",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 12l10 10 10-10L12 2z"/>
          <path d="M12 6v12"/>
          <path d="M9 15l3 3 3-3"/>
        </svg>
      )
    },
    {
      num: 8,
      title: "Loops",
      slug: "loops",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
        </svg>
      )
    },
    {
      num: 9,
      title: "Functions",
      slug: "functions",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      num: 10,
      title: "Arrays",
      slug: "arrays",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="5" height="18" rx="1"/>
          <rect x="9.5" y="3" width="5" height="18" rx="1"/>
          <rect x="16" y="3" width="5" height="18" rx="1"/>
        </svg>
      )
    },
    {
      num: 11,
      title: "Objects",
      slug: "objects",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
    {
      num: 12,
      title: "I/O",
      slug: "input-output",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      num: 13,
      title: "Debug",
      slug: "debugging",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="7" width="12" height="12" rx="2"/>
          <path d="M18 9h2M18 12h2M18 15h2M4 9h2M4 12h2M4 15h2M10 5a2 2 0 0 1 4 0v2h-4V5ZM12 19v3"/>
        </svg>
      )
    }
  ];

  return (
    <section id="learning-path" className={`${styles.section} section-padding`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Your Learning Path</h2>
          <p className={styles.subtitle}>
            Follow our carefully designed curriculum from "What is coding?" to building real programs.
          </p>
        </div>

        {/* Timeline Path visualization */}
        <div className={styles.pathWrapper}>
          {/* Connection line for desktop grid */}
          <div className={styles.timelineLine}></div>
          
          <div className={styles.grid}>
            {steps.map((step) => (
              <Link
                key={step.num}
                href={`/concepts/${step.slug}/`}
                className={styles.card}
              >
                {/* Step Number Badge */}
                <div className={styles.stepNumber}>{step.num}</div>
                
                {/* Step Icon */}
                <div className={styles.icon}>{step.icon}</div>
                
                {/* Step Title */}
                <h3 className={styles.cardTitle}>{step.title}</h3>
                
                {/* Hover Line */}
                <div className={styles.hoverIndicator}></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
