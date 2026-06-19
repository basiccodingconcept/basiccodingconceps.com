import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearningPath from "@/components/LearningPath";
import CoreConcepts from "@/components/CoreConcepts";
import Playground from "@/components/Playground";
import WhyLearnHere from "@/components/WhyLearnHere";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Navigation Header */}
      <Header />

      <main style={{ marginTop: "80px" }}> {/* Add margin to offset the fixed header height */}
        {/* Hero Section */}
        <Hero />

        {/* Learning Pathways Grid with Search filtering */}
        <LearningPath />

        {/* CS Core Concepts grid cards */}
        <CoreConcepts />

        {/* Live Interactive Code Playground */}
        <Playground />

        {/* Why Learn Here features grid */}
        <WhyLearnHere />

        {/* Students reviews and rating section */}
        <Testimonials />

        {/* Call To Action Banner */}
        <section className={styles.ctaBanner} style={{ padding: "96px 24px", background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle} style={{ fontSize: "3rem", fontWeight: "800", color: "white", marginBottom: "16px" }}>
              Ready to Start Your <br /> Coding Journey?
            </h2>
            <p className={styles.ctaDesc} style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.85)", marginBottom: "32px", maxWidth: "600px" }}>
              Join thousands of beginners who've discovered that coding isn't scary—it's actually fun!
            </p>
            <div className={styles.ctaBtnGroup} style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="#learning-path" className="btn-primary" style={{ background: "white", color: "#7c3aed", fontWeight: "700", border: "none" }}>
                Start Learning Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#7c3aed" }}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link href="#playground" className="btn-secondary" style={{ background: "rgba(255, 255, 255, 0.15)", color: "white", borderColor: "rgba(255, 255, 255, 0.25)" }}>
                Try the Playground
              </Link>
            </div>

            {/* Trust indicators */}
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center", marginTop: "40px", fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.8)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#34d399" }}>✓</span> No credit card required
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#34d399" }}>✓</span> No account needed
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#34d399" }}>✓</span> 100% free forever
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Corporate/Community Footer */}
      <Footer />
    </div>
  );
}
