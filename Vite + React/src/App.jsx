import { useState , useEffect } from 'react'
import './App.css'
import Axios from 'axios'
function App() {
  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('')

  const submitReview = () =>{
    Axios.post('http://localhost:3000/api/insert', {
      movieName : movieName,
      movieReview: review
    }).then( () =>{
      alert('successful insert')
    })
  }

  return (
    <div className="App">
      <h1>Crud Application</h1> <br />
      <div> 
        <label htmlFor="">Movie Name</label> <br />
        <input type="text" name="movieName" onChange={(e)=>{
          setMovieName(e.target.value)
        }}/> <br /> <br />
        <label htmlFor="">Review</label> <br />
        <input type="text" name="review" onChange={(e)=>{
          setReview(e.target.value)
        }}/>
        <button onClick={submitReview}>Submit</button>
      </div>
    </div>
  )
}

export default App
