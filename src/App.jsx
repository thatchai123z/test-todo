import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [todosCompleted, setTodosCompleted] = useState([])

  const addtodo = (text) => {
    if (text !== "") {
      setTodos([text, ...todos])
      setInputText("")
    }
  }

  const deletetodo = (index) => {
    // let temp = [...todos]
    // temp.splice(index, 1)
    // setTodos(temp)
    setTodos(todos.filter((todo, i) => i !== index))
  }

  const addtodoCompleted = (todo, index) => {
    setTodosCompleted([todo, ...todosCompleted])
    // let temp = [...todos]
    // temp.splice(index, 1)
    // setTodos(temp)
    setTodos(todos.filter((todo, i) => i !== index))
  }

  const deletetodoCompleted = (index) => {
    // let temp = [...todosCompleted]
    // temp.splice(index, 1)
    // setTodosCompleted(temp)
    setTodosCompleted(todosCompleted.filter((todo, i) => i !== index))
  }

  const addtodoFromCompleted = (todo, index) => {
    setTodos([todo, ...todos])
    // let temp = [...todosCompleted]
    // temp.splice(index, 1)
    // setTodosCompleted(temp)
    setTodosCompleted(todosCompleted.filter((todo, i) => i !== index))
  }



  return (
    <>
      <h1>My tasks</h1>
      <div>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button onClick={() => addtodo(inputText)}>Add to task</button>
      </div>
      <h1>todo tasks</h1>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <button onClick={() => addtodoCompleted(todo, index)}>{todo}</button>
            <button onClick={() => deletetodo(index)}>Delete</button>
          </div>
        ))}
      </div>
      <h1>Completed tasks</h1>
      <div>
        {todosCompleted.map((todo, index) => (
          <div key={index}>
            <button onClick={() => addtodoFromCompleted(todo, index)}>{todo}</button>
            <button onClick={() => deletetodoCompleted(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App