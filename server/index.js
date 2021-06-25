const express = require('express');
const app = express();
const mysql = require('mysql');

// configuration of the mysql database // 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:'',
    database:'fuel-managment-system'
})

// create data from require and response of data // 
app.post('/create', (req, res) => {
    const userId = req.body.userId
    const gallonsRequested = req.body.gallonsRequested
    const deliveryDate = req.body.deliveryDate
    const deliveryAddress = req.body.deliveryAddress
    const suggestedPrice = req.body.suggestedPrice
    const totalAmount = req.body.totalAmount


    // insert new data into the table // 
    db.query('INSERT INTO fuel quotes (userId, gallonsRequested, deliveryDate, deliveryAddress, suggestedPrice, totalAmount) VALUES (?,?,?,?,?,?)', 
    [userId, gallonsRequested, deliveryDate, deliveryAddress, suggestedPrice, totalAmount],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send('Values inserted successfully!')
        }
    }
    );
});

// check to see if the server is currently running on the port // 
app.listen(3001, () =>{
    console.log("Cool, Your server is running on port 3001")
})