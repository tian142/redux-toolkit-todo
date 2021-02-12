import { createSlice } from "@reduxjs/toolkit"

const initialState = ["first task", "second task"]

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addTask } = todoSlice.actions

export default todoSlice.reducer
