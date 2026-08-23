const STEPS = [
  {
    idx: "01 / COLLECTED",
    title: "Pulled from primary sources",
    body: "Official docs, university courses, arXiv preprints, and engineering blogs — never a listicle repackaging someone else's list.",
  },
  {
    idx: "02 / VERIFIED",
    title: "Every link, opened",
    body: "Courses are checked for a live syllabus, papers are matched against arXiv, and repos are checked for recent activity.",
  },
  {
    idx: "03 / CATEGORIZED",
    title: "Filed into 30 categories",
    body: "From Key Concepts to Interview Prep — so a resource never gets buried in a wall of undifferentiated links.",
  },
];

export default function HowItsIndexed() {
  return (
    <section className="block" id="how">
      <div className="wrap">
        <p className="eyebrow">Process</p>
        <h2>How it&apos;s indexed</h2>
        <p className="lede">
          Every entry goes through the same three-step pipeline before it earns a place in the Atlas — no aggregator
          spam, no dead links, no guesswork.
        </p>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.idx}>
              <span className="idx">{s.idx}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
