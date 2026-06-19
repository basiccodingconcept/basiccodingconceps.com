"use client";

import React from "react";
import styles from "./Testimonials.module.css";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah M.",
      role: "Career Changer",
      quote: "Finally, a coding site that doesn't make me feel stupid. The visualizations are amazing!",
      initials: "SM"
    },
    {
      name: "David K.",
      role: "Parent",
      quote: "My kids love the interactive examples. They went from confused to coding in one afternoon.",
      initials: "DK"
    },
    {
      name: "Alex T.",
      role: "Student",
      quote: "The loop visualizer blew my mind. I never understood them until I saw them animated.",
      initials: "AT"
    }
  ];

  return (
    <section id="testimonials" className={`${styles.section} section-padding`}>
      {/* Glow effect */}
      <div className="glow-bg" style={{ bottom: "-10%", left: "-10%" }}></div>

      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Learners Love Us</h2>
          <p className={styles.subtitle}>
            Join thousands who've started their coding journey here
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.grid}>
          {testimonials.map((test, index) => (
            <div key={index} className={styles.card}>
              {/* Quote Mark Decoration */}
              <div 
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "16px",
                  fontSize: "4rem",
                  fontFamily: "serif",
                  color: "rgba(139, 92, 246, 0.15)",
                  lineHeight: 1,
                  userSelect: "none"
                }}
              >
                "
              </div>

              {/* Quote */}
              <blockquote className={styles.quote} style={{ position: "relative", zIndex: 1 }}>
                {test.quote}
              </blockquote>

              {/* Profile details */}
              <div className={styles.profile}>
                <div style={{
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  background: "var(--secondary)",
                  color: "var(--primary)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1.5px solid var(--card-border)",
                  flexShrink: 0,
                  marginRight: "12px"
                }}>
                  {test.initials}
                </div>
                <div className={styles.info}>
                  <cite className={styles.name}>{test.name}</cite>
                  <span className={styles.role}>{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
