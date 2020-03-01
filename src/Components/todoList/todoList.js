import React from "react";
import "./todoList.css";

const TodoList = props => {
  return (
    <div>
      <ol className="todoList">
        {props.inputText.map((item, index) => (
          <li key={index}>
            {item.text}
            <button
              className="todoListButton"
              onClick={() => props.deleteHandler(item)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
