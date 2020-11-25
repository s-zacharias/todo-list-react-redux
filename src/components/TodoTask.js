import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions';

const TodoTask = ({ id, task, deleteTodo }) => {
  return (
    <li id={id}>
      {task}
      <button onClick={() => deleteTodo(id)}>x</button>
    </li>
  );
};

export default connect(null, { deleteTodo })(TodoTask);
