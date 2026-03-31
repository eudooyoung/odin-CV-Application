import { VIEWMODE, initialItems } from "./components/data.js";
import { useState } from "react";
import Form from "./components/Form";
import Button from "./components/Button.jsx";
import "./App.css";

function App() {
  const [mode, setMode] = useState(VIEWMODE[0]);
  const [items, setItems] = useState(initialItems);

  const setItemCallBack = (items) => {
    return items.map((item) => {
      const input = document.querySelector(`input#item${item.id}`);
      const newItem = { ...item, value: input.value };
      return newItem;
    });
  };

  const clickHandling = (e) => {
    e.preventDefault();
    setMode(() => VIEWMODE[1]);
    setItems(setItemCallBack(items));
  };

  return (
    <>
      <h1>ODIN RESUME</h1>
      <Form items={items} />
      <Button title={"Submit"} onClick={clickHandling} />
    </>
  );
}

export default App;
