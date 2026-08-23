"use client";

import { useEffect, useRef, useState } from "react";
import { totalResources } from "@/data/resources";

const LOOKUP_ENTRIES = [
  { id: "AIML-014", title: "Attention Is All You Need", source: "arxiv.org", cat: "Must-Read Papers" },
  { id: "AIML-091", title: "LangGraph Tutorials", source: "langchain-ai.github.io", cat: "Frameworks" },
  { id: "AIML-133", title: "OWASP Top 10 for LLM Apps", source: "owasp.org", cat: "Security" },
  { id: "AIML-058", title: "The Illustrated Transformer", source: "jalammar.github.io", cat: "Generative AI" },
  { id: "AIML-201", title: "Designing ML Systems", source: "oreilly.com", cat: "Interview Prep" },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading the current value of an external API on mount, not derived from render
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function TerminalCard() {
  const [i, setI] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((n) => (n + 1) % LOOKUP_ENTRIES.length), 3200);
    return () => clearInterval(t);
  }, [reduced]);

  const e = LOOKUP_ENTRIES[i];
  return (
    <div className="term" id="termCard">
      <div className="term-bar">
        <span className="term-dot" /> <span className="term-dot" /> <span className="term-dot" />
        <span className="title">lookup — atlas.index</span>
      </div>
      <div className="term-body">
        <div className="term-row">
          <span className="k">entry</span>
          <span className="v">{e.id}</span>
        </div>
        <div className="term-row">
          <span className="k">title</span>
          <span className="v title">{e.title}</span>
        </div>
        <div className="term-row">
          <span className="k">source</span>
          <span className="v">{e.source}</span>
        </div>
        <div className="term-row">
          <span className="k">category</span>
          <span className="v">{e.cat}</span>
        </div>
        <div className="term-row">
          <span className="k">status</span>
          <span className="v ok">✓ verified</span>
        </div>
        <div className="term-row">
          <span className="k">&nbsp;</span>
          <span className="v">
            &gt; scanning next entry
            <span className="term-cursor" />
          </span>
        </div>
      </div>
    </div>
  );
}

function ScanGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function size() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener("resize", size);

    const gap = 34;
    let t = 0;
    let raf = 0;
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      const cols = Math.ceil(w / gap) + 1;
      const rows = Math.ceil(h / gap) + 1;
      const scanY = h * 0.5 + Math.sin(t * 0.4) * h * 0.4;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * gap;
          const y = r * gap;
          const dist = Math.abs(y - scanY);
          const glow = Math.max(0, 1 - dist / 160);
          ctx!.beginPath();
          ctx!.arc(x, y, 1.1 + glow * 1.2, 0, Math.PI * 2);
          ctx!.fillStyle = glow > 0.05 ? `rgba(53,226,196,${0.12 + glow * 0.55})` : "rgba(160,170,200,0.10)";
          ctx!.fill();
        }
      }
      t += 0.012;
      if (!reduced) raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", size);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} id="grid" aria-hidden="true" />;
}

export default function Hero() {
  return (
    <header className="hero">
      <ScanGrid />
      <div className="wrap hero-inner">
        <div>
          <p className="kicker">{totalResources} RESOURCES · HAND-VERIFIED</p>
          <h1>
            Stop bookmarking.
            <br />
            Start indexing.
          </h1>
          <p className="dek">
            AI/ML Atlas is a hand-verified index of the best courses, papers, frameworks, and blogs in AI/ML — sorted
            into 30 categories, so you spend less time searching and more time learning.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#full-index">
              Browse the index →
            </a>
            <a className="link-more" href="#how">
              See how it&apos;s indexed ↓
            </a>
          </div>
        </div>
        <TerminalCard />
      </div>
    </header>
  );
}
