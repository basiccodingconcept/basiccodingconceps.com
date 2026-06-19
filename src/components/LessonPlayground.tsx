"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./LessonPlayground.module.css";

interface LessonPlaygroundProps {
  initialCode: string;
}

interface LogEntry {
  type: "log" | "error";
  content: string;
}

const PRESETS = {
  variables: `// Variables Preset
let playerName = "Hero";
let playerLevel = 12;
const maxPower = 100;

console.log("Player name:", playerName);
console.log("Level:", playerLevel);
console.log("Current Power Ratio (%):", (playerLevel * 5) + " / " + maxPower);`,

  logic: `// Conditionals Preset
let accountBalance = 45.50;
let itemCost = 50.00;

console.log("Checking purchase capability...");
if (accountBalance >= itemCost) {
  console.log("Transaction approved!");
  accountBalance -= itemCost;
} else {
  console.log("Transaction declined. Insufficient funds.");
  console.log("Shortfall amount:", itemCost - accountBalance);
}`,

  loops: `// Loops Preset
console.log("Starting countdown sequence...");
for (let counter = 5; counter >= 1; counter--) {
  console.log("T-minus:", counter);
}
console.log("Lift off!");`,

  functions: `// Functions Preset
function computeTax(amount, rate) {
  return amount * rate;
}

let purchaseTotal = 250;
let taxRate = 0.08; // 8% tax
let finalTax = computeTax(purchaseTotal, taxRate);

console.log("Purchase Total:", purchaseTotal);
console.log("Calculated Tax:", finalTax);
console.log("Grand Total:", purchaseTotal + finalTax);`
};

export default function LessonPlayground({ initialCode }: LessonPlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  // Update editor when initialCode changes (e.g., when navigation switches lessons)
  useEffect(() => {
    setCode(initialCode);
    setLogs([]);
    setStatus("idle");
  }, [initialCode]);

  // Synchronize textarea scroll position with line numbers sidebar
  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

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
      setStatus("success");
    } catch (err: any) {
      setLogs([{ type: "error", content: `Error: ${err.message || err}` }]);
      setStatus("error");
    } finally {
      // Restore console.log
      console.log = originalConsoleLog;
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setLogs([]);
    setStatus("idle");
  };

  const loadPreset = (key: keyof typeof PRESETS) => {
    setCode(PRESETS[key]);
    setLogs([]);
    setStatus("idle");
  };

  // Generate list of line numbers based on the code length
  const lineCount = code.split("\n").length;
  const lineNumbers = Array.from({ length: Math.max(lineCount, 1) }, (_, i) => i + 1);

  return (
    <div className={styles.playgroundContainer}>
      {/* Interactive Presets Toolbar */}
      <div className={styles.presetsBar}>
        <span className={styles.presetsLabel}>Load Preset:</span>
        <div className={styles.presetsList}>
          <button id="lesson-preset-variables" className={styles.presetBtn} onClick={() => loadPreset("variables")} aria-label="Load variables template">
            Variables
          </button>
          <button id="lesson-preset-logic" className={styles.presetBtn} onClick={() => loadPreset("logic")} aria-label="Load conditionals template">
            Conditionals
          </button>
          <button id="lesson-preset-loops" className={styles.presetBtn} onClick={() => loadPreset("loops")} aria-label="Load loops template">
            Loops
          </button>
          <button id="lesson-preset-functions" className={styles.presetBtn} onClick={() => loadPreset("functions")} aria-label="Load functions template">
            Functions
          </button>
        </div>
      </div>

      {/* Editor Window Container */}
      <div className={styles.editorWindow}>
        {/* Window Header */}
        <div className={styles.windowHeader}>
          <div className={styles.windowDots}>
            <div className={`${styles.windowDot} ${styles.windowDotRed}`}></div>
            <div className={`${styles.windowDot} ${styles.windowDotYellow}`}></div>
            <div className={`${styles.windowDot} ${styles.windowDotGreen}`}></div>
          </div>
          <div className={styles.windowTitle}>sandbox.js</div>
          <div style={{ width: 44 }}></div> {/* Balance spacer */}
        </div>

        {/* Code Editor Body */}
        <div className={styles.editorBody}>
          {/* Line Numbers */}
          <div className={styles.lineNumbers} ref={lineNumbersRef}>
            {lineNumbers.map((num) => (
              <div key={num} className={styles.lineNumberItem}>{num}</div>
            ))}
          </div>

          {/* Text Area */}
          <label htmlFor="lesson-code-editor" className="sr-only">Code editor</label>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onScroll={handleScroll}
            spellCheck="false"
            id="lesson-code-editor"
          />
        </div>
      </div>

      {/* Console Output Area */}
      <div className={`${styles.consoleOutput} ${status === "success" ? styles.consoleSuccessBorder : status === "error" ? styles.consoleErrorBorder : ""}`}>
        <div className={styles.consoleHeader}>
          <div className={styles.consoleTitleRow}>
            <span className={styles.consoleTitle}>Console Output</span>
            {status === "success" && (
              <span className={styles.statusBadgeSuccess}>✓ Success</span>
            )}
            {status === "error" && (
              <span className={styles.statusBadgeError}>⚠ Error</span>
            )}
          </div>
          <button
            id="lesson-playground-clear-btn"
            className={styles.clearBtn}
            onClick={() => {
              setLogs([]);
              setStatus("idle");
            }}
            aria-label="Clear console"
          >
            Clear
          </button>
        </div>
        
        <div className={styles.consoleLogsWrapper}>
          {logs.length === 0 ? (
            <div className={styles.consolePlaceholder}>
              Console is clean. Click "Run Code" below to see output...
            </div>
          ) : (
            logs.map((log, index) => (
              <div
                key={index}
                className={log.type === "error" ? styles.consoleError : styles.consoleLog}
              >
                {log.content}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer Controls */}
      <div className={styles.footerBar}>
        <button
          id="lesson-playground-run-btn"
          className={styles.runBtn}
          onClick={runCode}
          aria-label="Run code"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ display: "inline-block", verticalAlign: "middle" }}>
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Run Code
        </button>

        <button
          id="lesson-playground-reset-btn"
          className={styles.resetBtn}
          onClick={resetCode}
          aria-label="Reset code"
        >
          Reset Code
        </button>
      </div>
    </div>
  );
}
