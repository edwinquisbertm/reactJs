import React from 'react'; // Import the React library

import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

function App() {
  const arrego = [{
    
  }]
  return (
    <React.Fragment>

      <TodoCounter completed={5} total={10} /> {/* se estan modificando los datos a traves de los atributos de los props*/}
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}



export default App;
