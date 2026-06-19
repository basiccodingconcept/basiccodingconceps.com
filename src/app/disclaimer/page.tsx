/* src/app/disclaimer/page.tsx */

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/app/legal.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Basic Coding Concepts",
  description: "Read the disclaimer for Basic Coding Concepts. Understand the educational scope and limitations of our tutorials, sandboxes, and code examples.",
};

export default function DisclaimerPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <span className={styles.badge}>Legal Information</span>
            <h1 className={styles.title}>Disclaimer</h1>
            <p className={styles.lastUpdated}>Last Updated: June 18, 2026</p>
          </header>

          <article className={styles.policyCard}>
            {/* Section 1 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Educational Purpose Only</h2>
              <div className={styles.sectionBody}>
                <p>
                  All content and tools provided on <strong>Basic Coding Concepts</strong>—including the concepts guides, basics tutorials, glossary definitions, quizzes, children's quests, and interactive code playgrounds—are for **general educational and informational purposes only**.
                </p>
                <p>
                  We aim to introduce absolute beginners and young learners to the logical foundations of computer science. We do not provide professional software engineering advice, career placement guarantees, or academic credits.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Use of Code Examples</h2>
              <div className={styles.sectionBody}>
                <p>
                  The programming examples (in JavaScript, Python, or pseudocode) displayed on this website are designed specifically for educational clarity. They are often simplified to focus on specific concepts (like variables, conditions, or loops).
                </p>
                <p>
                  These snippets may not follow production security standards, performance optimizations, or edge-case error checking. Any use of these code snippets in production software, web applications, or databases is done **entirely at your own risk**. We are not responsible for any software bugs, server crashes, security vulnerabilities, or data loss that may occur.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Interactive Playgrounds (Javascript & Python)</h2>
              <div className={styles.sectionBody}>
                <p>
                  Our code sandboxes execute code within your local browser sandbox environment (using iframe console logging and WASM Pyodide runtimes). We do not save your inputted sandbox code to our servers.
                </p>
                <p>
                  Although these client-side execution environments are isolated, we are not liable for any browser lag, crashes, or memory usage spikes that may occur due to infinite loops or high-compute script execution initiated by a user inside these sandboxes.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. No Guarantees</h2>
              <div className={styles.sectionBody}>
                <p>
                  While we work to keep our content updated and accurate, web technologies and framework standards change rapidly. We cannot guarantee that all code tutorials represent current syntax standards, or that external dependencies (like CDN script runtimes) will always be online.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. AdSense & Third-Party Endorsements</h2>
              <div className={styles.sectionBody}>
                <p>
                  This website displays advertisements served via Google AdSense and other advertising networks. The inclusion of advertisements, sponsored articles, or outward references on our site does not constitute an endorsement, recommendation, or warranty of the advertised products, applications, or services.
                </p>
                <p>
                  We advise you to perform your own research before downloading software or purchasing products advertised via external ad channels.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
