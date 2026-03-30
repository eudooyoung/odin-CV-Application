import { initialItems } from "./data";

export default function Preview() {
  return (
    <div>
      {initialItems.map((item) => {
        <p>
          {item.label}: {item.value}
        </p>;
      })}
    </div>
  );
}
