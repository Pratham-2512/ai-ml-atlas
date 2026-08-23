"use client";

import { useState } from "react";
import type { Resource } from "@/data/resources";
import { useAtlas } from "@/context/AtlasContext";
import { LEVEL_LABEL } from "@/lib/level";
import { getSourceType } from "@/lib/sourceType";
import { EDITORS_PICK_IDS } from "@/lib/editorsPick";

export default function ResourceItem({ item }: { item: Resource }) {
  const { isBookmarked, toggleBookmark } = useAtlas();
  const [copied, setCopied] = useState(false);
  const bookmarked = isBookmarked(item.id);
  const sourceType = getSourceType(item.href);
  const isPick = EDITORS_PICK_IDS.has(item.id);

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
        <div className="res-badges">
          {isPick && <span className="pick-badge">★ Editor&apos;s Pick</span>}
          <span className={`level-badge level-${item.level}`}>{LEVEL_LABEL[item.level]}</span>
          <span className="source-badge">{sourceType}</span>
        </div>
        <a href={item.href} target="_blank" rel="noopener" className="res-title">
          {item.title}
        </a>
        <p className="d">{item.desc}</p>
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
