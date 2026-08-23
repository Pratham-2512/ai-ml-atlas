"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import type { Level } from "@/data/resources";

type Theme = "dark" | "light";
type LevelFilter = Level | "all";

type AtlasContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  bookmarks: Set<string>;
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  showBookmarksOnly: boolean;
  setShowBookmarksOnly: (v: boolean) => void;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  activeCategory: string | null;
  setActiveCategory: (id: string | null) => void;
  paletteOpen: boolean;
  setPaletteOpen: (v: boolean) => void;
  levelFilter: LevelFilter;
  setLevelFilter: (v: LevelFilter) => void;
};

const AtlasContext = createContext<AtlasContextValue | null>(null);

const BOOKMARKS_KEY = "atlas.bookmarks";

export function AtlasProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");

  useEffect(() => {
    const stored = window.localStorage.getItem("atlas.theme") as Theme | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading persisted state from localStorage/DOM on mount, not derived from render
    setTheme(
      stored === "light" || stored === "dark"
        ? stored
        : document.documentElement.getAttribute("data-theme") === "light"
          ? "light"
          : "dark"
    );
    try {
      const raw = window.localStorage.getItem(BOOKMARKS_KEY);
      if (raw) setBookmarks(new Set(JSON.parse(raw)));
    } catch {
      // ignore malformed storage
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("atlas.theme", theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(Array.from(bookmarks)));
  }, [bookmarks]);

  const value = useMemo<AtlasContextValue>(
    () => ({
      theme,
      toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
      bookmarks,
      toggleBookmark: (id: string) =>
        setBookmarks((prev) => {
          const next = new Set(prev);
          if (next.has(id)) next.delete(id);
          else next.add(id);
          return next;
        }),
      isBookmarked: (id: string) => bookmarks.has(id),
      showBookmarksOnly,
      setShowBookmarksOnly,
      searchQuery,
      setSearchQuery,
      activeCategory,
      setActiveCategory,
      paletteOpen,
      setPaletteOpen,
      levelFilter,
      setLevelFilter,
    }),
    [theme, bookmarks, showBookmarksOnly, searchQuery, activeCategory, paletteOpen, levelFilter]
  );

  return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>;
}

export function useAtlas() {
  const ctx = useContext(AtlasContext);
  if (!ctx) throw new Error("useAtlas must be used within AtlasProvider");
  return ctx;
}
