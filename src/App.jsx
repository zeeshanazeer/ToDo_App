import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState("")

  // Add todo 
  const addTodo = () => {
    setTodos([...todos, { value }])
    setValue("")

  }

  return (
    <>
      <div className='container'>
        <div className='input-box'>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={addTodo}>Add Todo</button>
          <button onClick={() => {
            setTodos([])
          }}>Delete All</button>
        </div>
        <br />

        <ul>
          {
            todos.map((v, i) =>
              <li key={i}>{v.value}
                <button onClick={() => {
                  const oldTodo = [...todos]
                  oldTodo.splice(i, 1)
                  setTodos(oldTodo)
                }}>Delete</button></li>)
          }
        </ul>
      </div>
    </>
  )
}

export default App