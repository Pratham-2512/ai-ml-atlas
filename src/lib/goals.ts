import { byId } from "@/data/resources";

export type Goal = {
  id: string;
  emoji: string;
  title: string;
  blurb: string;
  categoryIds: string[];
};

export const GOALS: Goal[] = [
  {
    id: "ai-engineer",
    emoji: "🤖",
    title: "AI Engineer",
    blurb: "Build and ship AI-powered systems end to end.",
    categoryIds: ["roadmap", "building-blocks", "key-concepts", "frameworks", "mlops"],
  },
  {
    id: "ml-engineer",
    emoji: "🧠",
    title: "ML Engineer",
    blurb: "Master the math, models, and research behind ML.",
    categoryIds: ["building-blocks", "key-concepts", "roadmap", "papers", "practice"],
  },
  {
    id: "llm-engineer",
    emoji: "⚡",
    title: "LLM Engineer",
    blurb: "Work with prompts, RAG, fine-tuning, and LLM APIs.",
    categoryIds: ["genai-general", "genai-advanced", "prompt-engineering", "rag", "fine-tuning"],
  },
  {
    id: "ai-app-developer",
    emoji: "🛠",
    title: "AI App Developer",
    blurb: "Build real products with agents, RAG, and frameworks.",
    categoryIds: ["frameworks", "agentic-ai", "rag", "tools", "sdlc"],
  },
  {
    id: "ai-data-analyst",
    emoji: "📊",
    title: "AI + Data Analyst",
    blurb: "Apply AI/ML to data analysis and decision-making.",
    categoryIds: ["key-concepts", "building-blocks", "practice", "google-cloud", "cost-optimization"],
  },
];

export function goalResourceCount(goal: Goal): number {
  return goal.categoryIds.reduce((sum, id) => sum + (byId(id)?.count ?? 0), 0);
}
