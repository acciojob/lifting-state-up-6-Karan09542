import React, { useState } from "react";
import "./../styles/App.css";

const TodoList = ({ task, isCompleted, updateTodo, idx }) => {
  return (
    <li>
      {task} {!isCompleted && <button onClick={() => updateTodo(idx)}>Completed</button>}
    </li>
  );
};
const App = () => {
  const [todos, setTodos] = useState([
    { task: "Learn React", isCompleted: false },
    { task: "Build a React app", isCompleted: false },
    { task: "Deploy the React app", isCompleted: false },
  ]);

  function handleCompleted(id) {
    const updateTodos = [...todos];
    updateTodos[id].isCompleted = true;
    setTodos(updateTodos);
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <ul>
        {todos.map((todo, idx) => (
          <TodoList {...todo} updateTodo={handleCompleted} idx={idx} />
        ))}
      </ul>
    </div>
  );
};

export default App;
