import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './redux-toolkit/todoSlide'


export const store = configureStore({
  reducer: {
    todo : todoReducer
  },
})

