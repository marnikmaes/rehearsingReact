import { useState } from "react"
import "./styles.css"

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, SetTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    SetTodos((currentTodos) => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title: newItem, completed:false},
      ]
    })

    setNewItem("")

  }

  function toggleToDo(id, completed){
    SetTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id){
          return{...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    SetTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
        </div>

        <button className="btn">Add</button>
      </form>

      <h1>ToDo List</h1>
      <ul className="list">
        {todos.length === 0 && "No ToDos"}
        {todos.map(todo => {
          return (
            <>
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.completed} onChange={e => toggleToDo(todo.id, e.target.checked)}/>
                  {todo.title} 
                </label>
                <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
              </li>
            </>
          )
        })}
      </ul>
    </>
  )
}