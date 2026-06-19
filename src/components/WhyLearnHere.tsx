"use client";

import React from "react";
import styles from "./WhyLearnHere.module.css";

interface Feature {
  title: string;
  desc: string;
  svgIcon: React.ReactNode;
}

export default function WhyLearnHere() {
  const features: Feature[] = [
    {
      title: "Visual Learning",
      desc: "Animated explanations make abstract concepts click instantly",
      svgIcon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )
    },
    {
      title: "Hands-on Practice",
      desc: "Write real code in our playground—no setup needed",
      svgIcon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"/>
          <line x1="12" y1="19" x2="20" y2="19"/>
        </svg>
      )
    },
    {
      title: "No Setup Required",
      desc: "Start coding in seconds, right in your browser",
      svgIcon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    {
      title: "Track Progress",
      desc: "See how far you've come and what's next",
      svgIcon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    }
  ];

  return (
    <section id="why-learn" className={`${styles.section} section-padding`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Why Learn Here?</h2>
          <p className={styles.subtitle}>
            We built this for people who felt intimidated by other coding sites
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map((feat, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper} style={{ background: "rgba(139,92,246,0.08)", color: "var(--primary)" }}>
                {feat.svgIcon}
              </div>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
