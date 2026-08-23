"use client";

import { byId } from "@/data/resources";
import { useAtlas } from "@/context/AtlasContext";

export default function RoadmapJourney() {
  const roadmap = byId("roadmap");
  const { completedSteps, toggleStepComplete } = useAtlas();

  if (!roadmap) return null;
  const steps = roadmap.subgroups;
  const doneCount = steps.filter((_, i) => completedSteps.has(`roadmap-step-${i}`)).length;

  return (
    <section className="block roadmap-journey" id="roadmap-journey">
      <div className="wrap">
        <p className="eyebrow">Your path</p>
        <h2>The roadmap, step by step</h2>
        <p className="lede">
          {doneCount > 0
            ? `${doneCount} of ${steps.length} steps marked done — pick up where you left off.`
            : "Follow it top to bottom, or jump straight to the step you're on. Check off a step as you finish it."}
        </p>
        <ol className="journey">
          {steps.map((sg, i) => {
            const stepId = `roadmap-step-${i}`;
            const done = completedSteps.has(stepId);
            const title = (sg.heading ?? `Step ${i + 1}`).replace(/^\d+\.\s*/, "");
            return (
              <li key={stepId} className={`journey-step${done ? " is-done" : ""}`}>
                <div className="journey-marker">
                  <button
                    type="button"
                    className="journey-check"
                    onClick={() => toggleStepComplete(stepId)}
                    aria-pressed={done}
                    title={done ? "Mark as not done" : "Mark as done"}
                  >
                    {done ? "✓" : i + 1}
                  </button>
                  <span className="journey-line" />
                </div>
                <div className="journey-body">
                  <h3>{title}</h3>
                  <ul className="journey-links">
                    {sg.items.map((item) => (
                      <li key={item.id}>
                        <a href={item.href} target="_blank" rel="noopener">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
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
