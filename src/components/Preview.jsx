import "../styles/Preview.css";
import Section from "./Section";
import { categories } from "./data";

export default function Preview({ items }) {
  const getCategoryItems = (categoryId) =>
    items.filter((item) => item.categoryId === categoryId);

  return (
    <div className="preview">
      <h2>Preview</h2>
      {categories.map((category) => {
        return (
          <Section
            key={category.id}
            title={category.title}
            categoryItems={getCategoryItems(category.id)}
          />
        );
      })}
    </div>
  );
}
