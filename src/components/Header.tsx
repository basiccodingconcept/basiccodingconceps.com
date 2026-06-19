"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import styles from "./Header.module.css";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Concepts", href: "/concepts" },
    { label: "Basics", href: "/basics" },
    { label: "For Kids", href: "/for-kids" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} id="header-logo-link">
          <div style={{ position: "relative", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom right, #8b5cf6, #7c3aed)", borderRadius: "12px", transform: "rotate(3deg)" }}></div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", color: "white" }}>
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
            <span style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: "1" }}>
              Basic Coding
            </span>
            <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#8b5cf6", letterSpacing: "0.1em", marginTop: "2px" }}>
              CONCEPTS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList} id="header-nav-list">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  id={`header-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className={styles.actions}>
          {/* Day/Night Toggle Button */}
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle light/dark theme"
            id="header-theme-toggle-btn"
          >
            {theme === "light" ? (
              // Moon Icon for Dark Mode prompt
              <svg className={styles.themeIcon} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              // Sun Icon for Light Mode prompt
              <svg className={styles.themeIcon} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line>
              </svg>
            )}
          </button>

          <Link
            href="/#playground"
            className={styles.startBtn}
            id="header-start-coding-btn"
          >
            Start Coding
          </Link>

          {/* Hamburger Mobile Menu */}
          <button
            className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.mobileMenuBtnActive : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="header-mobile-menu-btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerActive : ""}`}>
          <ul className={styles.mobileDrawerList} id="header-mobile-drawer-list">
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => setIsMobileMenuOpen(false)}>
                <Link
                  href={item.href}
                  className={styles.mobileDrawerLink}
                  id={`header-mobile-drawer-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: "12px" }}>
              <Link
                href="/#playground"
                className="btn-primary"
                style={{ display: "flex", width: "100%" }}
                id="header-mobile-drawer-start-coding-btn"
              >
                Start Coding
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
