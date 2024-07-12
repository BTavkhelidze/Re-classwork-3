import React from 'react';
import style from './Todos.module.scss';

function Todos(props) {
  const todos = [props.todoList];

  return (
    <div className={style.container}>
      <h1>Todo List</h1>
      <ul>
        {todos[0].map((todo) => {
          return (
            <li
              key={todo.id}
              className={
                todo.completed ? `${style.completed}` : `${style.uncomplated}`
              }
            >
              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todos;
