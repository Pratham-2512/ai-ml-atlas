"use client";

import { useEffect, useRef, useState } from "react";
import { categories, flatResources } from "@/data/resources";
import { useAtlas } from "@/context/AtlasContext";
import { scrollToId } from "@/lib/scroll";
import MatrixRain from "./MatrixRain";
import { SunIcon, MoonIcon, StarIcon } from "./icons";

type Item = {
  key: string;
  kind: "action" | "category" | "resource" | "easter";
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  disabled?: boolean;
  onSelect?: () => void;
};

export default function CommandPalette() {
  const { paletteOpen, setPaletteOpen, theme, toggleTheme, showBookmarksOnly, setShowBookmarksOnly, setActiveCategory } =
    useAtlas();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [matrix, setMatrix] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const cmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (cmdK) {
        e.preventDefault();
        setPaletteOpen(!paletteOpen);
      } else if (e.key === "Escape" && paletteOpen) {
        setPaletteOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [paletteOpen, setPaletteOpen]);

  useEffect(() => {
    if (!paletteOpen) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting the palette's own UI state when it opens, regardless of which caller triggered the open
    setQuery("");
    setSelected(0);
    const t = setTimeout(() => inputRef.current?.focus(), 10);
    return () => clearTimeout(t);
  }, [paletteOpen]);

  function close() {
    setPaletteOpen(false);
  }

  function jumpToCategory(id: string) {
    setActiveCategory(id);
    close();
    setTimeout(() => scrollToId(id), 50);
  }

  function openResource(href: string) {
    window.open(href, "_blank", "noopener");
    close();
  }

  function computeItems(): Item[] {
    const q = query.trim().toLowerCase();

    if (q === "sudo") {
      return [
        {
          key: "sudo",
          kind: "easter",
          icon: "🔒",
          label: "basecamp is not in the sudoers file",
          sublabel: "this incident will be reported.",
          disabled: true,
        },
      ];
    }
    if (q === "matrix" || q === "wake up neo") {
      return [
        {
          key: "matrix",
          kind: "easter",
          icon: "💊",
          label: "Wake up, Neo…",
          sublabel: "the Matrix has you",
          onSelect: () => {
            setMatrix(true);
            close();
          },
        },
      ];
    }

    if (!q) {
      return [
        {
          key: "act-theme",
          kind: "action",
          icon: theme === "dark" ? <SunIcon /> : <MoonIcon />,
          label: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
          onSelect: () => {
            toggleTheme();
            close();
          },
        },
        {
          key: "act-bookmarks",
          kind: "action",
          icon: <StarIcon filled={showBookmarksOnly} />,
          label: showBookmarksOnly ? "Show all resources" : "Show bookmarks only",
          onSelect: () => {
            setShowBookmarksOnly(!showBookmarksOnly);
            close();
          },
        },
        {
          key: "act-surprise",
          kind: "action",
          icon: "🎲",
          label: "Surprise me — open a random resource",
          onSelect: () => {
            const r = flatResources[Math.floor(Math.random() * flatResources.length)];
            openResource(r.href);
          },
        },
      ];
    }

    const catMatches: Item[] = categories
      .filter((c) => c.title.toLowerCase().includes(q))
      .slice(0, 4)
      .map((c) => ({
        key: `cat-${c.id}`,
        kind: "category",
        icon: c.stamp,
        label: `Jump to: ${c.title}`,
        sublabel: `${c.count} resources`,
        onSelect: () => jumpToCategory(c.id),
      }));

    const resMatches: Item[] = flatResources
      .filter((r) => `${r.title} ${r.desc} ${r.categoryTitle}`.toLowerCase().includes(q))
      .slice(0, 8)
      .map((r) => ({
        key: r.id,
        kind: "resource",
        icon: r.categoryStamp,
        label: r.title,
        sublabel: r.categoryTitle,
        onSelect: () => openResource(r.href),
      }));

    return [...catMatches, ...resMatches];
  }

  const items = computeItems();

  const [prevQuery, setPrevQuery] = useState(query);
  if (query !== prevQuery) {
    setPrevQuery(query);
    setSelected(0);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      items[selected]?.onSelect?.();
    }
  }

  if (matrix) return <MatrixRain onDone={() => setMatrix(false)} />;
  if (!paletteOpen) return null;

  return (
    <div className="palette-overlay" onClick={close}>
      <div className="palette-box term" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="palette-input"
          placeholder="Search 227 resources, jump to a category, or run a command…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          aria-label="Command palette"
        />
        <div className="palette-list">
          {items.length === 0 && <div className="palette-empty">No matches. Try a category name, or try “sudo”.</div>}
          {items.map((item, i) => (
            <button
              type="button"
              key={item.key}
              className={`palette-item${i === selected ? " is-selected" : ""}${item.disabled ? " is-disabled" : ""}`}
              onMouseEnter={() => setSelected(i)}
              onClick={() => item.onSelect?.()}
              disabled={item.disabled}
            >
              <span className="palette-icon">{item.icon}</span>
              <span className="palette-text">
                <span className="palette-label">{item.label}</span>
                {item.sublabel && <span className="palette-sublabel">{item.sublabel}</span>}
              </span>
            </button>
          ))}
        </div>
        <div className="palette-footer">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
