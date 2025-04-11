import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <span className="list-name"
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor :"pointer",
        }}
        onClick={onToggle}
      >
        {todo.text}
      </span>
      <button onClick={onDelete}>❌</button>
    </div>
  );
};

export default TodoItem;
