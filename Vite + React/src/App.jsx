import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Crud Application</h1>
      <div> 
        <label htmlFor="">Movie Name</label>
        <input type="text" name="movieName" />
        <label htmlFor="">Review</label>
        <input type="text" name="review" />
      </div>
    </div>
  )
}

export default App
