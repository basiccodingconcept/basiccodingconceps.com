"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { glossaryTerms, GlossaryTerm } from "@/data/glossary";
import styles from "./page.module.css";

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLetter, setSelectedLetter] = useState("all");
  const [highlightedTerm, setHighlightedTerm] = useState<string | null>(null);

  // Categories helper
  const categories = useMemo(() => {
    return [
      { id: "all", label: "All Categories", count: glossaryTerms.length },
      { id: "core", label: "Core Terms", count: glossaryTerms.filter(t => t.category === "core").length },
      { id: "data", label: "Data", count: glossaryTerms.filter(t => t.category === "data").length },
      { id: "control-flow", label: "Control Flow", count: glossaryTerms.filter(t => t.category === "control-flow").length },
      { id: "functions", label: "Functions", count: glossaryTerms.filter(t => t.category === "functions").length },
      { id: "errors", label: "Errors", count: glossaryTerms.filter(t => t.category === "errors").length },
      { id: "general", label: "General", count: glossaryTerms.filter(t => t.category === "general").length },
    ];
  }, []);

  // Alphabet letters helper (letters that actually have terms)
  const letters = useMemo(() => {
    const termLetters = glossaryTerms.map(t => t.term[0].toUpperCase());
    const uniqueLetters = Array.from(new Set(termLetters)).sort();
    return ["all", ...uniqueLetters];
  }, []);

  // Filtered terms
  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch =
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.example.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "all" || term.category === selectedCategory;

      const matchesLetter = selectedLetter === "all" || term.term[0].toUpperCase() === selectedLetter;

      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  // Navigate & highlight a term
  const handleTermClick = (termName: string) => {
    // Check if the term exists in the full list
    const found = glossaryTerms.find(t => t.term.toLowerCase() === termName.toLowerCase());
    if (!found) return;

    // Reset filters to ensure the term is visible
    setSelectedCategory("all");
    setSelectedLetter("all");
    setSearchQuery("");

    // Use setTimeout to allow filters to reset and DOM to update before scrolling
    setTimeout(() => {
      const element = document.getElementById(`term-${termName.replace(/\s+/g, "-").toLowerCase()}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlightedTerm(termName);
        // Fade out highlight after 2.5 seconds
        setTimeout(() => {
          setHighlightedTerm(null);
        }, 2500);
      }
    }, 50);
  };

  // Reset all filters
  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLetter("all");
    setHighlightedTerm(null);
  };

  // Get human readable category labels
  const getCategoryLabel = (catId: string) => {
    switch (catId) {
      case "core": return "Core";
      case "data": return "Data";
      case "control-flow": return "Control Flow";
      case "functions": return "Functions";
      case "errors": return "Errors";
      case "general": return "General";
      default: return catId;
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSeparator}>&gt;</span>
            <span className={styles.breadcrumbCurrent}>Glossary</span>
          </nav>

          {/* Header */}
          <header className={styles.header}>
            <div className={styles.badge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              {glossaryTerms.length} Programming Terms
            </div>
            <h1 className={styles.title}>Coding Terms Dictionary</h1>
            <p className={styles.subtitle}>
              Your comprehensive guide to programming terminology. Search any coding term to understand its meaning with simple explanations and examples.
            </p>
          </header>

          {/* Interactive Controls Panel */}
          <div className={styles.controls}>
            {/* Search Box */}
            <div className={styles.searchRow}>
              <svg
                className={styles.searchIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search terms, definitions, or code examples..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                aria-label="Search coding glossary terms"
                id="glossary-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={styles.clearButton}
                  aria-label="Clear search"
                  id="glossary-clear-search-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className={styles.categoryBar}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`${styles.filterPill} ${selectedCategory === cat.id ? styles.filterPillActive : ""}`}
                  id={`glossary-category-pill-${cat.id}`}
                >
                  <span>{cat.label}</span>
                  <span className={styles.pillCount}>{cat.count}</span>
                </button>
              ))}
            </div>

            {/* Alphabet Index filter */}
            <div className={styles.alphabetIndex}>
              {["all", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map((letter) => {
                const isAvailable = letter === "all" || letters.includes(letter);
                return (
                  <button
                    key={letter}
                    onClick={() => isAvailable && setSelectedLetter(letter)}
                    className={`${styles.alphabetBtn} ${selectedLetter === letter ? styles.alphabetBtnActive : ""} ${!isAvailable ? styles.alphabetBtnDisabled : ""}`}
                    disabled={!isAvailable}
                    id={`glossary-alphabet-btn-${letter}`}
                  >
                    {letter === "all" ? "All" : letter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Bar */}
          <div className={styles.resultsRow}>
            Showing <span className={styles.resultsCount}>{filteredTerms.length}</span> of {glossaryTerms.length} terms
          </div>

          {/* Grid View */}
          {filteredTerms.length > 0 ? (
            <div className={styles.grid}>
              {filteredTerms.map((item, idx) => {
                const isHighlighted = highlightedTerm === item.term;
                const cardId = `term-${item.term.replace(/\s+/g, "-").toLowerCase()}`;

                return (
                  <div
                    key={idx}
                    id={cardId}
                    className={`${styles.card} ${isHighlighted ? styles.cardHighlight : ""}`}
                  >
                    {/* Card Header */}
                    <div className={styles.cardHeader}>
                      <h3 className={styles.cardTitle}>{item.term}</h3>
                      <span className={`${styles.cardCategory} ${styles[`categoryTag_${item.category}`]}`}>
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>

                    {/* Definition */}
                    <p className={styles.definition}>{item.definition}</p>

                    {/* Terminal Code Mockup */}
                    {item.example && (
                      <div className={styles.terminal}>
                        <div className={styles.terminalHeader}>
                          <div className={styles.terminalDots}>
                            <span className={`${styles.terminalDot} ${styles.terminalDotRed}`}></span>
                            <span className={`${styles.terminalDot} ${styles.terminalDotYellow}`}></span>
                            <span className={`${styles.terminalDot} ${styles.terminalDotGreen}`}></span>
                          </div>
                          <span className={styles.terminalLang}>JavaScript</span>
                        </div>
                        <div className={styles.terminalBody}>
                          <pre className={styles.terminalPre}>
                            <code>{item.example}</code>
                          </pre>
                        </div>
                      </div>
                    )}

                    {/* Related Terms tags link */}
                    {item.relatedTerms && item.relatedTerms.length > 0 && (
                      <div className={styles.relatedContainer}>
                        <span className={styles.relatedLabel}>Related:</span>
                        <div className={styles.relatedTags}>
                          {item.relatedTerms.map((related, rIdx) => (
                            <button
                              key={rIdx}
                              onClick={() => handleTermClick(related)}
                              className={styles.relatedTag}
                              id={`glossary-related-tag-${item.term.toLowerCase().replace(/\s+/g, "-")}-${related.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {related}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className={styles.emptyState}>
              <div className={styles.emptyStateIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-tertiary)', margin: '0 auto' }}>
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3 className={styles.emptyStateTitle}>No Terms Found</h3>
              <p className={styles.emptyStateText}>
                We couldn't find any terms matching your criteria. Try resetting the filters or modifying your search.
              </p>
              <button id="glossary-empty-reset-btn" onClick={handleReset} className={styles.resetBtn}>
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Tip Banner */}
          <section className={styles.tipSection}>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .5 2.5 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
                  <line x1="9" y1="18" x2="15" y2="18" />
                  <line x1="10" y1="22" x2="14" y2="22" />
                </svg>
              </div>
              <div className={styles.tipContent}>
                <h3 className={styles.tipTitle}>Pro Tip</h3>
                <p className={styles.tipText}>
                  Don't try to memorize everything! Bookmark this page and use it as a reference while you learn. Understanding comes with practice and writing real code, not memorization.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
