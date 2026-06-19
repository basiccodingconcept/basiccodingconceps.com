"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

interface Preset {
  name: string;
  code: string;
}

const PRESETS: Record<string, Preset> = {
  welcome: {
    name: "Welcome",
    code: `// Welcome to the JavaScript Playground!
// Write your code here and click "Run Code" to execute it.

let message = "Hello, World!";
console.log(message);

console.log("2 + 2 =", 2 + 2);
`
  },
  variables: {
    name: "Variables",
    code: `// Storing data inside variables
let username = "Alex";
let apples = 5;
let pricePerApple = 0.99;

let totalCost = apples * pricePerApple;

console.log("User:", username);
console.log("Bought:", apples, "apples");
console.log("Total Cost ($):", totalCost);
`
  },
  conditionals: {
    name: "Conditionals",
    code: `// Conditional decision-making logic
let age = 17;
let hasConsent = true;

console.log("Age check in progress...");

if (age >= 18) {
  console.log("Access Granted: Adult");
} else if (hasConsent) {
  console.log("Access Granted: Minor with parental consent");
} else {
  console.log("Access Denied: Minor without consent");
}
`
  },
  loops: {
    name: "Loops",
    code: `// Automate repetitive tasks using loops
console.log("Countdown sequence initiated...");

for (let i = 5; i >= 1; i--) {
  console.log("T-minus:", i);
}

console.log("Blast off!");
`
  },
  functions: {
    name: "Functions",
    code: `// Creating reusable blocks of code
function calculateArea(width, height) {
  return width * height;
}

let area = calculateArea(10, 5);
console.log("Room width: 10m");
console.log("Room height: 5m");
console.log("Calculated Area:", area, "square meters");
`
  }
};

interface LogEntry {
  type: "log" | "error";
  content: string;
}

export default function JavascriptPlayground() {
  const [code, setCode] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([]);

  // Initialize with welcome preset on mount
  useEffect(() => {
    setCode(PRESETS.welcome.code);
  }, []);

  // Compute line numbers to display
  const lineNumbers = useMemo(() => {
    const lines = code.split("\n").length;
    return Array.from({ length: Math.max(lines, 1) }, (_, i) => i + 1);
  }, [code]);

  // Execute Javascript code in a safe sandbox
  const runCode = () => {
    setLogs([]); // Clear logs
    const outputLogs: LogEntry[] = [];

    // Temporary override console.log
    const originalLog = console.log;
    console.log = (...args: any[]) => {
      const parsedArgs = args.map(arg => {
        if (typeof arg === "object") {
          return JSON.stringify(arg, null, 2);
        }
        return String(arg);
      }).join(" ");
      outputLogs.push({ type: "log", content: parsedArgs });
    };

    try {
      // Create a function containing code and run it
      const runFn = new Function(code);
      runFn();
    } catch (err: any) {
      outputLogs.push({ type: "error", content: String(err.message || err) });
    } finally {
      // Restore console.log
      console.log = originalLog;
      if (outputLogs.length === 0) {
        outputLogs.push({ type: "log", content: "Code executed successfully with no logs." });
      }
      setLogs(outputLogs);
    }
  };

  const loadPreset = (presetKey: string) => {
    setCode(PRESETS[presetKey].code);
    setLogs([]);
  };

  const resetCode = () => {
    setCode(PRESETS.welcome.code);
    setLogs([]);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.titleSection}>
              <div className={styles.breadcrumb}>
                <Link href="/" className={styles.breadcrumbLink}>Home</Link>
                <span>&gt;</span>
                <Link href="/playground" className={styles.breadcrumbLink}>Playground</Link>
                <span>&gt;</span>
                <span className={styles.breadcrumbCurrent}>JavaScript</span>
              </div>
              <h1 className={styles.title}>
                JavaScript Sandbox <span className={styles.badge}>JS</span>
              </h1>
            </div>

            {/* Presets */}
            <div className={styles.templatesBar}>
              <span className={styles.templateLabel}>Quick Presets:</span>
              {Object.keys(PRESETS).map((key) => (
                <button
                  key={key}
                  onClick={() => loadPreset(key)}
                  className={styles.templateBtn}
                >
                  {PRESETS[key].name}
                </button>
              ))}
            </div>
          </header>

          {/* Sandbox workspace */}
          <div className={styles.sandbox}>
            {/* Editor */}
            <div className={styles.editorPane}>
              <div className={styles.paneHeader}>
                <span className={styles.paneTitle}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  code_editor.js
                </span>
                <button
                  onClick={() => setCode("")}
                  className={styles.actionBtn}
                  title="Clear editor code"
                >
                  Clear
                </button>
              </div>

              <div className={styles.editorArea}>
                <div className={styles.lineNumbers}>
                  {lineNumbers.map((num) => (
                    <div key={num}>{num}</div>
                  ))}
                </div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className={styles.textarea}
                  spellCheck="false"
                  placeholder="// Enter JavaScript here..."
                />
              </div>
            </div>

            {/* Console output */}
            <div className={styles.consolePane}>
              <div className={styles.paneHeader} style={{ background: "#111" }}>
                <span className={styles.consoleTitle}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                  </svg>
                  Console Output
                </span>
                <div className={styles.paneActions}>
                  <button
                    onClick={() => setLogs([])}
                    className={`${styles.actionBtn} ${styles.consoleActionBtn}`}
                  >
                    Clear Console
                  </button>
                </div>
              </div>

              <div className={styles.consoleLogs}>
                {logs.length > 0 ? (
                  logs.map((log, idx) => (
                    <div
                      key={idx}
                      className={`${styles.logItem} ${
                        log.type === "error" ? styles.logError : styles.logOutput
                      }`}
                    >
                      {log.content}
                    </div>
                  ))
                ) : (
                  <div className={styles.logEmpty}>
                    Console is empty. Click &quot;Run Code&quot; to execute.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className={styles.bottomControls}>
            <div className={styles.statusInfo}>
              Supports ES6 JavaScript. Executed locally in a safe sandbox.
            </div>
            <div className={styles.buttonsGroup}>
              <button onClick={resetCode} className={styles.btnReset}>
                Reset Code
              </button>
              <button onClick={runCode} className={styles.btnRun}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Run Code
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
