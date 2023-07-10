import React from 'react';
import './App.css';
//import TodoForm  from '.../src/Components/TodoForm';
import TodoList from '../src/Components/TodoList';

const App = () => {
  return (
    <>
      <div className="todo-app">
      {/* <TodoForm/> */}
        <TodoList/>
      </div>

    </>

  );
};
export default App;