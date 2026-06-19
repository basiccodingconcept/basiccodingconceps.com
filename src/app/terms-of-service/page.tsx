/* src/app/terms-of-service/page.tsx */

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/app/legal.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Basic Coding Concepts",
  description: "Read the terms of service for Basic Coding Concepts. Understand your rights and responsibilities when using our visual coding guides and interactive sandboxes.",
};

export default function TermsOfServicePage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <span className={styles.badge}>Legal Information</span>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.lastUpdated}>Last Updated: June 18, 2026</p>
          </header>

          <article className={styles.policyCard}>
            {/* Section 1 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
              <div className={styles.sectionBody}>
                <p>
                  By accessing and using the website <strong>Basic Coding Concepts</strong>, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must immediately cease using the website.
                </p>
                <p>
                  These terms apply to all visitors, learners, educators, and others who access or use our services.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Educational Use License</h2>
              <div className={styles.sectionBody}>
                <p>
                  Unless otherwise stated, all materials on <strong>Basic Coding Concepts</strong> (including guides, illustrations, quiz questions, interactive sandbox interfaces, and code snippets) are owned by us or our content creators.
                </p>
                <p>
                  We grant you a personal, non-exclusive, non-transferable, and revocable license to:
                </p>
                <ul>
                  <li>Access and view educational tutorials and play interactive sandbox exercises.</li>
                  <li>Copy, run, and modify code snippets from our guides for your own personal educational learning.</li>
                  <li>Use our quizzes and print or save certificate credentials for classroom or personal purposes.</li>
                </ul>
                <p>
                  Under this license, you may not:
                </p>
                <ul>
                  <li>Scrape or mirror our tutorials or visual diagrams on other public web servers without explicit credit and written consent.</li>
                  <li>Use our website or server capacities for malicious purposes, such as attempting to inject malicious script executions or overload our platforms.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Disclaimer of Warranties</h2>
              <div className={styles.sectionBody}>
                <p>
                  The materials on our website are provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                </p>
                <p>
                  Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on our website or otherwise relating to such materials.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Limitations of Liability</h2>
              <div className={styles.sectionBody}>
                <p>
                  In no event shall <strong>Basic Coding Concepts</strong> or its developers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials, code examples, or sandboxes on our website.
                </p>
                <p>
                  This applies even if we have been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Revisions and Errata</h2>
              <div className={styles.sectionBody}>
                <p>
                  The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.
                </p>
                <p>
                  We may make changes to the materials contained on our website at any time without notice. However, we do not make any commitment to update the materials.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. External Links & Advertising Partners</h2>
              <div className={styles.sectionBody}>
                <p>
                  We have not reviewed all of the websites linked to our page and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us. Use of any such linked website is at the user's own risk.
                </p>
                <p>
                  Some sections of our site display ads served by Google AdSense and third-party vendors. Your interaction with external ads is governed by their respective privacy policies and terms.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Modifications to Terms</h2>
              <div className={styles.sectionBody}>
                <p>
                  We may revise these Terms of Service for our website at any time without notice. By using this website, you agree to be bound by the then-current version of these Terms of Service.
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
