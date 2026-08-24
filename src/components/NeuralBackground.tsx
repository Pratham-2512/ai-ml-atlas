"use client";

import { useEffect, useRef } from "react";
import { useAtlas } from "@/context/AtlasContext";

const PALETTE = {
  dark: { bg: "#0a0e1a", line: "53,226,196", node: "53,226,196" },
  light: { bg: "#f6f7fb", line: "14,156,134", node: "14,156,134" },
};

type Node = { x: number; y: number; vx: number; vy: number };

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useAtlas();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let mouseX = -9999;
    let mouseY = -9999;
    const REPEL_RADIUS = 130;
    const ACTIVATE_RADIUS = 190;

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    function onMouseLeave() {
      mouseX = -9999;
      mouseY = -9999;
    }
    if (!reduced) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseleave", onMouseLeave);
    }

    function makeNodes() {
      const count = Math.min(90, Math.max(36, Math.round((w * h) / 22000)));
      nodes = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function size() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeNodes();
    }
    size();
    window.addEventListener("resize", size);

    const LINK_DIST = 150;

    function frame() {
      const p = PALETTE[themeRef.current];
      ctx!.fillStyle = p.bg;
      ctx!.fillRect(0, 0, w, h);

      const activation = new Array(nodes.length).fill(0);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;

          const dx = n.x - mouseX;
          const dy = n.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPEL_RADIUS && dist > 0.01) {
            const push = (1 - dist / REPEL_RADIUS) * 2.2;
            n.x += (dx / dist) * push;
            n.y += (dy / dist) * push;
          }
          if (dist < ACTIVATE_RADIUS) activation[i] = 1 - dist / ACTIVATE_RADIUS;
        }
      }

      // edges near the cursor light up like signal firing between neurons,
      // instead of a generic glow sitting on top of the scene
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const base = (1 - dist / LINK_DIST) * 0.16;
            const fire = Math.max(activation[i], activation[j]);
            ctx!.strokeStyle = `rgba(${p.line},${Math.min(1, base + fire * 0.75)})`;
            ctx!.lineWidth = 1 + fire * 1.4;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const fire = activation[i];
        if (fire > 0.05) {
          const haloR = 5 + fire * 22;
          const halo = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, haloR);
          halo.addColorStop(0, `rgba(${p.node},${fire * 0.45})`);
          halo.addColorStop(1, `rgba(${p.node},0)`);
          ctx!.fillStyle = halo;
          ctx!.fillRect(n.x - haloR, n.y - haloR, haloR * 2, haloR * 2);
        }
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.6 + fire * 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${p.node},${0.45 + fire * 0.5})`;
        ctx!.fill();
      }
    }

    let raf = 0;
    if (reduced) {
      frame();
    } else {
      const loop = () => {
        frame();
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", size);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-bg" aria-hidden="true" />;
}
