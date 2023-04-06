import { useState , useEffect } from 'react'
import './App.css'
import Axios from 'axios'
function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieList] = useState([]);
  const [newReview, setNewReview] = useState("");

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
    });  //.then( () =>{
      // alert('successful insert')
      //so that the app can render movies without reloading
      setMovieList([...movieReviewList, {movieName:movieName, movieReview:review}]);
    
  }

  const deleteReview = (movie) =>{
    Axios.delete(`http://localhost:3000/api/delete/${movie}`);
    
  }
  const updateReview = (movie) =>{
    Axios.put(`http://localhost:3000/api/update`, {movieName : movie, movieReview : newReview});
    setNewReview(newReview, {movieName: movie, movieReview: newReview})
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
          //   <ul>
          //   <li key={movieReviewList}>Movie Name : {val.movieName} | Movie Review : {val.movieReview}</li>
          // </ul>
          return (
            <div className='card'>
             <h3> Movie Name : {val.movieName} </h3>  
             <p> Movie Review : {val.movieReview}</p>

             <button onClick={() =>{deleteReview(val.movieName)}}> Delete</button> <br />
             <input type="text" id='updateInput' onChange={(e) =>{
                setNewReview(e.target.value)
             }} />
             {/* <input type="text" name="" id=""  value={val.movieName}/> */}
             {/* <input type="text" value={val.movieReview} /> */}
             <button onClick={() =>{updateReview(val.movieName)}}>Update</button>
            </div>
          );
        })}

      </div>
    </div>
  )
}

export default App
