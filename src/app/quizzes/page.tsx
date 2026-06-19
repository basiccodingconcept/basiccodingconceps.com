/* src/app/quizzes/page.tsx */

"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { lessons, QuizQuestion } from "@/data/lessons";
import styles from "./page.module.css";

interface QuizProgress {
  completed: boolean;
  score: number;
  total: number;
}

type ProgressMap = Record<string, QuizProgress>;

export default function QuizzesPage() {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<"All" | "Beginner" | "Intermediate" | "Advanced">("All");
  
  // Quiz Workspace state
  const [activeQuiz, setActiveQuiz] = useState<any>(null); // LessonData or { slug: "final", title: "Final Assessment", ... }
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [runningScore, setRunningScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  // Certificate states
  const [certName, setCertName] = useState("Learner");

  // Load progress stats from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("coding_quizzes_progress");
      if (stored) {
        try {
          setProgress(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse quiz progress", e);
        }
      }
    }
  }, []);

  // Save progress stats to localStorage
  const saveProgress = (slug: string, score: number, total: number) => {
    const newProgress = {
      ...progress,
      [slug]: { completed: true, score, total }
    };
    setProgress(newProgress);
    if (typeof window !== "undefined") {
      localStorage.setItem("coding_quizzes_progress", JSON.stringify(newProgress));
    }
  };

  // Get all lessons containing quiz questions
  const quizzes = useMemo(() => {
    return Object.values(lessons)
      .sort((a, b) => a.num - b.num)
      .filter(lesson => lesson.quizQuestions && lesson.quizQuestions.length > 0);
  }, []);

  // Filtered quizzes
  const filteredQuizzes = useMemo(() => {
    return quizzes.filter(quiz => {
      const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            quiz.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = selectedLevel === "All" || quiz.level === selectedLevel;
      return matchesSearch && matchesLevel;
    });
  }, [quizzes, searchQuery, selectedLevel]);

  // Compute stats
  const stats = useMemo(() => {
    const totalCount = quizzes.length;
    const completedQuizzes = Object.keys(progress).filter(key => key !== "final" && progress[key]?.completed);
    const completedCount = completedQuizzes.length;
    
    // Average Accuracy
    let totalCorrect = 0;
    let totalQuestionsAnswered = 0;
    Object.keys(progress).forEach(key => {
      if (progress[key]) {
        totalCorrect += progress[key].score;
        totalQuestionsAnswered += progress[key].total;
      }
    });
    
    const accuracy = totalQuestionsAnswered > 0 
      ? Math.round((totalCorrect / totalQuestionsAnswered) * 100) 
      : 0;

    const hasFinalCertificate = progress["final"]?.completed && (progress["final"].score >= 7);

    return {
      totalCount,
      completedCount,
      accuracy,
      hasFinalCertificate
    };
  }, [quizzes, progress]);

  // Launch a standard concept quiz
  const startQuiz = (quiz: any) => {
    setActiveQuiz(quiz);
    setActiveQuestions(quiz.quizQuestions);
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setRunningScore(0);
    setShowResults(false);
  };

  // Launch the cumulative final assessment
  const startFinalAssessment = () => {
    // Gather all questions across all concepts
    const allQuestions: QuizQuestion[] = [];
    quizzes.forEach(q => {
      if (q.quizQuestions) {
        allQuestions.push(...q.quizQuestions);
      }
    });

    // Pick 10 random questions
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);

    setActiveQuiz({
      slug: "final",
      title: "Ultimate Final Challenge",
      desc: "Test your overall programming fundamentals across all 13 core concepts. Score 7/10 or higher to earn your Certificate of Completion!",
      level: "Intermediate",
    });
    setActiveQuestions(selected);
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setRunningScore(0);
    setShowResults(false);
  };

  // Select option
  const handleSelectOption = (idx: number) => {
    if (hasSubmitted) return;
    setSelectedOption(idx);
  };

  // Submit/Check answer
  const handleSubmitAnswer = () => {
    if (selectedOption === null || hasSubmitted) return;
    
    setHasSubmitted(true);
    const correctIdx = activeQuestions[currentQuestionIdx].correctAnswer;
    if (selectedOption === correctIdx) {
      setRunningScore(prev => prev + 1);
    }
  };

  // Go to next question or show results
  const handleNextQuestion = () => {
    if (currentQuestionIdx + 1 < activeQuestions.length) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
    } else {
      // Completed! Save progress
      saveProgress(activeQuiz.slug, runningScore, activeQuestions.length);
      setShowResults(true);
    }
  };

  // Close workspace modal
  const closeWorkspace = () => {
    setActiveQuiz(null);
    setActiveQuestions([]);
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setRunningScore(0);
    setShowResults(false);
  };

  // Print certificate trigger
  const handlePrintCertificate = () => {
    window.print();
  };

  // Parse inline backticks in question text to styled code markup
  const formatQuestionText = (text: string) => {
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={index} style={{
            fontFamily: "var(--font-mono)",
            background: "var(--secondary)",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "0.9em",
            color: "#ec4899",
            fontWeight: "600"
          }}>
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  // Custom Line Icon mapping based on concept slug
  const renderIcon = (slug: string) => {
    switch (slug) {
      case "what-is-coding":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case "comments":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        );
      case "variables":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        );
      case "data-types":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
        );
      case "strings":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10z"></path>
            <line x1="9" y1="9" x2="15" y2="9"></line>
            <line x1="9" y1="13" x2="13" y2="13"></line>
          </svg>
        );
      case "operators":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <line x1="12" y1="5" x2="12" y2="19"></line>
          </svg>
        );
      case "conditionals":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="3" x2="6" y2="15"></line>
            <circle cx="18" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M18 9a9 9 0 0 1-9 9"></path>
          </svg>
        );
      case "loops":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
        );
      case "functions":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        );
      case "arrays":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        );
      case "objects":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
          </svg>
        );
      case "input-output":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
            <line x1="6" y1="8" x2="6.01" y2="8"></line>
            <line x1="10" y1="8" x2="18" y2="8"></line>
            <line x1="6" y1="12" x2="6.01" y2="12"></line>
            <line x1="10" y1="12" x2="14" y2="12"></line>
            <line x1="6" y1="16" x2="6.01" y2="16"></line>
            <line x1="10" y1="16" x2="16" y2="16"></line>
          </svg>
        );
      case "debugging":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="2" width="8" height="14" rx="4"></rect>
            <line x1="6" y1="8" x2="2" y2="8"></line>
            <line x1="6" y1="12" x2="2" y2="12"></line>
            <line x1="18" y1="8" x2="22" y2="8"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <path d="M12 2v14"></path>
            <path d="M12 6a4 4 0 0 0-4 4"></path>
            <path d="M8 12c0 2.2 1.8 4 4 4s4-1.8 4-4"></path>
          </svg>
        );
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        );
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.badge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="12 8 8 12 12 16 16 12 12 8"></polygon>
              </svg>
              Knowledge Check
            </div>
            <h1 className={styles.title}>Coding Quizzes</h1>
            <p className={styles.subtitle}>
              Test your understanding of computer science fundamentals. Work through concept challenges or take the Ultimate Final Assessment to earn a certificate!
            </p>
          </header>

          {/* Stats Dashboard */}
          <section className={styles.statsDashboard}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                {stats.completedCount} / {stats.totalCount}
              </span>
              <span className={styles.statLabel}>Quizzes Completed</span>
              <span className={styles.statDesc}>Master core concepts one by one</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>{stats.accuracy}%</span>
              <span className={styles.statLabel}>Overall Accuracy</span>
              <span className={styles.statDesc}>Average accuracy across all attempts</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                {stats.hasFinalCertificate ? "1" : "0"}
              </span>
              <span className={styles.statLabel}>Certificates Earned</span>
              <span className={styles.statDesc}>Pass the Ultimate Final Challenge</span>
            </div>
          </section>

          {/* Cumulative Assessment Section */}
          <section className={styles.ultimateCard}>
            <div className={styles.ultimateInfo}>
              <div className={styles.ultimateBadge}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                Final Milestone
              </div>
              <h2 className={styles.ultimateTitle}>Ultimate Final Challenge</h2>
              <p className={styles.ultimateDesc}>
                Take a 10-question randomized comprehensive exam covering variables, arrays, loops, operators, structures, and debugging. Score 70% or more to unlock your Certificate of Completion.
              </p>
            </div>
            <button onClick={startFinalAssessment} className={styles.ultimateBtn}>
              Take Final Assessment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </section>

          {/* Filters Bar */}
          <div className={styles.controlsBar}>
            <div className={styles.searchWrapper}>
              <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search quizzes by topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <div className={styles.filters}>
              {(["All", "Beginner", "Intermediate"] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`${styles.filterBtn} ${
                    selectedLevel === level ? styles.activeFilterBtn : ""
                  }`}
                >
                  {level === "All" ? "All Levels" : level}
                </button>
              ))}
            </div>
          </div>

          {/* Quizzes List */}
          <div className={styles.grid}>
            {filteredQuizzes.length > 0 ? (
              filteredQuizzes.map((quiz) => {
                const slug = quiz.slug;
                const record = progress[slug];
                const isCompleted = record?.completed;

                return (
                  <div key={slug} onClick={() => startQuiz(quiz)} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIcon}>
                        {renderIcon(slug)}
                      </div>
                      <div className={styles.cardBadgeGroup}>
                        <span className={`${styles.cardBadge} ${styles.badgeQuestions}`}>
                          {quiz.quizQuestions.length} Qs
                        </span>
                        <span className={`${styles.cardBadge} ${styles.badgeLevel}`}>
                          {quiz.level}
                        </span>
                      </div>
                    </div>

                    <h3 className={styles.cardTitle}>{quiz.title} Quiz</h3>
                    <p className={styles.cardDesc}>Test your understanding of {quiz.title.toLowerCase()}.</p>

                    <div className={styles.cardFooter}>
                      {isCompleted ? (
                        <div className={styles.completionIndicator}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Score: {record.score}/{record.total}</span>
                        </div>
                      ) : (
                        <span className={styles.startQuizText}>
                          Start Challenge
                        </span>
                      )}
                      <svg className={styles.cardArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "48px", color: "var(--text-tertiary)" }}>
                No quizzes match your current search or difficulty filters. Try resetting the criteria.
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Quiz Workspace Modal */}
      {activeQuiz && (
        <div className={styles.overlay}>
          <div className={styles.workspace}>
            <div className={styles.workspaceHeader}>
              <span className={styles.workspaceTitle}>{activeQuiz.title}</span>
              <button onClick={closeWorkspace} className={styles.closeBtn} title="Quit Quiz">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {!showResults ? (
              <>
                {/* Progress bar */}
                <div className={styles.progressSection}>
                  <div className={styles.progressBarTrack}>
                    <div
                      className={styles.progressBarFill}
                      style={{
                        width: `${((currentQuestionIdx) / activeQuestions.length) * 100}%`
                      }}
                    ></div>
                  </div>
                  <div className={styles.progressStats}>
                    <span>Question {currentQuestionIdx + 1} of {activeQuestions.length}</span>
                    <span>Current Score: {runningScore}</span>
                  </div>
                </div>

                {/* Question Body */}
                <div className={styles.questionContent}>
                  <h4 className={styles.questionText}>
                    {formatQuestionText(activeQuestions[currentQuestionIdx].question)}
                  </h4>

                  {/* Options List */}
                  <div className={styles.optionsGrid}>
                    {activeQuestions[currentQuestionIdx].options.map((option, idx) => {
                      let btnStyle = styles.optionBtn;
                      if (selectedOption === idx) {
                        btnStyle += ` ${styles.optionBtnSelected}`;
                      }

                      if (hasSubmitted) {
                        const correctIdx = activeQuestions[currentQuestionIdx].correctAnswer;
                        if (idx === correctIdx) {
                          btnStyle += ` ${styles.optionBtnCorrect}`;
                        } else if (selectedOption === idx) {
                          btnStyle += ` ${styles.optionBtnIncorrect}`;
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(idx)}
                          className={btnStyle}
                          disabled={hasSubmitted}
                        >
                          <span>{option}</span>
                          <span className={styles.optionIcon}>
                            {hasSubmitted && idx === activeQuestions[currentQuestionIdx].correctAnswer && (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#10b981" }}>
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            )}
                            {hasSubmitted && selectedOption === idx && idx !== activeQuestions[currentQuestionIdx].correctAnswer && (
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#ef4444" }}>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            )}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation Block */}
                  {hasSubmitted && (
                    <div className={styles.explanationBox}>
                      <div className={styles.explanationTitle}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        Explanation
                      </div>
                      <p className={styles.explanationText}>
                        {activeQuestions[currentQuestionIdx].explanation}
                      </p>
                    </div>
                  )}
                </div>

                {/* Workspace action footer */}
                <div className={styles.workspaceFooter}>
                  {!hasSubmitted ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={selectedOption === null}
                      className={styles.submitBtn}
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <button onClick={handleNextQuestion} className={styles.submitBtn}>
                      {currentQuestionIdx + 1 < activeQuestions.length ? "Next Question" : "See Results"}
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* Results screen */
              <div className={styles.resultsScreen}>
                {activeQuiz.slug === "final" && runningScore >= 7 ? (
                  <>
                    <div className={styles.trophyContainer}>
                      <svg className={styles.trophySvg} width="72" height="72" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2H6v2H1v6c0 3.66 2.5 6.64 6 7.42V20H5v2h14v-2h-2v-2.58c3.5-.78 6-3.76 6-7.42V4h-5V2zM3 10V6h3v4c0 1.66-1.34 3-3 3s-3-1.34-3-3zm18 0c0 1.66-1.34 3-3 3s-3-1.34-3-3V6h3v4z"></path>
                      </svg>
                    </div>
                    <h2 className={styles.resultsTitle}>Congratulations!</h2>
                    <p className={styles.resultsDesc}>
                      You scored **{runningScore}/10** on the cumulative assessment and earned your Certificate of Completion!
                    </p>

                    {/* Certificate view */}
                    <div className={styles.certInputWrapper}>
                      <label className={styles.certInputLabel}>Enter name for certificate:</label>
                      <input
                        type="text"
                        value={certName}
                        onChange={(e) => setCertName(e.target.value)}
                        className={styles.certInput}
                        maxLength={35}
                      />
                    </div>

                    <div className={styles.certificateWorkspace}>
                      <div className={styles.certBadge}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <div className={styles.certHeader}>Certificate of Achievement</div>
                      <div className={styles.certTitle}>Master of Coding Fundamentals</div>
                      <div className={styles.certSubtitle}>This is proudly awarded to</div>
                      <div className={styles.certName}>{certName}</div>
                      <div className={styles.certText}>
                        for successfully completing the comprehensive Final Assessment of the Basic Coding Concepts curriculum with an exceptional score of {runningScore * 10}%.
                      </div>
                      <div className={styles.certFooter}>
                        <div>
                          <div className={styles.certSigImage}>Coding Academy</div>
                          <div className={styles.certSig}>Issuer Signature</div>
                        </div>
                        <div>
                          <div style={{ fontSize: "0.85rem", fontWeight: "700", color: "#0f172a", marginBottom: "4px" }}>
                            {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                          </div>
                          <div className={styles.certSig}>Date Awarded</div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.resultsButtons}>
                      <button onClick={handlePrintCertificate} className={styles.submitBtn}>
                        Print Certificate
                      </button>
                      <button onClick={closeWorkspace} className={styles.btnSecondary}>
                        Return to Dashboard
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.scoreCircle}>
                      {runningScore}/{activeQuestions.length}
                    </div>
                    <h2 className={styles.resultsTitle}>Quiz Completed!</h2>
                    <p className={styles.resultsDesc}>
                      {runningScore === activeQuestions.length
                        ? "Perfect score! You've completely mastered this concept module."
                        : runningScore >= (activeQuestions.length * 0.7)
                        ? "Great job! You have a solid grasp of this programming topic."
                        : "Good attempt! Review the lesson material and try again to raise your score."}
                    </p>
                    <div className={styles.resultsButtons}>
                      <button onClick={() => startQuiz(activeQuiz)} className={styles.submitBtn}>
                        Retry Quiz
                      </button>
                      <button onClick={closeWorkspace} className={styles.btnSecondary}>
                        Close
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
