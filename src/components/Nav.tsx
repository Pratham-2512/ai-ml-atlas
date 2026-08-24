"use client";

import { useAtlas } from "@/context/AtlasContext";
import { SearchIcon, SunIcon, MoonIcon } from "./icons";
import ScrollLink from "./ScrollLink";

export default function Nav() {
  const { theme, toggleTheme, bookmarks, showBookmarksOnly, setShowBookmarksOnly, setPaletteOpen } = useAtlas();

  return (
    <nav className="nav" id="top">
      <div className="brand">
        <span className="mark">/=/</span> AI Basecamp
      </div>
      <div className="nav-links">
        <ScrollLink to="goals">Goals</ScrollLink>
        <ScrollLink to="roadmap-journey">The Path</ScrollLink>
        <ScrollLink to="categories">Categories</ScrollLink>
        <ScrollLink to="full-index">Full index</ScrollLink>
      </div>
      <div className="nav-right">
        <button type="button" className="nav-search" onClick={() => setPaletteOpen(true)}>
          <SearchIcon />
          <span className="nav-search-label">Search resources…</span>
          <kbd>⌘K</kbd>
        </button>
        <button
          type="button"
          className={`btn btn-ghost${showBookmarksOnly ? " is-active" : ""}`}
          onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
          aria-pressed={showBookmarksOnly}
          title={`Bookmarks (${bookmarks.size})`}
        >
          Saved
        </button>
        <button
          type="button"
          className="btn btn-ghost theme-toggle"
          onClick={toggleTheme}
          title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
        <ScrollLink to="full-index" className="btn btn-primary">
          Browse resources
        </ScrollLink>
      </div>
    </nav>
  );
}
