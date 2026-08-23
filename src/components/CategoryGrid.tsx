"use client";

import { categories } from "@/data/resources";
import { useAtlas } from "@/context/AtlasContext";
import ScrollLink from "./ScrollLink";

export default function CategoryGrid() {
  const { activeCategory, setActiveCategory, setGoalFilter } = useAtlas();

  return (
    <section className="block" id="categories">
      <div className="wrap">
        <p className="eyebrow">Directory</p>
        <h2>30 categories, all organized for you</h2>
        <p className="lede">From the basics to the latest topics — click a category to jump straight there.</p>
        <div className="cat-grid">
          {categories.map((c) => (
            <ScrollLink
              key={c.id}
              to={c.id}
              className={`cat-chip${activeCategory === c.id ? " is-active" : ""}`}
              onClick={() => {
                setGoalFilter(null);
                setActiveCategory(activeCategory === c.id ? null : c.id);
              }}
            >
              {c.title} <span className="cn">{c.count}</span>
            </ScrollLink>
          ))}
        </div>
      </div>
    </section>
  );
}
