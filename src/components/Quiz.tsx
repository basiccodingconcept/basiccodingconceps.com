"use client";

import React, { useState } from "react";
import { QuizQuestion } from "@/data/lessons";
import styles from "./Quiz.module.css";

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
  conceptId: string;
}

export default function Quiz({ title, questions, conceptId }: QuizProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedIdx(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedIdx === null || isSubmitted) return;
    
    setIsSubmitted(true);
    if (selectedIdx === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedIdx(null);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedIdx(null);
    setIsSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className={styles.quizContainer}>
      <h3 className={styles.title}>{title}</h3>

      {!isFinished ? (
        <div>
          {/* Progress */}
          <div className={styles.progress}>
            Question {currentIdx + 1} of {questions.length}
          </div>

          {/* Question Text */}
          <h4 className={styles.question}>{currentQuestion.question}</h4>

          {/* Options List */}
          <div className={styles.optionsGrid}>
            {currentQuestion.options.map((option, idx) => {
              let btnClass = styles.optionBtn;
              if (selectedIdx === idx) {
                btnClass += ` ${styles.optionBtnSelected}`;
              }
              
              if (isSubmitted) {
                btnClass += ` ${styles.optionBtnDisabled}`;
                if (idx === currentQuestion.correctAnswer) {
                  btnClass += ` ${styles.optionBtnCorrect}`;
                } else if (selectedIdx === idx) {
                  btnClass += ` ${styles.optionBtnIncorrect}`;
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={btnClass}
                  disabled={isSubmitted}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isSubmitted && (
            <div className={styles.explanationCard}>
              <div className={styles.explanationTitle}>Explanation</div>
              <p className={styles.explanationText}>
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Action Footer */}
          <div className={styles.actionWrapper}>
            {!isSubmitted ? (
              <button
                onClick={handleCheckAnswer}
                disabled={selectedIdx === null}
                className={`${styles.actionBtn} ${selectedIdx === null ? styles.actionBtnDisabled : ""}`}
              >
                Check Answer
              </button>
            ) : (
              <button onClick={handleNext} className={styles.actionBtn}>
                {currentIdx + 1 < questions.length ? "Next Question" : "See Results"}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Finished State */
        <div className={styles.summarySheet}>
          <div className={styles.trophy}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fbbf24', margin: '0 auto 12px' }}>
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/>
            </svg>
          </div>
          <h4 className={styles.scoreTitle}>Quiz Completed!</h4>
          <p className={styles.scoreVal}>
            {score} / {questions.length}
          </p>
          <p className={styles.scoreDesc}>
            {score === questions.length
              ? "Flawless score! You have fully mastered this lesson concept!"
              : "Great attempt! Review the lessons material and try again to hit 100%!"}
          </p>
          <button onClick={handleReset} className={`${styles.resetBtn} btn-secondary`}>
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
}
