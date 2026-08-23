"use client";

import { useAtlas } from "@/context/AtlasContext";
import { SunIcon, MoonIcon, StarIcon } from "./icons";

export default function Nav() {
  const { theme, toggleTheme, bookmarks, showBookmarksOnly, setShowBookmarksOnly, setPaletteOpen } = useAtlas();

  return (
    <nav className="nav" id="top">
      <div className="brand">
        <span className="mark">/=/</span> AI/ML Atlas
      </div>
      <div className="nav-links">
        <a href="#how">How it&apos;s indexed</a>
        <a href="#anatomy">Anatomy of an entry</a>
        <a href="#categories">Categories</a>
        <a href="#full-index">Full index</a>
      </div>
      <div className="nav-right">
        <button type="button" className="btn btn-ghost kbd-btn" onClick={() => setPaletteOpen(true)}>
          Search <kbd>⌘K</kbd>
        </button>
        <button
          type="button"
          className={`icon-btn${showBookmarksOnly ? " is-active" : ""}`}
          onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
          aria-pressed={showBookmarksOnly}
          title={`Bookmarks (${bookmarks.size})`}
        >
          <StarIcon filled={showBookmarksOnly} />
        </button>
        <button
          type="button"
          className="icon-btn"
          onClick={toggleTheme}
          title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        <a className="btn btn-primary" href="#full-index">
          Browse the index
        </a>
      </div>
    </nav>
  );
}
