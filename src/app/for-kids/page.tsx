/* src/app/for-kids/page.tsx */

import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { kidsLessons } from "@/data/kids";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Coding for Kids | Basic Coding Concepts",
  description: "Fun, beginner-friendly coding lessons designed for kids and young learners. Learn variables, loops, conditionals, and debugging through games and toys!",
  keywords: "coding for kids, programming for children, learn to code games, visual programming, coding basics for kids",
  openGraph: {
    title: "Coding for Kids | Basic Coding Concepts",
    description: "Fun, beginner-friendly coding lessons designed for kids and young learners. Learn variables, loops, conditionals, and debugging through games and toys!",
    type: "website",
  },
};

const getKidsQuestIcon = (slug: string, width = 48, height = 48) => {
  switch (slug) {
    case "what-is-coding":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#8b5cf6' }}>
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      );
    case "variables":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#f59e0b' }}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "data-types":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3b82f6' }}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      );
    case "operators":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0d9488' }}>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="8" y1="9" x2="16" y2="15" />
        </svg>
      );
    case "conditionals":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#db2777' }}>
          <path d="M18 8h-4a4 4 0 0 0-4 4v8" />
          <path d="M6 8h4a4 4 0 0 1 4 4v8" />
          <polyline points="14 16 18 20 14 24" />
          <polyline points="10 16 6 20 10 24" />
        </svg>
      );
    case "loops":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4f46e5' }}>
          <path d="M21.5 2v6h-6" />
          <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      );
    case "functions":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#059669' }}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "arrays":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#7c3aed' }}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      );
    case "objects":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0891b2' }}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="16" y1="2" x2="16" y2="4" />
          <line x1="8" y1="2" x2="8" y2="4" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "debugging":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#dc2626' }}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
    default:
      return null;
  }
};

export default function KidsOverviewPage() {
  const lessonsArray = Object.values(kidsLessons).sort((a, b) => a.num - b.num);

  const getTagColorClass = (borderClass: string) => {
    switch (borderClass) {
      case "borderViolet": return styles.tagViolet;
      case "borderAmber": return styles.tagAmber;
      case "borderBlue": return styles.tagBlue;
      case "borderTeal": return styles.tagTeal;
      case "borderPink": return styles.tagPink;
      case "borderIndigo": return styles.tagIndigo;
      case "borderEmerald": return styles.tagEmerald;
      case "borderPurple": return styles.tagPurple;
      case "borderCyan": return styles.tagCyan;
      case "borderRed": return styles.tagRed;
      default: return styles.tagViolet;
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.badge}>
              Coding is Fun!
            </div>
            <h1 className={styles.title}>Coding for Kids</h1>
            <p className={styles.subtitle}>
              Learning to code is like gaining a superpower! Learn how to make computer programs do amazing things with our fun visual guides.
            </p>
          </header>

          {/* Adventure Quest Map */}
          <section style={{ marginBottom: "64px" }}>
            <h2 className={styles.sectionTitle}>Your Coding Quest Map</h2>
            <p className={styles.sectionDesc}>Complete these 10 challenges to become a Code Detective!</p>

            <div className={styles.grid}>
              {lessonsArray.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/for-kids/${lesson.slug}`}
                  className={`${styles.card} ${styles[lesson.borderClass]}`}
                >
                  <div className={styles.cardIcon}>
                    {getKidsQuestIcon(lesson.slug, 56, 56)}
                  </div>
                  <span className={`${styles.cardTag} ${getTagColorClass(lesson.borderClass)}`}>
                    Quest {lesson.num}
                  </span>
                  <h3 className={styles.cardTitle}>{lesson.title}</h3>
                  <p className={styles.cardDesc}>{lesson.analogyTitle}</p>
                  
                  <div className={styles.cardFooter}>
                    <span>Start Quest</span>
                    <svg className={styles.cardArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Why Learn to Code Section */}
          <section className={styles.whyLearnSection}>
            <h2 className={styles.whyLearnTitle}>Why Learn to Code?</h2>
            <div className={styles.whyLearnGrid}>
              <div className={styles.whyLearnItem}>
                <div className={styles.whyLearnEmoji} style={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <line x1="6" y1="12" x2="10" y2="12" />
                    <line x1="8" y1="10" x2="8" y2="14" />
                    <circle cx="15.5" cy="12" r="1" />
                    <circle cx="18.5" cy="12" r="1" />
                  </svg>
                </div>
                <h3 className={styles.whyLearnCardTitle}>Create Games</h3>
                <p className={styles.whyLearnCardDesc}>Make your own video games to play with friends!</p>
              </div>
              <div className={styles.whyLearnItem}>
                <div className={styles.whyLearnEmoji} style={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <line x1="8" y1="16" x2="8.01" y2="16" />
                    <line x1="16" y1="16" x2="16.01" y2="16" />
                  </svg>
                </div>
                <h3 className={styles.whyLearnCardTitle}>Control Robots</h3>
                <p className={styles.whyLearnCardDesc}>Tell robots how to move and perform operations!</p>
              </div>
              <div className={styles.whyLearnItem}>
                <div className={styles.whyLearnEmoji} style={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12" y2="18" />
                  </svg>
                </div>
                <h3 className={styles.whyLearnCardTitle}>Make Apps</h3>
                <p className={styles.whyLearnCardDesc}>Design helpful applications that solve daily challenges!</p>
              </div>
              <div className={styles.whyLearnItem}>
                <div className={styles.whyLearnEmoji} style={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-4.12 2.5 2.5 0 0 1 0-4.12A2.5 2.5 0 0 1 9.5 2Z"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-4.12 2.5 2.5 0 0 0 0-4.12A2.5 2.5 0 0 0 14.5 2Z"/>
                  </svg>
                </div>
                <h3 className={styles.whyLearnCardTitle}>Solve Puzzles</h3>
                <p className={styles.whyLearnCardDesc}>Train your brain to think logically and solve mysteries!</p>
              </div>
            </div>
          </section>

          {/* Fun Coding Facts Section */}
          <section className={styles.factsSection}>
            <h2 className={styles.factsTitle}>Fun Coding Facts!</h2>
            <div className={styles.factsGrid}>
              <div className={styles.factItem}>
                <div style={{
                  fontSize: "1.1rem",
                  fontWeight: "800",
                  color: "#d97706",
                  background: "rgba(245, 158, 11, 0.1)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1.5px solid #fcd34d"
                }}>1</div>
                <div className={styles.factInfo}>
                  <h3 className={styles.factCardTitle}>Young Creators</h3>
                  <p className={styles.factCardDesc}>Many developers started writing code between ages 7 and 12. You can build cool projects at any age!</p>
                </div>
              </div>
              <div className={styles.factItem}>
                <div style={{
                  fontSize: "1.1rem",
                  fontWeight: "800",
                  color: "#d97706",
                  background: "rgba(245, 158, 11, 0.1)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1.5px solid #fcd34d"
                }}>2</div>
                <div className={styles.factInfo}>
                  <h3 className={styles.factCardTitle}>Ada Lovelace</h3>
                  <p className={styles.factCardDesc}>The world's first computer program was written by Ada Lovelace in the 1840s—almost 200 years ago!</p>
                </div>
              </div>
              <div className={styles.factItem}>
                <div style={{
                  fontSize: "1.1rem",
                  fontWeight: "800",
                  color: "#d97706",
                  background: "rgba(245, 158, 11, 0.1)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1.5px solid #fcd34d"
                }}>3</div>
                <div className={styles.factInfo}>
                  <h3 className={styles.factCardTitle}>Minecraft is Code</h3>
                  <p className={styles.factCardDesc}>Popular games like Minecraft are built entirely out of millions of lines of code instructions!</p>
                </div>
              </div>
              <div className={styles.factItem}>
                <div style={{
                  fontSize: "1.1rem",
                  fontWeight: "800",
                  color: "#d97706",
                  background: "rgba(245, 158, 11, 0.1)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1.5px solid #fcd34d"
                }}>4</div>
                <div className={styles.factInfo}>
                  <h3 className={styles.factCardTitle}>Over 700 Languages</h3>
                  <p className={styles.factCardDesc}>There are hundreds of coding languages, but learning the basic logic of one lets you understand them all!</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className={styles.ctaArea}>
            <h2 className={styles.ctaTitle}>Ready to Start Your Adventure?</h2>
            <p className={styles.ctaDesc}>Jump into Quest 1 and discover how you can talk to computer systems!</p>
            <Link href="/for-kids/what-is-coding" className={styles.ctaBtn}>
              <span>Launch Quest 1</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
