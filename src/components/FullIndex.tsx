"use client";

import { useMemo } from "react";
import { categories, totalResources, byId, type Resource } from "@/data/resources";
import { useAtlas } from "@/context/AtlasContext";
import CategorySection from "./CategorySection";
import { CloseIcon } from "./icons";

export default function FullIndex() {
  const { searchQuery, setSearchQuery, activeCategory, setActiveCategory, showBookmarksOnly, isBookmarked } =
    useAtlas();

  const query = searchQuery.trim().toLowerCase();

  const filter = useMemo(() => {
    return (item: Resource) => {
      if (showBookmarksOnly && !isBookmarked(item.id)) return false;
      if (!query) return true;
      return `${item.title} ${item.desc}`.toLowerCase().includes(query);
    };
  }, [query, showBookmarksOnly, isBookmarked]);

  const visibleCategories = activeCategory ? categories.filter((c) => c.id === activeCategory) : categories;

  const totalVisible = visibleCategories.reduce(
    (acc, c) => acc + c.subgroups.reduce((a, sg) => a + sg.items.filter(filter).length, 0),
    0
  );

  const isFiltering = Boolean(query) || showBookmarksOnly;
  const activeCategoryTitle = activeCategory ? byId(activeCategory)?.title : null;

  return (
    <section className="block" id="full-index">
      <div className="wrap">
        <p className="eyebrow">The full index</p>
        <h2>All {totalResources} resources, one by one</h2>
        <p className="lede">Search below, or just scroll — nothing is hidden behind a paywall or a &quot;view more&quot; button.</p>

        <div className="index-search">
          <input
            type="search"
            placeholder="Search resources…"
            aria-label="Search resources"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="match-count" aria-live="polite">
            {isFiltering ? `${totalVisible} match${totalVisible === 1 ? "" : "es"}` : ""}
          </span>
        </div>

        {activeCategoryTitle && (
          <div className="filter-pill">
            Filtering: {activeCategoryTitle}
            <button type="button" onClick={() => setActiveCategory(null)} title="Clear category filter">
              <CloseIcon />
            </button>
          </div>
        )}

        {showBookmarksOnly && totalVisible === 0 && (
          <p className="lede" style={{ marginTop: 24 }}>
            No bookmarks yet — click the star on any entry to save it here.
          </p>
        )}

        {visibleCategories.map((c) => (
          <CategorySection key={c.id} category={c} filter={filter} />
        ))}
      </div>
    </section>
  );
}
