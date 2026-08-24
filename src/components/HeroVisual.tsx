const X1 = 40;
const X2 = 160;
const X3 = 280;
const LAYER1 = [60, 120, 180, 240];
const LAYER2 = [30, 85, 140, 195, 250];
const LAYER3 = [110, 170];

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 320 280" className="hero-visual-svg">
        <g>
          {LAYER1.map((y1, i) =>
            LAYER2.map((y2, j) => (
              <line
                key={`a-${i}-${j}`}
                x1={X1}
                y1={y1}
                x2={X2}
                y2={y2}
                className={`hv-edge${(i + j) % 5 === 0 ? " hv-pulse" : ""}`}
                style={{ animationDelay: `${(i * 5 + j) * 0.15}s` }}
              />
            ))
          )}
          {LAYER2.map((y2, i) =>
            LAYER3.map((y3, j) => (
              <line
                key={`b-${i}-${j}`}
                x1={X2}
                y1={y2}
                x2={X3}
                y2={y3}
                className={`hv-edge${(i + j) % 4 === 0 ? " hv-pulse" : ""}`}
                style={{ animationDelay: `${(i * 2 + j) * 0.2 + 1}s` }}
              />
            ))
          )}
        </g>
        <g>
          {LAYER1.map((y, i) => (
            <circle key={`n1-${i}`} cx={X1} cy={y} r="5" className="hv-node" />
          ))}
          {LAYER2.map((y, i) => (
            <circle key={`n2-${i}`} cx={X2} cy={y} r="5" className="hv-node" />
          ))}
          {LAYER3.map((y, i) => (
            <circle key={`n3-${i}`} cx={X3} cy={y} r="6" className="hv-node hv-node-out" />
          ))}
        </g>
      </svg>
    </div>
  );
}
