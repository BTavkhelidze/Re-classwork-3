import React from 'react';
import Todos from './Todos/Todos';

function App() {
  const todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: true },
    { id: 3, text: 'Explore advanced React topics', completed: true },
  ];

  return (
    <div>
      <Todos todoList={todos} />
    </div>
  );
}

export default App;
