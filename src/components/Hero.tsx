"use client";

import { useEffect, useState } from "react";
import ScrollLink from "./ScrollLink";

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
        <span className="title">lookup — basecamp.index</span>
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

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-inner">
        <div>
          <p className="kicker">A GUIDED PATH, NOT A LINK DUMP</p>
          <h1>
            Learn AI without
            <br />
            getting lost.
          </h1>
          <p className="dek">
            Curated roadmaps, resources, and projects to go from beginner to AI builder — checked by hand and
            organized into a path, not just a pile of links.
          </p>
          <div className="hero-cta">
            <ScrollLink to="goals" className="btn btn-primary">
              Find My Roadmap →
            </ScrollLink>
            <ScrollLink to="roadmap-journey" className="link-more">
              Explore the AI Roadmap ↓
            </ScrollLink>
          </div>
        </div>
        <TerminalCard />
      </div>
    </header>
  );
}
