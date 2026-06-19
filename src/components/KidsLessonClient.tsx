/* src/components/KidsLessonClient.tsx */

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { kidsLessons, KidsLessonData } from "@/data/kids";
import styles from "@/app/for-kids/[slug]/page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface KidsLessonClientProps {
  lesson: KidsLessonData;
}

export default function KidsLessonClient({ lesson }: KidsLessonClientProps) {
  // Quiz States
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Widget 1: Robot Commander States
  const [robotPos, setRobotPos] = useState({ r: 0, c: 0 });
  const [robotDir, setRobotDir] = useState("Right");
  const [robotCode, setRobotCode] = useState<string[]>([]);
  const [robotMessage, setRobotMessage] = useState("Help Robby walk to the treasure!");
  const [robotRunning, setRobotRunning] = useState(false);

  // Widget 2: Variables States
  const [boxes, setBoxes] = useState<Record<string, string>>({
    box_A: "Car",
    box_B: "Teddy",
    box_C: "Balloon"
  });
  const [activeBox, setActiveBox] = useState("box_A");

  // Widget 3: Data Types States
  const [sorterItems, setSorterItems] = useState([
    { id: 1, val: "5", type: "Number" },
    { id: 2, val: "'Hi'", type: "String" },
    { id: 3, val: "true", type: "Boolean" },
    { id: 4, val: "100", type: "Number" },
    { id: 5, val: "'Candy'", type: "String" },
    { id: 6, val: "false", type: "Boolean" }
  ]);
  const [cargoContainers, setCargoContainers] = useState<Record<string, string[]>>({
    Number: [],
    String: [],
    Boolean: []
  });
  const [selectedSorterItem, setSelectedSorterItem] = useState<any>(null);
  const [sorterShake, setSorterShake] = useState(false);

  // Widget 4: Math Scale States
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
  const [scaleMessage, setScaleMessage] = useState("Pick an operator to balance the scale!");

  // Widget 5: Weather States
  const [weather, setWeather] = useState("Sunny");

  // Widget 6: Loops States
  const [loopCount, setLoopCount] = useState(3);
  const [danceMove, setDanceMove] = useState("Spin");
  const [loopRunning, setLoopRunning] = useState(false);
  const [loopCurrentIndex, setLoopCurrentIndex] = useState(0);

  // Widget 7: Functions States
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [bakingState, setBakingState] = useState("empty"); // empty, mixing, baking, baked

  // Widget 8: Arrays States
  const [trainWagons, setTrainWagons] = useState(["Robot", "Dino", "Rocket"]);
  const [fetchIndex, setFetchIndex] = useState("0");
  const [fetchedWagonToy, setFetchedWagonToy] = useState<string | null>(null);
  const [wagonSelection, setWagonSelection] = useState<number | null>(null);

  // Widget 9: Objects States
  const [petName, setPetName] = useState("Buddy");
  const [petSpecies, setPetSpecies] = useState("Dog");
  const [petColor, setPetColor] = useState("Brown");
  const [petAge, setPetAge] = useState(2);

  // Widget 10: Debugging States
  const [bugsSquashed, setBugsSquashed] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false
  });
  const [debugOutput, setDebugOutput] = useState("CRASH: Syntax Error!");

  // RESET ALL WIDGET STATES WHEN LESSON CHANGES
  useEffect(() => {
    setCurrentQuizIdx(0);
    setSelectedQuizOption(null);
    setQuizSubmitted(false);
    setQuizScore(0);
    setQuizFinished(false);

    // Reset Widget 1
    setRobotPos({ r: 0, c: 0 });
    setRobotDir("Right");
    setRobotCode([]);
    setRobotMessage("Help Robby walk to the treasure!");
    setRobotRunning(false);

    // Reset Widget 3
    setSorterItems([
      { id: 1, val: "5", type: "Number" },
      { id: 2, val: "'Hi'", type: "String" },
      { id: 3, val: "true", type: "Boolean" },
      { id: 4, val: "100", type: "Number" },
      { id: 5, val: "'Candy'", type: "String" },
      { id: 6, val: "false", type: "Boolean" }
    ]);
    setCargoContainers({ Number: [], String: [], Boolean: [] });
    setSelectedSorterItem(null);

    // Reset Widget 4
    setSelectedOperator(null);
    setScaleMessage("Pick an operator to balance the scale!");

    // Reset Widget 7
    setIngredients([]);
    setBakingState("empty");

    // Reset Widget 10
    setBugsSquashed({ 1: false, 2: false, 3: false });
    setDebugOutput("CRASH: Syntax Error!");
  }, [lesson.slug]);

  // QUIZ HANDLERS
  const handleSelectQuizOption = (idx: number) => {
    if (quizSubmitted) return;
    setSelectedQuizOption(idx);
  };

  const handleCheckQuizAnswer = () => {
    if (selectedQuizOption === null || quizSubmitted) return;
    setQuizSubmitted(true);
    const correctIdx = lesson.quizQuestions[currentQuizIdx].correctAnswer;
    if (selectedQuizOption === correctIdx) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (currentQuizIdx + 1 < lesson.quizQuestions.length) {
      setCurrentQuizIdx(prev => prev + 1);
      setSelectedQuizOption(null);
      setQuizSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuizIdx(0);
    setSelectedQuizOption(null);
    setQuizSubmitted(false);
    setQuizScore(0);
    setQuizFinished(false);
  };

  // WIDGET 1: ROBOT COMMANDER LOGIC
  const addRobotCode = (cmd: string) => {
    if (robotRunning) return;
    setRobotCode(prev => [...prev, cmd]);
  };

  const runRobotCode = () => {
    if (robotRunning || robotCode.length === 0) return;
    setRobotRunning(true);
    setRobotPos({ r: 0, c: 0 });
    setRobotMessage("Robby is walking...");

    let currentPos = { r: 0, c: 0 };
    let step = 0;

    const interval = setInterval(() => {
      if (step < robotCode.length) {
        const cmd = robotCode[step];
        const nextPos = { ...currentPos };

        if (cmd === "Forward") {
          nextPos.c = Math.min(nextPos.c + 1, 2);
          setRobotDir("Right");
        } else if (cmd === "Down") {
          nextPos.r = Math.min(nextPos.r + 1, 2);
          setRobotDir("Down");
        } else if (cmd === "Up") {
          nextPos.r = Math.max(nextPos.r - 1, 0);
          setRobotDir("Up");
        }

        currentPos = nextPos;
        setRobotPos(nextPos);
        step++;
      } else {
        clearInterval(interval);
        setRobotRunning(false);
        if (currentPos.r === 2 && currentPos.c === 2) {
          setRobotMessage("YOU DID IT! Robby found the treasure!");
        } else {
          setRobotMessage("Oh no! Robby missed the chest. Try editing your code path!");
        }
      }
    }, 800);
  };

  // WIDGET 3: DATA TYPES SORTER LOGIC
  const selectSorterItem = (item: any) => {
    setSelectedSorterItem(item);
  };

  const dropInContainer = (containerType: string) => {
    if (!selectedSorterItem) return;

    if (selectedSorterItem.type === containerType) {
      setCargoContainers(prev => ({
        ...prev,
        [containerType]: [...prev[containerType], selectedSorterItem.val]
      }));
      setSorterItems(prev => prev.filter(x => x.id !== selectedSorterItem.id));
      setSelectedSorterItem(null);
    } else {
      setSorterShake(true);
      setTimeout(() => setSorterShake(false), 400);
    }
  };

  // WIDGET 4: MATH SCALE LOGIC
  const selectOperator = (op: string) => {
    setSelectedOperator(op);
    if (op === "+") {
      setScaleMessage("Scale is perfectly balanced! 5 + 3 is exactly 8!");
    } else if (op === "-") {
      setScaleMessage("Scale tilted left! 5 - 3 is 2, which is lighter than 8.");
    } else if (op === "*") {
      setScaleMessage("Scale tilted right! 5 * 3 is 15, which is heavier than 8.");
    }
  };

  // WIDGET 6: LOOPS DANCE LOGIC
  const runDanceLoop = () => {
    if (loopRunning) return;
    setLoopRunning(true);
    setLoopCurrentIndex(0);

    let count = 0;
    const interval = setInterval(() => {
      if (count < loopCount) {
        setLoopCurrentIndex(count + 1);
        count++;
      } else {
        clearInterval(interval);
        setLoopRunning(false);
      }
    }, 1000);
  };

  // WIDGET 7: FUNCTIONS BAKER LOGIC
  const toggleIngredient = (item: string) => {
    if (bakingState !== "empty") return;
    if (ingredients.includes(item)) {
      setIngredients(prev => prev.filter(x => x !== item));
    } else {
      setIngredients(prev => [...prev, item]);
    }
  };

  const bakeCookies = () => {
    if (ingredients.length < 2) return;
    setBakingState("mixing");
    setTimeout(() => {
      setBakingState("baking");
      setTimeout(() => {
        setBakingState("baked");
      }, 1500);
    }, 1500);
  };

  const resetOven = () => {
    setIngredients([]);
    setBakingState("empty");
  };

  // WIDGET 8: ARRAYS TRAIN LOGIC
  const triggerWagonFetch = () => {
    const idx = parseInt(fetchIndex);
    if (idx >= 0 && idx <= 2) {
      setWagonSelection(idx);
      setFetchedWagonToy(trainWagons[idx]);
    } else {
      setFetchedWagonToy("Error: Wagon index does not exist!");
    }
  };

  // WIDGET 10: DEBUGGING BUG SQUASHER LOGIC
  const squashBug = (id: number) => {
    const updated = { ...bugsSquashed, [id]: true };
    setBugsSquashed(updated);

    if (updated[1] && updated[2] && updated[3]) {
      setDebugOutput("SUCCESS: Congratulations, all bugs are squashed! Robby's program prints 'Win!'");
    } else {
      let remaining = [updated[1], updated[2], updated[3]].filter(x => !x).length;
      setDebugOutput(`Bug squashed! ${remaining} remaining code errors to fix.`);
    }
  };

  // RENDER INTERACTIVE WIDGET COMPONENT
  const renderPlayWidget = () => {
    switch (lesson.slug) {
      case "what-is-coding":
        return (
          <div className={styles.commanderControls}>
            <div className={styles.gridBoard}>
              {Array.from({ length: 9 }).map((_, idx) => {
                const r = Math.floor(idx / 3);
                const c = idx % 3;
                const hasRobot = robotPos.r === r && robotPos.c === c;
                const hasTreasure = r === 2 && c === 2;

                return (
                  <div key={idx} className={`${styles.gridCell} ${hasRobot ? styles.cellActive : ""}`}>
                    {hasRobot && <div className={styles.robotAvatar}>{robotDir === "Right" ? "→" : robotDir === "Down" ? "↓" : "↑"}</div>}
                    {hasTreasure && !hasRobot && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-green)' }}>
                        <polyline points="20 12 20 22 4 22 4 12" />
                        <rect x="2" y="7" width="20" height="5" />
                        <line x1="12" y1="22" x2="12" y2="7" />
                        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
            <div className={styles.widgetInstructions}>
              <strong>Console Code Log:</strong>
              <div className={styles.instructionsList}>
                {robotCode.length === 0 ? "// Click direction arrows to program..." : robotCode.map((cmd, idx) => (
                  <span key={idx} className={styles.instructionTag}>{cmd}()</span>
                ))}
              </div>
            </div>
            <div className={styles.controlsRow}>
              <button onClick={() => addRobotCode("Forward")} className={styles.directionBtn}>Robby.walkRight()</button>
              <button onClick={() => addRobotCode("Down")} className={styles.directionBtn}>Robby.walkDown()</button>
              <button onClick={() => addRobotCode("Up")} className={styles.directionBtn}>Robby.walkUp()</button>
            </div>
            <div className={styles.controlsRow}>
              <button onClick={runRobotCode} className={styles.runBtn} disabled={robotRunning}>
                Run Code
              </button>
              <button onClick={() => { setRobotCode([]); setRobotPos({ r: 0, c: 0 }); setRobotMessage("Help Robby walk to the treasure!"); }} className={styles.clearBtn} disabled={robotRunning}>
                Clear
              </button>
            </div>
            <div style={{ textAlign: "center", fontStyle: "italic", fontWeight: "700", color: lesson.color }}>
              {robotMessage}
            </div>
          </div>
        );

      case "variables":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className={styles.boxesRow}>
              {["box_A", "box_B", "box_C"].map((key) => (
                <div
                  key={key}
                  onClick={() => setActiveBox(key)}
                  className={`${styles.toyBox} ${activeBox === key ? styles.toyBoxActive : ""}`}
                >
                  <span className={styles.toyBoxLabel}>{key}</span>
                  <span className={styles.toyBoxContents}>{boxes[key] || "❓"}</span>
                </div>
              ))}
            </div>
            <div className={styles.widgetInstructions}>
              Active Storage: <strong>{activeBox}</strong> is selected. Click a toy below to put it inside this variable box!
            </div>
            <div className={styles.toysRow}>
              {["Car", "Teddy", "Balloon", "Candy", "Dino", "Rocket"].map((toy) => (
                <button
                  key={toy}
                  onClick={() => setBoxes(prev => ({ ...prev, [activeBox]: toy }))}
                  className={styles.toyItemBtn}
                >
                  {toy}
                </button>
              ))}
            </div>
            <div className={styles.liveCodePreview}>
              {`let box_A = "${boxes.box_A}";\nlet box_B = "${boxes.box_B}";\nlet box_C = "${boxes.box_C}";`}
            </div>
          </div>
        );

      case "data-types":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className={`${styles.cargoTrains} ${sorterShake ? "shake" : ""}`}>
              {["Number", "String", "Boolean"].map((type) => (
                <div
                  key={type}
                  onClick={() => dropInContainer(type)}
                  className={styles.cargoBucket}
                  style={{
                    cursor: selectedSorterItem ? "pointer" : "default",
                    borderColor: selectedSorterItem ? "#3b82f6" : "var(--card-border)"
                  }}
                >
                  <span className={styles.cargoLabel}>
                    {type === "Number" ? "Numbers" : type === "String" ? "Strings" : "Booleans"}
                  </span>
                  <div className={styles.cargoItems}>
                    {cargoContainers[type].map((val, idx) => (
                      <span key={idx} className={styles.instructionTag} style={{ background: "#3b82f6" }}>{val}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.widgetInstructions}>
              {sorterItems.length > 0 ? "Select a data block below, then click the matching cargo box above!" : "Excellent work! All data types are sorted!"}
            </div>

            <div className={styles.sourceItems}>
              {sorterItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => selectSorterItem(item)}
                  className={styles.sorterItem}
                  style={{
                    borderColor: selectedSorterItem?.id === item.id ? "#3b82f6" : "var(--card-border)",
                    background: selectedSorterItem?.id === item.id ? "rgba(59, 130, 246, 0.08)" : "var(--card-bg)"
                  }}
                >
                  {item.val}
                </button>
              ))}
            </div>

            <div className={styles.liveCodePreview}>
              {`let numbers = [${cargoContainers.Number.join(", ")}];\nlet strings = [${cargoContainers.String.join(", ")}];\nlet booleans = [${cargoContainers.Boolean.join(", ")}];`}
            </div>
          </div>
        );

      case "operators":
        return (
          <div className={styles.scaleContainer}>
            <div className={styles.scaleVisual}>
              <div
                className={styles.scaleBeam}
                style={{
                  transform: selectedOperator === "+"
                    ? "rotate(0deg)"
                    : selectedOperator === "-"
                    ? "rotate(-8deg)"
                    : selectedOperator === "*"
                    ? "rotate(8deg)"
                    : "rotate(0deg)"
                }}
              >
                <div className={styles.scaleCup}>5 {selectedOperator || "?"} 3</div>
                <div className={styles.scaleCup}>8</div>
              </div>
              <div className={styles.scaleStand}></div>
              <div className={styles.scaleBase}></div>
            </div>

            <div className={styles.equationLine}>
              <span>5</span>
              <div className={styles.operatorInputBox}>{selectedOperator || "?"}</div>
              <span>3 === 8</span>
            </div>

            <div className={styles.toysRow}>
              {["+", "-", "*"].map((op) => (
                <button
                  key={op}
                  onClick={() => selectOperator(op)}
                  className={styles.toyItemBtn}
                  style={{
                    borderColor: selectedOperator === op ? "#0d9488" : "var(--card-border)",
                    color: "#0d9488"
                  }}
                >
                  {op}
                </button>
              ))}
            </div>

            <div style={{ textAlign: "center", fontWeight: "700", color: "#0d9488" }}>
              {scaleMessage}
            </div>
          </div>
        );

      case "conditionals":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className={styles.avatarDisplay}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', margin: '0 auto' }}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <div style={{ marginTop: '12px', fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary)', textAlign: 'center' }}>
                {weather === "Sunny" && "Wearing: Sunglasses"}
                {weather === "Rainy" && "Wearing: Umbrella"}
                {weather === "Snowy" && "Wearing: Scarf"}
              </div>
            </div>

            <div className={styles.toysRow}>
              {["Sunny", "Rainy", "Snowy"].map((w) => (
                <button
                  key={w}
                  onClick={() => setWeather(w)}
                  className={styles.directionBtn}
                  style={{
                    borderColor: weather === w ? "#db2777" : "var(--card-border)",
                    background: weather === w ? "rgba(219, 39, 119, 0.05)" : "var(--card-bg)"
                  }}
                >
                  {w === "Sunny" ? "Sunny" : w === "Rainy" ? "Rainy" : "Snowy"}
                </button>
              ))}
            </div>

            <div className={styles.liveCodePreview}>
              {`if (weather === "Rainy") {\n  avatar.wear("Umbrella");\n} else if (weather === "Snowy") {\n  avatar.wear("Scarf");\n} else {\n  avatar.wear("Sunglasses");\n}`}
            </div>
          </div>
        );

      case "loops":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className={styles.danceFloor}>
              <div
                className={
                  loopRunning
                    ? danceMove === "Spin"
                      ? styles.danceSpin
                      : danceMove === "Jump"
                      ? styles.danceJump
                      : styles.danceClap
                    : ""
                }
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', margin: '0 auto' }}>
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                </svg>
              </div>
            </div>

            <div className={styles.widgetInstructions}>
              Choose a dance move and iteration count, then trigger the Loop!
            </div>

            <div className={styles.toysRow}>
              {["Spin", "Jump", "Clap"].map((move) => (
                <button
                  key={move}
                  onClick={() => setDanceMove(move)}
                  className={styles.directionBtn}
                  style={{
                    borderColor: danceMove === move ? "#4f46e5" : "var(--card-border)"
                  }}
                  disabled={loopRunning}
                >
                  {move === "Spin" ? "Spin" : move === "Jump" ? "Jump" : "Clap"}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
              <span style={{ fontWeight: "700" }}>Repeat Count:</span>
              <input
                type="range"
                min={2}
                max={5}
                value={loopCount}
                onChange={(e) => setLoopCount(parseInt(e.target.value))}
                style={{ cursor: "pointer" }}
                disabled={loopRunning}
              />
              <span style={{ fontWeight: "800", color: "#4f46e5" }}>{loopCount} times</span>
            </div>

            <button onClick={runDanceLoop} className={styles.runBtn} style={{ background: "#4f46e5", margin: "0 auto" }} disabled={loopRunning}>
              {loopRunning ? `Iterating ${loopCurrentIndex}/${loopCount}...` : "Run Dance Loop"}
            </button>

            <div className={styles.liveCodePreview}>
              {`for (let step = 1; step <= ${loopCount}; step++) {\n  robby.${danceMove.toLowerCase()}(); // Step ${loopRunning ? loopCurrentIndex : "..."}\n}`}
            </div>
          </div>
        );

      case "functions":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className={styles.bowlContainer}>
              {bakingState === "empty" && (
                <div className={styles.bowl}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', margin: '0 auto' }}>
                    <path d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10H2Z" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
              )}
              {bakingState === "mixing" && (
                <div className={`${styles.bowl} ${styles.bowlMixing}`}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', margin: '0 auto' }}>
                    <path d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10H2Z" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
              )}
              {bakingState === "baking" && (
                <div className={styles.bowl}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-amber)' }}>
                      <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z" />
                      <circle cx="8" cy="8" r="1.5" />
                      <circle cx="15" cy="9" r="1.5" />
                      <circle cx="16" cy="15" r="1.5" />
                      <circle cx="9" cy="15" r="1.5" />
                      <circle cx="12" cy="12" r="1.5" />
                    </svg>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-amber)' }}>Baking...</span>
                  </div>
                </div>
              )}
              {bakingState === "baked" && (
                <div className={styles.bowl}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-green)' }}>
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                      <circle cx="9" cy="9" r="1" />
                      <circle cx="15" cy="9" r="1" />
                      <circle cx="15" cy="15" r="1" />
                      <circle cx="9" cy="15" r="1" />
                    </svg>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-green)' }}>Baked Cookies!</span>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.widgetInstructions}>
              {bakingState === "empty"
                ? "Select at least 2 ingredients to put inside the bowl, then bake!"
                : bakingState === "mixing"
                ? "Mixing ingredients together..."
                : bakingState === "baking"
                ? "Baking in the oven..."
                : "Cookies are ready! Press 'Reset' to bake again."}
            </div>

            <div className={styles.toysRow}>
              {["Flour", "Sugar", "Chocolate"].map((ing) => {
                const isSelected = ingredients.includes(ing);
                return (
                  <button
                    key={ing}
                    onClick={() => toggleIngredient(ing)}
                    className={styles.directionBtn}
                    style={{
                      borderColor: isSelected ? "#059669" : "var(--card-border)",
                      background: isSelected ? "rgba(5, 150, 105, 0.05)" : "var(--card-bg)"
                    }}
                    disabled={bakingState !== "empty"}
                  >
                    {ing}
                  </button>
                );
              })}
            </div>

            <div className={styles.toysRow}>
              {bakingState === "empty" ? (
                <button
                  onClick={bakeCookies}
                  disabled={ingredients.length < 2}
                  className={styles.runBtn}
                  style={{ background: "#059669" }}
                >
                  bakeCookies() ⚡
                </button>
              ) : (
                <button onClick={resetOven} className={styles.clearBtn} disabled={bakingState === "mixing" || bakingState === "baking"}>
                  Reset Oven
                </button>
              )}
            </div>

            <div className={styles.liveCodePreview}>
              {`function bakeCookies(mix) {\n  // Ingredients: ${ingredients.join(", ") || "none"}\n  return "${bakingState === "baked" ? "Cookies!" : "Raw Dough"}";\n}`}
            </div>
          </div>
        );

      case "arrays":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className={styles.trainWagons}>
              {trainWagons.map((toy, idx) => (
                <div
                  key={idx}
                  className={styles.wagon}
                  style={{
                    borderColor: wagonSelection === idx ? "#7c3aed" : "var(--card-border)",
                    transform: wagonSelection === idx ? "translateY(-4px)" : "none"
                  }}
                >
                  <span className={styles.wagonIndex}>[{idx}]</span>
                  <span className={styles.wagonContents}>{toy}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
              <span style={{ fontWeight: "700" }}>Wagon index:</span>
              <input
                type="number"
                min={0}
                max={2}
                value={fetchIndex}
                onChange={(e) => setFetchIndex(e.target.value)}
                style={{
                  width: "60px",
                  padding: "8px",
                  borderRadius: "8px",
                  border: "2px solid var(--card-border)",
                  textAlign: "center"
                }}
              />
              <button onClick={triggerWagonFetch} className={styles.nextQuestBtn} style={{ background: "#7c3aed" }}>
                train[index]
              </button>
            </div>

            <div style={{ textAlign: "center", fontWeight: "700", color: "#7c3aed" }}>
              {fetchedWagonToy ? `Fetched Value: ${fetchedWagonToy}` : "Enter an index to unpack a wagon!"}
            </div>

            <div className={styles.liveCodePreview}>
              {`let train = ["Robot", "Dino", "Rocket"];\nlet wagonItem = train[${fetchIndex}]; // returns "${fetchedWagonToy || "..."}"`}
            </div>
          </div>
        );

      case "objects":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className={styles.petCardBuilder}>
              <div className={styles.avatarDisplay}>
                <span style={{ fontWeight: '800', color: 'var(--primary)' }}>
                  {petSpecies}
                </span>
              </div>
              <div className={styles.petCardRow}>
                <span className={styles.petCardLabel}>Pet Name:</span>
                <input
                  type="text"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    border: "2px solid var(--card-border)",
                    width: "120px",
                    textAlign: "right"
                  }}
                  maxLength={12}
                />
              </div>
              <div className={styles.petCardRow}>
                <span className={styles.petCardLabel}>Species:</span>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button onClick={() => setPetSpecies("Dog")} style={{ opacity: petSpecies === "Dog" ? 1 : 0.4 }} className={styles.directionBtn}>Dog</button>
                  <button onClick={() => setPetSpecies("Cat")} style={{ opacity: petSpecies === "Cat" ? 1 : 0.4 }} className={styles.directionBtn}>Cat</button>
                </div>
              </div>
              <div className={styles.petCardRow}>
                <span className={styles.petCardLabel}>Fur Color:</span>
                <div style={{ display: "flex", gap: "6px" }}>
                  {["Brown", "Orange", "Black"].map(c => (
                    <button
                      key={c}
                      onClick={() => setPetColor(c)}
                      style={{ opacity: petColor === c ? 1 : 0.4 }}
                      className={styles.directionBtn}
                    >
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: c === "Brown" ? "#8B4513" : c === "Orange" ? "#FF8C00" : "#000000",
                        border: '2px solid var(--card-border)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}></div>
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles.petCardRow}>
                <span className={styles.petCardLabel}>Age:</span>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <button onClick={() => setPetAge(prev => Math.max(1, prev - 1))} className={styles.directionBtn}>-</button>
                  <span style={{ fontWeight: "800" }}>{petAge} yrs</span>
                  <button onClick={() => setPetAge(prev => Math.min(10, prev + 1))} className={styles.directionBtn}>+</button>
                </div>
              </div>
            </div>

            <div className={styles.liveCodePreview}>
              {`let pet = {\n  name: "${petName}",\n  species: "${petSpecies}",\n  furColor: "${petColor}",\n  age: ${petAge}\n};`}
            </div>
          </div>
        );

      case "debugging":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className={styles.codeEditor}>
              {/* Bugs overlay */}
              {!bugsSquashed[1] && (
                <div onClick={() => squashBug(1)} className={styles.bug} style={{ top: "15px", right: "80px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#ef4444' }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
              )}
              {!bugsSquashed[2] && (
                <div onClick={() => squashBug(2)} className={styles.bug} style={{ top: "50px", left: "90px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#ef4444' }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
              )}
              {!bugsSquashed[3] && (
                <div onClick={() => squashBug(3)} className={styles.bug} style={{ bottom: "15px", right: "120px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#ef4444' }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
              )}

              {/* Code display */}
              <div>{`let x = 10;`}</div>
              <div>
                {bugsSquashed[2] ? (
                  <span style={{ color: "#10b981" }}>{`if (x > 5) {`}</span>
                ) : (
                  <span style={{ color: "#ef4444" }}>{`if x > 5 {`}</span>
                )}
              </div>
              <div>
                {bugsSquashed[1] ? (
                  <span style={{ color: "#10b981" }}>{`  let message = "Win";`}</span>
                ) : (
                  <span style={{ color: "#ef4444" }}>{`  let message = "Win`}</span>
                )}
              </div>
              <div>
                {bugsSquashed[3] ? (
                  <span style={{ color: "#10b981" }}>{`  console.log(message);`}</span>
                ) : (
                  <span style={{ color: "#ef4444" }}>{`  console.log(message`}</span>
                )}
              </div>
              <div>{`}`}</div>
            </div>

            <div style={{
              background: "#1e293b",
              color: bugsSquashed[1] && bugsSquashed[2] && bugsSquashed[3] ? "#10b981" : "#ef4444",
              padding: "12px",
              borderRadius: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              fontWeight: "700"
            }}>
              {debugOutput}
            </div>
          </div>
        );

      default:
        return null;
    }
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

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Breadcrumb navigation */}
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span>&gt;</span>
            <Link href="/for-kids" className={styles.breadcrumbLink}>For Kids</Link>
            <span>&gt;</span>
            <span className={styles.breadcrumbCurrent}>{lesson.title}</span>
          </div>

          {/* Lesson Header */}
          <header className={styles.header}>
            <span className={styles.questBadge}>
              Quest {lesson.num} of 10
            </span>
            <h1 className={styles.title}>
              {lesson.title}
            </h1>
          </header>

          {/* Core Layout */}
          <div className={styles.layout}>
            {/* Left Column: Explanations and Quiz */}
            <div className={styles.leftCol}>
              <section className={styles.analogyCard}>
                <h2 className={styles.analogyHeader}>
                  {lesson.analogyTitle}
                </h2>
                <p className={styles.analogyDesc}>{lesson.analogyDesc}</p>
              </section>

              <section className={styles.conceptText}>
                <h3 style={{ fontSize: "1.45rem", fontWeight: "800", marginBottom: "12px" }}>
                  How It Works in Coding
                </h3>
                <p>{lesson.explanation}</p>
              </section>

              {/* Review Quiz */}
              <section className={styles.quizCard}>
                <h3 className={styles.quizTitle}>
                  Quest Review Quiz
                </h3>

                {!quizFinished ? (
                  <div>
                    <p className={styles.quizQuestion}>
                      {formatQuestionText(lesson.quizQuestions[currentQuizIdx].question)}
                    </p>
                    <div className={styles.optionsList}>
                      {lesson.quizQuestions[currentQuizIdx].options.map((option, idx) => {
                        let optStyle = styles.optionBtn;
                        if (selectedQuizOption === idx) {
                          optStyle += ` ${styles.optionSelected}`;
                        }
                        if (quizSubmitted) {
                          const correctIdx = lesson.quizQuestions[currentQuizIdx].correctAnswer;
                          if (idx === correctIdx) {
                            optStyle += ` ${styles.optionCorrect}`;
                          } else if (selectedQuizOption === idx) {
                            optStyle += ` ${styles.optionIncorrect}`;
                          }
                        }
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSelectQuizOption(idx)}
                            className={optStyle}
                            disabled={quizSubmitted}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className={styles.explanationBox}>
                        <strong>Correct Answer details:</strong>
                        <p>{lesson.quizQuestions[currentQuizIdx].explanation}</p>
                      </div>
                    )}

                    <div className={styles.quizFooter}>
                      <span className={styles.quizProgress}>
                        Question {currentQuizIdx + 1} of {lesson.quizQuestions.length}
                      </span>
                      {selectedQuizOption !== null && (
                        <button
                          onClick={quizSubmitted ? handleNextQuizQuestion : handleCheckQuizAnswer}
                          className={styles.nextQuestBtn}
                        >
                          {quizSubmitted ? "Continue" : "Check Answer"}
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div style={{ textAlign: "center", padding: "16px 0" }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fbbf24', margin: '0 auto 12px' }}>
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/>
                    </svg>
                    <h4 style={{ fontSize: "1.25rem", fontWeight: "800", margin: "12px 0 6px 0" }}>
                      Quest Completed!
                    </h4>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
                      You scored **{quizScore} out of {lesson.quizQuestions.length}** correct!
                    </p>
                    <button onClick={handleResetQuiz} className={styles.nextQuestBtn}>
                      Try Again
                    </button>
                  </div>
                )}
              </section>

              {/* Navigation buttons */}
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
                {lesson.prevSlug ? (
                  <Link href={`/for-kids/${lesson.prevSlug}`} className={styles.nextQuestBtn} style={{ background: "var(--secondary)", color: "var(--text-primary)" }}>
                    &larr; Back to Quest {lesson.num - 1}
                  </Link>
                ) : (
                  <div />
                )}
                {lesson.nextSlug ? (
                  <Link href={`/for-kids/${lesson.nextSlug}`} className={styles.nextQuestBtn}>
                    Go to Quest {lesson.num + 1} &rarr;
                  </Link>
                ) : (
                  <Link href="/for-kids" className={styles.nextQuestBtn}>
                    Back to Map
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column: Play Widget */}
            <div className={styles.rightCol}>
              <div className={styles.widgetCard}>
                <div className={styles.widgetHeader}>
                  <span className={styles.widgetTitle}>
                    Live Play Sandbox
                  </span>
                  <span className={styles.widgetBadge}>Interactive</span>
                </div>

                <div className={styles.widgetInstructions}>
                  {lesson.instructions}
                </div>

                {renderPlayWidget()}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
