"use client";

import { flatResources } from "@/data/resources";
import { scrollToId } from "@/lib/scroll";

const PICKS = [
  { id: "roadmap-1", why: "Start here if you've never written a line of Python — everything else assumes you have." },
  { id: "roadmap-10", why: "A fast, free first pass at what machine learning actually is, no math background needed." },
  { id: "roadmap-11", why: "Once the basics make sense, this is the course that goes deep on the fundamentals." },
  { id: "key-concepts-13", why: "Use this when a concept makes sense on paper but hasn't clicked yet." },
  { id: "genai-general-3", why: "Read this once you're ready to understand how models like ChatGPT actually work." },
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
