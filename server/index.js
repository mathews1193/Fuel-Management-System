const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:'',
    database:'fuel-managment-system'
})

app.listen(3001,() =>{
    console.log("Cool, Your server is running on port 3001")
})