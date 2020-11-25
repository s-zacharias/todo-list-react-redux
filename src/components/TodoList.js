import React from 'react';
import TodoTask from './TodoTask';

const TodoList = ({ todos }) => {
  const renderedList = todos.map((todo, index) => {
    return <TodoTask task={todo} key={index} id={index} />;
  });
  return <div>{renderedList}</div>;
};

export default TodoList;
