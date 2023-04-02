const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

const db = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'mydb'
})
app.get("/", (req, res) =>{ //passing 1.route | 2.parameters with function 
    // req, sending information to the frontend | res, ...
    res.send("Welcome")
    // const sqlInsert = "INSERT INTO users(username, password) VALUES('admin', 'admin')"
    
    // db.query(sqlInsert, (err, log) => {
    //     res.send("Successful")
    // })
    
}) 

app.listen(PORT, () => {
    console.log(`It's live at http://localhost:${PORT} .`);
})



// module.exports = app;