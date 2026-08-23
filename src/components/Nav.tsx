"use client";

import { useAtlas } from "@/context/AtlasContext";
import { SunIcon, MoonIcon, StarIcon } from "./icons";
import ScrollLink from "./ScrollLink";

export default function Nav() {
  const { theme, toggleTheme, bookmarks, showBookmarksOnly, setShowBookmarksOnly, setPaletteOpen } = useAtlas();

  return (
    <nav className="nav" id="top">
      <div className="brand">
        <span className="mark">/=/</span> AI Basecamp
      </div>
      <div className="nav-links">
        <ScrollLink to="how">How we pick</ScrollLink>
        <ScrollLink to="anatomy">What&apos;s inside</ScrollLink>
        <ScrollLink to="categories">Categories</ScrollLink>
        <ScrollLink to="full-index">Full index</ScrollLink>
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
        <ScrollLink to="full-index" className="btn btn-primary">
          Browse resources
        </ScrollLink>
      </div>
    </nav>
  );
}
