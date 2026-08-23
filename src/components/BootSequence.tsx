"use client";

import { useEffect, useState } from "react";
import { totalResources, totalCategories } from "@/data/resources";

const LINES = [
  "atlas@index:~$ boot --profile=ai-ml",
  `mounting ${totalCategories} categories ... OK`,
  `indexing ${totalResources} resources ... OK`,
  "verifying links ... OK",
  "checking for signup walls ... none found",
  "atlas ready. press any key.",
];

const SESSION_KEY = "atlas.booted";
const LINE_MS = 220;

export default function BootSequence() {
  const [visible, setVisible] = useState(false);
  const [lineCount, setLineCount] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    let alreadyBooted = true;
    try {
      alreadyBooted = window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadyBooted = false;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadyBooted || reduced) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- deciding whether to show the intro requires reading sessionStorage/matchMedia, unavailable during SSR
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible || closing) return;
    if (lineCount >= LINES.length) return;
    const t = setTimeout(() => setLineCount((n) => n + 1), LINE_MS);
    return () => clearTimeout(t);
  }, [visible, closing, lineCount]);

  function finish() {
    if (closing) return;
    setClosing(true);
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // storage unavailable — just skip persistence
    }
    setTimeout(() => setVisible(false), 260);
  }

  if (!visible) return null;

  return (
    <div
      className={`boot-overlay${closing ? " is-closing" : ""}`}
      onClick={finish}
      onKeyDown={finish}
      role="button"
      tabIndex={0}
      aria-label="Skip boot sequence"
    >
      <div className="boot-box">
        {LINES.slice(0, lineCount).map((line, i) => (
          <div className="boot-line" key={i}>
            {line}
          </div>
        ))}
        {lineCount < LINES.length && <span className="term-cursor" />}
        {lineCount >= LINES.length && <div className="boot-hint">— click, or press any key, to continue —</div>}
      </div>
    </div>
  );
}
