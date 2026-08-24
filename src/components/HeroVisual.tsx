"use client";

import { useEffect, useMemo, useState } from "react";

const LINES = [
  "import torch",
  "",
  "model = torch.nn.Linear(1, 1)",
  "opt = torch.optim.SGD(model.parameters(), lr=0.01)",
  "",
  "for step in range(1000):",
  "    loss = train_step(model, data)",
  "    opt.step()",
  "",
  "# it's learning.",
];

const KEYWORDS = ["import", "for", "in"];
const KEYWORD_RE = new RegExp(`\\b(${KEYWORDS.join("|")})\\b`, "g");

type Char = { ch: string; cls: string };
type Step = Char | { brk: true };

function highlightLine(line: string): { text: string; cls: string }[] {
  if (line.trimStart().startsWith("#")) return [{ text: line, cls: "comment" }];
  const segs: { text: string; cls: string }[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  KEYWORD_RE.lastIndex = 0;
  while ((m = KEYWORD_RE.exec(line))) {
    if (m.index > last) segs.push({ text: line.slice(last, m.index), cls: "plain" });
    segs.push({ text: m[0], cls: "kw" });
    last = m.index + m[0].length;
  }
  if (last < line.length) segs.push({ text: line.slice(last), cls: "plain" });
  return segs;
}

function buildSteps(lines: string[]): Step[] {
  const steps: Step[] = [];
  lines.forEach((line, i) => {
    for (const seg of highlightLine(line)) {
      for (const ch of seg.text) steps.push({ ch, cls: seg.cls });
    }
    if (i < lines.length - 1) steps.push({ brk: true });
  });
  return steps;
}

function isBreak(step: Step): step is { brk: true } {
  return "brk" in step;
}

const TYPE_MS = 26;
const PAUSE_MS = 1800;

export default function HeroVisual() {
  const steps = useMemo(() => buildSteps(LINES), []);
  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [revealed, setRevealed] = useState(() => (reduced ? steps.length : 0));

  useEffect(() => {
    if (reduced) return;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setRevealed(i);
      if (i >= steps.length) {
        timer = setTimeout(() => {
          i = 0;
          setRevealed(0);
          timer = setTimeout(tick, TYPE_MS);
        }, PAUSE_MS);
      } else {
        timer = setTimeout(tick, TYPE_MS);
      }
    };
    timer = setTimeout(tick, TYPE_MS);
    return () => clearTimeout(timer);
  }, [steps, reduced]);

  const lines: Char[][] = [[]];
  for (let i = 0; i < revealed; i++) {
    const step = steps[i];
    if (isBreak(step)) lines.push([]);
    else lines[lines.length - 1].push(step);
  }

  return (
    <div className="hero-visual">
      <div className="code-card">
        <div className="code-bar">
          <span className="code-dot" />
          <span className="code-dot" />
          <span className="code-dot" />
          <span className="code-filename">train.py</span>
        </div>
        <pre className="code-body">
          {lines.map((line, i) => (
            <div className="code-line" key={i}>
              {line.map((c, j) => (
                <span key={j} className={`tok-${c.cls}`}>
                  {c.ch}
                </span>
              ))}
              {i === lines.length - 1 && <span className="code-cursor" />}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
