import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenisInstance(l: Lenis | null) {
  instance = l;
}

export function scrollToId(id: string) {
  // "top" targets the sticky nav — a stuck sticky element reports its
  // current (already-at-top) rect, not its natural document position, so
  // element-based scrolling computes zero distance. Scroll to an absolute
  // offset instead.
  if (id === "top") {
    if (instance) instance.scrollTo(0, { offset: 0 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const target = document.getElementById(id);
  if (!target) return;
  if (instance) {
    instance.scrollTo(target, { offset: 0 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
