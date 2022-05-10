import './App.css';
import React, {useState} from 'react'

function App() {

const [todos, setTodos] = useState([
    {name: "Buy Shopping", priority:': low priority'},
    {name: "Clean Bathroom", priority: ': high priority'},
    {name: "Car's MOT", priority: ': low priority'},
  ])

const [newTodos, setNewTodos] = useState("") 
const [newPriority, setNewPriority] = useState("") 

const todosNodes = todos.map((todos, index) => { 
  return(
      <li key={index} >
        
      <span>{todos.name}</span>
      <span>{todos.priority}</span>
      </li> 
  )
})

// const completeTodos = ((index) => {
//   const copyTodos = [... todos]
//   copyTodos[index].isCompleted = true
//   setTodos(copyTodos)
// })





const handleTodosInput = (event) => {
  setNewTodos(event.target.value)
}

const handlePriorityInput = (priority) => {
  setNewPriority(priority.target.value)
}
const saveNewTodos = ((event) =>{
  event.preventDefault()
  const copyTodos = [... todos, {name: newTodos, priority: newPriority}]
  setTodos(copyTodos)
  setNewTodos("")
})



return (
  <div className="App">
  <h1>Todo List</h1>
  <hr></hr>
    <ul>
        {todosNodes}
    </ul>
<form onSubmit={saveNewTodos}>
      <label htmlFor="new-todos">Add a new todo</label>
      <input id="new-todos" type="text" onChange={handleTodosInput} value={newTodos}/>
      <input type="radio" name="something" value ="high" onChange={handlePriorityInput}/>
      <label for="high">high priority</label>
      <input type="radio"  value ="low" name="something" onChange={handlePriorityInput}/>
      <label for="low">low priority</label>
      <input type="submit" value="Save New Todo" />

    </form>
    </div>
  );

}
export default App;
