import './App.css';
import React from 'react';
import TodoInput from './features/todos/TodoInput';
import TodoList from './features/todos/TodoList';
import TodoFilter from './features/todos/TodoFilter';

function App() {
  return (
    <div id="app">
      <div className='content'>
        <TodoInput />
        <TodoList />
        <TodoFilter />
      </div>
    </div>
  );
}

export default App;
