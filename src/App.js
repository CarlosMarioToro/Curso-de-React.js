import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el Curso de React.js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Llorar a la lloreria', completed: true},
  {text: 'LALALAL', completed: false},
  {text: 'Cortar cebolla2', completed: true},
  {text: 'Tomar el Curso de React.js2', completed: false},
  {text: 'Llorar con la Llorona2', completed: false},
  {text: 'Llorar a la lloreria2', completed: true},
  {text: 'LALALAL2', completed: false},
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={defaultTodos.length} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
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
