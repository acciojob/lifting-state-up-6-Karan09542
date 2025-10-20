import React from "react";
const TodoList = ({ todos, handleComplete }) => {
  return (
    <div style={{marginRight: "5px"}}>
    <h2>Child Component</h2>
    <ul>
      {todos.map(({ task, mark }, idx) => (
        <li key={idx}>
          {task}{" "}
          {!mark && (
            <button onClick={() => handleComplete(idx)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
    </div>
  );
};
export default TodoList;
