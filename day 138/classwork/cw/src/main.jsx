import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todolist</h1>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="მომავალო დავალება"
        />
        <button onClick={addTodo}>დამატება</button>
      </div>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteTodo(index)}>წაშლა</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
