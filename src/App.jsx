import { useContext, useEffect } from 'react';
import { TodoContext } from './context/TodoContext'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  const {todos, setTodos} = useContext(TodoContext)

  useEffect(() => {
    const todosLocal = JSON.parse(localStorage.getItem('todos'))

    if (todosLocal && todosLocal.length > 0) {
      setTodos(todosLocal)
    }
  }, [])

  // localStorage.clear();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  console.log(todos);

  return (
    <div className='todoList'>
      <h1>Manage Your Todo</h1>
      <TodoForm></TodoForm>
      {
        todos.map((todo) => {
          console.log(todo);
          return <TodoItem key={todo.id} todo={todo}></TodoItem>
        })
      }
    </div>
  )
}

export default App
