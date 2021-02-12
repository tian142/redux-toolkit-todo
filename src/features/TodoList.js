import React from "react"

import { useSelector } from "react-redux"

export const TodoList = () => {
  const todos = useSelector((state) => state.todo)
  const mapTodo = todos.map((todo) => <div>{todo}</div>)

  return <div>{mapTodo}</div>
}
