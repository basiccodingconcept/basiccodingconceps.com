"use client";

import React from "react";
import Link from "next/link";
import styles from "./CoreConcepts.module.css";

interface Concept {
  id: string;
  name: string;
  desc: string;
  tag: "Beginner" | "Intermediate" | "Advanced";
  tagClass: string;
  svgIcon: React.ReactNode;
}

export default function CoreConcepts() {
  const concepts: Concept[] = [
    {
      id: "variables",
      name: "Variables",
      desc: "Store and manage data like labeled boxes",
      tag: "Beginner",
      tagClass: styles.tagBasics,
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="21" y1="9" x2="3" y2="9"/>
          <text x="12" y="17" fontFamily="var(--font-mono)" fontSize="12" fontWeight="700" textAnchor="middle" fill="currentColor">x</text>
        </svg>
      )
    },
    {
      id: "loops",
      name: "Loops",
      desc: "Repeat actions without writing code twice",
      tag: "Beginner",
      tagClass: styles.tagBasics,
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
        </svg>
      )
    },
    {
      id: "functions",
      name: "Functions",
      desc: "Create reusable blocks of code",
      tag: "Intermediate",
      tagClass: styles.tagStructures,
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    {
      id: "arrays",
      name: "Arrays",
      desc: "Organize collections of related data",
      tag: "Intermediate",
      tagClass: styles.tagStructures,
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="5" height="18" rx="1"/>
          <rect x="9.5" y="3" width="5" height="18" rx="1"/>
          <rect x="16" y="3" width="5" height="18" rx="1"/>
        </svg>
      )
    },
    {
      id: "conditionals",
      name: "Conditionals",
      desc: "Make decisions with if/else logic",
      tag: "Beginner",
      tagClass: styles.tagBasics,
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 12l10 10 10-10L12 2z"/>
          <path d="M12 6v12"/>
          <path d="M9 15l3 3 3-3"/>
        </svg>
      )
    },
    {
      id: "objects",
      name: "Objects",
      desc: "Group related data together",
      tag: "Intermediate",
      tagClass: styles.tagStructures,
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    }
  ];

  return (
    <section id="concepts" className={`${styles.section} section-padding`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Core Concepts to Master</h2>
          <p className={styles.subtitle}>
            Each concept builds on the last. Start anywhere, but we recommend following the path!
          </p>
        </div>

        {/* Grid of Concept Cards */}
        <div className={styles.grid}>
          {concepts.map((concept) => (
            <Link
              key={concept.id}
              href={`/concepts/${concept.id}/`}
              className={styles.card}
              style={{ position: "relative", overflow: "hidden" }}
            >
              {/* Background gradient overlay on hover */}
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, var(--card-bg) 60%, rgba(var(--primary-rgb), 0.04) 100%)`,
                  opacity: 0,
                  transition: "opacity var(--transition-speed) ease",
                  zIndex: 0
                }}
                className="hover-bg-overlay"
              ></div>

              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
                {/* Icon */}
                <div 
                  style={{
                    background: `linear-gradient(135deg, var(--primary) 0%, var(--accent-teal) 100%)`,
                    color: "white",
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    marginBottom: "16px",
                    alignSelf: "flex-start",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  {concept.svgIcon}
                </div>

                {/* Difficulty badge */}
                <span 
                  className={`${styles.tag} ${concept.tagClass}`} 
                  style={{ 
                    display: "inline-block", 
                    marginBottom: "12px",
                    alignSelf: "flex-start"
                  }}
                >
                  {concept.tag}
                </span>

                <h3 className={styles.cardTitle} style={{ marginBottom: "8px" }}>{concept.name}</h3>
                <p className={styles.cardDesc} style={{ marginBottom: "16px" }}>{concept.desc}</p>

                {/* Learn more link */}
                <div style={{ display: "flex", alignItems: "center", color: "var(--primary)", fontWeight: "600", fontSize: "0.9rem" }}>
                  <span>Start learning</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "16px", height: "16px", marginLeft: "4px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Actions */}
        <div className={styles.footerActions}>
          <Link href="/concepts" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)", fontWeight: "700", fontSize: "1.1rem" }}>
            View all 13 concepts
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
