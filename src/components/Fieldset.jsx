import { initialItems } from "./data";
import Input from "./Input";

export default function Fieldset({ category }) {
  const categoryItems = initialItems.filter(
    (item) => item.categoryId === category.id,
  );

  return (
    <fieldset>
      <legend>{category.title}</legend>
      {categoryItems.map((item) => {
        return (
          <label key={item.id}>
            {item.label}:
            <Input item={item} />
          </label>
        );
      })}
    </fieldset>
  );
}
