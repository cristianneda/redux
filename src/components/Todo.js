import React, { useState } from "react";
import "../styles.css";
import TodoForm from "./TodoForm";
import ReactTooltip from "react-tooltip";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div class="flex justify-center ">
    <div class={todo.isComplete ? "flex justify-between rounded m-1 bg-teal-600 opacity-25 space-x-12  w-5/6" : "flex justify-between rounded m-1 bg-teal-600 space-x-12  w-5/6" }
      key={index}
    >
      <div class=" ml-2 text-xl font-semibold text-white" key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div class=" flex m-2  space-x-1">
        <div>
          <FaCheck
            data-tip
            data-for="completedTip"
            id="completedTip"
            onClick={() => completeTodo(todo.id)}
            className="check-icon"
          />
          <ReactTooltip id="completedTip" place="top" effect="solid">
            Completed
          </ReactTooltip>
        </div>
        <div>
          <MdDriveFileRenameOutline
            data-tip
            data-for="editTip"
            id="editTip"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
          <ReactTooltip id="editTip" place="top" effect="solid">
            Edit
          </ReactTooltip>
        </div>
        <div class=" mr-3 ">
          <RiDeleteBin2Fill
            data-tip
            data-for="deleteTip"
            id="deleteTip"
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <ReactTooltip id="deleteTip" place="top" effect="solid">
            Delete
          </ReactTooltip>
        </div>
      </div>
    </div>
    </div>
  ));
}

export default Todo;
