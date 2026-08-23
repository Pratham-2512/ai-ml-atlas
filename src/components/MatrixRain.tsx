"use client";

import { useEffect, useRef } from "react";

const CHARS = "アイウエオカキクケコサシスセソ01AI/ML";

export default function MatrixRain({ onDone }: { onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const fontSize = 16;
    const cols = Math.ceil(w / fontSize);
    const drops = new Array(cols).fill(0).map(() => Math.random() * -40);

    let raf = 0;
    function draw() {
      ctx!.fillStyle = "rgba(6, 17, 15, 0.16)";
      ctx!.fillRect(0, 0, w, h);
      ctx!.font = `${fontSize}px monospace`;
      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx!.fillStyle = Math.random() > 0.94 ? "#eafff9" : "#35e2c4";
        ctx!.fillText(char, x, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    const t = setTimeout(onDone, 3400);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [onDone]);

  return (
    <div className="matrix-overlay" onClick={onDone}>
      <canvas ref={canvasRef} aria-hidden="true" />
      <span className="matrix-hint">click to wake up</span>
    </div>
  );
}
