const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const PORT = 3000;

const db = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'cipher_dev',
    database        : 'mydb'
})

app.use(cors)
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res) =>{ 

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO users(username, password) VALUES(?,?)"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        res.send(result)
    })
    
}) 



app.listen(PORT, () => {
    console.log(`It's live at http://localhost:${PORT} .`);
})



// module.exports = app;