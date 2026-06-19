import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Code Playgrounds | Basic Coding Concepts",
  description: "Free online code playgrounds for JavaScript and Python. Write, run, and experiment with code directly in your browser - no setup required.",
  keywords: "code playground, online coding, javascript playground, python playground, learn to code, programming editor",
  openGraph: {
    title: "Code Playgrounds | Basic Coding Concepts",
    description: "Free online code playgrounds for JavaScript and Python. Write, run, and experiment with code directly in your browser - no setup required.",
    type: "website",
  },
};

export default function PlaygroundsOverviewPage() {
  const playgrounds = [
    {
      slug: "javascript",
      title: "JavaScript Playground",
      desc: "Write and run JavaScript code instantly in your browser. Perfect for practicing web development concepts, variables, loops, arrays, and functions.",
      badge: "Beginner Friendly",
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 18.5c-.7 0-1.1-.3-1.5-.7-.4-.4-.5-1-.5-1.6h1.5c0 .4.1.6.3.8.2.2.4.3.7.3.3 0 .5-.1.7-.3.1-.2.2-.4.2-.8V9.8h1.6v6.4c0 .9-.2 1.5-.7 1.9-.5.4-1.2.6-2.3.6zm6.3 0c-1.1 0-1.9-.5-2.4-1.3l1.2-.8c.3.5.7.8 1.2.8.4 0 .7-.1.9-.3.2-.2.3-.5.3-.9 0-.4-.1-.6-.3-.8-.2-.2-.6-.3-1.1-.5-.8-.2-1.3-.5-1.7-.8-.4-.3-.6-.8-.6-1.5 0-.7.3-1.2.8-1.6.5-.4 1.2-.6 2.1-.6.9 0 1.5.3 2 .8.5.5.6 1.1.6 1.7h-1.5c0-.4-.1-.6-.3-.8-.2-.2-.5-.2-.9-.2-.4 0-.6.1-.8.2-.2.2-.2.4-.2.7 0 .3.1.5.3.7.2.1.5.3 1 .5.8.3 1.4.5 1.8.9.4.3.5.9.5 1.6 0 .7-.3 1.3-.8 1.7-.5.4-1.3.6-2.2.6z" />
        </svg>
      ),
      themeClass: styles.cardJS,
      iconClass: styles.iconJS,
      features: [
        "Instant execution & code compilation",
        "Interactive console logging outputs",
        "Zero installations or setup required"
      ]
    },
    {
      slug: "python",
      title: "Python Playground",
      desc: "Experiment with Python code right in your browser using Pyodide (Python WebAssembly). Great for learning algorithmic thinking, variables, and math logic.",
      badge: "Beginner Friendly",
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.002 2C8.36 2 8.793 3.568 8.793 4.908v1.737h6.536v.922H6.602c-1.34 0-2.602 1.054-2.602 2.394v3.834c0 1.34 1.117 2.457 2.457 2.457h1.492v-2.09c0-1.548 1.258-2.806 2.806-2.806h5.811c1.34 0 2.215-1.117 2.215-2.457V6.621c0-1.34-.847-2.613-2.187-2.613H12.03L12.002 2z" />
          <path d="M11.998 22c3.642 0 3.209-1.568 3.209-2.908V17.35H8.67v-.921h8.726c1.34 0 2.603-1.054 2.603-2.394V10.2c0-1.34-1.117-2.456-2.456-2.456H16.05v2.09c0 1.547-1.257 2.805-2.805 2.805H7.433c-1.34 0-2.215 1.117-2.215 2.457v2.302c0 1.34.847 2.613 2.187 2.613H11.97L11.998 22z" opacity="0.9" />
          <circle cx="10.45" cy="5.15" r="0.65" />
          <circle cx="13.55" cy="18.85" r="0.65" />
        </svg>
      ),
      themeClass: styles.cardPython,
      iconClass: styles.iconPython,
      features: [
        "Real native Python interpreter in browser",
        "Redirected print() stdout logging",
        "Support for basic packages & math modules"
      ]
    }
  ];

  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      title: "Instant Feedback",
      desc: "See standard output logs and errors immediately as you execute your code."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Safe to Experiment",
      desc: "You can't break anything. Try wild assumptions, and simply reset or refresh to start fresh."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      title: "Works Everywhere",
      desc: "Desktop, tablet, or phone - just open the URL and write code wherever you are."
    }
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.badge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: "4px" }}>
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Interactive Sandbox
            </div>
            <h1 className={styles.title}>Code Playgrounds</h1>
            <p className={styles.subtitle}>
              Write and run code directly in your browser. No downloads, no setup, no account creation. Just start coding!
            </p>
          </header>

          {/* Grid of Playgrounds */}
          <div className={styles.grid}>
            {playgrounds.map((p, idx) => (
              <Link key={idx} href={`/playground/${p.slug}`} className={`${styles.card} ${p.themeClass}`}>
                <div className={styles.cardBgHover}></div>
                <div className={styles.cardHeader}>
                  <div className={`${styles.cardIcon} ${p.iconClass}`}>
                    {p.icon}
                  </div>
                  <span className={`${styles.cardBadge} ${styles.badgeEmerald}`}>
                    {p.badge}
                  </span>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                </div>
                <p className={styles.cardDesc}>{p.desc}</p>

                <ul className={styles.featuresList}>
                  {p.features.map((feat, fIdx) => (
                    <li key={fIdx} className={styles.featureItem}>
                      <span className={styles.featureIcon}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <span>Open {p.title.split(" ")[0]} Editor</span>
                  <svg className={styles.cardArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Benefits Section */}
          <section className={styles.infoSection}>
            <h2 className={styles.infoTitle}>Why Use Our Playgrounds?</h2>
            <div className={styles.infoGrid}>
              {benefits.map((b, idx) => (
                <div key={idx} className={styles.infoCard}>
                  <div className={styles.infoIcon}>{b.icon}</div>
                  <h3 className={styles.infoCardTitle}>{b.title}</h3>
                  <p className={styles.infoCardDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
