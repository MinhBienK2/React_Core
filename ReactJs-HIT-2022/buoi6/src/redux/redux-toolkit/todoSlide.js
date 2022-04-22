import { createSlice } from '@reduxjs/toolkit'

export const todoList = createSlice({
    name: 'todo',
    initialState : [],
    reducers: {
        addTodo : (state,action) => {
            state.push(action.payload)
        }
    },
  })

export const { addTodo } = todoList.actions
export default todoList.reducer