"use client";

import { byId } from "@/data/resources";
import { useAtlas } from "@/context/AtlasContext";

// Compresses the roadmap category's 7 literal steps into 5 higher-level
// stages so this reads as a path, not a resource dump — grouping only,
// no new resources introduced.
const STAGES = [
  { title: "Foundations", indices: [0, 1] },
  { title: "Machine Learning", indices: [2] },
  { title: "Practice & Specialize", indices: [3, 4] },
  { title: "Operate & Ship", indices: [5] },
  { title: "Research", indices: [6] },
];

export default function RoadmapJourney() {
  const roadmap = byId("roadmap");
  const { completedSteps, toggleStepComplete } = useAtlas();

  if (!roadmap) return null;
  const subgroups = roadmap.subgroups;
  const doneCount = STAGES.filter((_, i) => completedSteps.has(`roadmap-stage-${i}`)).length;

  return (
    <section className="block roadmap-journey" id="roadmap-journey">
      <div className="wrap">
        <p className="eyebrow">Your path</p>
        <h2>The roadmap, stage by stage</h2>
        <p className="lede">
          {doneCount > 0
            ? `${doneCount} of ${STAGES.length} stages marked done — pick up where you left off.`
            : "Follow it top to bottom, or jump straight to the stage you're on. Check off a stage as you finish it."}
        </p>
        <ol className="journey">
          {STAGES.map((stage, i) => {
            const stageId = `roadmap-stage-${i}`;
            const done = completedSteps.has(stageId);
            const items = stage.indices.flatMap((idx) => subgroups[idx]?.items ?? []);
            return (
              <li key={stageId} className={`journey-step${done ? " is-done" : ""}`}>
                <div className="journey-marker">
                  <button
                    type="button"
                    className="journey-check"
                    onClick={() => toggleStepComplete(stageId)}
                    aria-pressed={done}
                    title={done ? "Mark as not done" : "Mark as done"}
                  >
                    {done ? "✓" : i + 1}
                  </button>
                  <span className="journey-line" />
                </div>
                <div className="journey-body">
                  <div className="journey-heading">
                    <h3>{stage.title}</h3>
                    <span className="journey-count">{items.length} resources</span>
                  </div>
                  <div className="journey-links">
                    {items.map((item) => (
                      <a key={item.id} href={item.href} target="_blank" rel="noopener" className="journey-chip">
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
          <li className="journey-step journey-final">
            <div className="journey-marker">
              <span className="journey-check journey-check-final">🚀</span>
            </div>
            <div className="journey-body">
              <h3>Build your first AI product</h3>
              <p className="journey-note">You&apos;ve got the fundamentals — go build something and ship it.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
