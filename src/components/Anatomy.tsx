const ANNOTATIONS = [
  { tag: "TITLE", body: <><strong>The resource itself</strong> — never just a summary page about it.</> },
  { tag: "SOURCE", body: <><strong>Who made it</strong> — like Google, arXiv, or an individual researcher.</> },
  { tag: "NOTE", body: <><strong>A short, honest note</strong> on what it&apos;s about, so you can decide quickly.</> },
  { tag: "CATEGORY", body: <><strong>One clear category</strong> — so every entry is easy to find.</> },
];

export default function Anatomy() {
  return (
    <section
      className="block"
      id="anatomy"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <p className="eyebrow">What&apos;s in an entry</p>
        <h2>Every entry has the same 4 parts</h2>
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
