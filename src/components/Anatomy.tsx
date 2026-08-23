const ANNOTATIONS = [
  { tag: "TITLE", body: <><strong>The resource itself</strong> — always the primary source, never a summary page.</> },
  { tag: "SOURCE", body: <><strong>Who published it</strong> — Google, arXiv, DeepLearning.AI, an individual researcher.</> },
  { tag: "NOTE", body: <><strong>One honest line</strong> on what it actually covers, so you can decide in five seconds.</> },
  { tag: "CATEGORY", body: <><strong>Exactly one of 30 categories</strong> — no orphaned entries, no duplicate homes.</> },
];

export default function Anatomy() {
  return (
    <section
      className="block"
      id="anatomy"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <p className="eyebrow">Anatomy of an entry</p>
        <h2>Every entry carries the same four fields</h2>
        <div className="anatomy">
          <div className="entry-card">
            <div className="link-line">
              Attention Is All You Need <span className="arrow">↗</span>
            </div>
            <div className="desc">The paper that introduced the Transformer architecture</div>
          </div>
          <div className="anno-list">
            {ANNOTATIONS.map((a) => (
              <div className="anno" key={a.tag}>
                <span className="tag">{a.tag}</span>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
