"use client";

import React, { useState, useEffect } from "react";
import styles from "./Playground.module.css";

interface Template {
  id: string;
  name: string;
  desc: string;
  code: string;
  icon: React.ReactNode;
}

interface LogEntry {
  type: "log" | "error";
  content: string;
}

export default function Playground() {
  const templates: Template[] = [
    {
      id: "variables",
      name: "Variables",
      desc: "Boxes that hold values",
      code: `// Welcome! Try changing the message below
let greeting = "Hello, World!";
console.log(greeting);

// Let's do some math
let apples = 5;
let oranges = 3;
let totalFruit = apples + oranges;
console.log("Total fruit:", totalFruit);
`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="21" y1="9" x2="3" y2="9"/>
          <text x="12" y="17" fontFamily="var(--font-mono)" fontSize="11" fontWeight="700" textAnchor="middle" fill="currentColor">x</text>
        </svg>
      )
    },
    {
      id: "conditionals",
      name: "Conditionals",
      desc: "Making logical decisions",
      code: `// 1. Set some values
let userAge = 17;
let hasParentalConsent = true;

// 2. Perform conditional check
console.log("Checking enrollment criteria...");

if (userAge >= 18) {
  console.log("Enrollment approved: Adult access granted!");
} else if (hasParentalConsent) {
  console.log("Enrollment approved: Underage with parental consent.");
} else {
  console.log("Enrollment denied: Must be 18 or have consent.");
}
`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2L2 12l10 10 10-10L12 2z"/>
          <path d="M12 6v12"/>
        </svg>
      )
    },
    {
      id: "loops",
      name: "Loops",
      desc: "Repeating code actions",
      code: `// 1. A loop that counts down
console.log("Initializing space launch sequence:");

for (let seconds = 3; seconds > 0; seconds--) {
  console.log(seconds + "...");
}

console.log("Liftoff! We are orbiting JavaScript.");
`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
        </svg>
      )
    },
    {
      id: "functions",
      name: "Functions",
      desc: "Reusable code blueprints",
      code: `// 1. Define the reusable function
function calculateProgress(completedLessons, totalLessons) {
  let percentage = (completedLessons / totalLessons) * 100;
  // Round to 1 decimal place
  return Math.round(percentage * 10) / 10;
}

// 2. Run the function with different values
let userProgress = calculateProgress(18, 45);
console.log("Progress on Python pathway: " + userProgress + "% completed!");

let webProgress = calculateProgress(25, 30);
console.log("Progress on HTML/CSS pathway: " + webProgress + "% completed!");
`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      )
    }
  ];

  const [activeTab, setActiveTab] = useState("variables");
  const [code, setCode] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([]);

  // Sync editor code with selected template
  useEffect(() => {
    const template = templates.find((t) => t.id === activeTab);
    if (template) {
      setCode(template.code);
      setLogs([]);
    }
  }, [activeTab]);

  const runCode = () => {
    const customLogs: LogEntry[] = [];
    const originalConsoleLog = console.log;

    // Intercept console.log statements
    console.log = (...args) => {
      const formattedLog = args
        .map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : String(arg)))
        .join(" ");
      customLogs.push({ type: "log", content: formattedLog });
    };

    try {
      // Evaluate user code in a function block
      const executionSandbox = new Function(code);
      executionSandbox();

      if (customLogs.length === 0) {
        customLogs.push({ type: "log", content: "(Code executed successfully, but console.log was not called)" });
      }
      setLogs(customLogs);
    } catch (err: any) {
      setLogs([{ type: "error", content: `Error: ${err.message || err}` }]);
    } finally {
      // Restore console
      console.log = originalConsoleLog;
    }
  };

  // Generate list of line numbers based on the code length
  const lineCount = code.split("\n").length;
  const lineNumbers = Array.from({ length: Math.max(lineCount, 1) }, (_, i) => i + 1);

  return (
    <section id="playground" className={`${styles.section} section-padding`}>
      {/* Glow effect */}
      <div className="glow-bg" style={{ top: "30%", right: "-10%" }}></div>

      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Write Code Right Now</h2>
          <p className={styles.subtitle}>
            No software installation required. Click a topic, inspect the code, edit it if you want, and hit run!
          </p>
        </div>

        {/* Playground Box */}
        <div className={styles.playgroundContainer}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Choose a Concept</h3>
            <ul className={styles.templateList} id="playground-concept-tab-list">
              {templates.map((temp) => (
                <li key={temp.id}>
                  <button
                    className={`${styles.templateBtn} ${activeTab === temp.id ? styles.templateBtnActive : ""}`}
                    onClick={() => setActiveTab(temp.id)}
                    id={`playground-concept-tab-${temp.id}`}
                  >
                    <span className={styles.templateBtnIcon}>{temp.icon}</span>
                    <div>
                      <div style={{ fontWeight: 700 }}>{temp.name}</div>
                      <div style={{ fontSize: "0.75rem", opacity: 0.8, marginTop: "2px", fontWeight: 400 }}>
                        {temp.desc}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main workspace */}
          <div className={styles.editorWindow}>
            {/* Window header */}
            <div className={styles.windowHeader}>
              <div className={styles.windowDots}>
                <div className={`${styles.windowDot} ${styles.windowDotRed}`}></div>
                <div className={`${styles.windowDot} ${styles.windowDotYellow}`}></div>
                <div className={`${styles.windowDot} ${styles.windowDotGreen}`}></div>
              </div>
              <div className={styles.windowTitle}>
                {activeTab}.js — JavaScript Playground
              </div>
              <div></div>
            </div>

            {/* Code Body */}
            <div className={styles.editorBody}>
              {/* Line Numbers */}
              <div className={styles.lineNumbers}>
                {lineNumbers.map((num) => (
                  <div key={num}>{num}</div>
                ))}
              </div>

              {/* Editable Text Area */}
              <label htmlFor="playground-code-editor" className="sr-only">JavaScript Code Editor</label>
              <textarea
                className={styles.textarea}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck="false"
                id="playground-code-editor"
              />
            </div>

            {/* Action Bar */}
            <div className={styles.footerBar}>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  className={styles.runBtn}
                  onClick={runCode}
                  aria-label="Run javascript code snippet"
                  id="playground-run-code-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  Run Code
                </button>
                <button
                  className="btn-secondary"
                  style={{ padding: "6px 12px", fontSize: "0.85rem", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)", color: "#94a3b8" }}
                  id="playground-reset-code-btn"
                  onClick={() => {
                    const temp = templates.find((t) => t.id === activeTab);
                    if (temp) {
                      setCode(temp.code);
                      setLogs([]);
                    }
                  }}
                >
                  Reset Code
                </button>
              </div>
              <span style={{ fontSize: "0.8rem", color: "#64748b", fontFamily: "var(--font-mono)" }}>
                Language: JavaScript (ES6)
              </span>
            </div>

            {/* Output console */}
            <div className={styles.consoleOutput}>
              <div className={styles.consoleTitle}>Console Output</div>
              {logs.length > 0 ? (
                logs.map((log, index) => (
                  <div
                    key={index}
                    className={log.type === "error" ? styles.consoleError : styles.consoleLog}
                  >
                    {log.type === "error" ? "Error: " : ""}
                    {log.content}
                  </div>
                ))
              ) : (
                <div className={styles.consolePlaceholder}>
                  Console is clean. Click "Run Code" to view results...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hint */}
        <p style={{ textAlign: "center", color: "var(--text-tertiary)", marginTop: "24px", fontSize: "0.95rem" }}>
          Hint: Try changing <code style={{ padding: "4px 8px", background: "var(--secondary)", borderRadius: "6px", fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--primary)" }}>greeting</code> to your name!
        </p>
      </div>
    </section>
  );
}
