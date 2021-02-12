import "./App.css"
import { AddToDo } from "./features/AddToDo"
import { TodoList } from "./features/TodoList"

function App() {
  return (
    <div className="App">
      <AddToDo />
      <TodoList />
    </div>
  )
}

export default App
