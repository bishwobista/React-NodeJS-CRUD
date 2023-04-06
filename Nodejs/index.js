const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

const db = mysql.createPool({
    
    host            : 'localhost',
    user            : 'root',
    password        : 'cipher_dev',
    database        : 'React_Node_CRUD'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req,res) =>{
    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect, (err, result) =>{
        res.send(result);
        // res.send("Hello");
    })
})

//testing
// app.get("/", (req,res) =>{
//     const sqlInsert = "INSERT INTO movie_reviews(movieName, movieReview) VALUES('Aviator','Damii')";
//     db.query(sqlInsert, (err, result) =>{
//         // res.send("Hello");
//         res.send(err);
//         // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'cipher_dev' 
//         // Error Fixed
//     })
// })


app.post("/api/insert", (req, res) =>{ 

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO movie_reviews(movieName, movieReview) VALUES(?,?)"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        res.send(result);
        // console.log(result);
        // return res.send(result)
    })
}) 

app.delete("/api/delete/:movieName", (req, res) =>{
    // const id = req.body.id
    const name = req.params.movieName;
    const sqlDelete = `DELETE FROM movie_reviews WHERE movieName = ?`;
    db.query(sqlDelete,name, (err, result) =>{
        if(err) res.send(err)
    })
})

app.put("/api/update", (req,res) =>{
    const name = req.body.movieName
    const review = req.body.movieReview
    // const sqlUpdate = `UPDATE SET movie_reviews movieName = ${movieName}, movieReview = ${movieReview}' WHERE id=${id}`;
    const sqlUpdate = `UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?`;
    db.query(sqlUpdate,[review, name], (err, result) =>{
        res.send("Successfully Updated")
    })
})



app.listen(PORT, () => {
    console.log(`It's live at http://localhost:${PORT} .`);
})



// module.exports = app;