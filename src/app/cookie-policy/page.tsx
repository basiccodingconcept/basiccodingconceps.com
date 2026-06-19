/* src/app/cookie-policy/page.tsx */

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/app/legal.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Basic Coding Concepts",
  description: "Read the cookie policy for Basic Coding Concepts. Learn what cookies are, how we utilize them, and how you can manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <span className={styles.badge}>Legal Information</span>
            <h1 className={styles.title}>Cookie Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: June 18, 2026</p>
          </header>

          <article className={styles.policyCard}>
            {/* Section 1 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. What Are Cookies?</h2>
              <div className={styles.sectionBody}>
                <p>
                  Cookies are small text files that are downloaded and stored on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.
                </p>
                <p>
                  Cookies set by the website owner (in this case, <strong>Basic Coding Concepts</strong>) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. How We Use Cookies</h2>
              <div className={styles.sectionBody}>
                <p>
                  We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate. Other cookies enable us to track and target the interests of our users to enhance their overall experience.
                </p>
                <p>
                  The specific types of first-party and third-party cookies served through our website and the purposes they perform are described below:
                </p>
                <ul>
                  <li>
                    <strong>Essential & Functional Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website. For example, we use a cookie or local storage key named <code>theme</code> to remember whether you selected "Light Mode" or "Dark Mode" as your interface preference.
                  </li>
                  <li>
                    <strong>Progress Tracking Cookies:</strong> We store quiz completions and playground templates in your browser's local storage so you don't lose your place when you refresh.
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> These third-party cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests. The primary partner serving ad cookies is Google AdSense.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Google AdSense & Third-Party Cookies</h2>
              <div className={styles.sectionBody}>
                <p>
                  Google AdSense is a third-party service that we use to display advertisements on our website. Google uses cookies, including the DoubleClick DART cookie, to serve ads to our users based on their visits to our website and other websites across the Internet.
                </p>
                <p>
                  You can learn more about how Google uses cookies in advertising and how you can opt out by reading our <a href="/privacy-policy">Privacy Policy</a>.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. How Can I Control Cookies?</h2>
              <div className={styles.sectionBody}>
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser.
                </p>
                <p>
                  Browser controls vary from browser to browser. You should visit your browser's help menu for more information. Below are links to instructions on how to manage cookies in the most popular browsers:
                </p>
                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>
                <p>
                  In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit the <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Choices Page</a> or the <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">Your Online Choices Page</a>.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Updates to This Cookie Policy</h2>
              <div className={styles.sectionBody}>
                <p>
                  We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
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
