import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import messageReducer from './message/messageSlice'
export const store = configureStore({
  reducer: {
    counter : counterReducer,
    message : messageReducer,
  },
})