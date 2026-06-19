/* src/app/resources/next-steps/page.tsx */

"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

interface RoadmapStep {
  stepNum: number;
  title: string;
  description: string;
  tech: string[];
  projectIdea: string;
}

interface CareerRoadmap {
  id: string;
  title: string;
  description: string;
  steps: RoadmapStep[];
}

const getPathwayIcon = (id: string, width = 24, height = 24) => {
  switch (id) {
    case "webdev":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "gamedev":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <line x1="6" y1="12" x2="10" y2="12" />
          <line x1="8" y1="10" x2="8" y2="14" />
          <circle cx="15.5" cy="12" r="1" />
          <circle cx="18.5" cy="12" r="1" />
        </svg>
      );
    case "datascience":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case "automation":
      return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    default:
      return null;
  }
};

const getStepIcon = (activePath: string, stepNum: number, width = 20, height = 20) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

const roadmapsData: Record<string, CareerRoadmap> = {
  webdev: {
    id: "webdev",
    title: "Web Development",
    description: "Learn to build modern, interactive web applications and websites.",
    steps: [
      {
        stepNum: 1,
        title: "Front-End Structure & Style",
        description: "HTML provides the skeleton of web pages, and CSS provides the styling (layout, fonts, colors, responsiveness).",
        tech: ["HTML5", "CSS3", "Flexbox / Grid"],
        projectIdea: "Create a personal profile landing page showing your hobbies."
      },
      {
        stepNum: 2,
        title: "Interactive DOM Logic",
        description: "Use JavaScript to select HTML elements, listen to events (like button clicks), and modify styles dynamically.",
        tech: ["JavaScript (ES6)", "DOM API", "Fetch/JSON APIs"],
        projectIdea: "Build a functional weather app fetching live global weather reports."
      },
      {
        stepNum: 3,
        title: "Modern UI Frameworks",
        description: "Component-based frameworks allow building scalable, clean, and interactive single-page interfaces easily.",
        tech: ["React.js", "Next.js (App Router)", "CSS Modules"],
        projectIdea: "Develop a visual task manager card board (like Trello) saving cards locally."
      },
      {
        stepNum: 4,
        title: "Back-End & Databases",
        description: "Store user data, manage authentication (login/signup), and create your own server APIs.",
        tech: ["Node.js / Express", "PostgreSQL or MongoDB", "REST APIs"],
        projectIdea: "Create a full-stack blogging app where users can write, edit, and save articles."
      }
    ]
  },
  gamedev: {
    id: "gamedev",
    title: "Game Development",
    description: "Program video games, code physics, animations, and sound effects.",
    steps: [
      {
        stepNum: 1,
        title: "Master Object-Oriented Syntax",
        description: "Game programming relies heavily on structured objects. Master C# or Python basics to manage classes.",
        tech: ["C# Language", "Python (Pygame)", "Object-Oriented Coding"],
        projectIdea: "Build a text-based adventure game or a simple terminal tic-tac-toe."
      },
      {
        stepNum: 2,
        title: "Learn a Game Engine Core",
        description: "Engines provide renderers, physics simulations, sound mixers, and input handlers out-of-the-box.",
        tech: ["Unity Engine", "Godot (GDScript)", "Sprite Management"],
        projectIdea: "Create a simple 2D side-scroller game with physics loops (jumping over boxes)."
      },
      {
        stepNum: 3,
        title: "Game Logic & Math",
        description: "Understand 2D/3D coordinate vectors, collision math, game states (start, play, pause, game over), and scoring systems.",
        tech: ["Vector2 / Vector3 Math", "Collision Detection", "Local Highscores"],
        projectIdea: "Build a complete retro brick-breaker game with paddle tracking."
      },
      {
        stepNum: 4,
        title: "AI and Complex Mechanics",
        description: "Implement simple pathfinding behaviors for enemies, state machines, inventory structures, and levels.",
        tech: ["Enemy Pathfinding (A*)", "Finite State Machines", "Inventory Objects"],
        projectIdea: "Design a 2D RPG level featuring walking enemies, key-unlockable chests, and health metrics."
      }
    ]
  },
  datascience: {
    id: "datascience",
    title: "Data Science & AI",
    description: "Analyze records, draw graphs, automate analytics, and build machine learning engines.",
    steps: [
      {
        stepNum: 1,
        title: "Python Data Fundamentals",
        description: "Python is the industry standard for analytics. Learn arrays, file IO, and data structures.",
        tech: ["Python Core", "CSV/JSON Parsing", "Array Manipulations"],
        projectIdea: "Write a script that reads a spreadsheet and counts averages of numerical rows."
      },
      {
        stepNum: 2,
        title: "Scientific Data Libraries",
        description: "Utilize pre-built engines to parse tabular records and draw graphs instantly.",
        tech: ["Pandas Dataframes", "NumPy Math", "Matplotlib / Seaborn Graphs"],
        projectIdea: "Parse a public database of climate logs and plot global temperature changes."
      },
      {
        stepNum: 3,
        title: "Machine Learning Concepts",
        description: "Train models to categorize data, make predictions, and find correlation curves.",
        tech: ["Scikit-Learn", "Linear Regression", "Decision Trees"],
        projectIdea: "Build a model that predicts housing prices based on square-footage and rooms."
      },
      {
        stepNum: 4,
        title: "Deep Learning & AI Integration",
        description: "Train neural networks for image processing or interact with state-of-the-art LLM APIs.",
        tech: ["TensorFlow or PyTorch", "Neural Nets", "OpenAI / HuggingFace APIs"],
        projectIdea: "Build an AI chatbot that answers questions based on custom loaded text files."
      }
    ]
  },
  automation: {
    id: "automation",
    title: "Automation & Scripting",
    description: "Write custom scripts to handle tedious daily tasks, files, and web scraping.",
    steps: [
      {
        stepNum: 1,
        title: "File Operations & OS Tools",
        description: "Use coding commands to create, read, copy, rename, and zip files on your hard drive automatically.",
        tech: ["Python os & sys modules", "File IO Scripts", "JSON Configuration"],
        projectIdea: "Build a script that scans your Downloads directory and sorts files into folders by type."
      },
      {
        stepNum: 2,
        title: "Web Scraping Automation",
        description: "Write programs that open browsers, click links, and download specific text or images from websites.",
        tech: ["BeautifulSoup", "Selenium Webdriver", "HTML Parsing"],
        projectIdea: "Write an automated scraper that collects daily news titles and saves them to a text file."
      },
      {
        stepNum: 3,
        title: "API Connections & Email Alerts",
        description: "Fetch live API payloads (like stock tickers) and trigger email alerts automatically based on logic thresholds.",
        tech: ["Python requests module", "smtplib (Email client)", "Task Scheduling"],
        projectIdea: "Set up a script that emails you if price tags on a targeted online listing drop."
      },
      {
        stepNum: 4,
        title: "Database Logs & Sheets",
        description: "Directly manipulate Google Sheets, Excel sheets, or local SQL databases to write summaries automatically.",
        tech: ["Openpyxl (Excel)", "SQLite Databases", "Google Sheets API"],
        projectIdea: "Design an automated financial budget logger that updates a database from credit CSV logs."
      }
    ]
  }
};

const checklistData = [
  { id: "chk-1", text: "Create a free GitHub account to store your code projects" },
  { id: "chk-2", text: "Choose a target language (like JavaScript or Python) and install it locally" },
  { id: "chk-3", text: "Install a code editor (such as Visual Studio Code)" },
  { id: "chk-4", text: "Plan your first portfolio project on a piece of paper (sketch the layout/steps)" },
  { id: "chk-5", text: "Code the project step-by-step, committing changes to GitHub" },
  { id: "chk-6", text: "Publish your completed code online (using Vercel, Netlify, or GitHub Pages)" }
];

export default function NextStepsPage() {
  const [activePath, setActivePath] = useState<string>("webdev");
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  // Load checklist progress
  useEffect(() => {
    try {
      const saved = localStorage.getItem("next_steps_checklist");
      if (saved) {
        setCompletedItems(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const toggleChecklist = (id: string) => {
    let updated: string[];
    if (completedItems.includes(id)) {
      updated = completedItems.filter((x) => x !== id);
    } else {
      updated = [...completedItems, id];
    }
    setCompletedItems(updated);
    try {
      localStorage.setItem("next_steps_checklist", JSON.stringify(updated));
    } catch (e) {}
  };

  const selectedRoadmap = roadmapsData[activePath];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.badge}>Graduation Roadmap</div>
            <h1 className={styles.title}>What's Next?</h1>
            <p className={styles.subtitle}>
              Now that you understand the programming basics, what do you want to build? Choose your interest pathway below to reveal your custom learning timeline!
            </p>
          </header>

          {/* Goal Selector Buttons */}
          <div className={styles.selectorGrid}>
            {Object.values(roadmapsData).map((roadmap) => (
              <button
                key={roadmap.id}
                onClick={() => setActivePath(roadmap.id)}
                className={`${styles.selectorCard} ${activePath === roadmap.id ? styles.selectorCardActive : ""}`}
                id={`roadmap-select-path-${roadmap.id}`}
              >
                <span className={styles.selectorEmoji}>{getPathwayIcon(roadmap.id, 24, 24)}</span>
                <h4>{roadmap.title}</h4>
                <p>{roadmap.description}</p>
              </button>
            ))}
          </div>

          {/* Dynamic Roadmap Timeline */}
          <section className={styles.roadmapSection}>
            <h2 className={styles.sectionTitle}>
              Your {selectedRoadmap.title} Learning Path
            </h2>
            <p className={styles.sectionDesc}>Follow these 4 logical learning steps to build your developer portfolio:</p>

            <div className={styles.timeline}>
              {selectedRoadmap.steps.map((step) => (
                <div key={step.stepNum} className={styles.timelineNode}>
                  <div className={styles.nodeNumber}>
                    <span>{step.stepNum}</span>
                  </div>
                  <div className={styles.nodeCard}>
                    <div className={styles.nodeCardHeader}>
                      <span className={styles.nodeEmoji}>
                        {getStepIcon(activePath, step.stepNum, 20, 20)}
                      </span>
                      <h3>{step.title}</h3>
                    </div>
                    <p className={styles.nodeDesc}>{step.description}</p>

                    {/* Tech list */}
                    <div className={styles.techRow}>
                      <strong>Technologies to learn:</strong>
                      <div className={styles.techList}>
                        {step.tech.map((t, idx) => (
                          <span key={idx} className={styles.techTag}>{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Project Milestone */}
                    <div className={styles.projectBox}>
                      <span className={styles.projectBoxLabel}>Practice Milestone Project:</span>
                      <p>{step.projectIdea}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Career Launch Checklist */}
          <section className={styles.checklistSection}>
            <h2 className={styles.sectionTitle}>Developer Launchpad Checklist</h2>
            <p className={styles.sectionDesc}>Perform these actionable tasks to share your projects with the world and build your resume:</p>

            <div className={styles.checklistCard}>
              <div className={styles.checklistList}>
                {checklistData.map((item) => {
                  const isChecked = completedItems.includes(item.id);
                  return (
                    <label
                      key={item.id}
                      className={`${styles.checkItem} ${isChecked ? styles.checkItemChecked : ""}`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleChecklist(item.id)}
                        id={`roadmap-checklist-item-${item.id}`}
                      />
                      <span className={styles.checkText}>{item.text}</span>
                    </label>
                  );
                })}
              </div>

              {completedItems.length > 0 && (
                <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className={styles.checklistProgress}>
                    Progress: {completedItems.length} of {checklistData.length} completed
                  </span>
                  {completedItems.length === checklistData.length && (
                    <span className={styles.checklistCelebration}>
                      Ready to apply! You've set up your portfolio foundations!
                    </span>
                  )}
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
