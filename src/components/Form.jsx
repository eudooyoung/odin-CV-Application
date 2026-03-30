import Fieldset from "./Fieldset";
import { categories } from "./data";
import "../styles/Form.css";
import Button from "./Button";

export default function Form() {
  return (
    <form>
      {categories.map((category) => (
        <Fieldset key={category.id} category={category} />
      ))}
      <Button title={"Submit"} />
    </form>
  );
}
