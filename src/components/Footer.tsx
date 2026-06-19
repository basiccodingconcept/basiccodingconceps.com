"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ position: "relative", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom right, #8b5cf6, #7c3aed)", borderRadius: "12px", transform: "rotate(3deg)" }}></div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", color: "white" }}>
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: "1" }}>
                  Basic Coding
                </span>
                <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#8b5cf6", letterSpacing: "0.1em", marginTop: "2px" }}>
                  CONCEPTS
                </span>
              </div>
            </Link>
            <p className={styles.brandText}>
              Learn programming fundamentals through interactive tutorials, visual explanations, and hands-on exercises. Perfect for absolute beginners.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", background: "rgba(139, 92, 246, 0.08)", borderRadius: "12px", border: "1px solid rgba(139, 92, 246, 0.15)", width: "fit-content" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#8b5cf6" }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ fontSize: "0.95rem", fontWeight: "700", color: "#8b5cf6" }}>100% Free to Learn!</span>
            </div>
          </div>

          {/* Links Column 1: Learning Path */}
          <div>
            <h4 className={styles.title}>Learning Path</h4>
            <ul className={styles.links}>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: "50%", background: "var(--secondary)", fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)" }}>1</span>
                <Link href="/concepts/what-is-coding" className={styles.link}>What is Coding?</Link>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: "50%", background: "var(--secondary)", fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)" }}>2</span>
                <Link href="/concepts/variables" className={styles.link}>Variables</Link>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: "50%", background: "var(--secondary)", fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)" }}>3</span>
                <Link href="/concepts/data-types" className={styles.link}>Data Types</Link>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: "50%", background: "var(--secondary)", fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)" }}>4</span>
                <Link href="/concepts/operators" className={styles.link}>Operators</Link>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: "50%", background: "var(--secondary)", fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)" }}>5</span>
                <Link href="/concepts/conditionals" className={styles.link}>Conditionals</Link>
              </li>
              <li style={{ marginTop: "6px" }}>
                <Link href="/concepts" style={{ fontSize: "0.85rem", color: "#8b5cf6", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  View all concepts
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Quick Links */}
          <div>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/basics/basic-coding-concepts" className={styles.link}>Basic Coding Concepts</Link></li>
              <li><Link href="/basics/programming-fundamentals" className={styles.link}>Programming Fundamentals</Link></li>
              <li><Link href="/glossary" className={styles.link}>Coding Glossary</Link></li>
              <li><Link href="/playground" className={styles.link}>Code Playground</Link></li>
              <li><Link href="/quizzes" className={styles.link}>Coding Quizzes</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources & newsletter teaser */}
          <div className={styles.newsletterColumn}>
            <h4 className={styles.title}>Resources</h4>
            <ul className={styles.links} style={{ marginBottom: "16px" }}>
              <li><Link href="/resources/cheatsheets" className={styles.link}>Cheatsheets</Link></li>
              <li><Link href="/resources/exercises" className={styles.link}>Practice Exercises</Link></li>
              <li><Link href="/resources/next-steps" className={styles.link}>Next Steps</Link></li>
              <li><Link href="/for-kids" className={styles.link}>For Kids</Link></li>
            </ul>
            <div style={{ padding: "16px", background: "rgba(139,92,246,0.04)", borderRadius: "12px", border: "1px solid var(--card-border)" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "4px" }}>Stay Updated</p>
              <p style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}>New tutorials and features coming soon!</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Basic Coding Concepts. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.link}>Terms of Service</Link>
            <Link href="/cookie-policy" className={styles.link}>Cookie Policy</Link>
            <Link href="/disclaimer" className={styles.link}>Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
