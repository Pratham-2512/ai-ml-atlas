import type { Category, Resource } from "@/data/resources";
import ResourceItem from "./ResourceItem";

export default function CategorySection({
  category,
  filter,
}: {
  category: Category;
  filter: (item: Resource) => boolean;
}) {
  const subgroups = category.subgroups
    .map((sg) => ({ ...sg, items: sg.items.filter(filter) }))
    .filter((sg) => sg.items.length > 0);

  if (subgroups.length === 0) return null;

  return (
    <section className="cat" id={category.id}>
      <header className="cat-head">
        <span className="stamp">{category.stamp}</span>
        <h2>{category.title}</h2>
        <span className="count">{category.count}</span>
      </header>
      {subgroups.map((sg, i) => (
        <div className="subgroup" key={sg.heading ?? i}>
          {sg.heading && <h4>{sg.heading}</h4>}
          <ul className="res">
            {sg.items.map((item) => (
              <ResourceItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
