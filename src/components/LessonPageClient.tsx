"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LessonData, LessonSection, lessons } from "@/data/lessons";
import Header from "@/components/Header";
import LessonPlayground from "@/components/LessonPlayground";
import Quiz from "@/components/Quiz";
import styles from "@/app/concepts/[slug]/page.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.faqAccordion}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}>
            <button
              className={styles.faqHeader}
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span className={styles.faqQuestion}>{faq.question}</span>
              <span className={styles.faqIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            <div className={`${styles.faqBody} ${isOpen ? styles.faqBodyOpen : ""}`}>
              <div className={styles.faqContent}>
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface LessonPageClientProps {
  lesson: LessonData;
}

export default function LessonPageClient({ lesson }: LessonPageClientProps) {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);

  // Load completed lessons from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("completed_lessons");
    if (stored) {
      try {
        setCompletedSlugs(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse completed lessons", e);
      }
    }
  }, []);

  const toggleCompleted = (slug: string) => {
    let updated: string[];
    if (completedSlugs.includes(slug)) {
      updated = completedSlugs.filter((s) => s !== slug);
    } else {
      updated = [...completedSlugs, slug];
    }
    setCompletedSlugs(updated);
    localStorage.setItem("completed_lessons", JSON.stringify(updated));
  };

  // Sidebar and progress counts are removed
  const isCurrentCompleted = completedSlugs.includes(lesson.slug);

  const prevLesson = lesson.prevSlug ? lessons[lesson.prevSlug] : null;
  const nextLesson = lesson.nextSlug ? lessons[lesson.nextSlug] : null;

  // Find a heading section near the middle of the lesson to insert the playground before
  const findPlaygroundInsertionIndex = () => {
    const totalSections = lesson.sections.length;
    const mid = Math.floor(totalSections / 2);
    
    // Look for the nearest heading starting from the middle and searching outwards
    for (let offset = 0; offset < totalSections; offset++) {
      const rightIdx = mid + offset;
      const leftIdx = mid - offset;
      
      if (rightIdx < totalSections && lesson.sections[rightIdx].type === "heading" && rightIdx > 2) {
        return rightIdx;
      }
      if (leftIdx > 2 && lesson.sections[leftIdx].type === "heading") {
        return leftIdx;
      }
    }
    
    return mid; // Fallback to raw midpoint
  };

  const playgroundInsertionIndex = findPlaygroundInsertionIndex();

  const renderSection = (section: LessonSection, idx: number) => {
    switch (section.type) {
      case "text":
        return (
          <p
            key={idx}
            dangerouslySetInnerHTML={{ __html: section.content || "" }}
          />
        );
      case "heading":
        return (
          <h2
            key={idx}
            dangerouslySetInnerHTML={{ __html: section.content || "" }}
          />
        );
      case "list":
        return (
          <ul key={idx}>
            {section.items?.map((item, itemIdx) => (
              <li
                key={itemIdx}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        );
      case "callout":
        return (
          <div key={idx} className={styles.callout}>
            {section.title && <div className={styles.calloutTitle}>{section.title}</div>}
            {section.content && (
              <div
                className={styles.calloutContent}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}
          </div>
        );
      case "faq":
        return (
          <FAQAccordion key={idx} faqs={section.faqs || []} />
        );
      case "table":
        return (
          <div key={idx} className={styles.tableWrapper}>
            <table className={styles.modernTable}>
              <thead>
                <tr>
                  {section.headers?.map((header, hIdx) => (
                    <th key={hIdx} dangerouslySetInnerHTML={{ __html: header }} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows?.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navigation Header */}
      <Header />

      {/* Main viewport grid offset by fixed header height (80px) */}
      <div style={{ marginTop: "80px", flex: 1, display: "flex", flexDirection: "column" }}>
        
        <div className={styles.lessonLayout}>
          {/* Main Content Pane */}
          <main className={styles.mainContainer}>
            <div className={styles.contentWrapper}>
              
              {/* Breadcrumbs navigation */}
              <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
                <Link href="/" className={styles.breadcrumbLink}>
                  Home
                </Link>
                <span>&gt;</span>
                <Link href="/#concepts" className={styles.breadcrumbLink}>
                  Concepts
                </Link>
                <span>&gt;</span>
                <span style={{ color: "var(--text-secondary)" }}>{lesson.title}</span>
              </nav>

              {/* Lesson Title & badges */}
              <h1 className={styles.lessonTitle}>{lesson.title}</h1>

              <div className={styles.metaRow}>
                <span
                  className={`${styles.metaBadge} ${
                    lesson.level === "Beginner"
                      ? styles.metaBadgeBeginner
                      : lesson.level === "Intermediate"
                      ? styles.metaBadgeIntermediate
                      : styles.metaBadgeAdvanced
                  }`}
                >
                  {lesson.level}
                </span>

                <span className={styles.timeEstimate}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle" }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{lesson.time} reading</span>
                </span>
              </div>

              {/* Prose Content */}
              <article className={styles.prose}>
                {lesson.sections.map((section, idx) => {
                  const isPlaygroundPosition = idx === playgroundInsertionIndex;
                  return (
                    <React.Fragment key={idx}>
                      {isPlaygroundPosition && lesson.initialCode && (
                        <div style={{ marginTop: "36px", marginBottom: "36px" }}>
                          <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
                              <polyline points="16 18 22 12 16 6"></polyline>
                              <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                            Interactive Practice Sandbox
                          </h3>
                          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                            Inspect the sample code below, edit it to test assumptions, and click <strong>Run Code</strong> to execute in real-time.
                          </p>
                          <LessonPlayground initialCode={lesson.initialCode} />
                        </div>
                      )}
                      {renderSection(section, idx)}
                    </React.Fragment>
                  );
                })}
              </article>

              {/* Multiple Choice Quiz */}
              {lesson.quizQuestions && lesson.quizQuestions.length > 0 && (
                <div style={{ marginTop: "48px" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
                      <path d="M9 11l3 3L22 4"></path>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    Check Your Understanding
                  </h3>
                  <Quiz
                    title={lesson.quizTitle}
                    questions={lesson.quizQuestions}
                    conceptId={lesson.slug}
                  />
                </div>
              )}

              {/* Mark as Complete Checkbox Panel */}
              <div className={styles.completionBlock}>
                <div className={styles.completionLeft}>
                  <div className={styles.completionLabel}>
                    {isCurrentCompleted ? "Lesson Completed!" : "Ready to check this off?"}
                  </div>
                  <div className={styles.completionDesc}>
                    {isCurrentCompleted
                      ? "This concept is added to your learning portfolio. Ready to move on?"
                      : "Mark this page complete to save your progress on this pathway."}
                  </div>
                </div>

                <button
                  className={`${styles.completeToggleBtn} ${
                    isCurrentCompleted
                      ? styles.completeToggleBtnFinished
                      : styles.completeToggleBtnUnfinished
                  }`}
                  onClick={() => toggleCompleted(lesson.slug)}
                  aria-label="Toggle completion state"
                >
                  {isCurrentCompleted ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Completed
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                      Mark as Complete
                    </>
                  )}
                </button>
              </div>

              {/* Navigation Footer links */}
              <footer className={styles.navigationFooter}>
                {prevLesson ? (
                  <Link href={`/concepts/${prevLesson.slug}`} className={styles.navLinkBtn}>
                    <span className={styles.navLinkSub}>Previous Lesson</span>
                    <span className={styles.navLinkTitle}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(180deg)", display: "inline-block", marginRight: "4px" }}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                      {prevLesson.title}
                    </span>
                  </Link>
                ) : (
                  <div style={{ flex: 1 }}></div> // Spacing balance
                )}

                {nextLesson ? (
                  <Link href={`/concepts/${nextLesson.slug}`} className={styles.navLinkBtn} style={{ textAlign: "right", alignItems: "flex-end" }}>
                    <span className={styles.navLinkSub}>Next Lesson</span>
                    <span className={styles.navLinkTitle}>
                      {nextLesson.title}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", marginLeft: "4px" }}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </Link>
                ) : (
                  <Link href="/#learning-path" className={styles.navLinkBtn} style={{ textAlign: "right", alignItems: "flex-end" }}>
                    <span className={styles.navLinkSub}>Pathway Complete</span>
                    <span className={styles.navLinkTitle} style={{ color: "var(--accent-green)" }}>
                      Back to Pathway Home
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", marginLeft: "4px" }}>
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </span>
                  </Link>
                )}
              </footer>

            </div>
          </main>
        </div>

      </div>
    </div>
  );
}
