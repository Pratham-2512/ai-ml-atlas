"use client";

import { useState } from "react";
import type { Resource } from "@/data/resources";
import { useAtlas } from "@/context/AtlasContext";
import { LEVEL_LABEL } from "@/lib/level";

export default function ResourceItem({ item }: { item: Resource }) {
  const { isBookmarked, toggleBookmark } = useAtlas();
  const [copied, setCopied] = useState(false);
  const bookmarked = isBookmarked(item.id);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(item.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <li data-id={item.id}>
      <div className="res-text">
        <span className={`level-badge level-${item.level}`}>{LEVEL_LABEL[item.level]}</span>
        <a href={item.href} target="_blank" rel="noopener">
          {item.title}
        </a>
        <span className="sep">—</span>
        <span className="d">{item.desc}</span>
      </div>
      <div className="res-actions">
        <button
          type="button"
          className={`mini-link${bookmarked ? " is-active" : ""}`}
          onClick={() => toggleBookmark(item.id)}
          aria-pressed={bookmarked}
        >
          {bookmarked ? "Saved" : "Save"}
        </button>
        <button type="button" className="mini-link" onClick={copyLink}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </li>
  );
}
