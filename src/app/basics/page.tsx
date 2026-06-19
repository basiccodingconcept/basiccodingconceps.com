import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Programming Basics & Fundamentals | Basic Coding Concepts",
  description: "Master the fundamentals of programming. Comprehensive guides covering basic coding concepts, programming principles, and everything beginners need to start coding.",
  keywords: "programming basics, coding fundamentals, basic coding concepts, learn programming, programming for beginners",
  openGraph: {
    title: "Programming Basics & Fundamentals | Basic Coding Concepts",
    description: "Master the fundamentals of programming. Comprehensive guides covering basic coding concepts, programming principles, and everything beginners need to start coding.",
    type: "website",
  },
};

export default function BasicsPage() {
  const guides = [
    {
      slug: "basic-coding-concepts",
      title: "Basic Coding Concepts",
      desc: "The complete guide to foundational programming concepts. Everything you need to understand how code works.",
      badge: "Start Here",
      icon: "01",
      themeClass: styles.cardIndigo,
      badgeClass: styles.badgeIndigo,
      iconClass: styles.iconIndigo,
    },
    {
      slug: "programming-fundamentals",
      title: "Programming Fundamentals",
      desc: "Core principles that apply to every programming language. Build a solid foundation for any tech career.",
      badge: "Essential",
      icon: "02",
      themeClass: styles.cardEmerald,
      badgeClass: styles.badgeEmerald,
      iconClass: styles.iconEmerald,
    },
    {
      slug: "coding-basics",
      title: "Coding Basics",
      desc: "A gentle introduction to writing code. Perfect for absolute beginners with zero experience.",
      badge: "Beginner Friendly",
      icon: "03",
      themeClass: styles.cardAmber,
      badgeClass: styles.badgeAmber,
      iconClass: styles.iconAmber,
    },
    {
      slug: "programming-basics",
      title: "Programming Basics",
      desc: "Learn the language-agnostic skills that every programmer needs. Think like a developer.",
      badge: "Core Knowledge",
      icon: "04",
      themeClass: styles.cardRose,
      badgeClass: styles.badgeRose,
      iconClass: styles.iconRose,
    },
  ];

  const outcomes = [
    { text: "Understand how computers execute instructions" },
    { text: "Store and manipulate data with variables" },
    { text: "Automate repetitive tasks with loops" },
    { text: "Create reusable code with functions" },
    { text: "Make decisions with conditional logic" },
    { text: "Debug and fix common errors" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              Foundation Knowledge
            </div>
            <h1 className={styles.title}>
              Programming Basics &amp; Fundamentals
            </h1>
            <p className={styles.subtitle}>
              Build your programming foundation from the ground up. These comprehensive guides cover{" "}
              <strong>everything you need</strong> to understand how code works and start your journey as a developer.
            </p>

            {/* Stats Bar */}
            <div className={styles.statsBar}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>4</div>
                <div className={styles.statLabel}>Guides</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>10+</div>
                <div className={styles.statLabel}>Concepts</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>100%</div>
                <div className={styles.statLabel}>Free</div>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className={styles.container}>
          <div className={styles.grid}>
            {guides.map((guide, idx) => (
              <Link
                key={idx}
                id={`basics-guide-link-${guide.slug}`}
                href={`/basics/${guide.slug}`}
                className={`${styles.card} ${guide.themeClass}`}
              >
                <span className={`${styles.cardBadge} ${guide.badgeClass}`}>
                  {guide.badge}
                </span>
                <div className={styles.cardHeader}>
                  <div className={`${styles.cardIcon} ${guide.iconClass}`}>
                    {guide.icon}
                  </div>
                  <h2 className={styles.cardTitle}>{guide.title}</h2>
                </div>
                <p className={styles.cardDesc}>{guide.desc}</p>
                <div className={styles.cardFooter}>
                  <span>Explore guide</span>
                  <svg
                    className={styles.cardArrow}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* What You'll Learn */}
        <section className={styles.outcomesSection}>
          <div className={styles.outcomesHeader}>
            <h2 className={styles.outcomesTitle}>What You'll Learn</h2>
            <p className={styles.outcomesSubtitle}>
              By the end of these guides, you'll have a solid understanding of:
            </p>
          </div>
          <div className={styles.outcomesGrid}>
            {outcomes.map((outcome, idx) => (
              <div key={idx} className={styles.outcomeCard}>
                <span className={styles.outcomeIcon} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginRight: "12px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className={styles.outcomeText}>{outcome.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call To Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <span className={styles.ctaBadge}>Recommended Starting Point</span>
            <h2 className={styles.ctaTitle}>Ready to Begin Your Journey?</h2>
            <p className={styles.ctaDesc}>
              Start with our comprehensive &quot;Basic Coding Concepts&quot; guide — the perfect foundation for absolute beginners.
            </p>
             <Link id="basics-recommended-start-btn" href="/basics/basic-coding-concepts" className={styles.ctaButton}>
              <span>Start with Basic Coding Concepts</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
