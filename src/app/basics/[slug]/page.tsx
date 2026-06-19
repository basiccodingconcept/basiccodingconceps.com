import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LessonPlayground from "@/components/LessonPlayground";
import { basicsData, BasicSection } from "@/data/basics";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(basicsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = basicsData[slug];

  if (!guide) {
    return {
      title: "Guide Not Found | Basic Coding Concepts",
      description: "The requested programming guide could not be found.",
    };
  }

  return {
    title: `${guide.title} - Learn Programming Basics | Basic Coding Concepts`,
    description: guide.desc,
    keywords: `${guide.title.toLowerCase()}, coding basics, programming for beginners, computer science fundamentals, learning to code`,
    openGraph: {
      title: `${guide.title} - Learn Programming Basics | Basic Coding Concepts`,
      description: guide.desc,
      type: "article",
    },
  };
}

export default async function BasicGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = basicsData[slug];

  if (!guide) {
    notFound();
  }

  const prevGuide = guide.prevSlug ? basicsData[guide.prevSlug] : null;
  const nextGuide = guide.nextSlug ? basicsData[guide.nextSlug] : null;

  const renderSection = (section: BasicSection, idx: number) => {
    switch (section.type) {
      case "heading":
        return (
          <h2
            key={idx}
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: section.content || "" }}
          />
        );
      case "heading3":
        return (
          <h3
            key={idx}
            className={styles.heading3}
            dangerouslySetInnerHTML={{ __html: section.content || "" }}
          />
        );
      case "text":
        return (
          <p
            key={idx}
            dangerouslySetInnerHTML={{ __html: section.content || "" }}
          />
        );
      case "callout":
        return (
          <div key={idx} className={styles.callout}>
            <div className={styles.calloutIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--primary)" }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <div className={styles.calloutContent}>
              {section.title && <div className={styles.calloutTitle}>{section.title}</div>}
              {section.content && <p className={styles.calloutText} dangerouslySetInnerHTML={{ __html: section.content }} />}
            </div>
          </div>
        );
      case "list":
        return (
          <ul key={idx} className={styles.list}>
            {section.items?.map((item, itemIdx) => (
              <li
                key={itemIdx}
                className={styles.listItem}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        );
      case "grid":
        return (
          <div key={idx} className={styles.grid}>
            {section.gridItems?.map((gridItem, itemIdx) => {
              if (gridItem.href) {
                return (
                  <Link href={gridItem.href} key={itemIdx} className={styles.gridCard}>
                    <h4 className={styles.gridCardTitle}>{gridItem.title}</h4>
                    <p className={styles.gridCardContent}>{gridItem.content}</p>
                  </Link>
                );
              }
              return (
                <div key={itemIdx} className={styles.gridCard}>
                  <h4 className={styles.gridCardTitle}>{gridItem.title}</h4>
                  <p className={styles.gridCardContent}>{gridItem.content}</p>
                </div>
              );
            })}
          </div>
        );
      case "steps":
        return (
          <div key={idx} className={styles.stepsContainer}>
            {section.stepsItems?.map((stepItem, itemIdx) => (
              <div key={itemIdx} className={styles.stepItem}>
                <div className={styles.stepNumber}>{stepItem.step}</div>
                <div className={styles.stepContentWrapper}>
                  <h4 className={styles.stepTitle}>{stepItem.title}</h4>
                  <p className={styles.stepContent}>{stepItem.content}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case "playground":
        return (
          <div key={idx} className={styles.playgroundSection}>
            <h3 className={styles.playgroundTitle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Interactive Practice Sandbox
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
              Inspect the sample code below, edit it to test assumptions, and click <strong>Run Code</strong> to execute in real-time.
            </p>
            <LessonPlayground initialCode={section.code || ""} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <article className={styles.articleLayout}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSeparator}>&gt;</span>
            <Link href="/basics" className={styles.breadcrumbLink}>
              Basics
            </Link>
            <span className={styles.breadcrumbSeparator}>&gt;</span>
            <span className={styles.breadcrumbCurrent}>{guide.title}</span>
          </nav>

          {/* Header */}
          <header className={styles.header}>
            <div className={styles.metaRow}>
              <span className={`${styles.metaBadge} ${guide.level === "Beginner" ? styles.metaBadgeBeginner : styles.metaBadgeIntermediate}`}>
                {guide.level}
              </span>
              <span className={styles.timeEstimate}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{guide.time}</span>
              </span>
            </div>
            <h1 className={styles.articleTitle}>{guide.title}</h1>
            <p className={styles.articleDesc}>{guide.desc}</p>
          </header>

          {/* Article body */}
          <div className={styles.prose}>
            {guide.sections.map((section, idx) => renderSection(section, idx))}

            {/* Bottom CTA Box if present */}
            {guide.ctaText && guide.ctaHref && (
              <div className={styles.ctaBox}>
                <p className={styles.ctaText}>
                  Ready to dive deeper? Start your learning journey with our first concept:
                </p>
                <Link href={guide.ctaHref} className={styles.ctaButton}>
                  <span>{guide.ctaText}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Bottom navigation */}
          <nav className={styles.bottomNav}>
            {prevGuide ? (
              <Link id="basics-prev-link" href={`/basics/${prevGuide.slug}`} className={styles.navCard}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <div className={styles.navCardContent}>
                  <span className={styles.navCardLabel}>Previous Guide</span>
                  <span className={styles.navCardTitle}>{prevGuide.title}</span>
                </div>
              </Link>
            ) : (
              <Link id="basics-overview-back-link" href="/basics" className={styles.navCard}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <div className={styles.navCardContent}>
                  <span className={styles.navCardLabel}>Back To</span>
                  <span className={styles.navCardTitle}>Basics Overview</span>
                </div>
              </Link>
            )}

            {nextGuide ? (
              <Link id="basics-next-link" href={`/basics/${nextGuide.slug}`} className={`${styles.navCard} ${styles.navCardRight}`}>
                <div className={styles.navCardContent}>
                  <span className={styles.navCardLabel}>Next Guide</span>
                  <span className={styles.navCardTitle}>{nextGuide.title}</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            ) : (
              <Link id="basics-concepts-link" href="/concepts" className={`${styles.navCard} ${styles.navCardRight}`}>
                <div className={styles.navCardContent}>
                  <span className={styles.navCardLabel}>Next Step</span>
                  <span className={styles.navCardTitle}>Interactive Concepts</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            )}
          </nav>
        </article>
      </main>

      <Footer />
    </div>
  );
}
