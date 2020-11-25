import React from 'react';
import { connect } from 'react-redux';

import NewTodo from './NewTodo';
import TodoList from './TodoList';
import { addTodo } from '../redux/actions';

const App = ({ addTodo, todos }) => {
  return (
    <div>
      <NewTodo onFormSubmit={(e) => addTodo(e)} />
      <TodoList todos={todos} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

export default connect(mapStateToProps, { addTodo })(App);
