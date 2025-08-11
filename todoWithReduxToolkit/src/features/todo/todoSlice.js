// Step: 1 - Import createSlice from Redux Toolkit
// Step: 2 - Import nanoid for unique IDs

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: 'Learn Redux Toolkit', completed: false}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const todo = state.todos.find(todo => todo.id === id)
            if (todo) {
                todo.text = text
            }
        }
    }
})

export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer