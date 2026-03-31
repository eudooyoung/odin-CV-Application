import "../styles/Section.css";

export default function Section({ title, categoryItems }) {
  return (
    <section>
      <h3>{title}</h3>
      {categoryItems.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.label}: </span>
            <span>{item.value}</span>
          </div>
        );
      })}
    </section>
  );
}
