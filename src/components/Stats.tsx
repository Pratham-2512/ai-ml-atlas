import { totalResources, totalCategories, byId } from "@/data/resources";
import StatNumber from "./StatNumber";

export default function Stats() {
  const roadmap = byId("roadmap");
  const papers = byId("papers");

  const stats = [
    { n: totalResources, l: "Resources" },
    { n: totalCategories, l: "Categories" },
    { n: roadmap?.count ?? 0, l: "Step roadmap" },
    { n: papers?.count ?? 0, l: "Must-read papers" },
  ];

  return (
    <div className="stats">
      <div className="wrap stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.l}>
            <StatNumber value={s.n} />
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
