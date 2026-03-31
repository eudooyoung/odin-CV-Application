import { VIEWMODE, initialItems } from "./components/data.js";
import { useState } from "react";
import Preview from "./components/Preview.jsx";
import Form from "./components/Form";
import Button from "./components/Button.jsx";
import "./App.css";

function App() {
  const [mode, setMode] = useState(VIEWMODE[0]);
  const [items, setItems] = useState(initialItems);

  const setItemsCallBack = (items) => {
    return items.map((item) => {
      const input = document.querySelector(`input#I-${item.id}`);
      const newItem = { ...item, value: input.value };
      return newItem;
    });
  };

  const clickSubmitHandling = (e) => {
    e.preventDefault();
    setMode(() => VIEWMODE[1]);
    setItems(setItemsCallBack(items));
  };

  const clickEditHandling = (e) => {
    e.preventDefault();
    setMode(() => VIEWMODE[0]);
  };

  return (
    <>
      <h1>ODIN RESUME</h1>
      {mode === "edit" && <Form items={items} />}
      {mode === "edit" && (
        <Button title={"Submit"} onClick={clickSubmitHandling} />
      )}
      {mode === "view" && <Preview items={items} />}
      {mode === "view" && <Button title={"Edit"} onClick={clickEditHandling} />}
    </>
  );
}

export default App;
