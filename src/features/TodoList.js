import React from "react"
import { deleteTask } from "./todoSlice"

import { useSelector, useDispatch } from "react-redux"

export const TodoList = () => {
  const dispatch = useDispatch()

  const todos = useSelector((state) => state.todo)
  const mapTodo = todos.map((todo, index) => (
    <div>
      <span className="spanspan">{todo}</span>
      <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
    </div>
  ))

  return <div>{mapTodo}</div>
}
