import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el Curso de React.js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Llorar a la lloreria', completed: true},
  {text: 'LALALAL', completed: false},
  {text: 'Cortar cebolla2', completed: false},
  {text: 'Tomar el Curso de React.js2', completed: false},
  {text: 'Llorar con la Llorona2', completed: true},
  {text: 'Llorar a la lloreria2', completed: false},
  {text: 'LALALAL2', completed: true},
  {text: 'LALALAL23', completed: true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuario buscan TODOs de ' + searchValue);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = defaultTodos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText =searchValue.toLowerCase();
    return todoText.includes(searchText);
  })

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text = {todo.text}
            completed = {todo.completed}
          />
        ))}
      </TodoList>  

      <CreateTodoButton />      
    </>
  );
}

export default App;
