"use client";

import { flatResources } from "@/data/resources";
import { EDITORS_PICK_IDS, PICK_NOTES } from "@/lib/editorsPick";

export default function MyPicks() {
  const picks = flatResources.filter((r) => EDITORS_PICK_IDS.has(r.id));

  return (
    <section className="block my-picks" id="my-picks">
      <div className="wrap">
        <p className="eyebrow">My picks</p>
        <h2>A few I&apos;d point you to first</h2>
        <p className="lede">Not a ranking of all 227 — just the ones I keep coming back to.</p>
        <ul className="pick-list">
          {picks.map((r) => (
            <li key={r.id}>
              <a href={r.href} target="_blank" rel="noopener" className="pick-title">
                {r.title}
              </a>
              <p className="pick-note">{PICK_NOTES[r.id] ?? "Reason coming soon."}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
