import ScrollLink from "./ScrollLink";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-inner">
        <p className="kicker">A GUIDED PATH, NOT A LINK DUMP</p>
        <h1>
          Learn AI without
          <br />
          getting lost.
        </h1>
        <p className="dek">
          I collected the courses, papers, and projects I wish I had when I started. Everything is checked by hand
          and organized into a path you can actually follow.
        </p>
        <div className="hero-cta">
          <ScrollLink to="goals" className="btn btn-primary">
            Find My Roadmap →
          </ScrollLink>
          <ScrollLink to="roadmap-journey" className="link-more">
            Explore the AI Roadmap ↓
          </ScrollLink>
        </div>
      </div>
    </header>
  );
}
