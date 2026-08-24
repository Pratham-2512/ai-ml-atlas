import { byId } from "@/data/resources";

export type Stage = { title: string; categoryIds: string[] };

export type Goal = {
  id: string;
  title: string;
  blurb: string;
  stages: Stage[];
  categoryIds: string[];
};

function makeGoal(id: string, title: string, blurb: string, stages: Stage[]): Goal {
  const categoryIds = Array.from(new Set(stages.flatMap((s) => s.categoryIds)));
  return { id, title, blurb, stages, categoryIds };
}

// Each goal is a genuinely different staged sequence through the existing
// 30 categories — not a flat union, so two goals don't end up pulling the
// identical resource count just because they share some categories.
export const GOALS: Goal[] = [
  makeGoal("ai-engineer", "AI Engineer", "Build and ship AI-powered systems end to end.", [
    { title: "Foundations", categoryIds: ["building-blocks", "key-concepts"] },
    { title: "Core", categoryIds: ["roadmap", "frameworks"] },
    { title: "Build", categoryIds: ["rag", "agentic-ai"] },
    { title: "Ship", categoryIds: ["mlops", "sdlc"] },
  ]),
  makeGoal("ml-engineer", "ML Engineer", "Master the math, models, and research behind ML.", [
    { title: "Foundations", categoryIds: ["building-blocks", "key-concepts"] },
    { title: "Core", categoryIds: ["roadmap", "papers"] },
    { title: "Specialize", categoryIds: ["practice", "research-blogs"] },
    { title: "Production", categoryIds: ["mlops", "cost-optimization"] },
  ]),
  makeGoal("llm-engineer", "LLM Engineer", "Work with prompts, RAG, fine-tuning, and LLM APIs.", [
    { title: "Foundations", categoryIds: ["key-concepts", "building-blocks"] },
    { title: "LLM Core", categoryIds: ["genai-general", "genai-advanced"] },
    { title: "Systems", categoryIds: ["prompt-engineering", "rag"] },
    { title: "Advanced", categoryIds: ["fine-tuning", "agentic-ai"] },
  ]),
  makeGoal("ai-app-developer", "AI App Developer", "Build real products with agents, RAG, and frameworks.", [
    { title: "Foundations", categoryIds: ["building-blocks", "frameworks"] },
    { title: "Core", categoryIds: ["rag", "agentic-ai"] },
    { title: "Build", categoryIds: ["tools", "sdlc"] },
    { title: "Ship", categoryIds: ["mlops", "adopting-genai"] },
  ]),
  makeGoal("ai-data-analyst", "AI + Data Analyst", "Apply AI/ML to data analysis and decision-making.", [
    { title: "Foundations", categoryIds: ["key-concepts", "building-blocks"] },
    { title: "Core", categoryIds: ["practice", "google-cloud"] },
    { title: "Specialize", categoryIds: ["cost-optimization", "productivity"] },
    { title: "Apply", categoryIds: ["courses", "applied-blogs"] },
  ]),
];

export function goalResourceCount(goal: Goal): number {
  return goal.categoryIds.reduce((sum, id) => sum + (byId(id)?.count ?? 0), 0);
}

export function stageResourceCount(stage: Stage): number {
  return stage.categoryIds.reduce((sum, id) => sum + (byId(id)?.count ?? 0), 0);
}
