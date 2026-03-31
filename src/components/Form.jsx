import "../styles/Form.css";
import Fieldset from "./Fieldset";
import { categories } from "./data";

export default function Form({ items }) {
  const categoryItems = (categoryId) =>
    items.filter((item) => item.categoryId === categoryId);

  return (
    <form>
      {categories.map((category) => (
        <Fieldset
          key={category.id}
          legend={category.title}
          categoryItems={categoryItems(category.id)}
        />
      ))}
    </form>
  );
}
