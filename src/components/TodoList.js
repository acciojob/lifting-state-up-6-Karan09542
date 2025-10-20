import React from "react";
const TodoList = ({ todos, handleComplete }) => {
  return (
    <div style={{marginRight: "5px"}}>
    <h2>Child Component</h2>
    <ul>
      {todos.map(({ task, isCompleted }, idx) => (
        <li key={idx}>
          {task}{" "}
          {!isCompleted && (
            <button onClick={() => handleComplete(idx)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
    </div>
  );
};
export default TodoList;
