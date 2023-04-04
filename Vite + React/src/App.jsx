import { useState , useEffect } from 'react'
import './App.css'
import Axios from 'axios'
function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieList] = useState([]);

  useEffect(() =>{
    Axios.get('http://localhost:3000/api/get',).then( (response) =>{
      console.log(response.data); //returns an object
      setMovieList(response.data)
    });
  }, [])

  const submitReview = () =>{
    Axios.post('http://localhost:3000/api/insert', {
      movieName : movieName,
      movieReview: review
    }).then( () =>{
      // alert('successful insert')
      setMovieList(...movieReviewList)
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

        {movieReviewList.map((val) =>{
          return <h1>Movie Name : {val.movieName} | <h1>Movie Review : {val.movieReview}</h1></h1>
        })}

      </div>
    </div>
  )
}

export default App
