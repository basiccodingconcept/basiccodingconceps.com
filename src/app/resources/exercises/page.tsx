/* src/app/resources/exercises/page.tsx */

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

interface Challenge {
  id: string;
  title: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  prompt: string;
  hint: string;
  jsStarter: string;
  pyStarter: string;
  jsSolution: string;
  pySolution: string;
  explanation: string;
}

const getChallengeIcon = (id: string, width = 20, height = 20) => {
  switch (id) {
    case "ex-1":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "ex-2":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h-4a4 4 0 0 0-4 4v8" />
          <path d="M6 8h4a4 4 0 0 1 4 4v8" />
          <polyline points="14 16 18 20 14 24" />
          <polyline points="10 16 6 20 10 24" />
        </svg>
      );
    case "ex-3":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="8" y1="9" x2="16" y2="15" />
        </svg>
      );
    case "ex-4":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6" />
          <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      );
    case "ex-5":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      );
    case "ex-6":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    default:
      return null;
  }
};

const challengesData: Challenge[] = [
  {
    id: "ex-1",
    title: "Double the Magic",
    topic: "Variables & Math",
    difficulty: "Easy",
    prompt: "Declare a variable named `score` that starts at `50`, then write code to multiply its value by `2` and print the final score.",
    hint: "Use the assignment operator (=) combined with the multiplication operator (*) to write score = score * 2.",
    jsStarter: `let score = 50;\n// Double the score here\n\nconsole.log(score);`,
    pyStarter: `score = 50\n# Double the score here\n\nprint(score)`,
    jsSolution: `let score = 50;\nscore = score * 2; // or score *= 2;\nconsole.log(score); // outputs: 100`,
    pySolution: `score = 50\nscore = score * 2  # or score *= 2\nprint(score)        # outputs: 100`,
    explanation: "By reassigning the score variable, the computer computes the right-side evaluation (50 * 2 = 100) first, and overrides the old variable content with 100."
  },
  {
    id: "ex-2",
    title: "Ice Cream Budget",
    topic: "Conditionals",
    difficulty: "Easy",
    prompt: "Create a budget variable. Write a conditional that prints 'Buy it!' if you have $5 or more, and prints 'Save money!' if you have less.",
    hint: "Check if the budget is greater than or equal to 5 using the >= comparison operator in an if-statement.",
    jsStarter: `let budget = 4.50;\n\n// Write if/else conditional here\n`,
    pyStarter: `budget = 4.50\n\n# Write if/else conditional here\n`,
    jsSolution: `let budget = 4.50;\nif (budget >= 5) {\n  console.log("Buy it!");\n} else {\n  console.log("Save money!");\n}`,
    pySolution: `budget = 4.50\nif budget >= 5:\n    print("Buy it!")\nelse:\n    print("Save money!")`,
    explanation: "Since the budget of 4.50 is less than 5, the condition evaluates to false, causing the execution flow to skip the 'if' block and execute the 'else' block."
  },
  {
    id: "ex-3",
    title: "Odd or Even Checker",
    topic: "Conditionals & Math",
    difficulty: "Easy",
    prompt: "Declare a number variable. Write a program that prints 'Even' if the number is divisible by 2 with no remainder, and prints 'Odd' otherwise.",
    hint: "Use the modulo operator (%) which returns the remainder of a division. x % 2 === 0 checks if it is even.",
    jsStarter: `let number = 13;\n\n// Your odd/even check here\n`,
    pyStarter: `number = 13\n\n# Your odd/even check here\n`,
    jsSolution: `let number = 13;\nif (number % 2 === 0) {\n  console.log("Even");\n} else {\n  console.log("Odd");\n}`,
    pySolution: `number = 13\nif number % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")`,
    explanation: "13 divided by 2 is 6 with a remainder of 1. Because the remainder is not 0, it falls into the else branch, printing 'Odd'."
  },
  {
    id: "ex-4",
    title: "Count the Rockets",
    topic: "Loops",
    difficulty: "Medium",
    prompt: "Write a loop that counts from 1 up to 5, printing the loop iteration index followed by 'Rockets launched!' at each step.",
    hint: "For JS, initialize i = 1, run while i <= 5. For Python, use range(1, 6) since the stop value is exclusive.",
    jsStarter: `// Write a for-loop that counts 1 to 5\n`,
    pyStarter: `# Write a for-loop that counts 1 to 5\n`,
    jsSolution: `for (let i = 1; i <= 5; i++) {\n  console.log(i + " Rockets launched!");\n}`,
    pySolution: `for i in range(1, 6):\n    print(f"{i} Rockets launched!")`,
    explanation: "The loop starts at 1, prints the string, increments the counter by 1, and continues iterating until the condition i <= 5 becomes false."
  },
  {
    id: "ex-5",
    title: "Sum the Toy Chest",
    topic: "Arrays & Loops",
    difficulty: "Medium",
    prompt: "You have an array/list of prices: `[10, 25, 5]`. Write a loop that iterates through the list, adds each price to a `total` variable, and prints the final total.",
    hint: "Initialize total = 0 before the loop. Loop over the index positions of the array and add array[index] to total.",
    jsStarter: `let prices = [10, 25, 5];\nlet total = 0;\n\n// Loop and sum here\n\nconsole.log(total);`,
    pyStarter: `prices = [10, 25, 5]\ntotal = 0\n\n# Loop and sum here\n\nprint(total)`,
    jsSolution: `let prices = [10, 25, 5];\nlet total = 0;\nfor (let i = 0; i < prices.length; i++) {\n  total += prices[i];\n}\nconsole.log(total); // outputs: 40`,
    pySolution: `prices = [10, 25, 5]\ntotal = 0\nfor price in prices:\n    total += price\nprint(total)         # outputs: 40`,
    explanation: "The loop fetches each element sequentially (10, then 25, then 5) and aggregates it into the total accumulator variable."
  },
  {
    id: "ex-6",
    title: "Create a User Profile",
    topic: "Objects & Maps",
    difficulty: "Easy",
    prompt: "Create an object or dictionary named `user` representing a programmer profile. It must contain keys for `username` (string), `level` (number), and `isOnline` (boolean).",
    hint: "Enclose the properties in curly braces. Assign the object to a variable named user.",
    jsStarter: `// Create user object here\n`,
    pyStarter: `# Create user dictionary here\n`,
    jsSolution: `let user = {\n  username: "code_ninja",\n  level: 5,\n  isOnline: true\n};\nconsole.log(user.username);`,
    pySolution: `user = {\n    "username": "code_ninja",\n    "level": 5,\n    "isOnline": True\n}\nprint(user["username"])`,
    explanation: "Objects (JS) and Dictionaries (Python) are collections of key-value properties, which allow storing multiple fields of related data under a single container."
  }
];

export default function ExercisesPage() {
  const [activeDiff, setActiveDiff] = useState<"All" | "Easy" | "Medium">("All");
  const [solvedIds, setSolvedIds] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hintId, setHintId] = useState<string | null>(null);
  const [solutionLang, setSolutionLang] = useState<"js" | "py">("js");

  // Load progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("solved_exercises");
      if (saved) {
        setSolvedIds(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const toggleSolved = (id: string) => {
    let updated: string[];
    if (solvedIds.includes(id)) {
      updated = solvedIds.filter((x) => x !== id);
    } else {
      updated = [...solvedIds, id];
    }
    setSolvedIds(updated);
    try {
      localStorage.setItem("solved_exercises", JSON.stringify(updated));
    } catch (e) {}
  };

  const filteredChallenges = challengesData.filter(
    (c) => activeDiff === "All" || c.difficulty === activeDiff
  );

  const percentComplete = Math.round((solvedIds.length / challengesData.length) * 100);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.badge}>Interactive Lab</div>
            <h1 className={styles.title}>Practice Exercises</h1>
            <p className={styles.subtitle}>
              Test your logic with our curated programming challenges! Solve them on your computer or in our playgrounds, check off completed quests, and track your progress.
            </p>
          </header>

          {/* Progress Widget Card */}
          <div className={styles.progressCard}>
            <div className={styles.progressText}>
              <h3>Your Challenge Progress</h3>
              <p>
                You have completed <strong>{solvedIds.length}</strong> out of{" "}
                <strong>{challengesData.length}</strong> coding challenges!
              </p>
              {percentComplete === 100 && (
                <span className={styles.celebrationText}>
                  Congratulations! You solved all challenges! You've mastered these concepts.
                </span>
              )}
            </div>

            <div className={styles.progressGaugeWrapper}>
              <div
                className={styles.progressBar}
                style={{
                  background: `conic-gradient(var(--primary) ${percentComplete * 3.6}deg, var(--secondary) 0deg)`,
                }}
              >
                <div className={styles.progressPercent}>{percentComplete}%</div>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className={styles.filterBar}>
            <div className={styles.tabsRow}>
              {["All", "Easy", "Medium"].map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDiff(d as any)}
                  className={`${styles.filterTab} ${activeDiff === d ? styles.filterTabActive : ""}`}
                  id={`exercise-filter-${d.toLowerCase()}`}
                >
                  {d} Challenges
                </button>
              ))}
            </div>
            <Link href="/playground" className={styles.playgroundBtn} id="exercise-playground-link">
              Open Code Playground
            </Link>
          </div>

          {/* Challenges List */}
          <div className={styles.list}>
            {filteredChallenges.map((challenge) => {
              const isSolved = solvedIds.includes(challenge.id);
              const isExpanded = expandedId === challenge.id;
              const isHintShown = hintId === challenge.id;

              return (
                <div
                  key={challenge.id}
                  className={`${styles.challengeCard} ${isSolved ? styles.cardSolved : ""}`}
                >
                  {/* Card Header Top Row */}
                  <div className={styles.cardHeader}>
                    <div className={styles.leftMeta}>
                      <span className={styles.cardEmoji}>
                        {getChallengeIcon(challenge.id, 20, 20)}
                      </span>
                      <div>
                        <h4 className={styles.cardTitle}>{challenge.title}</h4>
                        <div className={styles.tagsRow}>
                          <span className={styles.topicTag}>{challenge.topic}</span>
                          <span
                            className={`${styles.difficultyTag} ${
                              challenge.difficulty === "Easy" ? styles.tagEasy : styles.tagMedium
                            }`}
                          >
                            {challenge.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.rightActions}>
                      <label className={styles.checkboxContainer}>
                        <input
                          type="checkbox"
                          checked={isSolved}
                          onChange={() => toggleSolved(challenge.id)}
                          id={`exercise-checkbox-${challenge.id}`}
                        />
                        <span className={styles.checkboxLabel}>
                          {isSolved ? "Solved! ✓" : "Mark as Solved"}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Prompt Text */}
                  <div className={styles.promptArea}>
                    <strong>Challenge Quest:</strong>
                    <p>{challenge.prompt}</p>
                  </div>

                  {/* Buttons Row */}
                  <div className={styles.buttonsRow}>
                    <button
                      onClick={() => setHintId(isHintShown ? null : challenge.id)}
                      className={styles.actionBtn}
                      id={`exercise-hint-btn-${challenge.id}`}
                    >
                      {isHintShown ? "Hide Hint" : "Get a Hint"}
                    </button>

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : challenge.id)}
                      className={styles.viewSolutionsBtn}
                      id={`exercise-solution-btn-${challenge.id}`}
                    >
                      {isExpanded ? "Hide Solution" : "View Code Solution"}
                    </button>
                  </div>

                  {/* Hint Box */}
                  {isHintShown && (
                    <div className={styles.hintBox}>
                      <strong>Hint:</strong>
                      <p>{challenge.hint}</p>
                    </div>
                  )}

                  {/* Expanded Solution Drawer */}
                  {isExpanded && (
                    <div className={styles.solutionBox}>
                      <div className={styles.solutionHeader}>
                        <span style={{ fontWeight: "700" }}>Answer Solution Keys:</span>
                        <div className={styles.solutionLangToggle}>
                          <button
                            onClick={() => setSolutionLang("js")}
                            className={`${styles.langBtn} ${solutionLang === "js" ? styles.langBtnActive : ""}`}
                            id={`exercise-solution-lang-js-${challenge.id}`}
                          >
                            JavaScript
                          </button>
                          <button
                            onClick={() => setSolutionLang("py")}
                            className={`${styles.langBtn} ${solutionLang === "py" ? styles.langBtnActive : ""}`}
                            id={`exercise-solution-lang-py-${challenge.id}`}
                          >
                            Python
                          </button>
                        </div>
                      </div>

                      {/* Code Snippets */}
                      <div className={styles.codeComparisonGrid}>
                        <div>
                          <span className={styles.codeLabel}>Starter Code:</span>
                          <pre className={styles.codeBlock}>
                            <code>
                              {solutionLang === "js" ? challenge.jsStarter : challenge.pyStarter}
                            </code>
                          </pre>
                        </div>
                        <div>
                          <span className={styles.codeLabel}>Completed Solution:</span>
                          <pre className={styles.codeBlock} style={{ borderColor: "var(--accent-green)" }}>
                            <code>
                              {solutionLang === "js" ? challenge.jsSolution : challenge.pySolution}
                            </code>
                          </pre>
                        </div>
                      </div>

                      {/* Logic breakdown */}
                      <div className={styles.logicBreakdown}>
                        <strong>How It Works:</strong>
                        <p>{challenge.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
