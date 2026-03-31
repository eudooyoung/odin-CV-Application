import { initialItems } from "./data";
import Input from "./Input";

export default function Fieldset({ legend, categoryItems }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
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
