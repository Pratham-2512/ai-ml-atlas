"use client";

import { useState } from "react";
import type { Resource } from "@/data/resources";
import { useAtlas } from "@/context/AtlasContext";
import { StarIcon, CopyIcon, CheckIcon } from "./icons";

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
        <a href={item.href} target="_blank" rel="noopener">
          {item.title}
        </a>
        <span className="sep">—</span>
        <span className="d">{item.desc}</span>
      </div>
      <div className="res-actions">
        <button
          type="button"
          className={`mini-btn${bookmarked ? " is-active" : ""}`}
          onClick={() => toggleBookmark(item.id)}
          aria-pressed={bookmarked}
          title={bookmarked ? "Remove bookmark" : "Bookmark this"}
        >
          <StarIcon filled={bookmarked} />
        </button>
        <button type="button" className="mini-btn" onClick={copyLink} title="Copy link">
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
    </li>
  );
}
