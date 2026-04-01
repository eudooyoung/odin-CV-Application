export default function Section({ title, categoryItems }) {
  return (
    <section>
      <h3>{title}</h3>
      {categoryItems.map((item) => {
        return (
          <div className="item-view" key={item.id}>
            <span className="label">{item.label}: </span>
            <span className="value">{item.value}</span>
          </div>
        );
      })}
    </section>
  );
}
