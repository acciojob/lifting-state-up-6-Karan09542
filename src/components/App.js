import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";
const App = () => {
  const [todos, setTodos] = useState([
    { task: "Learn React", mark: false },
    { task: "Build a React app", mark: false },
    { task: "Deploy the React app", mark: false },
  ]);

  function handleComplete(id) {
    const updateTodos = [...todos];
    updateTodos[id].mark = true;
    setTodos(updateTodos);
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
