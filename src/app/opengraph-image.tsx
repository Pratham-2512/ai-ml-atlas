import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Basecamp — 227 curated AI/ML resources in 30 categories";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0f14",
          color: "#e6edf3",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#7ee787", letterSpacing: 4 }}>
          A GUIDED PATH, NOT A LINK DUMP
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, lineHeight: 1 }}>
            AI Basecamp
          </div>
          <div style={{ display: "flex", fontSize: 36, color: "#9da7b3", lineHeight: 1.3 }}>
            227 hand-picked AI/ML courses, papers, tools &amp; blogs. 30 categories.
            5 career roadmaps. Search, bookmark, no sign-up.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#58a6ff" }}>
          <span>ai-basecamp-pratham.vercel.app</span>
          <span style={{ color: "#6e7681" }}>free · open source</span>
        </div>
      </div>
    ),
    size
  );
}
