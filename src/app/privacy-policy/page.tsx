/* src/app/privacy-policy/page.tsx */

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/app/legal.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Basic Coding Concepts",
  description: "Read the privacy policy for Basic Coding Concepts. Understand how we collect, use, and safeguard your data, including Google AdSense and third-party cookie disclosures.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <span className={styles.badge}>Legal Information</span>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: June 18, 2026</p>
          </header>

          <article className={styles.policyCard}>
            {/* Section 1 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Introduction</h2>
              <div className={styles.sectionBody}>
                <p>
                  Welcome to <strong>Basic Coding Concepts</strong> (referred to as "we", "us", or "our"). We are committed to protecting the privacy of our visitors. This Privacy Policy document outlines the types of personal information that is received and collected by our website and how it is utilized.
                </p>
                <p>
                  By accessing and using our website (located at <code>/</code> and its child paths), you consent to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
              <div className={styles.sectionBody}>
                <p>
                  We collect information to provide a better learning experience for all our users. The data collected falls into the following categories:
                </p>
                <ul>
                  <li>
                    <strong>Voluntary Information:</strong> If you contact us directly via our Contact form, we collect your name, email address, the subject, and the contents of your message.
                  </li>
                  <li>
                    <strong>Interactive Quizzes & Sandbox Progress:</strong> We may use localized browser storage (such as <code>localStorage</code>) to save your quiz scores and progress. This data remains on your local device and is not transmitted to our servers.
                  </li>
                  <li>
                    <strong>Log Files:</strong> Like many other websites, we make use of log files. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks. This data is used to analyze trends, administer the site, track user movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: Google AdSense and Third-Party Ad Cookies */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Google AdSense & Third-Party Cookies Disclosure</h2>
              <div className={styles.sectionBody}>
                <p>
                  This site is supported by third-party advertising, including Google AdSense. Google and other third-party vendors use cookies to serve ads based on a user's prior visits to our website or other websites.
                </p>
                <p>
                  Please review the following important information regarding advertising on our site:
                </p>
                <ul>
                  <li>
                    <strong>Google DART Cookie:</strong> Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
                  </li>
                  <li>
                    <strong>Opting Out of Personalized Ads:</strong> Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting the <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">About Ads website</a>.
                  </li>
                  <li>
                    <strong>Third-Party Ad Networks:</strong> Other third-party ad networks or servers may also use cookies, JavaScript, or Web Beacons to measure the effectiveness of their advertisements and to personalize the advertising content that you see. We have no access to or control over these cookies that are used by third-party advertisers.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. How We Use Your Information</h2>
              <div className={styles.sectionBody}>
                <p>
                  Any of the information we collect from you may be used in one of the following ways:
                </p>
                <ul>
                  <li>To personalize your learning experience.</li>
                  <li>To improve our website (we continually strive to improve our site offerings based on the feedback we receive from you).</li>
                  <li>To provide customer support (your email allows us to respond directly to your technical inquiries and bug reports).</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Cookies and Tracking Technologies</h2>
              <div className={styles.sectionBody}>
                <p>
                  We use cookies to store information about visitors' preferences, to record user-specific information on which pages the user accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.
                </p>
                <p>
                  For more detailed information regarding cookies and how to control them on your browser, please visit our <a href="/cookie-policy">Cookie Policy</a>.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. GDPR & CCPA Data Protection Rights</h2>
              <div className={styles.sectionBody}>
                <p>
                  We want to ensure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                </p>
                <ul>
                  <li><strong>The right to access:</strong> You have the right to request copies of your personal data held by us.</li>
                  <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                  <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                  <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                </ul>
                <p>
                  If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us through our <a href="/contact">Contact Page</a>.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Consent</h2>
              <div className={styles.sectionBody}>
                <p>
                  By using our website, you hereby consent to our Privacy Policy and agree to its terms.
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
