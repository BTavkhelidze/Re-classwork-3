import React from 'react';
import style from './Todos.module.scss';

function Todos(props) {
  const todos = [props.todoList][0];
  console.log(todos);
  return (
    <div className={style.container}>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.completed ? `${style.completed}` : ``}
              onClick={() => props.addDecoration(todo.id)}
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
