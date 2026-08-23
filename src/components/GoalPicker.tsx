"use client";

import { GOALS, goalResourceCount } from "@/lib/goals";
import { useAtlas } from "@/context/AtlasContext";
import { scrollToId } from "@/lib/scroll";
import type { Goal } from "@/lib/goals";

export default function GoalPicker() {
  const { setGoalFilter, setActiveCategory } = useAtlas();

  function pick(goal: Goal) {
    setActiveCategory(null);
    setGoalFilter({ id: goal.id, title: goal.title, categoryIds: goal.categoryIds });
    scrollToId("full-index");
  }

  return (
    <section className="block goal-picker" id="goals">
      <div className="wrap">
        <p className="eyebrow">Pick your path</p>
        <h2>What do you want to become?</h2>
        <p className="lede">Pick a goal and the index narrows down to exactly what matters for it.</p>
        <div className="goal-grid">
          {GOALS.map((g) => (
            <button key={g.id} type="button" className="goal-card" onClick={() => pick(g)}>
              <span className="goal-emoji">{g.emoji}</span>
              <span className="goal-title">{g.title}</span>
              <span className="goal-blurb">{g.blurb}</span>
              <span className="goal-meta">
                {g.categoryIds.length} categories · {goalResourceCount(g)} resources
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
