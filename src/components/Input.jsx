import { initialItems } from "./data";
import { useState } from "react";

export default function Input({ item }) {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(initialItems);

  const inputHandling = (e) => {
    setValue(e.target.value);

    const newItem = { ...item, value: e.target.value };
    const newItems = [
      ...items.filter((item) => item.id !== newItem.id),
      newItem,
    ];
    setItems(newItems);
  };

  return (
    <input value={value} type={item.type} onChange={inputHandling}></input>
  );
}
