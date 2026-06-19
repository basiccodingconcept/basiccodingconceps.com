/* src/app/resources/cheatsheets/page.tsx */

"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

interface CheatsheetTopic {
  id: string;
  title: string;
  description: string;
  jsCode: string;
  pyCode: string;
  explanation: string;
}

const getConceptIcon = (id: string, width = 20, height = 20) => {
  switch (id) {
    case "variables":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "data-types":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      );
    case "operators":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="8" y1="9" x2="16" y2="15" />
        </svg>
      );
    case "conditionals":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h-4a4 4 0 0 0-4 4v8" />
          <path d="M6 8h4a4 4 0 0 1 4 4v8" />
          <polyline points="14 16 18 20 14 24" />
          <polyline points="10 16 6 20 10 24" />
        </svg>
      );
    case "loops":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6" />
          <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      );
    case "functions":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "arrays":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      );
    case "objects":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="16" y1="2" x2="16" y2="4" />
          <line x1="8" y1="2" x2="8" y2="4" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    default:
      return null;
  }
};

const cheatsheetData: CheatsheetTopic[] = [
  {
    id: "variables",
    title: "Variables",
    description: "Variables store data values that can be referenced and manipulated in a program.",
    jsCode: `// Declaring variables in JavaScript\nlet toy = "Robot";     // Can be reassigned\nconst speed = 10;      // Constant, cannot change\nvar oldWay = true;     // Older way (function scoped)\n\n// Reassignment\ntoy = "Teddy Bear";`,
    pyCode: `# Declaring variables in Python\ntoy = "Robot"          # Dynamic typing, just name it!\nspeed = 10             # No const keyword; constants are capitalized by convention\nis_active = True       # Boolean is capitalized (True/False)\n\n# Reassignment\ntoy = "Teddy Bear"`,
    explanation: "JavaScript uses 'let' and 'const' for explicit declaration and scoping, while Python declares variables dynamically simply by assigning a value without keywords."
  },
  {
    id: "data-types",
    title: "Data Types",
    description: "Data types represent the different kinds of values you can work with in programming.",
    jsCode: `let text = "Hello";      // String\nlet num = 42;            // Number (integer & float)\nlet isCoding = true;     // Boolean\nlet empty = null;        // Null (explicit empty value)\nlet undef;               // Undefined (value not set)`,
    pyCode: `text = "Hello"           # str (String)\nnum = 42                 # int (Integer)\nprice = 19.99            # float (Floating point number)\nis_coding = True         # bool (Boolean)\nempty_val = None         # NoneType (representing empty)`,
    explanation: "JavaScript treats all numbers (integers and floats) under the 'Number' type and has 'undefined'. Python separates numbers into 'int' and 'float', and uses 'None' instead of 'null'."
  },
  {
    id: "operators",
    title: "Operators",
    description: "Operators perform operations on variables and values (math, comparison, or logic).",
    jsCode: `// Math\nlet sum = 10 + 5;        // Addition\nlet rem = 10 % 3;        // Modulo (Remainder = 1)\n\n// Comparison\n5 === 5                  // Strict Equality (true)\n5 !== "5"                // Strict Inequality (true)\n\n// Logic\ntrue && false            // Logical AND (false)\ntrue || false            // Logical OR (true)\n!true                    // Logical NOT (false)`,
    pyCode: `# Math\nsum_val = 10 + 5         # Addition\nrem = 10 % 3             # Modulo (Remainder = 1)\nfloor_div = 10 // 3      # Floor Division (3)\n\n# Comparison\n5 == 5                   # Equality (True)\n5 != 5                   # Inequality (False)\n\n# Logic\nTrue and False           # Logical AND (False)\nTrue or False            # Logical OR (True)\nnot True                 # Logical NOT (False)`,
    explanation: "JavaScript uses symbols for logical operators (&&, ||, !) and strict triple-equals (===) to check both value and type. Python uses clean English words (and, or, not) and standard double-equals (==) for comparisons."
  },
  {
    id: "conditionals",
    title: "Conditionals",
    description: "Conditionals run different blocks of code based on whether a condition is true or false.",
    jsCode: `let score = 85;\n\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else {\n  console.log("Try Again!");\n}`,
    pyCode: `score = 85\n\nif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\nelse:\n    print("Try Again!")`,
    explanation: "JavaScript surrounds conditions in parentheses () and uses curly braces {} to group code blocks. Python removes parentheses and uses a colon : with mandatory 4-space indentation to define blocks, using 'elif' instead of 'else if'."
  },
  {
    id: "loops",
    title: "Loops",
    description: "Loops repeat a block of code a specific number of times or while a condition is true.",
    jsCode: `// For loop (repeats 3 times)\nfor (let i = 0; i < 3; i++) {\n  console.log("Step: " + i);\n}\n\n// While loop\nlet count = 3;\nwhile (count > 0) {\n  console.log(count);\n  count--;\n}`,
    pyCode: `# For loop (repeats 3 times)\nfor i in range(3):\n    print(f"Step: {i}")\n\n# While loop\ncount = 3\nwhile count > 0:\n    print(count)\n    count -= 1`,
    explanation: "JavaScript loops use standard C-style syntax with variable initializers and counters. Python loops are cleaner and use the 'range()' function to count, requiring proper indentations."
  },
  {
    id: "functions",
    title: "Functions",
    description: "Functions are reusable blocks of code designed to perform a particular task.",
    jsCode: `// Declaring a function\nfunction greet(name) {\n  return "Hello, " + name + "!";\n}\n\n// Calling the function\nlet greeting = greet("Buddy");\nconsole.log(greeting);`,
    pyCode: `# Declaring a function\ndef greet(name):\n    return f"Hello, {name}!"\n\n# Calling the function\ngreeting = greet("Buddy")\nprint(greeting)`,
    explanation: "JavaScript uses the 'function' keyword, while Python uses the abbreviated 'def' (define) keyword. Both support parameters, return values, and function arguments."
  },
  {
    id: "arrays",
    title: "Arrays & Lists",
    description: "Arrays (or Lists) store ordered collections of multiple items in a single variable.",
    jsCode: `let list = ["Apple", "Banana"];\n\n// Accessing index\nlet first = list[0];     // "Apple"\n\n// Adding item\nlist.push("Cherry");     // ["Apple", "Banana", "Cherry"]\n\n// Length\nlet len = list.length;   // 3`,
    pyCode: `list_items = ["Apple", "Banana"]\n\n# Accessing index\nfirst = list_items[0]    # "Apple"\n\n# Adding item\nlist_items.append("Cherry")  # ["Apple", "Banana", "Cherry"]\n\n# Length\nlength = len(list_items) # 3`,
    explanation: "JavaScript calls these structures 'Arrays' and uses properties like '.push()' and '.length'. Python calls them 'Lists' and uses methods like '.append()' and the global 'len()' function."
  },
  {
    id: "objects",
    title: "Objects & Dictionaries",
    description: "Objects (or Dictionaries) store data in key-value pairs representing properties of a thing.",
    jsCode: `let dog = {\n  name: "Buddy",\n  age: 3,\n  isHappy: true\n};\n\n// Accessing properties\nlet dogName = dog.name; // "Buddy"\n\n// Updating properties\ndog.age = 4;`,
    pyCode: `dog = {\n    "name": "Buddy",\n    "age": 3,\n    "is_happy": True\n}\n\n# Accessing properties\ndog_name = dog["name"] # "Buddy"\n\n# Updating properties\ndog["age"] = 4`,
    explanation: "JavaScript refers to these as 'Objects' and allows accessing properties using dot notation (dog.name). Python refers to them as 'Dictionaries' (dict) and requires keys to be in quotes, accessing them using bracket notation (dog['name'])."
  }
];

export default function CheatsheetsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"js" | "py">("js");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredTopics = cheatsheetData.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.explanation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.badge}>Quick Reference</div>
            <h1 className={styles.title}>Interactive Code Cheatsheets</h1>
            <p className={styles.subtitle}>
              Compare syntax side-by-side between **JavaScript** and **Python**! Find syntax templates and descriptions for all programming concepts.
            </p>
          </header>

          {/* Controls Bar */}
          <div className={styles.controlsBar}>
            <div className={styles.searchWrapper}>
              <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px' }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search syntax (e.g. loops, let, function)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className={styles.clearSearchBtn}>
                  ×
                </button>
              )}
            </div>

            <div className={styles.languageToggle}>
              <button
                onClick={() => setActiveTab("js")}
                className={`${styles.langBtn} ${activeTab === "js" ? styles.langBtnActive : ""}`}
              >
                JavaScript
              </button>
              <button
                onClick={() => setActiveTab("py")}
                className={`${styles.langBtn} ${activeTab === "py" ? styles.langBtnActive : ""}`}
              >
                Python
              </button>
            </div>
          </div>

          {/* Cheatsheet grid */}
          {filteredTopics.length > 0 ? (
            <div className={styles.grid}>
              {filteredTopics.map((topic) => {
                const activeCode = activeTab === "js" ? topic.jsCode : topic.pyCode;
                const copiedKey = `${topic.id}-${activeTab}`;
                const isCopied = copiedId === copiedKey;

                return (
                  <div key={topic.id} className={styles.card}>
                    {/* Card Top */}
                    <div className={styles.cardHeader}>
                      <div className={styles.cardTitleRow}>
                        <span className={styles.cardEmoji}>
                          {getConceptIcon(topic.id, 20, 20)}
                        </span>
                        <h3>{topic.title}</h3>
                      </div>
                      <span className={styles.languageIndicator}>
                        {activeTab === "js" ? "JavaScript" : "Python"}
                      </span>
                    </div>

                    <p className={styles.cardDesc}>{topic.description}</p>

                    {/* Code Container */}
                    <div className={styles.codeContainer}>
                      <button
                        onClick={() => copyToClipboard(activeCode, copiedKey)}
                        className={styles.copyBtn}
                        aria-label="Copy code to clipboard"
                      >
                        {isCopied ? "Copied! ✓" : "Copy Code"}
                      </button>
                      <pre className={styles.codeBlock}>
                        <code>{activeCode}</code>
                      </pre>
                    </div>

                    {/* Analogies and explanations */}
                    <div className={styles.explanationBox}>
                      <strong>Syntax Comparison:</strong>
                      <p>{topic.explanation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.noResults}>
              <div style={{ color: 'var(--text-tertiary)', fontSize: '2rem', marginBottom: '8px' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3>No syntax match found</h3>
              <p>Try searching for core terms like "loops", "variables", or "functions".</p>
              <button onClick={() => setSearchQuery("")} className={styles.resetSearchBtn}>
                Reset Search
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
