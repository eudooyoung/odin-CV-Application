import "../styles/Form.css";
import Fieldset from "./Fieldset";
import { categories } from "./data";

export default function Form({ items }) {
  const getCategoryItems = (categoryId) =>
    items.filter((item) => item.categoryId === categoryId);

  return (
    <form>
      <h2>Input Form</h2>
      {categories.map((category) => (
        <Fieldset
          key={category.id}
          legend={category.title}
          categoryItems={getCategoryItems(category.id)}
        />
      ))}
    </form>
  );
}
