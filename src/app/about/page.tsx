/* src/app/about/page.tsx */

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Basic Coding Concepts",
  description: "Learn about the mission, values, and teaching philosophy of Basic Coding Concepts—making programming accessible, visual, and fun for learners of all ages.",
  keywords: "about us, learn to code, programming education, visual coding, coding basics",
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Hero Header */}
          <header className={styles.header}>
            <div className={styles.badge}>Our Mission</div>
            <h1 className={styles.title}>Demystifying Code for Everyone</h1>
            <p className={styles.subtitle}>
              We believe programming is a fundamental literacy in the modern world. Our mission is to make learning to code visual, interactive, and completely free.
            </p>
          </header>

          {/* Intro Section with Glass Card */}
          <section className={styles.introSection}>
            <div className={styles.introCard}>
              <div className={styles.introGrid}>
                <div className={styles.introText}>
                  <h2>Why We Started</h2>
                  <p>
                    Coding tutorials are often filled with dry explanations, complex jargon, and confusing command-line environments. For beginners—especially young learners—this steep learning curve can be discouraging.
                  </p>
                  <p>
                    <strong>Basic Coding Concepts</strong> was created to solve this. By breaking down programming structures into everyday analogies (like toy trains for Arrays, recipes for Functions, and weather dress-up for Conditionals), we turn abstract logic into physical, intuitive ideas.
                  </p>
                </div>
                <div className={styles.statsGrid}>
                  <div className={styles.statBox}>
                    <span className={styles.statNumber}>13+</span>
                    <span className={styles.statLabel}>Core Concept Guides</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statNumber}>10</span>
                    <span className={styles.statLabel}>Kids Quests</span>
                  </div>
                  <div className={styles.statBox}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>Free & Open</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pillars Section */}
          <section className={styles.pillarsSection}>
            <h2 className={styles.sectionTitle}>Our Learning Philosophy</h2>
            <p className={styles.sectionSubtitle}>We design our platform around three core learning principles:</p>
            
            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon} style={{ color: "var(--primary)", marginBottom: "16px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3>Visual-First Analogies</h3>
                <p>
                  We translate text instructions into visual diagrams and animated metaphors. If you can understand baking cookies or packing a toy box, you can understand functions and variables!
                </p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon} style={{ color: "var(--primary)", marginBottom: "16px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 17 10 11 4 5"/>
                    <line x1="12" y1="19" x2="20" y2="19"/>
                  </svg>
                </div>
                <h3>Hands-On Interaction</h3>
                <p>
                  Passive reading doesn't build muscle memory. Our lessons feature live client-side playgrounds where you edit parameters and watch outcomes render in real-time.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon} style={{ color: "var(--primary)", marginBottom: "16px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/>
                  </svg>
                </div>
                <h3>Gamified Progress</h3>
                <p>
                  With gamified quizzes, custom checkmarks, and certificates of completion, we keep motivation high and turn learning milestones into fun victories.
                </p>
              </div>
            </div>
          </section>

          {/* Target Audience Section */}
          <section className={styles.audienceSection}>
            <h2 className={styles.sectionTitle}>Who Is This For?</h2>
            <div className={styles.audienceGrid}>
              <div className={styles.audienceItem}>
                <div style={{
                  fontSize: "1.1rem",
                  fontWeight: "800",
                  color: "var(--primary)",
                  background: "var(--secondary)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  border: "1.5px solid var(--card-border)"
                }}>1</div>
                <h4>Absolute Beginners</h4>
                <p>People with zero computer science background who want a friendly introduction to coding logic before committing to syntax-heavy bootcamps.</p>
              </div>
              <div className={styles.audienceItem}>
                <div style={{
                  fontSize: "1.1rem",
                  fontWeight: "800",
                  color: "var(--primary)",
                  background: "var(--secondary)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  border: "1.5px solid var(--card-border)"
                }}>2</div>
                <h4>Kids & Young Learners</h4>
                <p>Children searching for a gamified space to play with algorithms, data blocks, and code bug-squashing detective games.</p>
              </div>
              <div className={styles.audienceItem}>
                <div style={{
                  fontSize: "1.1rem",
                  fontWeight: "800",
                  color: "var(--primary)",
                  background: "var(--secondary)",
                  borderRadius: "50%",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  border: "1.5px solid var(--card-border)"
                }}>3</div>
                <h4>Teachers & Parents</h4>
                <p>Educators looking for free, visual tools, definitions, and quizzes to introduce computational logic to students in the classroom.</p>
              </div>
            </div>
          </section>

          {/* Team / Author Section */}
          <section className={styles.teamSection}>
            <div className={styles.teamCard}>
              <div className={styles.teamContent}>
                <h3>Built for Global Learners</h3>
                <p>
                  Basic Coding Concepts is maintained by a dedicated group of educators and web developers. We are committed to maintaining a high-quality, accessible website. By offering responsive interfaces, interactive JS/Python playgrounds, and standard-compliant web pages, we hope to reach learners everywhere.
                </p>
                <p style={{ marginTop: "12px", fontStyle: "italic", fontWeight: "500" }}>
                  "Code is the language of the future. Let's make it a language everyone can speak."
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
