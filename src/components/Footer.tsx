import { totalResources } from "@/data/resources";

export default function Footer() {
  return (
    <>
      <div className="cta-band">
        <div className="wrap">
          <h2>{totalResources} resources are waiting. None of them are behind a signup wall.</h2>
          <p className="lede">The Atlas is free to browse, link to, and bookmark — no account, no email gate.</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#top">
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="brand">
              <span className="mark">/=/</span> AI/ML Atlas
            </div>
            <div style={{ display: "flex", gap: 24, fontSize: "0.86rem" }}>
              <a href="#full-index">Browse the index</a>
              <a href="https://github.com/viveknaskar/everything-ai-ml" target="_blank" rel="noopener">
                Source list ↗
              </a>
            </div>
          </div>
          <p>
            Content curated from{" "}
            <a href="https://github.com/viveknaskar/everything-ai-ml" target="_blank" rel="noopener">
              viveknaskar/everything-ai-ml
            </a>{" "}
            (MIT licensed). AI/ML Atlas is made by Pratham Bhatia.
          </p>
        </div>
      </footer>
    </>
  );
}
