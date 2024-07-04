import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todoredux/todoSlice'


export const store = configureStore({
    reducer: todoReducer

}) 