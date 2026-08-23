// A small, hand-picked set of genuinely well-known, strong resources spanning
// different categories — not a ranking of all 227, just a few worth flagging.
export const EDITORS_PICK_IDS = new Set([
  "key-concepts-13", // MLU-Explain
  "roadmap-1", // Intro Python – Harvard CS50
  "roadmap-10", // Google ML Crash Course
  "roadmap-11", // Machine Learning by Andrew Ng
  "roadmap-15", // Build GPT from Scratch – Karpathy
  "roadmap-19", // Deep Learning – CS231n Stanford
  "roadmap-24", // ArXiv
  "genai-general-2", // Andrej Karpathy – Intro to Large Language Models
  "genai-general-3", // The Illustrated Transformer – Jay Alammar
  "papers-1", // Attention Is All You Need
  "security-1", // OWASP Top 10 for LLM Applications
  "books-6", // Designing Machine Learning Systems
  "books-7", // Deep Learning (Goodfellow, Bengio, Courville)
  "frameworks-7", // LangGraph Tutorials
  "rag-1", // Building and Evaluating Advanced RAG Applications
  "interview-2", // ML Interviews MVP
]);

// Personal, one-line reasons — written by Pratham, not generated. Add an
// entry keyed by the resource id (see EDITORS_PICK_IDS above for which ids
// map to which titles) as they're written; anything missing falls back to
// a placeholder in MyPicks.tsx.
export const PICK_NOTES: Record<string, string> = {};
