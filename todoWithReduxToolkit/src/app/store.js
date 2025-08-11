// Step: 1 - Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Step: 2 - Import the todoSlice reducer
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})