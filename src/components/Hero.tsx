"use client";

import React from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Decorative Glow */}
      <div className="glow-bg" style={{ top: "-10%", left: "-10%" }}></div>
      <div className="glow-bg" style={{ bottom: "10%", right: "-10%" }}></div>

      <div className={`${styles.container} container`}>
        {/* Left Column: Heading, description, actions */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span style={{ display: "flex", width: "8px", height: "8px", borderRadius: "50%", background: "#8b5cf6", position: "relative" }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#a78bfa", animation: "ping 1.5s infinite" }}></span>
            </span>
            100% Free Interactive Learning
          </div>
          <h1 className={styles.title}>
            Learn to Code <br />
            <span className={styles.titleHighlight} style={{ position: "relative", zIndex: "1" }}>
              the Fun Way
              <svg style={{ position: "absolute", bottom: "-8px", left: "0", width: "100%", height: "12px", color: "rgba(139,92,246,0.3)", zIndex: "-1" }} viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className={styles.desc}>
            Master programming fundamentals through <strong>interactive visualizations</strong>, hands-on coding exercises, and step-by-step explanations. <span style={{ color: "#8b5cf6", fontWeight: "600" }}>No experience needed.</span>
          </p>
          <div className={styles.ctaGroup}>
            <Link id="hero-start-learning-btn" href="#playground" className="btn-primary" style={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9)", border: "none" }}>
              Start Learning Free
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link id="hero-browse-concepts-btn" href="#concepts" className="btn-secondary">
              Browse Concepts
            </Link>
          </div>

          {/* Core metrics */}
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>13</span>
              <span className={styles.statLbl}>Core Concepts</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>50+</span>
              <span className={styles.statLbl}>Interactive Examples</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal} style={{ color: "#10b981" }}>Free</span>
              <span className={styles.statLbl}>Forever</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual SVG Graphic */}
        <div className={styles.graphicWrapper}>
          <svg
            className={styles.svgGraphic}
            viewBox="0 0 540 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Editor Window Background */}
            <rect width="540" height="360" rx="24" fill="#0F172A" />
            <rect x="0.5" y="0.5" width="539" height="359" rx="23.5" stroke="rgba(255,255,255,0.06)" />

            {/* Window Header */}
            <rect width="540" height="42" rx="24" fill="#1E293B" />
            
            {/* Traffic Light Buttons */}
            <circle cx="28" cy="21" r="6" fill="#EF4444" />
            <circle cx="48" cy="21" r="6" fill="#F59E0B" />
            <circle cx="68" cy="21" r="6" fill="#10B981" />

            <text x="100" y="26" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="12" fontWeight="600">my-first-code.js</text>

            {/* Editor Content Area */}
            {/* Lines of code */}
            {/* Line 1: Comment */}
            <text x="40" y="80" fill="#64748B" fontFamily="var(--font-mono)" fontSize="14" fontWeight="500">// Your coding journey starts here</text>

            {/* Line 2: Variable declaration */}
            <text x="40" y="110" fill="#C084FC" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600">let</text>
            <text x="75" y="110" fill="#FCD34D" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600"> dream</text>
            <text x="125" y="110" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14"> = </text>
            <text x="145" y="110" fill="#34D399" fontFamily="var(--font-mono)" fontSize="14" fontWeight="500">"become a developer"</text>
            <text x="310" y="110" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14">;</text>

            {/* Line 3: Variable declaration */}
            <text x="40" y="140" fill="#C084FC" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600">let</text>
            <text x="75" y="140" fill="#FCD34D" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600"> effort</text>
            <text x="135" y="140" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14"> = </text>
            <text x="155" y="140" fill="#FDBA74" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600">100</text>
            <text x="180" y="140" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14">;</text>

            {/* Line 5: Conditional */}
            <text x="40" y="200" fill="#C084FC" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600">if</text>
            <text x="60" y="200" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14"> (</text>
            <text x="75" y="200" fill="#FCD34D" fontFamily="var(--font-mono)" fontSize="14">effort</text>
            <text x="130" y="200" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14"> &gt; </text>
            <text x="150" y="200" fill="#FDBA74" fontFamily="var(--font-mono)" fontSize="14">0</text>
            <text x="160" y="200" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14">) {"{"}</text>

            {/* Line 6: Indented Statement */}
            <text x="70" y="230" fill="#60A5FA" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600">console</text>
            <text x="130" y="230" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14">.</text>
            <text x="140" y="230" fill="#FCD34D" fontFamily="var(--font-mono)" fontSize="14" fontWeight="600">log</text>
            <text x="165" y="230" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14">(</text>
            <text x="175" y="230" fill="#34D399" fontFamily="var(--font-mono)" fontSize="14" fontWeight="500">"You can do this!"</text>
            <text x="315" y="230" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14">)</text>
            <text x="325" y="230" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14">;</text>

            {/* Line 7 */}
            <text x="40" y="260" fill="#94A3B8" fontFamily="var(--font-mono)" fontSize="14">{"}"}</text>

            {/* Output Panel at the bottom */}
            <rect x="20" y="290" width="500" height="50" rx="12" fill="#030712" stroke="rgba(255,255,255,0.06)" />
            <text x="40" y="320" fill="#64748B" fontFamily="var(--font-mono)" fontSize="12" fontWeight="700">Output:</text>
            <text x="95" y="320" fill="#34D399" fontFamily="var(--font-mono)" fontSize="13" fontWeight="600">You can do this!</text>

            {/* Floating Element: Setup Badge */}
            <g filter="drop-shadow(0 10px 20px rgba(0,0,0,0.15))" transform="translate(360, 45)">
              <rect width="150" height="36" rx="18" fill="#FFFFFF" />
              <text x="18" y="22" fill="#10B981" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700">✓</text>
              <text x="34" y="22" fill="#10B981" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700">No setup needed</text>
            </g>

            {/* Floating Element: Feedback Badge */}
            <g filter="drop-shadow(0 10px 20px rgba(0,0,0,0.15))" transform="translate(370, 240)">
              <rect width="140" height="36" rx="18" fill="#FFFFFF" />
              <text x="18" y="22" fill="#8B5CF6" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700">⚡</text>
              <text x="34" y="22" fill="#8B5CF6" fontFamily="var(--font-sans)" fontSize="12" fontWeight="700">Instant feedback</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
