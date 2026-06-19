/* src/app/contact/page.tsx */

"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Support",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Please type a message.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Your message must be at least 10 characters long.";
    }
    if (!formData.consent) {
      tempErrors.consent = "You must agree to our privacy terms.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.badge}>Get In Touch</div>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              Have a question, feedback, or need help? Send us a message and our educational support team will reply within 24 hours!
            </p>
          </header>

          <div className={styles.layout}>
            {/* Left: Contact Form Card */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className={styles.formGrid}>
                      {/* Name */}
                      <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                          placeholder="Your Name"
                          disabled={isSubmitting}
                        />
                        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                      </div>

                      {/* Email */}
                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                          placeholder="your.email@example.com"
                          disabled={isSubmitting}
                        />
                        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className={styles.formGroup} style={{ marginTop: "20px" }}>
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={styles.select}
                        disabled={isSubmitting}
                      >
                        <option value="General Support">General Support & Feedback</option>
                        <option value="Bug Report">Report a Code Error or Bug</option>
                        <option value="AdSense / Partnership">Partnership & Inquiries</option>
                        <option value="Content Request">Request a Learning Concept</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className={styles.formGroup} style={{ marginTop: "20px" }}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                        placeholder="How can we help you? Describe your question in detail..."
                        rows={6}
                        disabled={isSubmitting}
                      />
                      {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                    </div>

                    {/* Privacy Checkbox */}
                    <div className={styles.checkboxGroup}>
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleCheckboxChange}
                        disabled={isSubmitting}
                      />
                      <label htmlFor="consent" className={errors.consent ? styles.labelError : ""}>
                        I agree to the collection of my name and email to receive support responses in accordance with the Privacy Policy.
                      </label>
                    </div>
                    {errors.consent && (
                      <span className={styles.errorText} style={{ display: "block", marginTop: "-12px", marginBottom: "16px" }}>
                        {errors.consent}
                      </span>
                    )}

                    <button id="contact-submit-btn" type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </button>
                  </form>
                ) : (
                  <div className={styles.successScreen}>
                    <div className={styles.successIcon} style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-green)" }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3>Message Sent Successfully!</h3>
                    <p>
                      Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <em>{formData.subject}</em>.
                    </p>
                    <p className={styles.successSubtext}>
                      A confirmation email has been logged, and an educational developer will review your request and get back to you at <strong>{formData.email}</strong> within 24 hours.
                    </p>
                    <button
                      id="contact-reset-btn"
                      onClick={() => {
                        setFormData({
                          name: "",
                          email: "",
                          subject: "General Support",
                          message: "",
                          consent: false,
                        });
                        setIsSubmitted(false);
                      }}
                      className={styles.resetBtn}
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Contact details / FAQ */}
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <h3>Other Ways to Connect</h3>
                <p style={{ marginBottom: "24px" }}>
                  Have questions about our educational content, or looking to integrate our playground scripts into your classroom? Let's connect!
                </p>

                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoEmoji} style={{ color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    <div>
                      <h5>General Support & Advertising</h5>
                      <p>support@basiccodingconcepts.io</p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.infoEmoji} style={{ color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    </span>
                    <div>
                      <h5>Global Learning Mission</h5>
                      <p>We are a remote team based globally, providing ad-supported open education tools for everyone.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.faqBlock}>
                  <h4>Frequently Asked Questions</h4>
                  <div className={styles.faqItem}>
                    <strong>Is there a fee to use the code sandboxes?</strong>
                    <p>No! The JavaScript and Python sandboxes, lessons, kids quests, and quizzes are 100% free to use.</p>
                  </div>
                  <div className={styles.faqItem}>
                    <strong>Can I use this site in my school curriculum?</strong>
                    <p>Yes, teachers and parents are welcome to utilize all resource guides, maps, and quiz certifications under our terms of service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
