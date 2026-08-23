"use client";

import { categories } from "@/data/resources";
import { useAtlas } from "@/context/AtlasContext";

export default function CategoryGrid() {
  const { activeCategory, setActiveCategory } = useAtlas();

  return (
    <section className="block" id="categories">
      <div className="wrap">
        <p className="eyebrow">Directory</p>
        <h2>30 categories, fully indexed</h2>
        <p className="lede">Foundations through frontier — jump straight to the section you need.</p>
        <div className="cat-grid">
          {categories.map((c) => (
            <a
              key={c.id}
              className={`cat-chip${activeCategory === c.id ? " is-active" : ""}`}
              href={`#${c.id}`}
              onClick={() => setActiveCategory(activeCategory === c.id ? null : c.id)}
            >
              {c.title} <span className="cn">{c.count}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
