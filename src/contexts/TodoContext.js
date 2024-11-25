import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos : [
        { id: 1, title: "Task 1", completed: false },
    ],
    addTodo : (title) => {},
    updateTodo : (id,title) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {},
})

export const useTodo = () => { return useContext(TodoContext) }

export const TodoProvider = TodoContext.Provider