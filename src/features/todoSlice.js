import { createSlice } from "@reduxjs/toolkit"

const initialState = ["first task", "second task"]

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      state.splice(action.payload, 1)
    },
  },
})

export const { addTask, deleteTask } = todoSlice.actions

export default todoSlice.reducer
