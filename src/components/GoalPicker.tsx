"use client";

import { useState } from "react";
import { byId } from "@/data/resources";
import { GOALS, goalResourceCount, stageResourceCount } from "@/lib/goals";
import { useAtlas } from "@/context/AtlasContext";
import { scrollToId } from "@/lib/scroll";
import type { Goal } from "@/lib/goals";

export default function GoalPicker() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { setGoalFilter, setActiveCategory } = useAtlas();

  function browseAll(goal: Goal) {
    setActiveCategory(null);
    setGoalFilter({ id: goal.id, title: goal.title, categoryIds: goal.categoryIds });
    scrollToId("full-index");
  }

  return (
    <section className="block goal-picker" id="goals">
      <div className="wrap">
        <p className="eyebrow">Pick your path</p>
        <h2>What do you want to become?</h2>
        <p className="lede">Pick a goal to see the stages of the path, or jump straight to the resources.</p>
        <ol className="goal-list">
          {GOALS.map((g, i) => {
            const open = openId === g.id;
            return (
              <li key={g.id}>
                <button
                  type="button"
                  className="goal-row"
                  onClick={() => setOpenId(open ? null : g.id)}
                  aria-expanded={open}
                >
                  <span className="goal-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="goal-info">
                    <span className="goal-title">{g.title}</span>
                    <span className="goal-blurb">{g.blurb}</span>
                  </span>
                  <span className="goal-meta">
                    {g.stages.length} stages · {goalResourceCount(g)} resources
                  </span>
                  <span className={`goal-arrow${open ? " is-open" : ""}`}>{open ? "▾" : "→"}</span>
                </button>
                {open && (
                  <div className="goal-stages">
                    {g.stages.map((stage) => (
                      <div className="goal-stage" key={stage.title}>
                        <h4>{stage.title}</h4>
                        <p>
                          {stage.categoryIds.map((id) => byId(id)?.title).join(" · ")}
                          <span className="goal-stage-count"> — {stageResourceCount(stage)} resources</span>
                        </p>
                      </div>
                    ))}
                    <button type="button" className="link-more goal-browse" onClick={() => browseAll(g)}>
                      Browse all {goalResourceCount(g)} resources for this path →
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
