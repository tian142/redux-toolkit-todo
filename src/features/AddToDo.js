import React, { useState } from "react"

import { addTask } from "./todoSlice"

import { useDispatch } from "react-redux"

export const AddToDo = () => {
  const [input, setInput] = useState("")

  const dispatch = useDispatch()

  const onInputChange = (e) => {
    setInput(e.target.value)
  }
  const onInputSubmit = () => {
    dispatch(addTask(input))
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <form>
        <input value={input} onChange={onInputChange} />
        <button onClick={onInputSubmit} type="button">
          Add
        </button>
      </form>
    </div>
  )
}
