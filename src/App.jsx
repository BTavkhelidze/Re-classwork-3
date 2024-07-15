import React, { useState } from 'react';
import Todos from './Todos/Todos';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: true },
    { id: 3, text: 'Explore advanced React topics', completed: true },
  ]);

  function addDecoration(id) {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodo);
  }

  return (
    <div>
      <Todos todoList={todos} addDecoration={addDecoration} />
    </div>
  );
}

export default App;
