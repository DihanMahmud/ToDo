import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoContextProvider({children}){

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((prev) => [todo, ...prev])
    }

    const updateTodo = (id, upTodo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, todoItem: upTodo} : prevTodo)))
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
    }

    const allData = {
        todos, setTodos,addTodo, deleteTodo, toggleComplete, updateTodo
    }

    return <TodoContext.Provider value={allData}>
        {children}
    </TodoContext.Provider>
}



// you have to write children, otherwise it doesn't work