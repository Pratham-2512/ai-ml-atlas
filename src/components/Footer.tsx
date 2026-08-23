import { totalResources } from "@/data/resources";
import ScrollLink from "./ScrollLink";

export default function Footer() {
  return (
    <>
      <div className="cta-band">
        <div className="wrap">
          <h2>{totalResources} resources are ready for you. No sign-up needed.</h2>
          <p className="lede">AI Basecamp is free to browse, link to, and bookmark — no account, no email required.</p>
          <div className="hero-cta">
            <ScrollLink to="top" className="btn btn-primary">
              ↑ Back to top
            </ScrollLink>
          </div>
        </div>
      </div>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="brand">
              <span className="mark">/=/</span> AI Basecamp
            </div>
            <div style={{ display: "flex", gap: 24, fontSize: "0.86rem" }}>
              <ScrollLink to="full-index">Browse all resources</ScrollLink>
              <a href="https://github.com/viveknaskar/everything-ai-ml" target="_blank" rel="noopener">
                Source list ↗
              </a>
            </div>
          </div>
          <p>AI Basecamp is made by Pratham Bhatia.</p>
        </div>
      </footer>
    </>
  );
}
