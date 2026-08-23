const STEPS = [
  {
    idx: "01 / COLLECTED",
    title: "We only use real, original sources",
    body: "Official docs, university courses, research papers, and real engineering blogs — never a random list copied from someone else.",
  },
  {
    idx: "02 / VERIFIED",
    title: "We check every single link",
    body: "We open every course to make sure it's still active, match papers with arXiv, and check that code repos are still updated.",
  },
  {
    idx: "03 / CATEGORIZED",
    title: "We sort everything into 30 categories",
    body: "From Key Concepts to Interview Prep, so nothing gets lost in one giant list.",
  },
];

export default function HowItsIndexed() {
  return (
    <section className="block" id="how">
      <div className="wrap">
        <p className="eyebrow">Process</p>
        <h2>How we pick resources</h2>
        <p className="lede">
          Every resource goes through the same 3 simple steps before it&apos;s added — no spam, no broken links, no
          guessing.
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
