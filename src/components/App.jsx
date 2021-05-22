import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Heading from "./Heading";
import Input from "./Input";
import Button from "./Button";

function App() {
  const [name, setName] = useState("");
  const [listItems, setItem] = useState([]);
  function saveInput(e) {
    setName(e.target.value);
  }
  function handleClick() {
    setItem((prevItem) => {
      return [...prevItem, name];
    });
    setName("");
  }
  function deleteItem(id) {
    setItem((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <Input onChange={saveInput} type="text" value={name} />
        <Button onClick={handleClick} />
      </div>
      <div>
        <ul>
          {listItems.map((x, index) => (
            <ToDoList key={index} id={index} text={x} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
