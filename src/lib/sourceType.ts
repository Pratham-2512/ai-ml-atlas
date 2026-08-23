// Derived purely from the URL/domain — never guesses at a resource's actual
// content, only what kind of thing it is (a paper is still a paper regardless
// of what it argues).
const COURSE_DOMAINS = [
  "coursera.org",
  "edx.org",
  "udacity.com",
  "pixelbank.dev",
  "deeplearning.ai",
  "cloudskillsboost.google",
  "khanacademy.org",
  "course.fast.ai",
  "learn.microsoft.com",
  "skillbuilder.aws",
  "datacamp.com",
  "w3schools.com",
];

const DOCS_DOMAINS = [
  "developers.google.com",
  "cloud.google.com",
  "platform.openai.com",
  "developers.openai.com",
  "huggingface.co",
  "scikit-learn.org",
  "numpy.org",
  "matplotlib.org",
  "owasp.org",
  "spinningup.openai.com",
  "keras.io",
  "python.langchain.com",
  "langchain-ai.github.io",
  "google.github.io",
];

const BOOK_DOMAINS = ["oreilly.com", "manning.com", "deeplearningbook.org"];
const COMMUNITY_DOMAINS = ["discord.com", "reddit.com"];

export function getSourceType(href: string): string {
  let host = "";
  try {
    host = new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "Resource";
  }

  if (host === "arxiv.org") return "Research Paper";
  if (host.includes("github.com")) return "GitHub Repo";
  if (host.includes("youtube.com") || host.includes("youtu.be")) return "Video";
  if (host === "kaggle.com" || host.endsWith(".kaggle.com") || host === "deep-ml.com") return "Practice";
  if (
    host.endsWith(".edu") ||
    host.includes("ocw.mit.edu") ||
    host.includes("cs50.harvard.edu") ||
    host.includes("stanford.edu")
  )
    return "University";
  if (COURSE_DOMAINS.some((d) => host.includes(d))) return "Course";
  if (DOCS_DOMAINS.some((d) => host.includes(d)) || host.startsWith("docs.")) return "Official Docs";
  if (BOOK_DOMAINS.some((d) => host.includes(d))) return "Book";
  if (COMMUNITY_DOMAINS.some((d) => host.includes(d))) return "Community";
  return "Article";
}
