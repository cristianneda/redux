import React, { useState, useEffect, useRef } from "react";
import "../styles.css";



function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.random(),
      text: input,
    });
    setInput("");
  };

  return (
    <form class="flex justify-center"  onSubmit={handleSubmit}>
      {props.edit ? (
        <div>
          <input
            className="todo-input"
            type="text"
            placeholder="Edit your item"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button class="bg-emerald-500 border-2 rounded font-bold">Update</button>
          </div>
      ) : (
        <div>
          <input
            className="todo-input"
            type="text"
            placeholder="Add new todo"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button class="bg-emerald-500 border-2 rounded font-bold">Add</button>
          </div>
      )}
    </form>
  );
}

export default TodoForm; 
