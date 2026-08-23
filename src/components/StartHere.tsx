"use client";

import { flatResources } from "@/data/resources";
import { scrollToId } from "@/lib/scroll";

const PICKS = [
  { id: "roadmap-1", why: "Learn to code, step by step — no experience needed." },
  { id: "roadmap-10", why: "A free, friendly first look at what machine learning actually is." },
  { id: "roadmap-11", why: "The classic course millions of people started with." },
  { id: "key-concepts-13", why: "Play with the ideas visually instead of just reading about them." },
  { id: "genai-general-3", why: "The clearest explanation anywhere of how today's AI models work." },
];

export default function StartHere() {
  const picks = PICKS.map((p) => ({ ...p, resource: flatResources.find((r) => r.id === p.id) })).filter(
    (p) => p.resource
  );

  return (
    <section className="block start-here">
      <div className="wrap">
        <p className="eyebrow">New here?</p>
        <h2>Start with these 5</h2>
        <p className="lede">
          227 resources can feel like a lot. If you&apos;re just getting started with AI and ML, begin here — in
          order.
        </p>
        <ol className="start-list">
          {picks.map((p, i) => (
            <li key={p.id}>
              <span className="start-num">{i + 1}</span>
              <div className="start-body">
                <a href={p.resource!.href} target="_blank" rel="noopener">
                  {p.resource!.title}
                </a>
                <p>{p.why}</p>
              </div>
            </li>
          ))}
        </ol>
        <button type="button" className="link-more start-more" onClick={() => scrollToId("full-index")}>
          Or browse all 227 resources ↓
        </button>
      </div>
    </section>
  );
}
