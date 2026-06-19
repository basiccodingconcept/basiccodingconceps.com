"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
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
    code: `# Welcome to the Python Playground!
# Write your code here and click "Run Code" to execute it.

message = "Hello, Python World!"
print(message)

# Let's run a calculation
apples = 10
oranges = 4
total = apples + oranges
print(f"Total fruit count: {total}")
`
  },
  variables: {
    name: "Variables",
    code: `# Storing values inside variables
player_name = "Guido"
player_score = 95.5
is_champion = True

print("Player Name:", player_name)
print("Score:", player_score)
print("Is Champion?", is_champion)
`
  },
  conditionals: {
    name: "Conditionals",
    code: `# Conditional logical check
score = 82

print(f"Checking score: {score}")

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
`
  },
  loops: {
    name: "Loops",
    code: `# Automating loops in Python
print("Countdown starting...")

for i in range(5, 0, -1):
    print("T-minus:", i)

print("Lift off!")
`
  },
  lists: {
    name: "Lists & Dictionaries",
    code: `# Lists and dictionaries are core data structures
fruits = ["apple", "banana", "cherry"]
print("Initial list:", fruits)

fruits.append("date")
print("Updated list:", fruits)

# Dictionary
user = {
    "name": "Alice",
    "age": 28,
    "role": "Developer"
}
print(f"User {user['name']} is a {user['role']}.")
`
  }
};

interface LogEntry {
  type: "log" | "error";
  content: string;
}

export default function PythonPlayground() {
  const [code, setCode] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading Pyodide WebAssembly packages...");
  const [isReady, setIsReady] = useState(false);
  
  const pyodideRef = useRef<any>(null);

  // Load Pyodide WASM runtime on mount
  useEffect(() => {
    setCode(PRESETS.welcome.code);

    const loadPyodideRuntime = async () => {
      if (typeof window === "undefined") return;

      try {
        // If script is not already loaded
        if (!document.getElementById("pyodide-script")) {
          const script = document.createElement("script");
          script.id = "pyodide-script";
          script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js";
          script.async = true;
          script.onload = async () => {
            await initPyodide();
          };
          script.onerror = () => {
            setLoadingMessage("Failed to download Python runtime script. Check connection.");
          };
          document.body.appendChild(script);
        } else {
          await initPyodide();
        }
      } catch (err) {
        console.error(err);
        setLoadingMessage("Initialization failed.");
      }
    };

    const initPyodide = async () => {
      try {
        setLoadingMessage("Initializing WebAssembly Python environment...");
        const py = await (window as any).loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/"
        });
        pyodideRef.current = py;
        setIsLoading(false);
        setIsReady(true);
      } catch (e) {
        console.error(e);
        setLoadingMessage("Failed to instantiate WASM Python environment.");
      }
    };

    loadPyodideRuntime();
  }, []);

  // Compute line numbers to display
  const lineNumbers = useMemo(() => {
    const lines = code.split("\n").length;
    return Array.from({ length: Math.max(lines, 1) }, (_, i) => i + 1);
  }, [code]);

  // Execute Python code in WASM Pyodide sandbox
  const runCode = async () => {
    if (!isReady || !pyodideRef.current) return;
    
    setLogs([]);
    const pyodide = pyodideRef.current;

    try {
      // Redirect python stdout and stderr streams to capture outputs
      await pyodide.runPythonAsync(`
import sys
import io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);

      // Run user code
      await pyodide.runPythonAsync(code);

      // Get values from streams
      const stdout = pyodide.runPython("sys.stdout.getvalue()");
      const stderr = pyodide.runPython("sys.stderr.getvalue()");

      const outputLogs: LogEntry[] = [];
      
      if (stdout) {
        outputLogs.push({ type: "log", content: stdout.trim() });
      }
      if (stderr) {
        outputLogs.push({ type: "error", content: stderr.trim() });
      }
      if (outputLogs.length === 0) {
        outputLogs.push({ type: "log", content: "Code executed successfully with no logs." });
      }
      
      setLogs(outputLogs);
    } catch (err: any) {
      setLogs([{ type: "error", content: String(err.message || err) }]);
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
                <span className={styles.breadcrumbCurrent}>Python</span>
              </div>
              <h1 className={styles.title}>
                Python Sandbox <span className={styles.badge}>Python 3</span>
              </h1>
            </div>

            {/* Presets */}
            <div className={styles.templatesBar}>
              <span className={styles.templateLabel}>Presets:</span>
              {Object.keys(PRESETS).map((key) => (
                <button
                  key={key}
                  id={`python-playground-preset-${key}`}
                  onClick={() => loadPreset(key)}
                  className={styles.templateBtn}
                  disabled={isLoading}
                >
                  {PRESETS[key].name}
                </button>
              ))}
            </div>
          </header>

          {/* Sandbox workspace */}
          <div className={styles.sandbox} style={{ position: "relative" }}>
            {/* Pyodide Loading Overlay */}
            {isLoading && (
              <div className={styles.loadingOverlay}>
                <div className={styles.spinner}></div>
                <div className={styles.loadingText}>{loadingMessage}</div>
                <div className={styles.loadingSubtext}>This might take a few seconds on first load.</div>
              </div>
            )}

            {/* Editor */}
            <div className={styles.editorPane}>
              <div className={styles.paneHeader}>
                <span className={styles.paneTitle}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  main.py
                </span>
                <button
                  id="python-playground-clear-btn"
                  onClick={() => setCode("")}
                  className={styles.actionBtn}
                  title="Clear editor code"
                  disabled={isLoading}
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
                <label htmlFor="python-playground-code-editor" className="sr-only">Python editor</label>
                <textarea
                  id="python-playground-code-editor"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className={styles.textarea}
                  spellCheck="false"
                  placeholder="# Enter Python 3 code here..."
                  disabled={isLoading}
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
                  Standard Output (stdout)
                </span>
                <div className={styles.paneActions}>
                  <button
                    onClick={() => setLogs([])}
                    className={`${styles.actionBtn} ${styles.consoleActionBtn}`}
                    disabled={isLoading}
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
                    Console output will appear here. Click &quot;Run Code&quot; to execute.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className={styles.bottomControls}>
            <div className={styles.statusInfo}>
              Runs locally in your browser using Pyodide WebAssembly.
            </div>
            <div className={styles.buttonsGroup}>
              <button id="python-playground-reset-btn" onClick={resetCode} className={styles.btnReset} disabled={isLoading}>
                Reset Code
              </button>
              <button id="python-playground-run-btn" onClick={runCode} className={styles.btnRun} disabled={isLoading}>
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
