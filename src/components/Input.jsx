import { useState } from "react";

export default function Input({ item }) {
  const [value, setValue] = useState(item.value);

  const inputHandling = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      id={`I-${item.id}`}
      value={value}
      type={item.type}
      onChange={inputHandling}
    ></input>
  );
}
