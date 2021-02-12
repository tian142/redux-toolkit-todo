import { createSlice } from "@reduxjs/toolkit"

const initialState = ["first task", "second task"]

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
})

export default todoSlice.reducer
