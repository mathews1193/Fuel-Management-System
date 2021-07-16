const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// configuration of the mysql database // 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'fuel-managment-system'
})

app.post('/register', (req, res) => {

    const userId = req.body.userId;
    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO users (userId, username, password) VALUES (?,?,?)", 
    [userId, username, password], (err, result) => {
      if (err) {
        console.log(err);
    } else {
        console.log("success re");
        res.send("Values inserted successfully!")
      }
    });
});

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password],
        (err, result) => {

            if (err) {
                res.send({ err: err })
            }


            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({ message: "Wrong Username/Password combination!" });
            }

        });
});

// create data from require and response of data // 
app.post('/create', (req, res) => {
    const userId = req.body.userId;
    const gallonsRequested = req.body.gallonsRequested;
    const deliveryDate = req.body.deliveryDate;
    const deliveryAddress = req.body.deliveryAddress;
    const suggestedPrice = req.body.suggestedPrice;
    const totalAmount = req.body.totalAmount;


    // insert new data into the table (hint:table name needs to be one word!!!!!) // 
    db.query("INSERT INTO fuelquotes (userId, gallonsRequested, deliveryDate, deliveryAddress, suggestedPrice, totalAmount) VALUES (?,?,?,?,?,?)",
        [userId, gallonsRequested, deliveryDate, deliveryAddress, suggestedPrice, totalAmount],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("success");
                res.send("Values inserted successfully!")
            }
        }
    );
});

// check to see if the server is currently running on the port // 
app.listen(3001, () => {
    console.log("Cool, Your server is running on port 3001")
})